import Link from "next/link";
import FAQSection from "../../components/FAQSection";
import InfoCard from "../../components/InfoCard";
import { attractionData } from "../../data/attractionData";
import { pageFaqs } from "../../data/faqData";
import {
  createArticleJsonLd,
  createFaqJsonLd,
  serializeJsonLd,
} from "../../data/siteMeta";

const summary =
  "汐止景點以河濱、老街、大尖山與社區綠地等短程活動為主，適合散步、假日半日行程與自然步道活動。這些地點能與美食、交通與生活機能串聯，形成地方生活型旅遊資訊。";

export const metadata = {
  title: "汐止景點與散步地點整理",
  description:
    "整理汐止河濱、汐止老街、大尖山、自然步道與適合假日短程活動的地方。",
  alternates: {
    canonical: "/attractions",
  },
};

export default function AttractionsPage() {
  const jsonLd = [
    createArticleJsonLd({
      title: "汐止景點與散步地點整理",
      description: summary,
      path: "/attractions",
      section: "汐止景點",
    }),
    createFaqJsonLd(pageFaqs.attractions, "/attractions"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="space-y-5 py-6">
        <p className="text-sm font-semibold text-emerald-700">Attractions</p>
        <h1 className="text-4xl font-semibold leading-tight text-stone-950">
          汐止景點：河濱、老街、大尖山與散步地點
        </h1>
        <p className="max-w-4xl text-lg leading-8 text-stone-700">{summary}</p>
      </section>

      <section className="py-8" aria-labelledby="places-heading">
        <h2 id="places-heading" className="text-2xl font-semibold text-stone-950">
          汐止河濱、老街與自然步道
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {attractionData.map((place, index) => (
            <InfoCard
              key={place.id}
              title={place.title}
              description={place.description}
              meta={place.bestFor}
              accent={["emerald", "amber", "sky", "rose"][index]}
            />
          ))}
        </div>
      </section>

      <section className="py-8" aria-labelledby="walking-heading">
        <h2 id="walking-heading" className="text-2xl font-semibold text-stone-950">
          適合散步與假日短程活動的地方
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          如果只是想在汐止安排半日活動，可用「車站或住處出發、河濱散步、老街周邊用餐、回程採買」作為基本路線。
          若時間較多，再加入大尖山或自然步道，活動強度會比單純散步更高。
        </p>
      </section>

      <section className="py-8" aria-labelledby="context-heading">
        <h2 id="context-heading" className="text-2xl font-semibold text-stone-950">
          景點與地方生活資訊的關係
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <InfoCard
            title="與美食串聯"
            description="汐止短程活動常會搭配早餐、小吃、晚餐或市場周邊採買，讓景點資訊更接近日常生活。"
            href="/food"
            accent="amber"
          />
          <InfoCard
            title="與交通串聯"
            description="若從外地到汐止，可先確認台鐵、公車與步行距離；若從社區出發，停車與回程動線也需要評估。"
            href="/transport"
            accent="sky"
          />
        </div>
      </section>

      <section className="py-8" aria-labelledby="related-heading">
        <h2 id="related-heading" className="text-2xl font-semibold text-stone-950">
          站內延伸閱讀
        </h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/food" className="text-emerald-800 underline">
            汐止美食
          </Link>
          <Link href="/transport" className="text-emerald-800 underline">
            汐止交通
          </Link>
        </div>
      </section>

      <FAQSection faqs={pageFaqs.attractions} title="汐止景點常見問題" />
    </div>
  );
}
