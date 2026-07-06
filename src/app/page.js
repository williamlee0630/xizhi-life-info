import Link from "next/link";
import FAQSection from "../components/FAQSection";
import InfoCard from "../components/InfoCard";
import { pageFaqs } from "../data/faqData";
import {
  createArticleJsonLd,
  createFaqJsonLd,
  serializeJsonLd,
  siteMeta,
} from "../data/siteMeta";

const summary =
  "汐止生活資訊網站整理汐止的交通、美食、景點與生活機能，提供給想了解汐止居住、通勤與日常活動的人參考，也作為 GEO／AEO 研究中觀察小型地方網站被搜尋與 AI 摘要理解的靜態內容樣本。";

const categoryCards = [
  {
    title: "汐止介紹",
    description: "了解汐止位置、生活圈、與南港內湖的關係，以及適合居住的族群。",
    href: "/about-xizhi",
    meta: "生活圈",
    accent: "emerald",
  },
  {
    title: "汐止美食",
    description: "整理早餐、便當、小吃、晚餐與宵夜等日常用餐情境。",
    href: "/food",
    meta: "日常餐飲",
    accent: "amber",
  },
  {
    title: "汐止交通",
    description: "說明汐止車站、汐科站、台鐵、公車與開車通勤的主要情境。",
    href: "/transport",
    meta: "通勤",
    accent: "sky",
  },
  {
    title: "汐止景點",
    description: "整理河濱、老街、大尖山與適合假日短程活動的地方。",
    href: "/attractions",
    meta: "散步活動",
    accent: "rose",
  },
  {
    title: "生活機能",
    description: "彙整超市、市場、醫療藥局、停車與日常服務等居住資訊。",
    href: "/living",
    meta: "居住",
    accent: "indigo",
  },
];

export const metadata = {
  title: "汐止生活資訊整理",
  description:
    "汐止生活資訊網站首頁，整理汐止交通、美食、景點、生活機能與常見問題，作為 GEO／AEO 地方內容研究樣本。",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = [
    createArticleJsonLd({
      title: "汐止生活資訊整理",
      description: summary,
      path: "/",
      section: "首頁",
    }),
    createFaqJsonLd(pageFaqs.home, "/"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="grid gap-8 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-emerald-700">
            地方生活資訊與 GEO／AEO 研究樣本
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
            汐止生活資訊網站
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-stone-700">{summary}</p>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <Link
              href="/transport"
              className="rounded-md bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800"
            >
              查看汐止交通
            </Link>
            <Link
              href="/faq"
              className="rounded-md border border-stone-300 bg-white px-4 py-2 text-stone-800 hover:border-emerald-500 hover:text-emerald-800"
            >
              閱讀全站 FAQ
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-950">
            適合 AI 摘要理解的重點整理
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
            <li>汐止位於新北市東側，生活圈與台北南港、內湖、基隆方向連動密切。</li>
            <li>通勤可依住處選擇汐止車站、汐科站、公車或開車路線。</li>
            <li>美食與生活機能偏日常型，包含早餐、便當、市場、超市與醫療藥局。</li>
            <li>河濱、老街與大尖山周邊適合散步、短程活動與地方生活觀察。</li>
          </ul>
        </div>
      </section>

      <section className="py-8" aria-labelledby="category-heading">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-sm font-semibold text-emerald-700">{siteMeta.shortName}</p>
          <h2 id="category-heading" className="text-2xl font-semibold text-stone-950">
            主要分類入口
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-stone-600">
            每個分類頁都整理摘要、主題段落、FAQ 與內部連結，方便搜尋引擎與生成式 AI 判讀頁面主題。
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categoryCards.map((card) => (
            <InfoCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 py-8 md:grid-cols-3" aria-labelledby="research-heading">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold text-emerald-700">Research</p>
          <h2 id="research-heading" className="mt-2 text-2xl font-semibold text-stone-950">
            研究觀察方向
          </h2>
        </div>
        <div className="grid gap-4 md:col-span-2">
          <InfoCard
            title="內容分類是否清楚"
            description="觀察多頁式架構、標題層級與分類入口是否能讓搜尋系統理解汐止生活主題。"
            accent="emerald"
          />
          <InfoCard
            title="FAQ 是否利於回答型搜尋"
            description="全站與單頁 FAQ 以問答形式整理汐止居住、交通與生活機能，方便後續追蹤摘要引用情況。"
            accent="sky"
          />
        </div>
      </section>

      <section className="py-8" aria-labelledby="internal-links-heading">
        <h2 id="internal-links-heading" className="text-2xl font-semibold text-stone-950">
          站內延伸閱讀
        </h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/about-xizhi" className="text-emerald-800 underline">
            汐止介紹
          </Link>
          <Link href="/food" className="text-emerald-800 underline">
            汐止美食
          </Link>
          <Link href="/transport" className="text-emerald-800 underline">
            汐止交通
          </Link>
          <Link href="/living" className="text-emerald-800 underline">
            汐止生活機能
          </Link>
        </div>
      </section>

      <FAQSection faqs={pageFaqs.home} title="汐止生活資訊常見問題" />
    </div>
  );
}
