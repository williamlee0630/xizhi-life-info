import Link from "next/link";
import { navigationItems, siteMeta } from "../data/siteMeta";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-semibold">{siteMeta.name}</p>
          <p className="max-w-2xl text-sm leading-7 text-stone-300">
            本站以靜態內容整理汐止交通、美食、景點與生活機能，並作為觀察
            GEO／AEO、FAQ、內部連結與結構化資料效果的研究樣本。
          </p>
          <p className="text-xs leading-6 text-stone-400">
            內容以地方生活資訊與研究紀錄為主，不含登入、會員、後台或資料庫功能。
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-stone-200">主要連結</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stone-300 hover:text-emerald-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
