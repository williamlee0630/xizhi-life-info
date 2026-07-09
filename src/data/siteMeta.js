import { authoritySources } from "./liveUpdates";

export const siteMeta = {
  name: "汐止生活資訊網站",
  shortName: "汐止生活資訊",
  seoTitle: "新北汐止生活資訊完整整理｜交通美食景點生活機能與通勤居住指南",
  description:
    "汐止生活資訊網站整理新北汐止交通、美食、景點、採買、醫療、停車與生活機能，提供想搬到汐止、在汐止通勤或安排日常活動的人快速掌握生活圈特色。透過 FAQ 與分類頁面，你可以比較汐止到台北、南港、內湖的動線，找到居住、看屋與假日規劃需要的實用參考。",
  siteUrl: "https://xizhi-life-info.vercel.app",
  author: {
    name: "汐止生活資訊編輯",
    type: "Organization",
  },
  keywords: [
    "汐止生活資訊",
    "汐止交通",
    "汐止美食",
    "汐止景點",
    "汐止生活機能",
    "汐止房價",
    "汐止租屋",
    "汐止居住成本",
    "汐止適合居住嗎",
    "汐止到台北通勤",
    "地方資訊網站",
  ],
};

export const navigationItems = [
  { label: "首頁", href: "/" },
  { label: "汐止介紹", href: "/about-xizhi" },
  { label: "美食", href: "/food" },
  { label: "交通", href: "/transport" },
  { label: "景點", href: "/attractions" },
  { label: "生活機能", href: "/living" },
  { label: "房價租屋", href: "/housing-price" },
  { label: "FAQ", href: "/faq" },
];

export const siteRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about-xizhi", priority: "0.8", changefreq: "monthly" },
  { path: "/food", priority: "0.8", changefreq: "monthly" },
  { path: "/transport", priority: "0.8", changefreq: "monthly" },
  { path: "/attractions", priority: "0.7", changefreq: "monthly" },
  { path: "/living", priority: "0.8", changefreq: "monthly" },
  { path: "/housing-price", priority: "0.8", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
];

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteMeta.siteUrl).toString();
}

export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const authoritySourceSets = {
  all: authoritySources.map((source) => source.id),
  local: ["xizhi-office", "ntpc", "cwa"],
  transport: ["tra", "ntpc-bus", "youbike", "cwa"],
  leisure: ["xizhi-office", "ntpc", "cwa", "tra", "ntpc-bus"],
};

const authoritySourceById = new Map(
  authoritySources.map((source) => [source.id, source]),
);

function getAuthoritySources(sourceIds = authoritySourceSets.all) {
  return sourceIds
    .map((sourceId) => authoritySourceById.get(sourceId))
    .filter(Boolean);
}

export function createXizhiPlaceJsonLd() {
  return {
    "@type": "AdministrativeArea",
    name: "新北市汐止區",
    alternateName: ["汐止", "Xizhi District"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "汐止區",
      addressRegion: "新北市",
      addressCountry: "TW",
    },
    sameAs: [
      "https://www.xizhi.ntpc.gov.tw/",
      "https://www.ntpc.gov.tw/",
    ],
  };
}

export function createAuthoritySourceMentions(sourceIds = authoritySourceSets.all) {
  return getAuthoritySources(sourceIds).map((source) => ({
    "@type": "Organization",
    "@id": `${source.url}#organization`,
    name: source.name,
    alternateName: source.shortName,
    url: source.url,
    description: source.description,
    sameAs: [source.url],
  }));
}

export function createAuthoritySourceItemListJsonLd({
  name,
  description,
  path,
  sourceIds = authoritySourceSets.all,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: getAbsoluteUrl(path),
    itemListElement: createAuthoritySourceMentions(sourceIds).map(
      (source, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: source,
      }),
    ),
  };
}

export function createFaqJsonLd(faqs, path) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url: getAbsoluteUrl(path),
  };
}

export function createArticleJsonLd({
  title,
  description,
  path,
  section,
  sourceIds = authoritySourceSets.all,
  mentions,
  datePublished = "2026-07-06",
  dateModified = "2026-07-06",
}) {
  const sourceMentions = mentions || createAuthoritySourceMentions(sourceIds);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    articleSection: section,
    inLanguage: "zh-Hant-TW",
    datePublished,
    dateModified,
    about: createXizhiPlaceJsonLd(),
    mentions: sourceMentions,
    citation: sourceMentions.map((source) => source.url),
    author: {
      "@type": siteMeta.author.type,
      name: siteMeta.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteMeta.name,
      url: siteMeta.siteUrl,
    },
    mainEntityOfPage: getAbsoluteUrl(path),
  };
}
