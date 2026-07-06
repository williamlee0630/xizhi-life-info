export const siteMeta = {
  name: "汐止生活資訊網站",
  shortName: "汐止生活資訊",
  description:
    "整理汐止交通、美食、景點與生活機能的地方型內容網站，用於觀察小型靜態網站在搜尋與 AI 摘要中的可見性。",
  siteUrl: "https://xizhi-life-info.vercel.app",
  author: {
    name: "xizhi-life-info research project",
    type: "ResearchProject",
  },
  keywords: [
    "汐止生活資訊",
    "汐止交通",
    "汐止美食",
    "汐止景點",
    "汐止生活機能",
    "汐止適合居住嗎",
    "汐止到台北通勤",
    "地方資訊網站",
    "GEO 研究",
    "AEO 研究",
  ],
};

export const navigationItems = [
  { label: "首頁", href: "/" },
  { label: "汐止介紹", href: "/about-xizhi" },
  { label: "美食", href: "/food" },
  { label: "交通", href: "/transport" },
  { label: "景點", href: "/attractions" },
  { label: "生活機能", href: "/living" },
  { label: "FAQ", href: "/faq" },
];

export const siteRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about-xizhi", priority: "0.8", changefreq: "monthly" },
  { path: "/food", priority: "0.8", changefreq: "monthly" },
  { path: "/transport", priority: "0.8", changefreq: "monthly" },
  { path: "/attractions", priority: "0.7", changefreq: "monthly" },
  { path: "/living", priority: "0.8", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
];

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteMeta.siteUrl).toString();
}

export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function createFaqJsonLd(faqs, path) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url: getAbsoluteUrl(path),
  };
}

export function createArticleJsonLd({ title, description, path, section }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    articleSection: section,
    inLanguage: "zh-Hant-TW",
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    author: {
      "@type": siteMeta.author.type,
      name: siteMeta.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteMeta.name,
      url: siteMeta.siteUrl,
    },
    mainEntityOfPage: getAbsoluteUrl(path),
  };
}
