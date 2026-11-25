# AILabTW 網站（AI造物所）

一頁式網站。目標是累積 Email 名單和工具候補名單，不是接案窗口。純 HTML，不需要安裝任何東西。

## 檔案
- `index.html`：網站本體（版面、樣式、程式），平常不用動。
- `site.js`：**唯一需要編輯的檔案**。信箱、表單、社群連結、公開數據、每週實驗、其他作品都在這裡。
- `favicon.svg`、`favicon-180.png`、`og-image.png`：網站圖示和分享預覽圖。

## 網站區塊
1. 首頁：主標＋造物週報訂閱
2. 怎麼運作：四個內容支柱（每週實驗／製作拆解／許願池／產品進度）
3. 每週實驗：讀 `site.js` 的 `apps`，沒有試用連結的工具會顯示「加入候補」
4. 更多作品：讀 `site.js` 的 `projects`，目前是 3 張「即將公開」佔位卡，等你提供其他作品資料
5. 公開數據：MRR、付費用戶、名單人數（`site.metrics`，留 null 顯示「—」）
6. 許願池表單
7. 加入名單（可勾選想試用的工具）

## 上線前要確認
1. `site.social`：IG／Threads 網址先填了 `ailabtw`，帳號名稱不同的話改掉。
2. `site.formEndpoint`：到 https://formspree.io 免費建一個表單（用 ailabtw88@gmail.com 註冊），把 `https://formspree.io/f/xxxx` 貼上，訂閱、候補、許願就會直接寄到信箱。留空時，表單會讓訪客一鍵開郵件程式寄給你。名單超過幾百人後，可以改接 Buttondown 或 Kit 這類電子報服務。
3. `apps` 裡 3 個 `sample: true` 是範例，第一個真工具上線後刪掉。
4. `projects` 換成你的作品，刪掉 `placeholder: true`。

## 上線方式
放在 GitHub repo 後，用 GitHub Pages：repo 的 Settings → Pages → Source 選 `main` 分支、根目錄。之後改 `site.js` 推上去，網站就自動更新。
