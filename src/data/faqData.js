export const globalFaqs = [
  {
    id: "is-xizhi-good-for-living",
    question: "汐止適合居住嗎？",
    answer:
      "汐止適合重視台北通勤、生活機能與相對安靜居住環境的人。不同區域的交通、停車與採買便利性差異明顯，建議依工作地點與日常路線評估。",
  },
  {
    id: "xizhi-to-taipei",
    question: "汐止到台北通勤方便嗎？",
    answer:
      "汐止可利用汐止車站、汐科站、公車與開車通往台北、南港、內湖。通勤便利度高低會受尖峰時間、目的地與是否靠近車站影響。",
  },
  {
    id: "food-types",
    question: "汐止有哪些美食類型？",
    answer:
      "汐止常見美食包含早餐店、便當、小吃、麵飯類、家庭聚餐餐廳與宵夜。整體更偏日常生活型選擇，適合通勤族、學生與家庭使用。",
  },
  {
    id: "family-living",
    question: "汐止適合家庭居住嗎？",
    answer:
      "汐止有超市、市場、賣場、診所、藥局與公園河濱等日常資源，對家庭生活有一定支撐。實際是否合適仍取決於學區、交通與停車需求。",
  },
  {
    id: "walking-places",
    question: "汐止有哪些適合散步的地方？",
    answer:
      "汐止河濱、大尖山周邊步道、部分社區公園與老街周邊都適合短時間散步。若是假日活動，可搭配美食與交通動線安排。",
  },
  {
    id: "living-functions",
    question: "汐止生活機能好嗎？",
    answer:
      "汐止主要生活圈的採買、餐飲、醫療與交通資源完整，但不同里別與社區距離車站、市場或賣場遠近不同，生活便利度會有差異。",
  },
  {
    id: "xizhi-nangang-neihu",
    question: "汐止跟南港、內湖的關係是什麼？",
    answer:
      "汐止位於新北東側，與台北南港、內湖在通勤、就業與生活圈上連動密切。許多人會以南港、內湖工作，汐止居住作為生活安排。",
  },
];

export const pageFaqs = {
  home: [
    globalFaqs[0],
    globalFaqs[1],
    globalFaqs[5],
  ],
  about: [
    globalFaqs[0],
    globalFaqs[6],
    {
      id: "who-fits-xizhi",
      question: "哪些族群比較適合住在汐止？",
      answer:
        "需要往南港、內湖、台北市通勤的人，或重視日常採買、河濱活動與住宅選擇彈性的人，通常較容易把汐止納入居住考量。",
    },
  ],
  food: [
    globalFaqs[2],
    {
      id: "xizhi-food-for-commuters",
      question: "汐止有適合通勤族的用餐選擇嗎？",
      answer:
        "汐止車站、汐科站周邊與主要道路沿線有早餐、便當、麵飯與外帶型店家，較符合通勤前後快速用餐的需求。",
    },
    {
      id: "food-not-sponsored",
      question: "本站會推薦特定汐止店家嗎？",
      answer:
        "本站以地方生活資訊整理為主，不做商業業配式排名。內容重點放在常見類型、使用情境與區域觀察。",
    },
  ],
  transport: [
    globalFaqs[1],
    {
      id: "xike-or-xizhi-station",
      question: "汐止車站和汐科站有什麼差異？",
      answer:
        "汐止車站較接近傳統市區生活圈，汐科站則鄰近汐止科學園區與部分新興住宅區。選擇哪一站通勤要看住處與目的地。",
    },
    {
      id: "peak-traffic",
      question: "汐止尖峰時間交通容易塞嗎？",
      answer:
        "尖峰時段往南港、內湖、台北方向可能遇到車流集中，開車與公車時間較不穩定。台鐵通常較能避開道路壅塞。",
    },
  ],
  attractions: [
    globalFaqs[4],
    {
      id: "short-trip",
      question: "汐止適合安排半日散步嗎？",
      answer:
        "適合。河濱、老街周邊與自然步道可以組成半日路線，若不想遠行，可搭配在地餐飲與採買形成輕量行程。",
    },
    {
      id: "nature-walks",
      question: "汐止有自然型景點嗎？",
      answer:
        "汐止周邊有大尖山與多條自然步道，也有河濱空間。活動強度從散步到登山都有，行前仍應確認天氣與路況。",
    },
  ],
  living: [
    globalFaqs[5],
    globalFaqs[3],
    {
      id: "parking-life",
      question: "汐止日常停車方便嗎？",
      answer:
        "停車便利度依區域差異很大。車站、市區與主要商圈較容易滿位，住宅區則需看社區車位、路邊停車與通勤動線。",
    },
  ],
};
