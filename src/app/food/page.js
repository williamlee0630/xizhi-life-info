import Link from "next/link";
import FAQSection from "../../components/FAQSection";
import InfoCard from "../../components/InfoCard";
import { foodCategories } from "../../data/foodData";
import { pageFaqs } from "../../data/faqData";
import {
  createArticleJsonLd,
  createFaqJsonLd,
  serializeJsonLd,
} from "../../data/siteMeta";

const summary =
  "汐止美食以日常生活型選擇為主，常見早餐、便當、小吃、晚餐與宵夜店家。本站不做商業排名，而是依通勤族、學生、家庭與晚歸需求，整理汐止用餐情境與常見餐飲類型。";

export const metadata = {
  title: "汐止美食與日常用餐整理",
  description:
    "整理汐止早餐、便當、小吃、晚餐、宵夜與不同族群的用餐情境，不做商業業配式推薦。",
  alternates: {
    canonical: "/food",
  },
};

export default function FoodPage() {
  const jsonLd = [
    createArticleJsonLd({
      title: "汐止美食與日常用餐整理",
      description: summary,
      path: "/food",
      section: "汐止美食",
    }),
    createFaqJsonLd(pageFaqs.food, "/food"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="space-y-5 py-6">
        <p className="text-sm font-semibold text-emerald-700">Food</p>
        <h1 className="text-4xl font-semibold leading-tight text-stone-950">
          汐止美食：早餐、便當、小吃與日常用餐
        </h1>
        <p className="max-w-4xl text-lg leading-8 text-stone-700">{summary}</p>
      </section>

      <section className="py-8" aria-labelledby="types-heading">
        <h2 id="types-heading" className="text-2xl font-semibold text-stone-950">
          汐止常見美食類型
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {foodCategories.map((category, index) => (
            <InfoCard
              key={category.id}
              title={category.title}
              description={category.description}
              meta={category.suitableFor}
              accent={["amber", "emerald", "rose", "sky", "indigo"][index]}
            />
          ))}
        </div>
      </section>

      <section className="py-8" aria-labelledby="time-heading">
        <h2 id="time-heading" className="text-2xl font-semibold text-stone-950">
          依時段整理：早餐、便當、小吃、晚餐、宵夜
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          汐止的餐飲選擇多半跟通勤與住宅生活同步。早上以快速外帶為主，中午常見便當與麵飯，
          傍晚後則轉向家庭晚餐、簡餐與小吃。宵夜選擇會因區域而異，車站周邊與主要道路通常較容易找到。
        </p>
      </section>

      <section className="py-8" aria-labelledby="audience-heading">
        <h2 id="audience-heading" className="text-2xl font-semibold text-stone-950">
          適合通勤族、學生與家庭的用餐選擇
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <InfoCard
            title="通勤族"
            description="適合選擇車站、公車站與主要道路附近可快速外帶的早餐、咖啡、便當與麵飯。"
            accent="sky"
          />
          <InfoCard
            title="學生"
            description="常見需求是價格穩定、份量清楚與可快速解決，小吃、便當與滷味類型較常被使用。"
            accent="emerald"
          />
          <InfoCard
            title="家庭"
            description="家庭用餐較重視座位、份量、兒童可接受度與距離住家遠近，晚餐選擇通常更依生活圈分布。"
            accent="amber"
          />
        </div>
      </section>

      <section className="py-8" aria-labelledby="tone-heading">
        <h2 id="tone-heading" className="text-2xl font-semibold text-stone-950">
          以地方生活資訊整理，不做商業業配
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          本頁聚焦汐止日常餐飲型態，而不是替特定店家排名。對 GEO／AEO 研究而言，這種整理方式能讓搜尋引擎與 AI
          更容易辨識「汐止有哪些用餐類型」與「不同族群怎麼選擇」。
        </p>
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
          <Link href="/living" className="text-emerald-800 underline">
            汐止生活機能
          </Link>
        </div>
      </section>

      <FAQSection faqs={pageFaqs.food} title="汐止美食常見問題" />
    </div>
  );
}
