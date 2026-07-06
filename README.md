# 汐止生活資訊網站

`xizhi-life-info` 是一個使用 Next.js App Router、JavaScript 與 Tailwind CSS 建立的地方型靜態內容網站。網站整理汐止交通、美食、景點與生活機能，提供居住評估、通勤安排、日常採買與假日活動的資訊參考。

## 技術架構

- Next.js App Router
- JavaScript
- Tailwind CSS
- `src/app` 多頁式內容架構
- 靜態資料檔與可重複使用元件
- 每頁包含 metadata、H1、摘要、H2、FAQ、內部連結與 JSON-LD

## 主要頁面

- `/`：首頁與汐止生活資訊總覽
- `/about-xizhi`：汐止位置、生活圈與居住特色
- `/food`：汐止美食與日常用餐整理
- `/transport`：汐止交通與通勤情境
- `/attractions`：汐止景點與散步地點
- `/living`：汐止生活機能與居住日常
- `/faq`：全站常見問題

## 維護紀錄

維護檔案放在 `research/`，用來記錄內容版本、爬取狀態與後續觀察結果。這些檔案不是網站前台頁面。

## 開發

```bash
npm run dev
```

開啟 `http://localhost:3000` 查看網站。

## 部署前檢查

目前 `src/data/siteMeta.js`、`public/robots.txt` 與 `public/sitemap.xml` 使用 `https://xizhi-life-info.vercel.app` 作為站台網址。正式部署到其他網域時，請同步更新這三處，確保 canonical、sitemap 與 robots 指向正確網址。
