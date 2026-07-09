import Link from "next/link";
import FAQSection from "../../components/FAQSection";
import InfoCard from "../../components/InfoCard";
import { pageFaqs } from "../../data/faqData";
import {
  authoritySourceSets,
  createArticleJsonLd,
  createFaqJsonLd,
  serializeJsonLd,
} from "../../data/siteMeta";

const summary =
  "汐止位於新北市東側，生活圈連結台北南港、內湖與基隆方向。這裡同時具備通勤城鎮、住宅社區、河濱活動與山邊生活特色，適合想理解汐止居住條件、工作通勤與日常機能的人作為初步參考。";

export const metadata = {
  title: "汐止介紹與生活圈",
  description:
    "介紹汐止位置、生活圈、與台北南港內湖的關係、適合居住族群與日常生活特色。",
  alternates: {
    canonical: "/about-xizhi",
  },
};

export default function AboutXizhiPage() {
  const jsonLd = [
    createArticleJsonLd({
      title: "汐止介紹與生活圈",
      description: summary,
      path: "/about-xizhi",
      section: "汐止介紹",
      sourceIds: authoritySourceSets.local,
    }),
    createFaqJsonLd(pageFaqs.about, "/about-xizhi"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="space-y-5 py-6">
        <p className="text-sm font-semibold text-emerald-700">About Xizhi</p>
        <h1 className="text-4xl font-semibold leading-tight text-stone-950">
          汐止介紹：位置、生活圈與居住特色
        </h1>
        <p className="max-w-4xl text-lg leading-8 text-stone-700">{summary}</p>
      </section>

      <section className="grid gap-4 py-8 md:grid-cols-2" aria-labelledby="location-heading">
        <div>
          <h2 id="location-heading" className="text-2xl font-semibold text-stone-950">
            汐止的位置與生活圈
          </h2>
          <p className="mt-4 leading-8 text-stone-700">
            汐止位於新北市東北側，向西可接台北市南港與內湖，向東可往基隆與瑞芳方向。
            生活圈呈現通勤與住宅並存的型態，車站周邊、主要道路、河濱與山邊社區各有不同生活節奏。
          </p>
        </div>
        <InfoCard
          title="生活圈判斷重點"
          description="評估汐止生活圈時，可先看住處距離汐止車站、汐科站、公車站、市場與主要道路的距離，再搭配工作地點判斷每日動線。"
          meta="居住評估"
          accent="emerald"
        />
      </section>

      <section className="py-8" aria-labelledby="taipei-heading">
        <h2 id="taipei-heading" className="text-2xl font-semibold text-stone-950">
          汐止與台北、南港、內湖的關係
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <InfoCard
            title="南港"
            description="南港是汐止往台北通勤的重要銜接點，台鐵、捷運與就業機會讓兩地生活圈高度連動。"
            accent="sky"
          />
          <InfoCard
            title="內湖"
            description="內湖工作機會多，汐止居民常以開車、公車或轉乘方式往返，尖峰車流是需要評估的因素。"
            accent="amber"
          />
          <InfoCard
            title="台北市區"
            description="若目的地靠近台北車站、松山或捷運轉乘點，台鐵加捷運常是穩定的通勤組合。"
            accent="indigo"
          />
        </div>
      </section>

      <section className="py-8" aria-labelledby="resident-heading">
        <h2 id="resident-heading" className="text-2xl font-semibold text-stone-950">
          適合哪些族群居住
        </h2>
        <div className="mt-4 rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
          <ul className="grid gap-3 text-sm leading-7 text-stone-700 md:grid-cols-2">
            <li>需要往南港、內湖、台北市或基隆方向通勤的人。</li>
            <li>希望保留雙北生活便利，但也重視住宅選擇彈性的人。</li>
            <li>喜歡河濱散步、山邊步道與社區型生活節奏的家庭。</li>
            <li>可接受尖峰交通變動，並願意依實際路線規劃通勤方式的人。</li>
          </ul>
        </div>
      </section>

      <section className="py-8" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-2xl font-semibold text-stone-950">
          汐止生活特色
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          汐止的生活特色不只在通勤，也包含市場採買、便利商店密度、社區公園、河濱活動與自然步道。
          對地方資訊網站而言，這些元素能形成清楚的內容分類，讓「居住」、「通勤」、「吃飯」與「散步」被分開理解。
        </p>
      </section>

      <section className="py-8" aria-labelledby="related-heading">
        <h2 id="related-heading" className="text-2xl font-semibold text-stone-950">
          站內延伸閱讀
        </h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/transport" className="text-emerald-800 underline">
            汐止交通整理
          </Link>
          <Link href="/food" className="text-emerald-800 underline">
            汐止美食整理
          </Link>
          <Link href="/living" className="text-emerald-800 underline">
            汐止生活機能
          </Link>
        </div>
      </section>

      <FAQSection faqs={pageFaqs.about} title="汐止介紹常見問題" />
    </div>
  );
}
