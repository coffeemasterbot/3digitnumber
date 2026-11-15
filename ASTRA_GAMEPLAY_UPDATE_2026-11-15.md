# 五遊戲新一輪執行指令：玩法＋UI＋兩人網上合作

日期：2026-11-15（香港）。Sol 規劃／審核；Astra light Worker 實作玩法、狀態及連線；Refresh minigame website UI 負責指定 UI／動畫。

## 已確認的用戶決定

- FPS：**按住左鍵拖動才轉向、放開停止**；取消自動追蹤及方向鍵轉視角。右鍵射擊保留。
- 多人先做 **兩人 CO-OP 合作打機械人／拆彈**，朋友各用自己的電腦，以網上房間碼加入；不是 PvP，不是同機雙人或兩個假玩家。
- 加入全遊戲開發者跳關工具；Jetpack 補重力忍者／瞬移落點與機甲鑽車；Garden 改戰前選卡及朝向；Runner 新增空中飛行、單次彈射及拾取音效；Forest 繼續已批准合作關卡重製。
- 最新第三輪原創美術保留。原有繁中故事、主線金額、存檔、離線版保留。

## 0. 先核對狀態與分工，避免互相覆蓋

本次核對 HEAD `5538fab`，第三輪美術仍有大量未提交改動，包含新 `courtyard-art.mjs`、`source/game-previews/` 及 Garden 地形測試。這不是乾淨工作目錄；不得 reset、stash、覆蓋或把別人的未提交變更當成自己成果。實作前記錄當下 diff／檔案 hash。

先讀 `SOL_UI_ROUND3_ACCEPTANCE_2026-11-13.md`、`ASTRA_V2_APPROVED_EXECUTION_PLAN.md` 及本文件。這輪用戶已授權玩法修改，原 UI-only 限制不再涵蓋 Astra 的玩法任務，但仍按以下檔案所有權合作。

| 所有者 | 可獨立處理 | 需先約定的介面 |
|---|---|---|
| Astra | dev adapter、Jet engine/types、Runner engine/pickups/audio、FPS control/rules/network、Forest data/physics、Garden loadout state | 對外提供 seedPicker callbacks、teleportPreview、gravity/vehicleAnimationState、runner flight/pogo state |
| UI worker | Garden 獨立 seed-picker view/CSS、cone sprite；Jet renderer 動畫；Runner 飛行／彈射造型；Forest 視覺適配 | 不在 renderer 自行抽籤落點、扣費、改碰撞；Astra 提供真實狀態後再接 |

UI worker 不直接改 Astra 正在編輯的 useGameEngine／Game／FPS input；Astra 不覆蓋 renderer 的新美術。可新增獨立純狀態模組及 view 模組。共同檔案改動先發出介面／所有權通知。Astra 負責最終整合 build／離線／Pages 產物，UI worker 不與其同時重建 dist。

## 1. 開發者跳關模式：五款真正可測，與正常紀錄隔離

**Astra**：在大廳玩家工具旁加入可展開「開發者測試模式」，每款遊戲也能從暫停工具進入。

- 明顯顯示「測試局，不記正常成績／通關」；可啟用／關閉、選關、重啟指定位置、跳到下一段。
- 不需要假設前端 dev toggle 是安全權限；本機功能不是管理伺服器的後門。
- 建立共用 adapter，例如 `listDevTargets(game)`、`startDevSession(target)`、`skipDevSection()`、`endDevSession()`。使用 stable IDs 和版本化訊息；parent／iframe 驗證 source、origin 與 action schema。
- 正式存檔不解鎖、不寫入成就／最高分／正常局數、不提交排行榜；主故事完全不變。結果帶 `isTest/runId`，在**所有**寫入點攔截，不能只在結果 UI 寫一句測試模式。
- 開關偏好可 session 保存，測試進度使用獨立 namespace；退出／刷新／再開必須有明確狀態，不能讓測試結果混進真實紀錄。

| 遊戲 | 真正可跳的內容 |
|---|---|
| Garden | 實際已實作 1–15 關、1–5 波；必要植物可在測試局暫時使用，不改正常解鎖 |
| Forest | 已實作關卡 ID／checkpoint；隨九關完成提供全部入口，未建成的關卡不冒充可玩 |
| FPS | 單人地圖／回合／現有拆彈練習節點；網上正式合作房間不允許客戶端跳關命令 |
| Jetpack | 載具試駕、已實作任務／危險段；無盡模式是距離／測試段，不虛構關卡 |
| Runner | 已實作任務／路段／道具測試段；無盡提供距離或路段跳轉，不直接寫高分 |

切換時正常 teardown 舊跑局，使用同一開始流程；不要直接改時間／distance 而留下舊障礙、道具倒數、音訊或敵人。

驗收：五款各跳一次、連按、退出再開、刷新；比較所有正常存檔及故事 KEY 原字串不變，沒有正常獎勵／API submission；跳轉後只有一個 loop。

## 2. Jetpack：重力忍者與可見、可信的瞬移落點

現況：`useGameEngine.ts` 約 305–317 行已有 gravity 切換及 blink 三高度安全篩選；`renderer.ts` 主要只有靜態形體。不是從零新增載具。

**Astra**：

- 抽出純 `getTeleportPreview(sim)`／`resolveTeleport(sim,targetId)` 或同等邏輯，使用和實際碰撞一致的障礙資料、角色 footprint、邊界及 active state。
- `teleportPreview` 由權威 engine 提供：可用落點、當前選中下一落點、安全與否。預覽和點按結果共用同一演算法；不可 UI 畫 A 而 engine 隨機去 B。
- 暫停時 preview 凍結；危險移入後更新。完全沒有安全落點時清楚提示，禁止傳到障礙內，不默默換一個未顯示的位置。
- 保留現有操作先做 MVP：點按瞬移至**已高亮的下一落點**，觸控同樣可用；不強迫新增選點介面。
- 暴露重力方向、切換進度、觸地／貼頂、鑽車輪轉／跳躍、機甲推進／到期狀態；全用 simulation time，尊重 pause／reduced motion。

**UI worker**：

- 重力忍者有可辨認人物／裝備、翻身、上下方向提示、貼地／貼頂與短殘影；不要只把原人物加一個橢圓。
- 瞬移落點以半透明人物輪廓／投影加連線或方向提示顯示。下一個落點最清楚，其他可選位置較淡，危險位置禁用外觀不同；減少動態仍可辨認。
- 加入消失／出現的短動畫；圖像不額外觸發瞬移。
- 鑽車有旋轉鑽頭、履帶／輪組、落地／起跳；機甲有人物座艙、關節、推進／彈出。保留財務原創名稱與辨識度，不抄原版素材。

驗收：六載具回歸；預覽與實際落點逐一一致、移動危險／無安全點、pause、resize、重試、到期、磁鐵／護盾共存。動畫片段須展示翻轉及實際瞬移，不只截靜態圖。

## 3. Garden：真正戰前選卡畫面與正確朝向

用戶 JPG 是構圖／互動參考，不是將全部原版植物加入遊戲的授權需求。

**Astra**：沿用 `garden-loadout.js` 的已解鎖／最多八張／推薦／必要反制邏輯，抽出可測 state：`selectSeed`、`removeSeed`、`recommendDeck`、`validateDeck`、`confirmDeck`。戰前確認才開始波次，不讓敵人／生產／冷卻在選卡時流逝。

**UI worker**：

- 頂部八格出戰列；左側圖鑑式卡庫；右側本關真實敵人預覽；底部「推薦配置」「開始防守」。選卡加入頂部，點出戰卡可移除。
- 已選、鎖定、未選、滿額有清楚區別；鎖定卡說明解鎖條件。水上／屋頂必要反制與提示沿用規則，不能給不存在的植物／能力。
- 使用我們的植物、敵人、名稱、價格與原創框架；不搬原版 logo／截圖作互動介面。
- 主要植物向右射擊，進攻敵人向左；若畫面有反向樣本，逐一修 sprite local transform。不要翻整個卡片／戰場，導致文字、血條或按鍵反轉。
- Cone 帽底貼合頭頂、尺寸與傾斜跟隨頭部；走動時不要像懸浮／刺穿臉；大圖與實際戰場尺寸都要檢查。
- 橫向 932×390、桌面與觸控可操作；卡庫可捲，頂部選卡與開始掣保持可見，避免再次遮住 HUD。

驗收：最多八張、移除、連按不重複、鎖定、推薦、刷新／重開、選卡不計時；預覽為本關實際敵人 pool，不是所有種類固定陳列。

## 4. Runner：空中 Jetpack、單次 Power Jumper、拾取音效

現況：`extras.ts`／`POWER_DURATION` 只有 board/shoes/magnet/double，`Game.tsx` 收集處只有 addCoin/removeCoin。本輪增加兩項，不把已存在的彈跳鞋換名交差。

**Astra**：

- 新 `jetpack` 飛行道具：起飛→短暫空中巡航→預警→安全降落。建議初版約 8 秒，可配置；HUD 顯示餘時。
- 飛行有可操作的三線空中拾取路徑；只有真正在足夠高度時略過地面障礙，不能把所有碰撞永久關掉。不能與列車／屋頂互相穿模。
- 起飛時為落地時段預留可驗證的安全路段；到期不能將玩家放入列車。落地後清除飛行狀態並恢復地面規則。
- `powerJumper/pogo` 按原已批准單次彈射理解：拾取後彈起一次，進入高跳／高空拾取段，安全落地即消耗；與持續彈跳鞋區分。不要當永久跳高或重複觸發。
- 用單一垂直動作 state 協調 ground/jump/slide/flight/pogo；鞋、磁鐵、雙倍及滑板的並存／到期有明確規則，不再各檔案互相覆寫高度。
- 金幣拾取只發一次事件，直接碰到／磁吸皆用相同 coin ID 去重；SFX 在事件觸發，不在 render loop 播。
- AudioContext 在用戶手勢後開啟；沿用聲音偏好，加入有限 polyphony／節流，靜音、pause、退出與重玩無殘留音效。離線音效不依賴外部下載。

**UI worker**：人物真正背噴射器、起飛／巡航／下降姿勢與噴流；pogo／彈射器可辨認，起飛尾跡與落地回饋；空中路徑與計時圖示。不更改 Astra 設定的碰撞與軌跡。

驗收：拾取到落地完整自然操作；列車附近起飛／到期、飛行中拾其他道具、重複 pickup、pause、resize、重試；三線皆有可達路徑；聲音開／關與磁吸連續拾取不爆音。距離分數不可因效果到期倒退。

## 5. FPS：滑鼠拖動專屬視角與較少敵人

**Astra 主責**：

- 預設及本輪設定為左鍵按住拖動，鬆開不轉。捕獲 pointer ID，處理 pointerup／cancel／blur；右鍵只射擊，不啟動 camera drag；左右鍵同按的釋放各自處理。
- 取消方向鍵 yaw/pitch（現在在 `update`），移除 J／assist 的自動 lookAtNearest 轉向與相應文案／按鈕。角色／機械人移動不能自行帶鏡頭追蹤。
- 保留 WASD、右鍵、Q、R、E／F、跳／蹲、靈敏度、100 HP、全螢幕。觸控保留手指拖動視角。
- 不再自動要求 pointer lock；舊 locked 偏好遷移至本輪 drag，確保初次遊玩沒有鎖鼠 gate 卡住。拖動到邊緣可鬆開重放，放開時不能出現視角跳躍。
- 既有敵人數 `7 + round*3`＝10／13／16；改為配置表，初版單人建議 **4／5／6**。合作 MVP 建議四名共享敵人。不是把敵人變不會移動／射擊，也不以增加傷害補回數量。
- 清場不是拆彈前提；保留獨立射擊準確率與財務判斷。

驗收：未按左鍵移鼠／放開／方向鍵／J都不會轉向；左拖真會轉向；右鍵可射擊；拖動不觸發 UI 按鈕；設定／暫停／死亡不能射擊，敵人數各輪符合配置。測試正常單人及合作同一套視角規則。

## 6. FPS 兩人網上 CO-OP：先交一個真的合作閉環

本項新增實際連線後端，不以兩個本機角色、localStorage 廣播或假房間掣冒充網上合作。

### MVP

- 入口「單人」「兩人合作」；建立房間→房間碼／邀請連結→朋友加入→兩人 ready→開始同一張現有地圖→合作核實／拆彈→共享結果→再玩／離開。
- 房間兩人、各 100 HP、四名同步機械人、一顆共享裝置；右鍵射擊／左拖視角一致；預設無友傷。任何一個活著的玩家可操作裝置，不用清光敵人。
- 一人陣亡觀戰，兩人陣亡／炸彈到期失敗；任一人完成拆彈兩人同時成功。這是 MVP 明確規則，不再擴到 PvP、語音、配對或可復活系統。
- 姓名、血量、彈藥、門、敵人、炸彈、查帳結果、拆彈進度與結局來自同一房間權威狀態。

### 後端與可信狀態

- 可行候選：獨立 Cloudflare Worker＋SQLite-backed Durable Object，WebSocket 每房一個權威實例。現有 Sites／D1 binding **不能當成已有 DO 房間能力**。
- 優先交可本機執行的同套 server adapter、部署配置及說明，再接正式 endpoint。不要把 demo relay 與正式後端分成兩套不同規則。
- 將既有純移動／碰撞／武器規則與 bot／objective simulation 抽出，server 不載入 Three.js；client 送 input/action＋sequence，不送可信的傷害／座標／勝利宣告。
- 伺服器驗證移動、彈量、射速、距離／視線、購買及互動。開火、擊殺、獎勵、拆彈完成冪等；兩人同按拆彈不雙倍加速。
- 初版可用固定 20Hz simulation、約 10Hz snapshot，客戶端插值及必要校正；用 monotonic elapsed time，限制 catch-up，不跟 client FPS 改變速度。
- 房間碼隨機、碰撞處理、兩人上限、無效碼／滿房、有限重連窗口（例如 30 秒）、空房 TTL／清理。重連 token 不放公共分享網址；分享只含 room code。
- 協議版本、size/rate limits、origin allowlist、有限暱稱；只傳必要遊戲資料，不用主故事存檔或銀行資訊。
- 網上 Esc 可開本地選單，但清楚提示「合作對局仍在進行」，不能單方面暫停朋友／敵人。斷線／失焦處理輸入歸零並顯示狀態，不假裝對局已凍結。
- 房內獎勵獨立於單人／故事；新合作模式不重開舊線上排行榜。開發者跳關不對正常合作房間生效。

### 網上發布與離線界線

- GitHub Pages 只負責靜態前端；必須有公開可用的 WebSocket endpoint 才能跨電腦網上合作。
- Cloudflare 官方目前提供 Free plan 的 SQLite DO，但有 quota；不能保證無限免費。不要開付費方案或把密鑰放 client／repo；連線失敗／quota 用盡有可讀提示。
- 未核實用戶可部署帳戶／binding，不可聲稱已可網上合作。先把程式、配置、雙 client 測試及部署內容做成可審核結果，再提出真正必要的帳戶／部署步驟；不要因此停下其他已授權工作。
- 自含離線版保留全部單人功能；合作入口清楚說明需網絡，無 endpoint 時顯示未連線原因，不用假成功房間畫面。
- 完成標準：兩個獨立 session 透過同一公開 endpoint 用房間碼完成合作，若未做到跨實機測試就明列未測。只跑 localhost 兩 tab 不等於用戶要求已完成。

官方資料（Sol 於 2026-11-15 查閱，部署前再確認）：
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://developers.cloudflare.com/durable-objects/
- https://developers.cloudflare.com/durable-objects/platform/pricing/

## 7. Forest：接續原批准的三神殿九關

現況 `source/forest-rules.js` 仍為共用 `level(n)` 的舊三關；已有箱、石、槽、壓板及拉桿，不從零重做已正常機制。

**Astra**：先交一張能完整雙人／切換完成的垂直合作關，再完成 stable ID 的九張資料：

- 重量神殿三關：箱搭路、滾石入槽、雙角色壓板接力。
- 運動神殿三關：真承載吊台、配重升降、連動門與可恢復單向路線。
- 光線神殿三關：可旋鏡、遮擋／反射／接收器、光控門與多步光路。
- 每關至少兩層高度、一次必須互相提供路徑的合作步驟；分頭操作最後會合。保持壓板離開就關、石可長壓、拉桿可保持，視覺分明。
- 完整 checkpoint 保存兩角色 x/y、必要箱石、機關及可一致恢復的收集／計分狀態；不再用固定高度重生。不可取回物件提供重置機關，避免永久死局或重複收集得分。
- 保留一人切換、同機雙人、玩家名、靈體、已批准限時／無倒數練習及三項徽章。舊三關進度做明確映射，不刪原檔。
- 依已批准 V2 做選關與解鎖；大段說明留在開局／幫助，遊玩只保留必要狀態及互動提示。

**UI worker**：Astra 鎖定關卡座標後適配古門、平台厚度、鏈台、毒池／水火池、鏡面及光路；新畫面必須跟實際碰撞與連線一致。保留第三輪靈體水晶。

驗收：九關兩角色自然完成；所有機關、重置、checkpoint、回頭路、關門夾身、收集及限時／練習實測。沒有完成的關卡不能只換名稱列入完成清單。

## 8. 執行順序、測試與交付

1. 先鎖定雙 worker 檔案所有權，建立 dev/test-run 隔離與介面。
2. Astra 做 Jet 預覽權威狀態、Runner 新道具／音效、FPS 拖動／少敵；UI worker 同步做 seed-picker view 與 cone，等狀態 contract 後接載具／道具動畫。
3. 做 CO-OP 一張地圖完整閉環，另接 Forest 第一張垂直合作關；再完成九關。不要用房間選單或單一樣板當全部交付。
4. 各批回歸75個既有測試，新增對應純規則／事件／連線整合測試。正常 build、Pages build、離線包分別驗證；保留原 story source 整合要求。
5. 30／60／120Hz、暫停／失焦／退出、重試、重複 pickup/result、正常存檔不變、932×390 iframe 與桌面／橫向觸控；連線測兩個獨立 session、延遲／斷線／重連／雙人同時互動。
6. 每批交可玩入口、真實功能列表、檔案清單、測試與缺口、精確 staged 的 commit。第三輪美術和他人檔案不要混入無關提交；不擅自 force push／部署。

本文件是執行指令，並非功能完成報告；我（Sol）本輪只核對現況、研究連線架構並交接，未宣稱新功能已實作或測試。
