import Link from "next/link";
import FAQSection from "../../components/FAQSection";
import InfoCard from "../../components/InfoCard";
import { pageFaqs } from "../../data/faqData";
import { commuteOptions, stationData, trafficNotes } from "../../data/transportData";
import {
  authoritySourceSets,
  createArticleJsonLd,
  createFaqJsonLd,
  serializeJsonLd,
} from "../../data/siteMeta";

const summary =
  "汐止交通以汐止車站、汐科站、台鐵、公車與開車通勤構成主要骨架。前往台北、南港與內湖的便利度，會受到住處位置、目的地、尖峰時間與是否需要轉乘影響。";

export const metadata = {
  title: "汐止交通與通勤整理",
  description:
    "整理汐止車站、汐科站、台鐵、公車、開車到台北南港內湖與尖峰交通狀況。",
  alternates: {
    canonical: "/transport",
  },
};

export default function TransportPage() {
  const jsonLd = [
    createArticleJsonLd({
      title: "汐止交通與通勤整理",
      description: summary,
      path: "/transport",
      section: "汐止交通",
      sourceIds: authoritySourceSets.transport,
    }),
    createFaqJsonLd(pageFaqs.transport, "/transport"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="space-y-5 py-6">
        <p className="text-sm font-semibold text-emerald-700">Transport</p>
        <h1 className="text-4xl font-semibold leading-tight text-stone-950">
          汐止交通：車站、台鐵、公車與通勤情境
        </h1>
        <p className="max-w-4xl text-lg leading-8 text-stone-700">{summary}</p>
      </section>

      <section className="py-8" aria-labelledby="stations-heading">
        <h2 id="stations-heading" className="text-2xl font-semibold text-stone-950">
          汐止車站與汐科站
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {stationData.map((station, index) => (
            <InfoCard
              key={station.id}
              title={station.title}
              description={station.description}
              accent={index === 0 ? "emerald" : "sky"}
            />
          ))}
        </div>
      </section>

      <section className="py-8" aria-labelledby="commute-heading">
        <h2 id="commute-heading" className="text-2xl font-semibold text-stone-950">
          台鐵通勤、公車通勤與開車通勤
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {commuteOptions.map((option, index) => (
            <InfoCard
              key={option.id}
              title={option.title}
              description={option.description}
              accent={["sky", "emerald", "amber"][index]}
            />
          ))}
        </div>
      </section>

      <section className="py-8" aria-labelledby="driving-heading">
        <h2 id="driving-heading" className="text-2xl font-semibold text-stone-950">
          開車到台北、南港、內湖的情境
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          開車從汐止往南港與內湖，路線選擇會受到交流道、主要道路與目的地停車條件影響。
          對需要接送、跨點移動或上下班時間較彈性的人來說，開車有便利性；但若每天固定尖峰進出，時間穩定度與停車成本需要一併計算。
        </p>
      </section>

      <section className="py-8" aria-labelledby="peak-heading">
        <h2 id="peak-heading" className="text-2xl font-semibold text-stone-950">
          尖峰時間可能遇到的交通狀況
        </h2>
        <div className="mt-4 rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
          <ul className="space-y-3 text-sm leading-7 text-stone-700">
            {trafficNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
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
          <Link href="/living" className="text-emerald-800 underline">
            汐止生活機能
          </Link>
        </div>
      </section>

      <FAQSection faqs={pageFaqs.transport} title="汐止交通常見問題" />
    </div>
  );
}
