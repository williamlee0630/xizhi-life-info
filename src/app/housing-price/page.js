import Link from "next/link";
import FAQSection from "../../components/FAQSection";
import {
  createHousingSourceMentions,
  housingAreaRows,
  housingFaqs,
  housingInquirySources,
  marketSourceRows,
  verificationSteps,
} from "../../data/housingPriceData";
import {
  createArticleJsonLd,
  createFaqJsonLd,
  getAbsoluteUrl,
  serializeJsonLd,
  siteMeta,
} from "../../data/siteMeta";

const pagePath = "/housing-price";
const pageTitle = "汐止居住成本整理：房價、租金與生活圈比較";
const seoTitle = "汐止居住成本整理｜房價租金、實價登錄與生活圈比較";
const pageDescription =
  "整理汐止房價、租金、實價登錄、房屋網查核方式與主要生活圈差異，協助想搬到汐止、租屋、買房或評估通勤居住的人理解汐止居住成本。";
const ogDescription =
  "整理汐止房價、租金、實價登錄、房屋網查核方式與主要生活圈差異，協助租屋、買房與通勤居住評估。";

export const metadata = {
  title: seoTitle,
  description: pageDescription,
  keywords: [
    "汐止房價",
    "汐止租屋",
    "汐止買房",
    "汐止居住成本",
    "汐止實價登錄",
    "汐止生活圈",
    "汐止適合居住嗎",
    "汐止房屋網",
  ],
  alternates: {
    canonical: getAbsoluteUrl(pagePath),
  },
  openGraph: {
    title: seoTitle,
    description: ogDescription,
    url: getAbsoluteUrl(pagePath),
    type: "article",
    locale: "zh_TW",
    siteName: siteMeta.name,
  },
};

function createBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首頁",
        item: getAbsoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "汐止居住成本整理",
        item: getAbsoluteUrl(pagePath),
      },
    ],
  };
}

function createWebPageJsonLd(sourceMentions) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: getAbsoluteUrl(pagePath),
    inLanguage: "zh-Hant-TW",
    about: [
      { "@type": "Thing", name: "汐止房價" },
      { "@type": "Thing", name: "汐止租金" },
      { "@type": "Thing", name: "汐止生活圈" },
      { "@type": "Thing", name: "汐止居住成本" },
    ],
    mentions: sourceMentions,
  };
}

function DataTable({ columns, rows, renderRow, labelledBy }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white shadow-sm">
      <table className="w-full min-w-[900px] border-collapse text-left text-sm">
        <thead className="bg-stone-100 text-stone-900">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-3 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-200 text-stone-700">
          {rows.map((row) => renderRow(row))}
        </tbody>
      </table>
      <span className="sr-only">表格說明：{labelledBy}</span>
    </div>
  );
}

export default function HousingPricePage() {
  const sourceMentions = createHousingSourceMentions();
  const jsonLd = [
    createArticleJsonLd({
      title: pageTitle,
      description: pageDescription,
      path: pagePath,
      section: "汐止居住成本",
      mentions: sourceMentions,
      datePublished: "2026-07-09",
      dateModified: "2026-07-09",
    }),
    createFaqJsonLd(housingFaqs, pagePath),
    createBreadcrumbJsonLd(),
    createWebPageJsonLd(sourceMentions),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="space-y-6 py-6">
        <p className="text-sm font-semibold text-emerald-700">Housing cost</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
          {pageTitle}
        </h1>
        <p className="max-w-4xl text-lg leading-8 text-stone-700">
          汐止的居住成本會受到生活圈、屋齡、距離車站、通勤動線、採買機能與停車條件影響。
          查詢汐止房價或租金時，建議不要只看單一房屋平台的開價，而是先用內政部實價登錄確認近期成交紀錄，
          再搭配房屋網觀察目前市場供給與租售條件。
        </p>
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href="#living-area-comparison"
            className="rounded-md bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800"
          >
            查看生活圈比較 →
          </a>
          <a
            href="#verification-method"
            className="rounded-md border border-stone-300 bg-white px-4 py-2 text-stone-800 hover:border-emerald-500 hover:text-emerald-800"
          >
            查看查核方式 →
          </a>
        </div>
      </section>

      <section className="grid gap-5 py-8 lg:grid-cols-[1.1fr_0.9fr]" aria-labelledby="average-heading">
        <div>
          <h2 id="average-heading" className="text-2xl font-semibold text-stone-950">
            為什麼汐止房價不能只看平均值？
          </h2>
          <p className="mt-4 leading-8 text-stone-700">
            汐止不同生活圈差異很大，靠近汐止車站、汐科站、樟樹灣、社后、康寧街、
            大同路沿線等區域，在通勤便利性、採買、停車、屋齡與居住型態上都有差異，
            因此房價和租金不能只用單一平均值判斷。
          </p>
        </div>
        <aside className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
          <p className="font-semibold">查核提醒</p>
          <p className="mt-2">
            本頁不提供即時房價報價，也不保證任何平台價格正確。實際買房、租屋或出價前，
            請以內政部實價登錄、官方資料與各房屋平台最新資訊交叉查核。
          </p>
        </aside>
      </section>

      <section
        id="living-area-comparison"
        className="py-8"
        aria-labelledby="living-area-heading"
      >
        <div className="mb-5">
          <p className="text-sm font-semibold text-emerald-700">Living area</p>
          <h2 id="living-area-heading" className="text-2xl font-semibold text-stone-950">
            汐止主要生活圈比較表
          </h2>
        </div>
        <DataTable
          labelledBy="汐止主要生活圈比較"
          columns={["生活圈", "適合對象", "交通特色", "生活機能", "看房或租屋注意事項"]}
          rows={housingAreaRows}
          renderRow={(row) => (
            <tr key={row.area} className="align-top">
              <th scope="row" className="px-4 py-4 font-semibold text-stone-950">
                {row.area}
              </th>
              <td className="px-4 py-4 leading-7">{row.audience}</td>
              <td className="px-4 py-4 leading-7">{row.transport}</td>
              <td className="px-4 py-4 leading-7">{row.living}</td>
              <td className="px-4 py-4 leading-7">{row.note}</td>
            </tr>
          )}
        />
      </section>

      <section className="py-8" aria-labelledby="source-difference-heading">
        <div className="mb-5">
          <p className="text-sm font-semibold text-emerald-700">Market data</p>
          <h2 id="source-difference-heading" className="text-2xl font-semibold text-stone-950">
            實價登錄、房屋網開價與租屋平台差在哪？
          </h2>
        </div>
        <DataTable
          labelledBy="居住成本資料類型比較"
          columns={["類型", "代表意義", "優點", "注意事項"]}
          rows={marketSourceRows}
          renderRow={(row) => (
            <tr key={row.type} className="align-top">
              <th scope="row" className="px-4 py-4 font-semibold text-stone-950">
                {row.type}
              </th>
              <td className="px-4 py-4 leading-7">{row.meaning}</td>
              <td className="px-4 py-4 leading-7">{row.benefit}</td>
              <td className="px-4 py-4 leading-7">{row.caution}</td>
            </tr>
          )}
        />
      </section>

      <section
        id="verification-method"
        className="py-8"
        aria-labelledby="verification-heading"
      >
        <div className="mb-5">
          <p className="text-sm font-semibold text-emerald-700">Verification</p>
          <h2 id="verification-heading" className="text-2xl font-semibold text-stone-950">
            資料查核方式
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-5">
          {verificationSteps.map((step, index) => (
            <article
              key={step}
              className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase text-emerald-700">
                步驟 {index + 1}
              </p>
              <h3 className="mt-3 text-base font-semibold leading-7 text-stone-950">
                {step}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8" aria-labelledby="inquiry-heading">
        <div className="mb-5">
          <p className="text-sm font-semibold text-emerald-700">Inquiry links</p>
          <h2 id="inquiry-heading" className="text-2xl font-semibold text-stone-950">
            官方與常用查詢入口
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-stone-600">
            房屋平台資訊可能隨時變動，本站僅提供查詢入口，不自動同步、不保證平台內容完整或正確。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {housingInquirySources.map((source) => (
            <article
              key={source.url}
              className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-stone-950">{source.name}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                {source.description}
              </p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-800 underline"
              >
                開啟查詢入口
              </a>
            </article>
          ))}
        </div>
      </section>

      <FAQSection faqs={housingFaqs} title="汐止租屋與買房前常見問題" />

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
    </div>
  );
}
