# Five-game upgrade — 5 November 2026

The existing Lost & Found Money Journey Site is updated in place. The original story, save namespace, financial projection and endings are preserved. All five games are accessible from the homepage. The runner reference image was inspected for its bright street setting, close third-person camera, rails, buildings and readable equipment. It is a reference only; the image is not redistributed as a game asset.

## Implemented

| Game | Changes |
| --- | --- |
| 散紙追蹤 / runner | Bright street/shopfront environment and overhead lines; warm buildings/windows, lower camera, readable HUD; animated running limbs, airborne pose and sliding body pose; large illuminated board and visible boosted boots; higher/longer shoe jump; oncoming trains move independently of track scroll and use the same positions for collisions. Train/barrier labels distinguish fixed commitments, impulse spending and unnecessary purchases. |
| 預算守護花園 / garden | Nine custom vector plant icons and planted characters with familiar sunflower/pea-shooter silhouettes; breathing/recoil motion; larger bordered zombie HP bars with numbers; enemies labelled 信用卡超支, 情緒消費, 分期疊加, 限時衝動 and 只還最低額. Falling suns follow a visible downward path; sunflower suns arc outward and the flower flashes while producing. Collection is guarded against double credit. |
| 冰火同行 / forest | All three level layouts redesigned; wider platforms and clearer routes; outlined fire/water/toxic pools with labels; lasers have bright active beams, OFF paths and correctly positioned emitters. Floor switches visibly latch the gate open until the next level, instead of requiring a confusing temporary handoff. A pool was moved clear of the switch standing area during testing. |
| 優惠氣流 / Jetpack | Warm sunset/town/roofline scenery and warmer panels, with a larger responsive game view. Obstacles read 不必要的支出, 想要 ≠ 需要, 一次性享樂 and 限時優惠追住你. Three collectible transformations: 儲備機甲 automatically fires at nearby threats and absorbs a hit; 計劃滑翔翼 reduces fall speed and softens vertical motion; 界線鑽頭 breaks barriers at the cost of remaining transformation duration. Existing shield, magnet and boost remain. Transformation sequence resets on retry. |
| 預算防衛戰 / FPS | Original WebGL first-person arena with walls, cover, street buildings, 3–5 AI robots per round, pathfinding around cover, line-of-sight attacks, visible projectiles, robot HP bars, gun model, shot tracers, muzzle flash, hit marker, damage feedback, robot collapse and player death/retry animation. Three equipment-budget rounds, financial terminal checks and hold-to-defuse objective. Original synthesized background rhythm, shooting/hit/reload effects, mute and reduced camera motion. |

The plant icons are custom vector recreations in a familiar style, rather than byte-identical commercial sprites. No Valve maps, logos, skins, commercial game sounds or extracted models are included. This is a stylised original prototype, with original map geometry and robot models.

## FPS access, controls and rules

- Homepage: **機械人拆彈 FPS / 預算防衛戰**. Story: optional Act 2 interaction remains.
- Default route: `/games/budget-defence/`. The previous practice/untimed accessible range remains at `/games/budget-defence/range.html`, linked from the FPS menu.
- Desktop: WASD move, mouse look/left-click shoot, Space shoot, R reload, F check terminal, E hold to defuse, P/Esc pause, J optional aim assistance. Arrow keys also aim. Touch: direction pad, drag to look, fire/reload/check/defuse buttons and optional aim assistance. Desktop pointer lock is disabled for touch devices.
- Three rounds share 900 fictional credits. Each round supplies a free 12-round marker. Rentals: carbine 220, armor 150, defuse kit 80; purchases are once per round and validated before charging. Round equipment resets; credits do not replenish.
- Robots embody spending habits, not people. Clear the robots, reach the north terminal, check the financial scenario, then hold E nearby (five seconds, or three with kit). Moving away or releasing E resets progress.
- Financial score: first-attempt terminal decisions contribute 80; preserved equipment credits contribute 20. Shooting accuracy is separate. Only a completed local score/record is saved; no story money, clues, chapters or endings are granted. An interrupted FPS run is not resumed after reload.
- Pausing or losing tab/focus stops actions, AI, reloads and countdown. Exiting aborts input listeners, closes audio, releases pointer lock and disposes the renderer/scene. The accessible range exits correctly from both the story dialog and the homepage iframe.

## Sources inspected

The existing code was retained and extended: the runner uses React Three Fiber/Three.js; flight uses its existing React/canvas fixed-step engine; the garden retains its existing licensed implementation; forest remains a local canvas game. The new FPS reuses the already installed Three.js 0.160.1 dependency and its retained MIT notice at `dist/games/licenses/three_0.160.1.txt`.

Relevant primary references researched for FPS architecture and input:

- [Official Three.js FPS/collision example](https://threejs.org/examples/games_fps.html).
- [Official PointerLockControls documentation and source link](https://threejs.org/docs/pages/PointerLockControls.html).
- [Three.js repository and MIT licence](https://github.com/mrdoob/three.js/blob/dev/LICENSE).

These are selected relevant sources, not a claim to have found every FPS source project. No external game implementation or asset pack was downloaded for the FPS; its AI, geometry, weapons, controls and sounds are implemented locally.

## Important repairs found during testing

- A pending native dialog `close` event could stop an arcade game opened immediately afterward. The close handlers now check that the dialog is actually closed before stopping the active game. A story regression covers the race.
- Runner start/reset timing could discard the first jump. Initialization now runs before layout, and input synchronizes the player before applying actions.
- The garden decoration loop initially returned early after finding an already drawn plant, so later enemies missed their labels/HP numbers. It now continues to the enemies; the browser test reproduces the planted-flower case.
- FPS raycasts could use the previous frame's camera orientation after aim changed. Camera transforms and world matrices now update before raycasting.
- Auto pointer lock interfered with touch firing. Touch devices now use their own drag-look/control path.
- The FPS pause overlay initially covered the HUD exit. Exit controls now remain above the menu.
- New transformations make Jetpack survive longer. The death-sequence test observes up to 30 seconds instead of assuming death within 10 seconds.

## File map

- `detailed-games/runner/src/game/{Player,Track,Obstacle,Game,StreetLabel}.tsx`, `useSpawner.ts`, `useCollision.ts`, `runner-entry.tsx`: runner art, animation, UI and train mechanics.
- `detailed-games/garden/garden-upgrade.{js,css}`, garden HTML: vector art, health/labels, sun animation and collection guard.
- `garden-duo.js`, `garden-duo-art.js`: three maps, switch mechanics, pools and lasers.
- `detailed-games/jet/src/hooks/useGameEngine.ts` and related renderer/types/HUD/Game files: transformations, physics, rendering and warm UI.
- `detailed-games/fps-entry.js`, `source/fps/{rules.mjs,index.html,fps.css,preview.svg}`: FPS simulation, AI, graphics, sound, UI and pure rules.
- `build.cjs`, `build-detailed.cjs`, `landing-build.cjs`, `dist/app.js`: full production bundling, fifth-game entry, accessible-range preservation, thumbnails and navigation.
- `source/arcade-base.js`, matching embedded block in `source/story-base.html`: stale modal-close repair. `source/journey-repairs.js`: updated optional-story description. `source/budget-defence/game.js`: range exit works in both hosting contexts.
- `tests/fps.test.mjs`, `qa-upgrades.cjs`, `qa-train-mobile.cjs`, and updated existing QA scripts: regression coverage.

## Verification notes

Full production build is **`node build.cjs`**, including fresh runner, Jetpack and FPS bundles. The existing dependency lockfile was retained. Logic tests: `node --test tests/*.test.cjs tests/*.test.mjs`. Browser QA uses the installed Playwright and Edge with a local preview. Generated previews now depict the upgraded games.

The dedicated upgrade suite checks real runner inputs/pickups/boosted jump, garden labels/HP/sun credit, all three forest maps and persistent switches, actual collection of all three Jetpack transformations, and FPS movement/shooting/reload/pause/scoring/death/touch. The first robot wave is tested with real aim/fire inputs; subsequent full-campaign terminal/defuse tests use explicitly injected QA fixtures to clear enemies and position the player. Those fixture hooks exist only in intercepted test bundles and are absent from published code.

The forest completion suite collects every gem and reaches every cooperative exit across all three redesigned levels using player keyboard inputs. Story/save regressions, the accessible range, mobile layout, browser history and story-state isolation are retained.

Remaining limits: touch is emulated in Edge rather than tested on physical phones; Safari/Firefox, screen readers, GPU performance across low-end devices and human difficulty/balance testing remain unverified. Full unaided combat through FPS rounds two and three is not claimed. Music and effects are synthesized, and the graphics are stylised geometry/vector art. The original financial investigation remains available independently of all arcade performance.

### Recorded results

| Check | Actual result |
| --- | --- |
| Locked dependency installation | Passed with pnpm 11.25.0; esbuild postinstall explicitly permitted in `detailed-games/pnpm-workspace.yaml`. |
| `node build.cjs` | Passed; all changed games, including 3D FPS, freshly bundled. |
| Logic tests | 17 passed, including the five new FPS rules tests. |
| Generated script parsing | All 13 inline script blocks compiled; new FPS and garden scripts passed syntax checks. |
| `qa-upgrades.cjs` | 34 browser assertions passed. Includes actual first-wave combat, robot/player death, all three terminal/defuse rounds with the documented fixtures, all three Jetpack transformations and the redesigned switch. |
| `qa-train-mobile.cjs` | 6 passed, in an actual 430px emulated phone viewport; proves independent oncoming-train motion and touch lane/jump input. |
| `qa-journey.cjs` | 25 passed; complete story path, endings, recovery, refresh/resume and the modal-close race. |
| `qa-budget-defence.cjs` | 30 passed; retained accessible range and three FPS enter/retry/exit cycles with unchanged story save, clues and financial projection. |
| `qa-shell.cjs` | 8 passed; history, malformed progress, and accessible-range exit from the homepage. No runtime/console errors. |
| Existing `qa-detailed.cjs` | 12 passed. |
| Existing `qa-detailed-mobile.cjs` | 11 passed. |
| Updated `qa-detailed-outcomes.cjs` | 10 passed. Its death observation window now accounts for the mech power-up. |
| Updated `qa-reworked-duo.cjs` | 15 passed; all three new levels completed through keyboard inputs. |

The nine browser result files contain **151 passing assertions** and no recorded runtime errors. The initial aggregate arcade command stopped when its old Jetpack test expected death before the new mech expired; that test was corrected and its suite rerun successfully, followed by the full new forest completion suite. The other two aggregate suites had already passed. Passing constituent-suite results are reported rather than claiming that the aggregate command was rerun afterward.
