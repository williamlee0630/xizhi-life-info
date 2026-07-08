"use client";

import { useEffect, useState } from "react";
import {
  authoritySources,
  fallbackLiveItems,
  formatTaipeiTime,
} from "../data/liveUpdates";

const REFRESH_MS = 90000;

function getInitialFeed() {
  return {
    checkedAt: new Date().toISOString(),
    status: "fallback",
    items: fallbackLiveItems,
    sources: authoritySources,
  };
}

export default function AuthorityFeed() {
  const [feed, setFeed] = useState(getInitialFeed);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadFeed() {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 8000);

      try {
        const response = await fetch("/api/live-updates", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) return;

        const nextFeed = await response.json();
        if (mounted && Array.isArray(nextFeed?.items)) {
          setFeed(nextFeed);
        }
      } catch {
        // Preserve the official fallback list if live refresh fails.
      } finally {
        if (mounted) setIsLoading(false);
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

  const statusLabel = feed.status === "live" ? "已擷取官方公告" : "使用官方來源備援";

  return (
    <section id="live-feed" className="py-8" aria-labelledby="live-feed-heading">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Live feed</p>
          <h2 id="live-feed-heading" className="text-2xl font-semibold text-stone-950">
            即時更新資訊
          </h2>
        </div>
        <p className="text-sm text-stone-600">
          {isLoading ? "正在更新官方來源..." : `${statusLabel}｜${formatTaipeiTime(feed.checkedAt)}`}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {feed.items.map((item) => (
          <article
            key={item.id}
            className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-800">
              <span className="rounded bg-emerald-50 px-2 py-1">{item.category}</span>
              <span>{item.source}</span>
              {item.publishedAt ? <span>{item.publishedAt}</span> : null}
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-7 text-stone-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-stone-700">{item.summary}</p>
            <div className="mt-4 flex items-center justify-between gap-3 text-sm">
              <span className="text-stone-500">{item.freshness}</span>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-emerald-800 underline"
              >
                開啟來源
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
