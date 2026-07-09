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

const pageTitle = siteMeta.seoTitle;
const summary = siteMeta.description;

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
  {
    title: "房價租屋",
    description:
      "整理汐止房價、租金、實價登錄、房屋網查核方式與生活圈比較，協助評估搬家、租屋與買房前的基本資訊。",
    href: "/housing-price",
    meta: "居住成本",
    accent: "emerald",
  },
];

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: summary,
  openGraph: {
    title: pageTitle,
    description: summary,
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const articleJsonLd = createArticleJsonLd({
    title: pageTitle,
    description: summary,
    path: "/",
    section: "首頁",
  });
  const faqJsonLd = createFaqJsonLd(pageFaqs.home, "/");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />

      <section className="grid gap-8 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-emerald-700">
            汐止地方生活資訊
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
            快速認識汐止的生活重點
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
            每個分類頁都整理摘要、主題段落、常見問題與站內延伸閱讀，方便依照生活需求快速查找。
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCards.map((card) => (
            <InfoCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 py-8 md:grid-cols-[1fr_0.35fr] md:items-center" aria-labelledby="housing-cost-heading">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Housing cost</p>
          <h2 id="housing-cost-heading" className="mt-2 text-2xl font-semibold text-stone-950">
            居住成本與房價查核
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-stone-700">
            如果正在評估搬到汐止、租屋或買房，除了交通與生活機能，也建議查詢實價登錄、
            房屋網開價與租屋平台資訊。房價與租金會受到生活圈、屋齡、距離車站、
            停車條件與通勤動線影響，因此應搭配多個資料來源交叉判斷。
          </p>
        </div>
        <div className="md:text-right">
          <Link
            href="/housing-price"
            className="inline-flex rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            查看汐止居住成本整理 →
          </Link>
        </div>
      </section>

      <section className="grid gap-4 py-8 md:grid-cols-3" aria-labelledby="guide-heading">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold text-emerald-700">Guide</p>
          <h2 id="guide-heading" className="mt-2 text-2xl font-semibold text-stone-950">
            怎麼使用本站
          </h2>
        </div>
        <div className="grid gap-4 md:col-span-2">
          <InfoCard
            title="先看通勤與生活圈"
            description="如果正在評估居住，可先閱讀汐止介紹與交通頁，確認每日往返台北、南港、內湖或基隆的動線。"
            accent="emerald"
          />
          <InfoCard
            title="再看吃飯與採買"
            description="美食與生活機能頁整理早餐、便當、市場、超市、醫療藥局與停車等日常需求。"
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
          <Link href="/housing-price" className="text-emerald-800 underline">
            汐止居住成本整理
          </Link>
        </div>
      </section>

      <FAQSection faqs={pageFaqs.home} title="汐止生活資訊常見問題" />
    </div>
  );
}
