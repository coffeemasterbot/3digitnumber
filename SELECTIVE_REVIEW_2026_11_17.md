# 貼文建議核實與重點修改（2026-11-17）

以當前專案 HEAD `2ddcde2`、實際程式及官方網頁核對。貼文視作待驗證建議，沒有直接貼入其程式碼。

| 建議或聲稱 | 核對結果 | 本次決定 |
|---|---|---|
| NGPF 將遊戲連到理財主題及反思 | 官方 Arcade 有主題說明及 Reflection Worksheet；不能由此推論本站已提高理財能力 | 採用教學方向：五款卡片各有學習重點、可展開反思題及試算入口，保留直接開局 |
| 五遊戲必須逐一對應提案「五大先兆」 | 本次未取得該提案頁面；遊戲行為亦不完全等於文中描述 | 不聲稱提案原有一對一對應；使用目前玩法能支持的教育比喻，不加入固定 30%+ 年利率或診斷玩家 |
| 全部數據純 localStorage | 主線、行動卡及街機檔案屬本機；Site 版另有跑酷／飛行排行榜服務，Pages／離線版停用 | 不新增上傳、追蹤或問卷；分數不當成學習成效證據 |
| 沒有七日行動／求助資料 | `source/story-base.html` 已有七日記錄、文字行動卡、債務輔導資料 | 不製作另一套打卡存檔或 IG 圖片功能；首頁增加可直接找到的工具與支援入口 |
| 投委會工具及輔導連結 | 已開啟官方現行工具頁、個人收支、貸款及債務計算機、債務輔導目錄 | 新增三個已核實入口；註明需要網絡。未照抄未核實電話或聲稱服務隨時可用 |
| 開發面板對所有人可見 | `landing-build.cjs` 原本無 hidden，`dist/app.js` 原本直接初始化 | 預設隱藏，只有 URL 的確切 `?dev=1` 值啟用；保留現有隔離測試局。這是介面開關，不是身份驗證 |
| 離線檔只有 7.4 MB | 原文及原下載標籤已過時 | 按最後檔案 bytes 自動顯示十進制 MB；最終本次約 26.0 MB。加入先儲存、再用瀏覽器開啟的指示 |
| 冰火人只有三關 | 當前規則有九個神殿關卡 ID | 修正卡片為三座神殿、九關；不代表本次自然通關驗收了九關 |
| 得獎因果、34%／180 份提升、12/14／1/16 期限、11/18／11/19 活動、第二期問卷、抽獎 | 貼文未附足以核對的統計、官方日程、正式表單或已批准活動資料 | 不加入網站，不承諾獎項。未有實際配對回應及分析，不能聲稱知識或行為已改善 |

## 官方核對來源

- NGPF Arcade：<https://www.ngpf.org/arcade/>
- 投委會工具目錄：<https://www.ifec.org.hk/web/common/static/tools/tc/index.html>
- 個人收支計算機：<https://www.ifec.org.hk/web/common/static/tools/tc/budget/index.html>
- 貸款及債務計算機：<https://www.ifec.org.hk/web/common/static/tools/tc/debt/index.html>
- 債務輔導目錄：<https://www.ifec.org.hk/web/tc/moneyessentials/debts-and-borrowing/manage-exist-debt/counselling.page>

## 修改位置

- `source/game-catalogue.cjs`：教學重點、反思題、正確九關說明；沿用原遊戲 key、名稱、玩法及圖片。
- `landing-build.cjs`、`landing.css`：呈現可操作反思欄、資源卡、footer 入口、預設隱藏開發模式。覆寫既有 `pointer-events:none`，讓反思欄可點擊。
- `source/support-resources.html`：官方工具及債務支援入口。
- `dist/app.js`：本專案既有主頁腳本來源；確切 query 判斷，保留測試隔離。用實際 URL 以免離線轉換重寫掉 query。
- `source/presentation-section.html`、`build-offline.cjs`：檔案開啟指示及自動大小。
- `qa-dev-sessions.cjs`：現有測試入口改用 `?dev=1`；本次未跑其完整遊戲測試。
- `tests/offline-export.test.cjs`：下載標籤與實際離線檔大小的回歸檢查。
- `dist/` 與 `dist/client/`：重新產生發布檔案；`dist-pages/` 是未追蹤的本機 Pages 輸出。

## 實際檢查與限制

- 完整 detailed-game bundling、離線打包、server 複製、Pages 打包完成。server 複製第一次遇到 Windows 檔案映射鎖，重試該步後成功。快速 `--preserve-arcade` 流程會重複注入既有資源，本次使用完整重建消除重複；沒有擴大修改該既有選項。
- `node --test tests/offline-export.test.cjs tests/presentation-dates.test.cjs tests/pages-build.test.cjs`：8/8 通過。
- Edge 隔離 profile：五張卡的重點、展開反思及試算錨點；普通網址隱藏 dev；`?notdev=1`／`?dev=10` 不誤開；`?dev=1` 可開隔離 Garden 測試局；390px 無水平頁面溢出；自含離線檔啟動及 dev query 通過。無 pageerror。
- 截圖與 JSON：目前 Sol 視覺輸出資料夾的 `selective-review-*`。沒有讀取或清除使用者瀏覽器存檔。
- 未重跑五款完整戰役、實體手機、原片音樂試聽或多人連線；本次沒有更改遊戲數值及主線財務規則。
- 本次沒有 commit、push、GitHub Pages 或 Sites 部署。
