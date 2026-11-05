# Agreed feedback implementation — 6 November 2026

Existing Site: https://lost-found-money-journey.cottonpatch1.chatgpt.site
Project: appgprj_6ae8d5ef36d081918d124e59eceb8519
Baseline: published version 9, commit 9c3eb3f750c75d61d41146cffff97683861edbec.

## Request and preservation

Implemented the handwritten feedback and the subsequent clarifications: right mouse button fires; Repeater uses a rapid two-shot burst; runner and Jetpack leaderboards are shared online; team Instagram is https://www.instagram.com/poor_guysssss/; English applies to the website presentation. Ah Jun's original investigation, clues, branching decisions, endings, local save format and money model remain intact. Standalone minigames show controls without forcing the named-character financial-story introduction. Optional story mode remains available separately.

The current source did not contain a separate slideshow component. A bilingual six-slide viewer was therefore added using the existing project's introduction and financial-education principles, with English/Traditional Chinese controls and remembered language selection. This was disclosed during implementation. The supplied reference images guided the changes; no commercial game graphics, music or extracted assets were copied.

## What changed

**PVZ / garden**

- Corrected reversed zombie names and health by mirroring only the enemy artwork, not the entire DOM element.
- Added prominent freezing and burning overlays with active-play durations.
- Added an original Cherry Bomb, a short visible fuse and a nearby three-row blast. It is consumed once.
- Repeater now has clearer artwork and a 180ms two-shot burst. Its pending shot and attack clock pause safely; no delayed second projectile can leak into a restarted game.
- Added per-type planting cooldowns (sunflower 5s, wallnut 12s, Cherry Bomb 20s, other types 6.5s), visible card countdowns and duplicate-placement guards.
- Added a free shovel with S shortcut and a distinct original shovel icon; removing a plant does not refund resources.
- Added a gentler original melody, chord accompaniment and bass pattern. Audio starts only after interaction; existing mute remains.
- Plant cards remain scrollable and reachable at narrow widths. Sunflower charging from the previous version is preserved.

**冰火人 / forest**

- Level 1 teaches pressure-held handoffs; level 2 requires two matching-character levers to complete a circuit; level 3 combines a lever-opened door with a lever-controlled lift and an elevated token route.
- Added platforms, visible lever handles, circuit indicators and distinct fire/water portraits. Existing wrong-element pools, toxic credit-card pool and timed laser hazards remain.
- Pressure plates still close their door when unoccupied. Levers are deliberately different: E or the touch lever button toggles their visible state. Instructions explain the distinction before play / in paused help.
- Countdown, difficulty options, retry and shared safe checkpoints remain functional. Full traversal was tested in relaxed mode; harder modes keep their laser/timing challenges.
- Reworked the original soundtrack with a slower 112 BPM melody, softer chord layers and counter-melody.

**CSGO-inspired FPS**

- Starts with 0 local game coins and a free pistol/knife. Each enemy defeat grants 100 coins once, available for the next buy phase. Weapon/kit purchases deduct once. Nothing is added to Ah Jun's money.
- Right-click shoots; mouse movement rotates the view without holding a drag. Optional pointer lock remains, with drag/arrow-key fallback. Desktop right-side action buttons are hidden; touch controls remain.
- Q scopes the sniper. Every sniper shot automatically unscopes and starts 1.3s recovery; switching weapons cannot bypass the recovery clock.
- Rifle recoil affects the actual camera and aim. Headshots deal 3× firearm damage and have a distinct gold hit indicator.
- Added two functional shortcut doors, for five doors total. Rounds have 5/6/7 enemies with 100/120/140 HP, faster movement and firing. Player still dies from one enemy projectile.
- Bomb deadlines are now 95/85/75 seconds. Financial checks and held defuse still determine completion; aim accuracy is separate from financial judgement.

**Subway-inspired runner**

- Added a collision reaction and 1.15s falling phase before results; board absorption has its own impact feedback.
- Magnet coins move toward the player before collection, with no duplicate reward.
- Spawning reserves train lanes so a train and a barrier cannot overlap or pass through each other in the same path. At most two train lanes are occupied; obstacles in other lanes remain possible.
- Boots still clear an oncoming train without board protection. Existing distance score, temporary multiplier, item timers, sliding, board and scenery are preserved.
- Each completed run is submitted to the shared online leaderboard. A latest-runs view records individual runs, not only personal bests.

**Jetpack**

- All uncollected powerups use an original rainbow question-mark box. Its randomly selected effect is revealed on collection; the resulting vehicle and HUD remain distinctive.
- Preserved functional mecha/glider/drill mechanics and the expiry message/animation.
- Redesigned the first instruction page with a warm palette, clear typography and three concise control steps. Its layout uses the viewport so it is usable on portrait phones.
- Added shared online rankings and individual-run recording.

**Website / presentation**

- Both 9 November and 16 November event cards link to the supplied Instagram page. The old 12 November date was replaced as requested. The 16 November time/venue are directed to Instagram rather than copying unconfirmed details from the old event.
- Added a six-slide Chinese/English presentation, keyboard navigation and saved language preference.
- Added real copy and downloadable .txt playtest-link controls. If clipboard access is denied or pending, the URL is selected immediately for manual copying.
- Updated the privacy explanation for public scores while retaining device-local story progress.

## Shared storage and file changes

The previous host was entirely static, so genuinely shared records required a thin server layer. The existing HTML, game engines, assets and routes were preserved. A small Worker fronts static assets and handles leaderboard requests; a managed D1 database stores scores. The hosting manifest keeps the exact original Site ID and public audience.

- worker/index.mjs: start/finish/read/delete-own-run API; same-origin writes, visitor-bound run IDs, elapsed-time and plausible-score checks, prepared SQL, idempotent finish and bounded result lists.
- db/schema.ts, drizzle.config.ts, drizzle/: generated schema-only migration and metadata. No story data or existing tables are overwritten.
- source/leaderboard.js/css: shared top/latest views, public nickname, upload feedback, safe pause while the dialog is open, and delete-own-browser-records action.
- .openai/hosting.json, build-server.cjs, build.cjs, build-detailed.cjs: D1 binding and Worker artifact, with the original static pages copied unchanged into the client asset tree.
- preview.cjs: persistent local SQLite adapter for the same Worker API; local and production databases are separate.
- source/fps/{rules.mjs,index.html,fps.css}, detailed-games/fps-entry.js: FPS rules, AI, controls, visuals and feedback.
- source/forest-rules.js, garden-duo.js, forest-art.js, arcade-score.js: forest puzzles, controls, graphics and music.
- detailed-games/garden/{index.html,garden-mechanics.js,garden-upgrade.js,garden-upgrade.css}, detailed-games/game-shell.js: garden rules, art, clocks, cooldowns, shovel and music.
- detailed-games/runner-entry.tsx, runner/src/{game,state,utils}, source/runner-rules.mjs, detailed-games/shell.css: runner states, magnet flight, train reservations and feedback.
- detailed-games/jet/src/{components/StartScreen.tsx,hooks/useGameEngine.ts,utils/renderer.ts}: guide, mystery pickups, scoreboard snapshot and keyboard-input guards.
- landing-build.cjs, landing.css, source/presentation-section.html, source/presentation.js, dist/app.js: Instagram, dates, bilingual viewer, sharing and privacy text.
- package.json, pnpm lock/config: migration generation dependencies. The initial default installer could not find npm; the bundled pnpm was used, required esbuild checks were enabled, and installation completed successfully.
- Updated tests and QA scripts; regenerated dist/ includes the actual deliverable and current preview images. Test-only hooks are injected in intercepted test bundles, never in published source assets.

## Validation actually completed

- Production build: node build.cjs passed.
- node --test tests/*.test.cjs tests/*.test.mjs: **34 passed**, including money/save regression, idempotent purchases/rewards, one-hit defeat, weapon recovery, pressure/lever semantics, safe checkpoints, train clearance/reservation, sunflower charging, real SQL/API validation, score ownership, duplicate finishes and delete-own-record isolation.
- node check-inline.cjs: 15 inline script blocks parsed without errors. Syntax checks passed for the new browser scripts.
- qa-v10.cjs: **44 browser assertions passed** — bilingual presentation and link download, cooldown/spending, shovel, burst pause/resume, real projectile burn/freeze, Cherry Bomb, garden audio running, right-click/headshots/recoil/sniper recovery, staged FPS terminal/defuse rounds 2 and 3, one-projectile defeat, boots/train physics, magnet travel, death/results, real automatic score submission and visibility to an isolated browser session.
- qa-v10-jet.cjs: **12 passed** — three real pickup transformations and icons, expiry, pause, collision/results, automatic Jetpack upload and another visitor reading the score.
- qa-forest-handoff.cjs: **26 passed** — all three relaxed levels completed with real keyboard traversal, matching levers, lift, tokens and cooperative exits; story save unchanged.
- qa-v10-mobile.cjs: **13 passed** — narrow navigation/presentation/share file, leaderboard pause/name entry, mobile FPS shoot/jump/crouch/drag, narrow Cherry Bomb/shovel access, no runtime errors.
- qa-v9-touch.cjs (current build): **19 passed** — touch lane/jump/slide, flight thrust, planting, forest movement/jump and portrait/landscape fit.
- qa-journey.cjs: **25 passed** — complete new-player journey, all five ending rules/UIs, four social branches, refresh/resume, repeated clues, corrupted/future/unavailable saves and narrow modal handling.
- qa-budget-defence.cjs: **30 passed** — accessible untimed range, practice, purchases, all rounds, repeated retry/exit, audio, pause, resize/touch and story isolation.
- qa-shell.cjs: **8 passed** — navigation, Back/Forward, malformed summaries and exits.
- qa-detailed-mobile.cjs: **11 passed** — layout checks and refreshed hub preview images.

Total: **188 passing browser assertions**, plus 34 logic/API tests. The results count each suite once, not repeated attempts. Browser testing caught and repaired the on-screen-control keyboard target error and portrait instruction-card clipping. Timing assumptions in tests were corrected where card disability waits or React refresh intervals deferred an action.

Screenshots were inspected for the presentation, guide, plant controls, phone garden, runner impact and active forest puzzles. Audio scheduling/context/mute behavior was checked; subjective music quality was not independently user-tested.

## Limits and remaining verification

- Shared scores are a casual leaderboard with plausibility and ownership checks, not a cheat-proof competitive service. Scores originate from the browser. A disconnected run shows a clear upload/connection notice; offline synchronization is not promised.
- Names/scores are public. Anonymous ownership is scoped to this browser cookie; no account system was introduced. Main story saves remain local and are never uploaded.
- Full forest routes were tested in relaxed mode. Standard/hard hazards and deadlines need further human balance testing.
- FPS damage, input and result checks use controlled robot/position fixtures. Full unaided combat across every round/angle was not exhaustively tested. Pointer-lock fallback was tested; physical mouse lock and physical-phone performance need broader device testing.
- English covers the website presentation, not every existing story dialogue or every game's UI.
- Live D1/API verification follows publication and is recorded in qa-v10-production-results.json; it is not counted as passed in the local totals above.

Technical implementation follows Cloudflare's primary documentation for [static asset bindings](https://developers.cloudflare.com/workers/static-assets/binding/) and [D1 migrations](https://developers.cloudflare.com/d1/reference/migrations/).
