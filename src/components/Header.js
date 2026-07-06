"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationItems, siteMeta } from "../data/siteMeta";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg border border-emerald-100"
          />
          <div>
            <p className="text-base font-semibold text-stone-950">
              {siteMeta.shortName}
            </p>
            <p className="text-xs text-stone-500">地方資訊與 GEO／AEO 研究</p>
          </div>
        </Link>
        <nav aria-label="主要導覽" className="flex flex-wrap gap-2">
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-700 text-white"
                    : "text-stone-700 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
