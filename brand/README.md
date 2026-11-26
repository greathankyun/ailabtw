# AILabTW 宣傳素材包（AI造物所）

品牌色：墨黑 `#171512`、橘 `#FE5300`、米白 `#FCF1E2`
字型：Noto Sans TC（中文標題 900 粗）、Archivo（英文數字）、JetBrains Mono（標籤）
Logo 是 Hank 設計的版本，已經轉成乾淨的向量檔，形狀沒有改動。

## 直接可用的圖（png/）

| 資料夾 | 內容 | 尺寸 |
|---|---|---|
| `logo/` | 大頭貼 `avatar-cream-1080.png`（推薦）、`avatar-ink-1080.png`；favicon 32/180/512；橫式 logo（透明底，深淺兩版）；標誌 | 各尺寸 |
| `launch/` | 開張輪播 5 張，第一篇貼文用 | 1080×1350 |
| `pillar-1-weekly-app/` | 每週實驗：封面、痛點→解法、試用 CTA | 1080×1350 |
| `pillar-2-build-breakdown/` | 製作拆解：花多久、時間線、學到的事（深色） | 1080×1350 |
| `pillar-3-wish-pool/` | 許願池：提問、投票結果、怎麼許願（橘色） | 1080×1350 |
| `pillar-4-progress/` | 公開數據：MRR、本週數字、做對做錯、下週目標 | 1080×1350 |
| `stories/` | 每個內容支柱一張限動＋開張限動 | 1080×1920 |
| `project-showcase/` | 介紹你其他作品用的輪播 2 張＋限動 1 張（目前是待補佔位） | 兩種 |
| `web/og-image.png` | 網站分享預覽圖 | 1200×630 |
| `project-starvoyager/` | 星航者作品介紹：輪播 3 張（AI造物所風格）＋限動 1 張，可直接發 | 兩種 |

模板裡的文字（放鳥損失計算機、6 小時、128 人等）都是**範例**，發文前要換成真的內容和數字。數據那張有「＊範例數字」的註記，換完記得刪掉。

## 可編輯的原始檔

- `logo/*.svg`：向量 logo，可放大到任何尺寸，Figma／Illustrator 都能開。
- `templates/*.html`：每個 HTML 就是一組貼文。用瀏覽器打開，點文字就能直接改；或用文字編輯器改。
- 改完要輸出 PNG：在 `templates/` 執行 `node render.js`（需要 Node.js 和 `npm i playwright`）。或直接把改好的內容丟給 Claude 幫你輸出，這也是之後半自動化的做法：AI 寫好文案、套模板、輸出圖片，你只負責看過再發。

限動模板上方 250px、下方 340px 是 IG 介面會蓋住的區域，文字都放在安全範圍內。虛線框是放截圖或貼紙（連結、問題、投票）的位置。

## 介紹欄和開張文案

見 `bios-and-launch-copy.md`。

## 星航者素材（projects/starvoyager/）

星航者自己的太空風格行銷素材，可在 AI造物所的貼文、作品頁直接引用：
- `ig-carousel/`（1080×1350，7 張）、`ig-square/`（1080×1080，3 張）、`stories/`（1080×1920，3 張）
- `web/`：OG 分享圖、首頁主視覺、橫幅、AILab 作品卡（16:9）與方形縮圖
- `screenshots/`：遊戲內實際畫面（地球、土星、木星、火星、銀河中心黑洞、操作畫面）
- `zeus-cutout.png`：太空船宙斯 Zeus 去背圖
- `copy.md`：IG／Threads 發文文案、hashtag、發文節奏
