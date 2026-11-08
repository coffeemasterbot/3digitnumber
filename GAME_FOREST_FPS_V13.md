# Forest objects, spirits, names and FPS feedback — v13

Implemented in the existing Lost & Found Money Journey Site. The existing project, story, Traditional Chinese, other games, audience and optional/untimed paths remain. This version also regenerates the self-contained offline download. The latest 100-HP request supersedes the earlier one-bullet player death instruction.

## Forest changes

- Friendly fire/water spirits replace coin art and coin terminology. Small elemental marks distinguish the two families, with glow/bobbing disabled under reduced motion. No commercial sprites were used.
- Polished original fire/water avatar SVGs. Players can choose two names before starting; names appear in selection cards, HUD and collection feedback. Names are sanitized, limited to 16 Unicode code points, and stored locally under forest-player-names-v1. They are inserted as text, never executable markup.
- Each room has a pushable solid wooden box. Both characters can push it using existing direction controls, stand on it and jump onto the newly raised first platform to reach a spirit.
- Each room has a solid rolling stone with momentum and rotating art. A carved socket accepts the stone, seats it securely and physically holds a pressure plate. Ordinary character/box pressure still releases when removed; lever circuits retain their separate rules. Both characters can now pass the seated stone's first gate together.
- Objects respect closed doors, other objects and players, carry riders, and reset on level retry. Solid boxes/stones cannot be dropped through with the platform-drop action. Socket snapping refuses overlap with another object. Retrying resets the current room's collectible score, preventing repeated-collection farming.
- First-platform/spirit positions were raised to make the box useful. Toxic-pool/laser spacing in the approach was adjusted to leave safe landing and lever positions, with timed laser crossings retained. The existing later cooperative doors, lever circuits, lift, distinct elements, lives, checkpoints and exits remain.

Main source: source/forest-rules.js (authoritative objects/collision/plates/names); garden-duo.js (integration, input, UI, feedback, retry); forest-art.js (spirits, objects, socket, pressure art); garden-duo.css (avatars/names/responsive styles).

## FPS changes

- Native pointer lock is now the default desktop camera. Relative movement supports continuous turning at screen edges; first entry/resume is tied to interaction, Esc pauses/releases, L switches mode, and an explicit drag fallback remains. Settings migrate from v1 to v2 while retaining sensitivity/audio values; obsolete automatically free cursor mode is not carried forward as the default. Late lock acquisition during menus is released safely.
- Pointer-lock reference: [W3C Pointer Lock](https://www.w3.org/TR/pointerlock/) and [MDN Pointer Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API). These explain why a free desktop cursor stops turning at the physical edge; they are implementation references, not copied game assets.
- 100 HP with a visible progress bar and low-health colour. Enemy projectiles deal 8/10/12 damage in rounds 1/2/3; damage resets the current defuse attempt. Defeat happens at zero HP, and the existing death animation/retry remain. New rounds and retry restore 100 HP.
- Player weapon damage: pistol 24, rifle 25, sniper 85, knife 60. Existing firearm headshot multiplier is 3; knife remains short range. Existing distinct fire/reload rates, magazines, prices and sniper bolt recovery remain.
- 10/13/16 bots per round instead of 5/6/7. Bots patrol, pursue, strafe near a target and open doors on their routes, using navigation and collision checks. Nine-round magazines/bursts/reloads remain. Bot HP is 90/100/110. Spawn positions avoid walls/doors/cover.
- Players may check the financial terminal and defuse with live bots present. Reading the financial question pauses the combat clock and simulation; returning to the world resumes danger. Killing is optional. A fully correct no-kill run receives the same full financial judgement/resource-preservation score; accuracy remains separate.
- Nearby doors show an explicit E open/close prompt. A verified nearby bomb takes priority over the door command. Defuse progress displays seconds and a clear bar.
- Distinct layout rows keep weapon, notice and defuse controls apart; modal/round-end phases hide stale gameplay panels. Parent iframe now fits the actual remaining viewport instead of forcing a 660px minimum below the page header. Health, settings, terminal and result cards remain visible on short screens. Touch controls and defuse progress do not overlap.

Main source: detailed-games/fps-entry.js; source/fps/{rules.mjs,preferences.mjs,index.html,fps.css}; landing.css. Generated dist and dist/client assets and offline HTML match the source build. source/presentation-section.html updates the download-size label.

## Reproduced bugs repaired during this work

| Location / reproduction | Expected | Actual / fix | Severity |
|---|---|---|---|
| FPS free-cursor movement reaches the screen edge | Continuous turning | Desktop default changed to relative pointer lock; real native lock and repeated edge-coordinate deltas tested | High |
| Homepage game on 1275x532 viewport | All HUD/controls fit | 660px iframe minimum put controls beyond the viewport; flex layout removes nested overflow | High |
| FPS round-end near bomb | Only result UI visible | Old inline defuse state remained behind result card; phase-specific hiding and reserved rows fix it | Medium |
| New forest platform drop while standing on solid object | Object stays solid | Platform drop could embed a player and push the rock; solid support now refuses drop-through | Medium |
| New socket with adjacent box | No overlapping bodies | Socket seating checks the target volume before snapping | Medium |
| Offline garden startup while board dimensions are pending | Wait for layout | Reproduced null boardRect.width exception by temporarily clearing layout; garden-battle.js now waits for a valid board rectangle/cell width | High |

## Validation actually run

- node build.cjs: production assets and offline bundle built successfully. node check-inline.cjs: 15 inline script blocks passed. node --test tests/*.test.cjs tests/*.test.mjs: 52/52 passed, including new forest object/name and revised health/scoring/interaction regressions.
- qa-forest-spirits.cjs: all three relaxed rooms completed with real keyboard controls; box climbing, high spirits, pressure handoffs, seated stones, levers/lift, all spirits and both exits verified. A separate standard run completes all three rooms using timed waits for a full laser-off interval. Each successful run has 36 assertions. Ah Jun's saved story stays unchanged. Hard mode has not been completed in this run.
- qa-fps-v13.cjs: 28 assertions. Real native pointer lock inside homepage iframe, more than 360 degrees of relative turning at a fixed edge coordinate, roaming bots, HP/projectile damage, door prompts, non-overlapping defuse/result layouts, all three financial questions/defusals with surviving bots, a valid no-kill ending, death, retry and sensitivity/resume. Deterministic intercepted test-only access places the player near terminal/doors and freezes attackers for the targeted interaction tests; it is absent from production. Patrol movement is checked before freezing.
- qa-v13-mobile.cjs: 12 assertions using a touch-enabled 390x844 profile and real CDP touch input. Names/avatars, actual touch box pushing, exact pause, retry/object/score reset, persistence, touch FPS view, 100 HP, door prompt, frame containment and defuse/touch separation.
- qa-offline.cjs: 24 assertions on a fresh browser context with offline:true before file navigation. Includes the garden pending-layout regression, all five games, nested optional game, range, local preferences, and zero HTTP/API requests. No page exceptions in the final successful run. qa-offline-download.cjs compares actual browser download bytes to the build.
- qa-shell.cjs: 8 assertions passed. qa-journey.cjs: 25 assertions passed, including a complete new-player route, all five ending rules, social branches, clue deduplication, refresh/resume, corrupt/unavailable storage and narrow layout. Historical QA scripts with one-shot/free-cursor/5-bot expectations are retained as historical coverage; current assertions are in the v13 suites.
- Desktop/phone screenshots were inspected for spirits, names, object placement, active defuse, result cards and touch control spacing.

## Limits and preservation

Windows Edge headless/software WebGL and emulated touch were used. Physical iOS/Android, Safari/Firefox native pointer-lock/fullscreen, long-session performance and human difficulty/balance feedback remain untested. FPS fixture-assisted checks are not a claimed natural combat playthrough. The offline edition must be downloaded again to obtain these changes; previously downloaded files do not update themselves. Other arcade gameplay and shared online leaderboard service are preserved; the offline file still disables online leaderboards and contains no network dependency. No new story facts, money, clues or endings were invented.
