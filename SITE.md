# AILabTW 網站（AI造物所）

一頁式品牌官網：「看得到作品、試得到產品、找得到人討論需求」。純 HTML，不需要安裝任何東西。

## 檔案
- `index.html`：網站本體（版面、樣式、程式），平常不用動。
- `site.js`：**唯一需要編輯的檔案**。信箱、表單、社群連結、作品、每週實驗、公開數據都在這裡。
- `img/works/`：作品的真實截圖（16:9，1280×720 左右的 JPG）。`starvoyager-phone.jpg` 是首屏手機畫面。
- `favicon.svg`、`favicon-180.png`、`og-image.png`：網站圖示和分享預覽圖。

## 首頁區塊（由上到下）
1. 首屏：主標「把你的想法，做成 App。」＋「聊聊你的想法」＋星航者手機實際畫面
2. 精選作品（`#works`）：讀 `site.js` 的 `works`，`featured: true` 的放首頁，其餘按「查看全部作品」展開
3. 服務內容（`#services`）：三種 App 類型，各自連到 `works` 裡同 `kind` 的案例
4. 合作流程（`#process`）：四個步驟與每步交付物
5. 每週小實驗（`#lab`）：讀 `apps`，加上造物週報／候補名單與許願池
6. 公開數據（`#numbers`）：`site.metrics` 有任何數字才會出現
7. 關於工作室（`#about`）
8. 專案洽詢（`#contact`）：表單＋隱私權說明（`#privacy`）
9. 墨黑收尾區塊與頁尾

從作品卡按「我也想做這類工具」會自動把作品名稱帶進洽詢表單的「參考作品」。

## 新增或更新作品
在 `works` 加一筆：`slug`（英文）、`name`、`nameEn`、`kind`、`tagline`、`url`、`image`、`featured`。
- `url` 留空：卡片顯示「即將公開」，按鈕改成「詢問這類工具」。
- `image` 留空：顯示「畫面整理中」。截圖請用真實畫面；有個資的請改成虛構資料。

## 上線前要確認
1. `site.formEndpoint`：到 https://formspree.io 免費建一個表單（用 ailabtw88@gmail.com 註冊），把 `https://formspree.io/f/xxxx` 貼上，洽詢、訂閱、候補、許願就會直接寄到信箱（洽詢信可以直接按回覆）。留空時，表單會整理好訊息，讓訪客一鍵開郵件程式寄給你。
2. 醫師排班系統、財富自由計算機：補上 `url` 和截圖。
3. `site.social`：確認 IG／Threads 帳號名稱。
4. `apps` 裡 3 個 `sample: true` 是範例，第一個真工具上線後刪掉。

## 上線方式
GitHub Pages（`main` 分支、根目錄），推上去就自動更新。
