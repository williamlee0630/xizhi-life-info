"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { buildTickerText, fallbackLiveItems } from "../data/liveUpdates";

const REFRESH_MS = 60000;

export default function LiveInfoTicker() {
  const fallbackCheckedAt = useMemo(() => new Date().toISOString(), []);
  const [feed, setFeed] = useState({
    checkedAt: fallbackCheckedAt,
    status: "fallback",
    tickerText: buildTickerText(fallbackLiveItems, fallbackCheckedAt),
  });

  useEffect(() => {
    let mounted = true;

    async function loadFeed() {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 6000);

      try {
        const response = await fetch("/api/live-updates", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) return;

        const nextFeed = await response.json();
        if (mounted && nextFeed?.tickerText) {
          setFeed(nextFeed);
        }
      } catch {
        // Keep the fallback ticker visible if the live endpoint is unavailable.
      } finally {
        window.clearTimeout(timer);
      }
    }

    loadFeed();
    const interval = window.setInterval(loadFeed, REFRESH_MS);

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const statusText = feed.status === "live" ? "即時更新" : "官方來源";

  return (
    <Link
      href="/live-updates"
      className="xizhi-marquee-link group block bg-emerald-700 text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
      aria-label="查看汐止即時更新與官方來源頁面"
    >
      <div className="mx-auto flex max-w-none items-center gap-3 px-3 py-2 text-sm font-semibold sm:px-6">
        <span className="shrink-0 rounded bg-emerald-950/35 px-2.5 py-1 text-xs tracking-wide">
          {statusText}
        </span>
        <span className="relative min-w-0 flex-1 overflow-hidden whitespace-nowrap">
          <span className="xizhi-marquee-track" aria-live="polite">
            <span className="xizhi-marquee-copy">{feed.tickerText}</span>
            <span className="xizhi-marquee-copy" aria-hidden="true">
              {feed.tickerText}
            </span>
          </span>
        </span>
        <span className="hidden shrink-0 rounded border border-white/40 px-2.5 py-1 text-xs sm:inline">
          查看來源
        </span>
      </div>
    </Link>
  );
}
