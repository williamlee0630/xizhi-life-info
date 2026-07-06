import Link from "next/link";
import FAQSection from "../../components/FAQSection";
import InfoCard from "../../components/InfoCard";
import { pageFaqs } from "../../data/faqData";
import { livingData } from "../../data/livingData";
import {
  createArticleJsonLd,
  createFaqJsonLd,
  serializeJsonLd,
} from "../../data/siteMeta";

const summary =
  "汐止生活機能包含超市、市場、賣場、醫療院所、藥局、停車與通勤生活。不同區域便利度不完全相同，適合用住處距離、採買動線、交通方式與家庭需求來評估是否適合居住。";

export const metadata = {
  title: "汐止生活機能與居住日常整理",
  description:
    "整理汐止超市市場賣場、醫療院所藥局、停車、通勤生活與日常居住機能。",
  alternates: {
    canonical: "/living",
  },
};

export default function LivingPage() {
  const jsonLd = [
    createArticleJsonLd({
      title: "汐止生活機能與居住日常整理",
      description: summary,
      path: "/living",
      section: "汐止生活機能",
    }),
    createFaqJsonLd(pageFaqs.living, "/living"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="space-y-5 py-6">
        <p className="text-sm font-semibold text-emerald-700">Living</p>
        <h1 className="text-4xl font-semibold leading-tight text-stone-950">
          汐止生活機能：採買、醫療、停車與居住日常
        </h1>
        <p className="max-w-4xl text-lg leading-8 text-stone-700">{summary}</p>
      </section>

      <section className="py-8" aria-labelledby="functions-heading">
        <h2 id="functions-heading" className="text-2xl font-semibold text-stone-950">
          超市、市場、賣場與日常服務
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {livingData.map((item, index) => (
            <InfoCard
              key={item.id}
              title={item.title}
              description={item.description}
              accent={["emerald", "rose", "sky", "amber"][index]}
            />
          ))}
        </div>
      </section>

      <section className="py-8" aria-labelledby="medical-heading">
        <h2 id="medical-heading" className="text-2xl font-semibold text-stone-950">
          醫療院所與藥局
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          汐止主要生活圈有診所、牙醫、藥局與基礎醫療服務，能支撐多數日常健康需求。
          若家中有長輩、幼兒或慢性病用藥需求，建議把距離常用醫療院所與藥局的交通方式納入居住評估。
        </p>
      </section>

      <section className="py-8" aria-labelledby="parking-heading">
        <h2 id="parking-heading" className="text-2xl font-semibold text-stone-950">
          停車與通勤生活
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          汐止的停車條件會影響每天生活品質。靠近車站與商圈的位置，採買與用餐方便，但停車壓力可能較高；
          住宅社區若有固定車位，開車通勤與家庭移動會更穩定。
        </p>
      </section>

      <section className="py-8" aria-labelledby="living-fit-heading">
        <h2 id="living-fit-heading" className="text-2xl font-semibold text-stone-950">
          適合居住與日常生活的整理方式
        </h2>
        <div className="mt-4 rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
          <ul className="grid gap-3 text-sm leading-7 text-stone-700 md:grid-cols-2">
            <li>先確認每日通勤目的地，再判斷台鐵、公車或開車是否適合。</li>
            <li>觀察住處步行可達的超市、市場、便利商店與餐飲選擇。</li>
            <li>家庭居住需留意醫療、藥局、公園、托育與停車需求。</li>
            <li>若常晚歸，夜間交通、宵夜、照明與回家路線也應納入考量。</li>
          </ul>
        </div>
      </section>

      <section className="py-8" aria-labelledby="related-heading">
        <h2 id="related-heading" className="text-2xl font-semibold text-stone-950">
          站內延伸閱讀
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
        </div>
      </section>

      <FAQSection faqs={pageFaqs.living} title="汐止生活機能常見問題" />
    </div>
  );
}
