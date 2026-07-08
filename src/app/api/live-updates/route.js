import {
  authoritySources,
  buildTickerText,
  fallbackLiveItems,
} from "../../../data/liveUpdates";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_REMOTE_ITEMS = 8;
const REQUEST_TIMEOUT_MS = 5000;

function getTimeoutSignal() {
  if (typeof AbortSignal !== "undefined" && AbortSignal.timeout) {
    return AbortSignal.timeout(REQUEST_TIMEOUT_MS);
  }

  return undefined;
}

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function cleanText(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeDate(value) {
  const dateMatch = value.match(/(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})/);

  if (!dateMatch) {
    return null;
  }

  const [, year, month, day] = dateMatch;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function guessCategory(text) {
  if (text.includes("徵才")) return "徵才";
  if (text.includes("防詐") || text.includes("詐騙")) return "防詐";
  if (text.includes("防災") || text.includes("颱風") || text.includes("豪雨")) {
    return "防災";
  }
  if (text.includes("活動")) return "活動";
  if (text.includes("公告")) return "公告";

  return "最新";
}

function extractHomepageNews(html, source) {
  const items = [];
  const seen = new Set();
  const anchorPattern =
    /<a\b[^>]*href=(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi;

  let match = anchorPattern.exec(html);

  while (match && items.length < MAX_REMOTE_ITEMS) {
    const [, , href, label] = match;
    const text = cleanText(label);
    const publishedAt = normalizeDate(text);

    if (publishedAt && !seen.has(text)) {
      seen.add(text);

      const title = text
        .replace(/^(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})\s*/, "")
        .trim();

      items.push({
        id: `${source.id}-${items.length + 1}`,
        category: guessCategory(title),
        title: title || text,
        summary: `${source.shortName}官方網站最新公告摘錄。`,
        source: source.name,
        sourceId: source.id,
        url: new URL(href, source.url).toString(),
        publishedAt,
        freshness: "即時擷取",
      });
    }

    match = anchorPattern.exec(html);
  }

  return items;
}

async function fetchOfficialSource(source) {
  if (source.fetchMode !== "homepage-news") {
    return [];
  }

  const response = await fetch(source.url, {
    cache: "no-store",
    headers: {
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "user-agent":
        "xizhi-life-info live updates (+https://xizhi-life-info.vercel.app)",
    },
    signal: getTimeoutSignal(),
  });

  if (!response.ok) {
    throw new Error(`${source.name} responded with ${response.status}`);
  }

  const html = await response.text();
  return extractHomepageNews(html, source);
}

async function getRemoteItems() {
  const fetchableSources = authoritySources.filter(
    (source) => source.fetchMode === "homepage-news",
  );
  const results = await Promise.allSettled(fetchableSources.map(fetchOfficialSource));

  return results.flatMap((result) =>
    result.status === "fulfilled" ? result.value : [],
  );
}

export async function GET() {
  const checkedAt = new Date().toISOString();
  const remoteItems = await getRemoteItems();
  const items = remoteItems.length ? remoteItems : fallbackLiveItems;

  return Response.json(
    {
      checkedAt,
      status: remoteItems.length ? "live" : "fallback",
      tickerText: buildTickerText(items, checkedAt),
      items,
      sources: authoritySources,
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
}
