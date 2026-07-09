export const housingAreaRows = [
  {
    area: "汐止車站周邊",
    audience: "適合通勤族、無車族、重視日常採買的人。",
    transport: "台鐵、公車與市區生活機能較集中。",
    living: "傳統商圈、日常採買、餐飲與公共服務較容易銜接。",
    note: "尖峰人流、車站周邊環境與物件屋齡需要評估。",
  },
  {
    area: "汐科站周邊",
    audience: "適合南港、內湖、汐科園區通勤族。",
    transport: "靠近汐科站與科技園區，通勤南港、內湖較方便。",
    living: "園區、住宅社區與通勤需求交疊，採買與用餐需依實際位置判斷。",
    note: "租金與房價可能受通勤需求影響，需比較總價與坪數。",
  },
  {
    area: "樟樹灣",
    audience: "適合家庭型居住、社區型生活需求。",
    transport: "多以公車、開車與轉乘為主。",
    living: "社區生活感較明顯，日常採買與學區需求常一起評估。",
    note: "距離車站、公車班距、停車條件與採買距離。",
  },
  {
    area: "社后／康寧街",
    audience: "適合家庭、小資族、日常生活導向族群。",
    transport: "生活機能完整，但要依實際位置評估交通。",
    living: "採買、餐飲與日常服務較多，居住條件會因街廓與屋齡不同而有差異。",
    note: "停車、尖峰車流與通勤時間。",
  },
  {
    area: "大同路沿線",
    audience: "適合開車族、通勤族與需要快速銜接主要道路的人。",
    transport: "道路連接性強，但尖峰可能塞車。",
    living: "沿線機能與道路便利性高，居住感受需看樓層、臨路條件與周邊服務。",
    note: "噪音、車流、停車與生活便利性需實地確認。",
  },
];

export const marketSourceRows = [
  {
    type: "內政部實價登錄",
    meaning: "代表已成交價格。",
    benefit: "官方資料、可信度高。",
    caution: "可能有時間落差，也要注意交易坪數、屋齡、車位與樓層條件。",
  },
  {
    type: "房屋網開價",
    meaning: "代表屋主或仲介目前刊登價格。",
    benefit: "即時性高、可觀察市場供給。",
    caution: "開價不等於成交價。",
  },
  {
    type: "租屋平台租金",
    meaning: "代表目前出租物件的租金條件。",
    benefit: "適合租屋族了解市場供給。",
    caution: "租金會受屋況、家具、管理費、交通與租期影響。",
  },
  {
    type: "新建案或預售屋資訊",
    meaning: "代表新屋或預售市場價格。",
    benefit: "能觀察區域開發。",
    caution: "需確認總價、車位、坪數算法、交屋時間與建商資訊。",
  },
];

export const verificationSteps = [
  "先用內政部實價登錄查近期成交價",
  "再用房屋網觀察目前開價與物件供給",
  "用租屋平台查看租金區間與物件條件",
  "搭配生活圈、通勤時間、停車與採買條件判斷",
  "實際看屋前確認管理費、公設比、屋齡、漏水、噪音與交通尖峰狀況",
];

export const housingInquirySources = [
  {
    name: "內政部實價登錄",
    schemaType: "GovernmentOrganization",
    url: "https://lvr.land.moi.gov.tw/",
    description: "查詢不動產實際成交價格，是評估房價時最重要的官方來源。",
  },
  {
    name: "內政部不動產成交案件實際資訊資料供應系統",
    schemaType: "GovernmentOrganization",
    url: "https://plvr.land.moi.gov.tw/",
    description: "提供買賣、租賃、預售屋等實價登錄資料下載與查詢。",
  },
  {
    name: "591 房屋交易網",
    schemaType: "Organization",
    url: "https://www.591.com.tw/",
    description: "可觀察目前汐止租屋、買屋與開價狀況，適合作為市場供給參考。",
  },
  {
    name: "樂屋網",
    schemaType: "Organization",
    url: "https://www.rakuya.com.tw/",
    description: "可查詢汐止買屋、租屋與社區物件資訊。",
  },
  {
    name: "永慶房屋",
    schemaType: "Organization",
    url: "https://www.yungching.com.tw/",
    description: "可查詢區域行情、待售物件與生活圈資訊。",
  },
  {
    name: "信義房屋",
    schemaType: "Organization",
    url: "https://www.sinyi.com.tw/",
    description: "可查詢區域物件與房市資訊。",
  },
];

export const housingFaqs = [
  {
    id: "accurate-price-check",
    question: "汐止房價要怎麼查比較準？",
    answer:
      "建議先看內政部實價登錄，確認近期已成交紀錄，再搭配房屋網開價與實際物件條件交叉比對。比較時要注意屋齡、坪數、樓層、車位、管理費與距離車站等條件。",
  },
  {
    id: "asking-price-vs-deal",
    question: "房屋網上的開價可以當作成交價嗎？",
    answer:
      "不建議。房屋網開價是賣方或仲介刊登價格，不一定等於實際成交價格。評估出價或預算時，仍應回到實價登錄與相近條件物件比較。",
  },
  {
    id: "renting-notes",
    question: "汐止租屋要注意什麼？",
    answer:
      "要注意距離車站、公車班距、管理費、家具、採買、停車、雨天通勤與尖峰交通。租金本身只是其中一項，實際生活成本還包含交通時間與日常便利性。",
  },
  {
    id: "xizhi-vs-xike",
    question: "汐止車站和汐科站生活圈差在哪？",
    answer:
      "汐止車站周邊生活機能與傳統商圈較明顯，汐科站則較靠近科技園區與南港、內湖通勤需求。兩者都需要依住處到車站距離、採買動線與交通尖峰狀況評估。",
  },
  {
    id: "price-or-transport-first",
    question: "想搬到汐止，應該先看房價還是交通？",
    answer:
      "建議一起看。若每日通勤時間太長，即使房價或租金較低，也可能增加時間成本、交通支出與生活壓力。",
  },
  {
    id: "budget-renting",
    question: "汐止適合小資族租屋嗎？",
    answer:
      "可以評估，但要依預算、工作地點、交通方式與租屋條件判斷，不能只看租金數字。建議把通勤時間、管理費、家具設備與生活圈便利性一起比較。",
  },
  {
    id: "buying-checklist",
    question: "汐止買房前要看哪些資料？",
    answer:
      "建議查看實價登錄、屋齡、坪數、車位、管理費、社區狀況、交通、生活機能、淹水或天氣影響與未來轉手性。實際看屋也要留意漏水、噪音、採光與尖峰交通。",
  },
];

export function createHousingSourceMentions(sources = housingInquirySources) {
  return sources.map((source) => ({
    "@type": source.schemaType,
    "@id": `${source.url}#organization`,
    name: source.name,
    url: source.url,
    description: source.description,
    sameAs: [source.url],
  }));
}
