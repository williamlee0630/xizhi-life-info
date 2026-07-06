import Link from "next/link";
import FAQSection from "../../components/FAQSection";
import InfoCard from "../../components/InfoCard";
import { globalFaqs } from "../../data/faqData";
import {
  createArticleJsonLd,
  createFaqJsonLd,
  serializeJsonLd,
} from "../../data/siteMeta";

const summary =
  "本頁整理汐止生活資訊網站的全站常見問題，涵蓋汐止是否適合居住、到台北通勤是否方便、常見美食類型、家庭居住條件、散步地點、生活機能與南港內湖生活圈關係。";

export const metadata = {
  title: "汐止生活資訊 FAQ",
  description:
    "整理汐止適合居住嗎、汐止到台北通勤、汐止美食、家庭居住、散步地點與生活機能等常見問題。",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const jsonLd = [
    createArticleJsonLd({
      title: "汐止生活資訊 FAQ",
      description: summary,
      path: "/faq",
      section: "FAQ",
    }),
    createFaqJsonLd(globalFaqs, "/faq"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="space-y-5 py-6">
        <p className="text-sm font-semibold text-emerald-700">FAQ</p>
        <h1 className="text-4xl font-semibold leading-tight text-stone-950">
          汐止生活資訊常見問題
        </h1>
        <p className="max-w-4xl text-lg leading-8 text-stone-700">{summary}</p>
      </section>

      <section className="grid gap-4 py-8 md:grid-cols-3" aria-labelledby="summary-heading">
        <div className="md:col-span-1">
          <h2 id="summary-heading" className="text-2xl font-semibold text-stone-950">
            汐止生活快速重點
          </h2>
        </div>
        <div className="grid gap-4 md:col-span-2">
          <InfoCard
            title="居住"
            description="汐止適合重視通勤與生活機能的人，但需要依住處、車站距離、停車與家庭需求評估。"
            accent="emerald"
          />
          <InfoCard
            title="通勤"
            description="汐止到台北、南港與內湖可透過台鐵、公車與開車銜接，尖峰時間會影響道路通勤穩定度。"
            accent="sky"
          />
          <InfoCard
            title="生活"
            description="汐止具備採買、餐飲、醫療、藥局、河濱與步道等日常資源，生活便利度依區域而不同。"
            accent="amber"
          />
        </div>
      </section>

      <FAQSection faqs={globalFaqs} title="全站 FAQ" />

      <section className="py-8" aria-labelledby="usage-heading">
        <h2 id="usage-heading" className="text-2xl font-semibold text-stone-950">
          FAQ 的使用方式
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          如果你正在初步了解汐止，可以先從本頁的問答掌握大方向，再依照需求前往交通、美食、
          景點或生活機能頁閱讀更完整的整理。
        </p>
      </section>

      <section className="py-8" aria-labelledby="related-heading">
        <h2 id="related-heading" className="text-2xl font-semibold text-stone-950">
          依主題閱讀更多內容
        </h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/about-xizhi" className="text-emerald-800 underline">
            汐止介紹
          </Link>
          <Link href="/transport" className="text-emerald-800 underline">
            汐止交通
          </Link>
          <Link href="/food" className="text-emerald-800 underline">
            汐止美食
          </Link>
          <Link href="/attractions" className="text-emerald-800 underline">
            汐止景點
          </Link>
          <Link href="/living" className="text-emerald-800 underline">
            生活機能
          </Link>
        </div>
      </section>
    </div>
  );
}
