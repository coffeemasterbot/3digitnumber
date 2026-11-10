# 戶口三位數 website v1

最新五款遊戲升級及完整測試結果見 [GAME_UPGRADES.md](GAME_UPGRADES.md)。目前完整建置指令係 `node build.cjs`；以下 V7 修復紀錄保留作參考。

## Lost & Found 修復及自選預算防衛戰

完整檢查、問題分類、檔案說明、操作／評分同測試限制見 [QA_REPORT.md](QA_REPORT.md)。預算防衛戰喺主線第二幕以「自選練習」進入，可直接跳過；點數同阿俊嘅故事金額完全分開。

今次修改嘅靜態正式建置：`node build.cjs --preserve-arcade`（保留未修改嘅獨立遊戲已建置套件）。邏輯測試：`node --test tests/*.test.cjs`。啟動 `node preview.cjs` 後，執行 `node qa-journey.cjs`、`node qa-budget-defence.cjs`、`node qa-shell.cjs`。瀏覽器 QA 沿用本機已安裝嘅 Playwright／Edge 路徑。原有獨立遊戲測試：`node qa.cjs`，會自行啟動預覽，請先停止現有伺服器。

故事存檔升級至版本 6，保留原有儲存鍵並驗證遷移版本 5。損壞／未支援版本會保留原檔並提供備份、重設及暫時繼續遊玩。重設只清除故事；聲音偏好及獨立遊戲紀錄保留。

目前首頁採用遊戲優先入口：完整植物防守、真正3D跑酷、完整噴射飛行及冰火合作。遊戲完成後直接顯示成績、重玩與返回選單，不再強制故事、反思或問答。原有TRPG故事模式仍可獨立開啟。

## 詳細遊戲版本

- 植物防守：改編自 plantsvszombiesjs 的 MIT 版本，九種植物、五路九格草地、二十波敵人、資源收集、攻擊加成及本機排行榜。中文介面、明確開始、手動全螢幕及節奏配樂。
- 散紙追蹤：以 pantharev/SubwaySurfersRGB 的 MIT 3D框架改編。真正 Three.js 場景、列車與三類障礙、換線、跳躍、滑鏟、金幣路線、滑板、彈跳鞋與磁石、90秒限時及本機最佳。移除原專案登入與雲端功能，修正暫停、重玩、輸入及距離計分。
- 優惠氣流：以 GameHelix/jetpack_joyride 的 MIT 引擎改編，保留較詳細的霓虹城市、粒子、導彈類型、金幣圖案及護盾／磁石／加速道具。固定60Hz模擬、一命制、90秒限時、安全地面／天花、死亡序列、180BPM節奏與中文操作。
- 冰火合作：三關機關神殿，雙角色／同機雙人、晶石、電閘、移動台與合作開門；結果只顯示遊戲紀錄。

## 檔案及建置

`dist/` 已包含所有部署檔與套件，不依賴CDN，可用HTTP伺服器直接預覽。

`detailed-games/` 包含三款授權改編的可編輯程式、上游README及pnpm鎖定檔。`source/` 保留原有TRPG基底。`arcade-experience.js` 管理舊主線／合作遊戲的純成績流程。

修改後：在 detailed-games 執行 `pnpm install --frozen-lockfile`，回到根目錄執行 `node build.cjs`。執行 `node preview.cjs` 開啟其 Local 網址。3D跑酷需要瀏覽器支援WebGL。

## GitHub Pages 遊玩版

`.github/workflows/pages.yml` 會建置並部署 `dist-pages/` 靜態版本。先執行 `node build.cjs`，再執行 `node build-pages.cjs` 可在本機產生相同輸出。Pages 版保留故事、遊戲和離線下載；跑酷／飛行最佳分數只保存在本機，並移除排行榜 API 呼叫。GitHub Pages 不會執行本專案的 D1 Worker。原有網站的 Worker、共用排行榜及離線包仍由 `node build.cjs` 建置，Pages 版不會覆蓋 `dist/client/` 或 Worker 輸出。

GitHub Actions 工作流程需放入已連接的 GitHub repository，並在 repository 設定中啟用 GitHub Actions 作為 Pages 部署來源。此工作區目前沒有 Git remote；工作流程已準備，但尚未推送或部署。

`qa-detailed.cjs` 測試入口、操作、暫停、部署與結果；`qa-detailed-mobile.cjs` 測試手機直橫屏並更新遊戲預覽圖；`qa-detailed-outcomes.cjs` 測試碰撞、死亡、重玩及暫停。QA使用Playwright及Microsoft Edge。

## 來源及私隱

來源、修改範圍及MIT授權列於 THIRD_PARTY_NOTICES.md。遊戲發佈檔另附150份套件授權聲明於 dist/games/licenses/。這些為獲授權的開源改編版本；原商業遊戲的程式與素材未包含在內。

所有分數、最佳紀錄與原有故事進度只存在本機；沒有登入、Supabase、遠端排行榜或問卷收集。網站受原本的Sites存取設定控制。

日期核對：聖雅各福群會官方[個人理財大使計劃日程](https://www.sjscareersparkle.org/個人理財大使計劃2627)列出2026年11月9至13日為理財教育計劃諮詢環節。此資料未能核實11月16日的活動。舊內部筆記所列11月9日及12日講座時間／地點，與網站原有日期互相矛盾；確認前不要當作已核實活動資料使用。

## 2026-11-05 五款遊戲升級

見 [GAME_UPGRADES.md](GAME_UPGRADES.md)：街頭 3D 跑酷、植物圖像／壞習慣敵人／陽光、三關森林地圖／固定開閘、暖色飛行／三款變身，以及首頁可直接進入嘅 3D 機械人拆彈。FPS 預設路徑係 `/games/budget-defence/`；原本無障礙不限時練習保留喺 `/games/budget-defence/range.html`。

今次已安裝現有鎖定依賴，正式建置用 `node build.cjs`（完整重新打包）。邏輯測試：`node --test tests/*.test.cjs tests/*.test.mjs`。新瀏覽器測試：啟動 `node preview.cjs` 後執行 `node qa-upgrades.cjs`、`node qa-train-mobile.cjs`；主線、存檔及退出測試仍保留。原有 `node qa.cjs` 會自行啟動預覽，先停止現有伺服器。

Current game mechanics, controls, issue classification and verification: [GAME_REFINEMENTS_V9.md](GAME_REFINEMENTS_V9.md). Start `node preview.cjs` before browser QA.

Latest agreed feedback, controls, shared leaderboard architecture and QA: [GAME_FEEDBACK_V10.md](GAME_FEEDBACK_V10.md). Build with `node build.cjs`; preview with `node preview.cjs`. Generate future database migrations with `pnpm db:generate`; never edit an applied migration.
