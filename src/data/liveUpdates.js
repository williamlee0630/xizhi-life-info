export const authoritySources = [
  {
    id: "xizhi-office",
    name: "新北市汐止區公所",
    shortName: "汐止區公所",
    category: "在地官方公告",
    url: "https://www.xizhi.ntpc.gov.tw/",
    description: "汐止區最新消息、公告、徵才、防災與便民服務。",
    weightNote: "區域最直接的官方公告來源",
    fetchMode: "homepage-news",
  },
  {
    id: "ntpc",
    name: "新北市政府",
    shortName: "新北市府",
    category: "市政官方資訊",
    url: "https://www.ntpc.gov.tw/",
    description: "新北市政新聞、政策公告、活動與民生服務。",
    weightNote: "新北市政府官方主站",
    fetchMode: "source-link",
  },
  {
    id: "cwa",
    name: "交通部中央氣象署",
    shortName: "中央氣象署",
    category: "天氣與災防",
    url: "https://www.cwa.gov.tw/",
    description: "即時天氣、豪雨特報、颱風、地震與災害性天氣資訊。",
    weightNote: "台灣官方氣象與地震資訊來源",
    fetchMode: "source-link",
  },
  {
    id: "tra",
    name: "國營臺灣鐵路股份有限公司",
    shortName: "臺鐵",
    category: "交通運輸",
    url: "https://www.railway.gov.tw/",
    description: "汐止、汐科等車站時刻、營運與運輸公告。",
    weightNote: "台鐵官方營運資訊",
    fetchMode: "source-link",
  },
  {
    id: "ntpc-bus",
    name: "新北市公車動態資訊系統",
    shortName: "新北公車",
    category: "公車動態",
    url: "https://e-bus.ntpc.gov.tw/",
    description: "新北市公車到站動態、路線查詢與交通服務。",
    weightNote: "新北市官方公車動態服務",
    fetchMode: "source-link",
  },
  {
    id: "youbike",
    name: "YouBike 微笑單車",
    shortName: "YouBike",
    category: "公共自行車",
    url: "https://www.youbike.com.tw/region/ntpc/",
    description: "新北市 YouBike 站點、車輛與服務公告。",
    weightNote: "公共自行車官方服務網站",
    fetchMode: "source-link",
  },
];

export const fallbackLiveItems = [
  {
    id: "xizhi-office-news",
    category: "區政",
    title: "汐止區公所最新消息與公告",
    summary: "包含區政公告、徵才、防詐提醒、防災與便民服務。",
    source: "新北市汐止區公所",
    sourceId: "xizhi-office",
    url: "https://www.xizhi.ntpc.gov.tw/",
    publishedAt: null,
    freshness: "即時查核",
  },
  {
    id: "ntpc-city-news",
    category: "市政",
    title: "新北市政府市政新聞與活動",
    summary: "追蹤新北市政、活動、民生服務與重要政策公告。",
    source: "新北市政府",
    sourceId: "ntpc",
    url: "https://www.ntpc.gov.tw/",
    publishedAt: null,
    freshness: "官方來源",
  },
  {
    id: "cwa-weather-alerts",
    category: "天氣",
    title: "中央氣象署天氣與災害性天氣資訊",
    summary: "查看汐止通勤、戶外活動前需要確認的天氣、豪雨與颱風資訊。",
    source: "交通部中央氣象署",
    sourceId: "cwa",
    url: "https://www.cwa.gov.tw/",
    publishedAt: null,
    freshness: "即時查核",
  },
  {
    id: "tra-service",
    category: "交通",
    title: "臺鐵汐止、汐科車站時刻與營運公告",
    summary: "通勤前可確認列車時刻、營運異動與官方公告。",
    source: "國營臺灣鐵路股份有限公司",
    sourceId: "tra",
    url: "https://www.railway.gov.tw/",
    publishedAt: null,
    freshness: "官方來源",
  },
  {
    id: "ntpc-bus-status",
    category: "公車",
    title: "新北市公車到站與路線動態",
    summary: "查詢汐止周邊公車路線、即時到站與交通服務。",
    source: "新北市公車動態資訊系統",
    sourceId: "ntpc-bus",
    url: "https://e-bus.ntpc.gov.tw/",
    publishedAt: null,
    freshness: "即時查核",
  },
  {
    id: "youbike-ntpc-status",
    category: "YouBike",
    title: "新北 YouBike 站點與服務資訊",
    summary: "確認汐止周邊公共自行車站點、租借與還車服務。",
    source: "YouBike 微笑單車",
    sourceId: "youbike",
    url: "https://www.youbike.com.tw/region/ntpc/",
    publishedAt: null,
    freshness: "官方來源",
  },
];

export function formatTaipeiTime(value = new Date()) {
  return new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function buildTickerText(items, checkedAt) {
  const sourceText = items
    .slice(0, 8)
    .map((item) => `${item.source} | ${item.title}`)
    .join(" || ");

  return `${sourceText} || 更新時間：${formatTaipeiTime(checkedAt)}`;
}
