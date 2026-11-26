/*
 * AILabTW（AI造物所）網站資料檔
 * ------------------------------------------------------------
 * 這是唯一需要編輯的檔案。改完存檔，網頁會自動更新。
 *
 * site      信箱、表單、社群連結、公開數據
 * apps      每週小 App 實驗（會自動排序、算出貨數、產生候補名單選單）
 * works     作品（首頁精選＋全部作品）
 */

window.AILAB = {
  site: {
    email: "ailabtw88@gmail.com",

    // 表單送出網址（電子報、候補名單、許願池共用，信件主旨會標明是哪一個）。
    // 建議用 Formspree（免費）：formspree.io 建表單後貼上 https://formspree.io/f/xxxxxxx
    // 留空時，表單會整理好訊息，讓訪客一鍵寄到上面的信箱。
    formEndpoint: "",

    // 社群連結。留空會顯示「即將開站」。請確認帳號名稱是否正確。
    social: {
      instagram: "https://www.instagram.com/ailabtw",
      threads: "https://www.threads.net/@ailabtw",
      youtube: ""
    },

    // 公開數據（Build in public）。數字留 null 會顯示「—」。
    // 每週更新一次就好，這也是「主力產品進度」那篇貼文的素材。
    metrics: {
      updated: "2026-11-25",
      subscribers: null,   // 名單人數
      paidUsers: null,     // 付費用戶
      mrr: null            // 月經常性收入（NT$）
    }
  },

  /*
   * 每週實驗
   *   id        英文代號，不可重複
   *   name      中文名稱      nameEn  英文名稱
   *   week      第幾週
   *   status    "shipped" 已上線 / "building" 製作中 / "idea" 構想
   *   tagline   一句話說明    problem 解決什麼痛點
   *   tags      標籤（陣列）
   *   offer     "free" 免費 / "subscribe" 訂閱 / "template" 模板
   *   price     價格說明，未定價留 ""
   *   demoUrl   試用連結（有的話主按鈕變「免費試用」，沒有就是「加入候補」）
   *   videoUrl  Demo 影片（Reels）連結
   *   sample    true = 範例，會顯示「範例」標記。上線第一個真作品後刪掉範例
   */
  apps: [
    {
      id: "noshow-calculator",
      name: "放鳥損失計算機",
      nameEn: "NoShow Calculator",
      week: 1,
      status: "building",
      tagline: "輸入每月預約數和放鳥率，算出一年白白損失多少錢。",
      problem: "預約制小店知道放鳥很煩，但不知道到底虧多少，也就不會處理。",
      tags: ["美業", "計算機"],
      offer: ["free"],
      price: "",
      demoUrl: "",
      videoUrl: "",
      sample: true
    },
    {
      id: "price-card",
      name: "價目表產生器",
      nameEn: "PriceCard",
      week: 2,
      status: "idea",
      tagline: "填好服務項目，產生一張可以直接貼在 IG 的價目表。",
      problem: "每次調價都要重新排版，Canva 弄半天，格式還不一致。",
      tags: ["美業", "設計"],
      offer: ["free", "template"],
      price: "",
      demoUrl: "",
      videoUrl: "",
      sample: true
    },
    {
      id: "rebook-ping",
      name: "回訪提醒",
      nameEn: "RebookPing",
      week: 3,
      status: "idea",
      tagline: "客人該回來補色、補睫毛時，自動傳訊息提醒。",
      problem: "老客人忘記回來，店家又不好意思一個個私訊。",
      tags: ["美業", "自動化"],
      offer: ["subscribe"],
      price: "",
      demoUrl: "",
      videoUrl: "",
      sample: true
    }
  ],

  /*
   * 作品（首頁「精選作品」與「全部作品」）
   *   slug      英文代號，不可重複（之後若做作品詳情頁，網址會是 /works/<slug>）
   *   name      中文名稱      nameEn  英文名稱
   *   featured  true = 放在首頁精選（建議 3 個，依陣列順序）
   *   kind      服務類別："workflow" 工作流程工具 / "learning" 教學與互動模擬 / "experience" 內容與體驗型 App
   *   tagline   一句話用途（卡片上顯示）
   *   url       開啟 App 的網址。留空 = 尚未公開，卡片顯示「即將公開」，按鈕改成「詢問這類工具」
   *   image     16:9 真實截圖（放 img/works/）。留空會顯示「畫面整理中」
   *   cta       開啟按鈕文字，預設「開啟 App」
   */
  works: [
    {
      slug: "starvoyager",
      name: "星航者",
      nameEn: "Starvoyager",
      featured: true,
      kind: "experience",
      tagline: "駕駛太空船探索 1:1 真實尺度的太陽系，從太空百科、宇宙故事到巡航觀賞，邊玩邊學。",
      url: "https://starvoyager.pages.dev",
      image: "img/works/starvoyager.jpg"
    },
    {
      slug: "endoscope-sim",
      name: "內視鏡模擬器",
      nameEn: "Endoscope Simulator",
      featured: true,
      kind: "learning",
      tagline: "為醫師、住院醫師與醫學生設計的網頁內視鏡練習工具，手機也能當操作部。",
      url: "https://endoscope-sim.pages.dev",
      image: "img/works/endoscope-sim.jpg"
    },
    {
      slug: "duty-scheduler",
      name: "醫師排班系統",
      nameEn: "Duty Scheduler",
      featured: true,
      kind: "workflow",
      tagline: "把值班規則與不可排日期整理成班表，讓使用者能檢查排班結果。",
      url: "",      // 待補：公開網址或操作示範影片
      image: ""     // 待補：用虛構人名的班表截圖（輸入限制＋產出結果）
    },
    {
      slug: "wealth-calculator",
      name: "財富自由計算機",
      nameEn: "Wealth Calculator",
      featured: false,
      kind: "workflow",
      tagline: "調整投入金額與報酬假設，觀察不同條件如何影響資產累積。",
      url: "",      // 待補
      image: ""     // 待補
    }
  ]
};
