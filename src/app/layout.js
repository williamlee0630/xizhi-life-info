import Script from "next/script";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { serializeJsonLd, siteMeta } from "../data/siteMeta";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: {
    default: siteMeta.name,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: siteMeta.author.name }],
  creator: siteMeta.author.name,
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteMeta.siteUrl,
    siteName: siteMeta.name,
    title: siteMeta.name,
    description: siteMeta.description,
  },
};

export default function RootLayout({ children }) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMeta.name,
    alternateName: siteMeta.shortName,
    url: siteMeta.siteUrl,
    description: siteMeta.description,
    inLanguage: "zh-Hant-TW",
    publisher: {
      "@type": "Organization",
      name: siteMeta.name,
    },
  };

  return (
    <html lang="zh-Hant-TW">
      <Script
        id="google-analytics-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-N4LN1KPP5E"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N4LN1KPP5E');
        `}
      </Script>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(websiteJsonLd),
          }}
        />
      </body>
    </html>
  );
}
