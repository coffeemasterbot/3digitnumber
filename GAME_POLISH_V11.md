# Game polish — version 11

Implemented in the existing Lost & Found Money Journey project, following the latest five-game feedback and attached forest screenshot. The Sites skill was used to open, synchronize, package and publish the existing project.

## Inspected

Existing landing shell and iframe launch flow; Three.js FPS entry, rules, camera/input, audio and map geometry; forest renderer and shared puzzle rules; React/Canvas Jetpack engine, HUD, sound hook and result panels; React Three Fiber runner animation, spawning and collision rules; classic garden game, plant extensions, wave scheduling and responsive layout. Existing story, save, finance and leaderboard regression suites were retained. Build commands: node build.cjs, node check-inline.cjs, node --test tests/*.test.cjs tests/*.test.mjs.

## Findings and fixes

| Classification | Location / reproduction | Expected | Actual / change | Severity |
|---|---|---|---|---|
| Missing feature | FPS HUD: look for fullscreen/settings | Usable controls and adjustable sensitivity | Added native fullscreen, settings modal, ADS sensitivity, volume, invert aim, cursor mode and reduced motion; saved separately | Medium |
| Code-level risk, repaired | FPS camera: controlled pointer unlock triggers the same event as Esc | L mode switch should keep playing | Explicit controlled-unlock window; unexpected lock loss still pauses. Browser tests verify L in both directions | Medium |
| Code-level bug, reproduced with deterministic browser fixture | Garden: final wave reaches its old time limit with live enemies | Defeat final survivors before winning | Old victory function removed remaining zombies; new authoritative active-time wave model waits for a cleared final wave | High |
| Reproduced during implementation QA | New warehouse map: bot spawn at 11,-13 intersects a crate | Every spawn has navigable space | Moved crate; all three maps pass collision and route checks | Medium |
| Reproduced during implementation QA | Garden campaign bar at desktop bottom | Readable progress above shell controls | Moved progress and board clear of fixed controls; increased portrait header space | Medium |
| Code-level conflict, verified after repair | Final FPS map: verified bomb beside a door, press E | Defuse an eligible bomb | Eligible defusal now takes precedence over toggling a nearby door | High |
| Requested improvements | All five games | Latest requested visuals and mechanics | Changes below | — |

## Changes and files

- Forest: forest-art.js now draws carved stone gates, wood/stone arched exits, ancient square-hole bronze/aqua coins, rune pressure plates and levers, masonry, alcoves, moss, vines and torchlight. Puzzle geometry and switches retain their existing rules. Regenerated dist/story/index.html.
- FPS: detailed-games/fps-entry.js and source/fps/{index.html,fps.css,rules.mjs,preferences.mjs}. Three different maps: 舊城街區, 倉庫迴廊, 花園堡壘. Doors, passages and cover are rebuilt per round and disposed between rounds. Pistol 34 → 22 damage; headshots remain triple damage. Bots have nine bullets, three-shot bursts and 2.2-second reloads. Player still dies from one bullet. Fullscreen pauses safely; P or the resume button continues. Settings are keyboard accessible and persist locally.
- Jetpack: detailed-games/jet/src/components/{SoundButton,Game,HUD,PauseMenu,StartScreen,GameOverScreen}.tsx, hooks/{useSound,useGameEngine}.ts, utils/renderer.ts and detailed-games/shell.css. Visible human rider, helmet/scarf and separate jetpack. Shared icon-only speaker with accessible on/off labels across screens. Warm flight-log result card with real run statistics and retry/menu actions. Audio loops cancel on mute and cannot multiply after repeated toggles.
- Garden: source/garden-rules.js, detailed-games/garden/{garden-battle.js,garden-mechanics.js,garden-upgrade.js,garden-upgrade.css,index.html}. Five one-use lawnmowers, separate shovel tool, 20-second active-time waves instead of 30 seconds, normal enemy health +30%, two 220-HP debt giants in wave 20, continuously moving campaign bar. Cherry bombs damage giants rather than instantly erasing them; Chomper cannot swallow giants. Retry restores five mowers, not five per wave. Progress and spawning freeze while paused.
- Runner: detailed-games/runner/src/game/{Player,Obstacle,useSpawner}.tsx/ts and source/runner-rules.mjs. Spring boots follow leg motion, compress/stretch and emit takeoff rings/light trails; motion effects respect reduced-motion preference. Added stockpile crates, tall month-end hurdles, high-interest overhead signs and cash-gap track pits. Spawn chance increased to 76% and distance interval reduced to 13.5; same-lane spacing and train exclusion remain enforced.
- build-detailed.cjs includes new garden scripts. dist/games and dist/client/games contain the matching production assets. tests/fps.test.mjs was updated for the requested weaker pistol; tests/polish-v11.test.mjs adds wave/mower, map, preference and new-obstacle regressions. qa-v11*.cjs and JSON reports retain browser evidence.

## Controls and scoring

FPS: WASD move, mouse look, right click shoot, Q scope, R reload, Space jump, C/Ctrl crouch, 1–4 weapons, E door/defuse, F financial check, L free/locked cursor, V fullscreen, P pause/resume. Touch controls remain. Sensitivity, ADS sensitivity, volume, inversion, cursor mode and motion can be adjusted in ⚙ 設定. Enemies award 100 local credits exactly once; financial judgement and remaining-credit score are displayed separately from accuracy. No story money is awarded.

Runner: arrows/swipes or touch arrows; up jumps, down slides. Boots retain the higher jump needed to clear trains. Temporary power timers and online scores remain. Jetpack: hold Space/W/up or touch to ascend; release to descend, P pause. Speaker icon toggles audio. Garden: select a plant then cell; select the separate shovel (or S) then a plant to remove it. Mowers activate automatically once per row/run.

## Validation actually run

- Production build node build.cjs: passed. Inline JavaScript check: 15 blocks passed.
- Node regression suite: 39/39 passed, including source save/finance, one-bullet FPS defeat, purchase idempotency, routes for all new maps, garden waves/mowers, runner obstacle clearance, sunflower charging and shared leaderboard API.
- qa-v11.cjs: 30/30 browser assertions. Desktop/fullscreen/pointer lock/settings persistence, settings pause, all map builds, bot burst/magazine/reload, iframe fullscreen, garden mowers, final giants, pause/retry and phone layout.
- qa-v11-jet.cjs: 18/18. Actual AudioContext on/off, repeated toggles, transformations/expiry, pause, collision, desktop/phone review and online score visibility to another local visitor.
- qa-v11-runner.cjs: 12/12. Boot jump over moving train, magnet collection, death animation and shared score upload; animation screenshot captured with motion enabled.
- qa-v11-legacy.cjs: 45/45. English slides/IG/share; plant cooldown/shovel/repeater/effects; weaker pistol/headshots/idempotent coins, sniper cooldown, recoil, pause, new-map defusal and single-bullet defeat; runner and Jetpack regressions.
- Existing qa-v10-mobile.cjs: 13/13 on touch-enabled 390px/320px profiles, including FPS drag/fire/jump/crouch and reachable plant strip/shovel. Current-run evidence copied to qa-v11-mobile-results.json.
- Existing qa-forest-handoff.cjs: 26/26; all three relaxed levels completed through real keyboard inputs, pressure release, lever circuits, lift and unchanged Ah Jun save. Current-run evidence copied to qa-v11-forest-results.json.
- Original-story qa-journey.cjs: 25/25, new-player completion, all five ending rules, social branches, refresh/resume, duplicate clues, corrupt/unavailable storage, reset isolation and narrow modal.
- qa-shell.cjs: 8/8 navigation, malformed progress recovery and accessible range exit.
- Total: 177 browser assertions across those runs, with overlapping regression coverage. No page exceptions in these completed runs. Desktop/phone screenshots were visually inspected. Tests use deterministic intercepted fixtures for hard-to-reach combat, final-wave and power-up states; fixtures are absent from published bundles.

## Preservation and limits

Current project is the content reference. Ah Jun story text, financial balances, clues, language options, approved investigation order, presentation, IG links and shared leaderboard service were preserved. No copied commercial art, extracted sounds or maps were added. Forest artwork changes appearance without changing puzzle physics. The accessible untimed range remains available.

Tested in headless Windows Edge with software WebGL, desktop and emulated touch/phone viewports. Physical iOS/Android/Safari audio, pointer lock and fullscreen were not tested; browser support still determines native fullscreen availability. Forest end-to-end playthrough used relaxed difficulty; harder layouts share the unchanged rules but were not completed this run. Garden final-wave checks use a fixture rather than an uninterrupted human 20-wave playthrough. Competitive balance and long-session performance need player feedback. Online leaderboards retain existing basic plausibility/ownership checks, not comprehensive anti-cheat.
