import AuthorityFeed from "../../components/AuthorityFeed";
import { authoritySources } from "../../data/liveUpdates";

export const metadata = {
  title: "汐止即時更新與官方來源",
  description:
    "整合汐止區公所、新北市政府、中央氣象署、臺鐵與公共交通等高權重官方網站資訊，提供汐止生活與通勤的即時查核入口。",
  alternates: {
    canonical: "/live-updates",
  },
  openGraph: {
    title: "汐止即時更新與官方來源",
    description:
      "點開跑馬燈後可查看汐止在地官方公告、天氣、交通與公共服務來源。",
    url: "/live-updates",
  },
};

export default function LiveUpdatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 rounded-lg border border-emerald-100 bg-white p-6 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Official live updates</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
            汐止即時更新資訊
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            這裡把跑馬燈導向的資訊集中整理，優先擷取汐止區公所公告，
            並提供新北市府、中央氣象署、臺鐵、公車與 YouBike 等官方來源，
            方便快速查核民生、交通、天氣與活動資訊。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <a
              href="#live-feed"
              className="rounded-md bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800"
            >
              看即時資訊
            </a>
            <a
              href="#authority-sources"
              className="rounded-md border border-stone-300 bg-white px-4 py-2 text-stone-800 hover:border-emerald-500 hover:text-emerald-800"
            >
              看官方來源
            </a>
          </div>
        </div>
        <div className="rounded-lg bg-emerald-50 p-5 text-sm leading-7 text-emerald-950">
          <p className="font-semibold">更新方式</p>
          <p className="mt-2">
            頁面會定期向站內 API 重新取得資料；API 每次請求都使用
            no-store，盡量避免展示過期內容。若外部網站暫時無法連線，
            會保留官方來源清單讓使用者直接前往查核。
          </p>
        </div>
      </section>

      <AuthorityFeed />

      <section
        id="authority-sources"
        className="py-8"
        aria-labelledby="authority-sources-heading"
      >
        <div className="mb-5">
          <p className="text-sm font-semibold text-emerald-700">Authority sources</p>
          <h2
            id="authority-sources-heading"
            className="text-2xl font-semibold text-stone-950"
          >
            高權重官方來源
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-stone-600">
            來源以政府、交通與公共服務官方網站為主，避免把社群貼文或未查核內容當成主資料。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {authoritySources.map((source) => (
            <article
              key={source.id}
              className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase text-emerald-700">
                {source.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-stone-950">
                {source.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                {source.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-stone-600">
                {source.weightNote}
              </p>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-800 underline"
              >
                前往官方網站
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
