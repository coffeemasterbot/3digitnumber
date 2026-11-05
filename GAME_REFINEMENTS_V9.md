# Game refinement and QA — 5 November 2026

This update edits the existing Lost & Found Money Journey Site (project appgprj_6ae8d5ef36d081918d124e59eceb8519), starting from published version 8 / 5dddc31a4808d449c8eb09c291c69de28bc55ce2. It preserves Ah Jun's story, clues, language, ordering, save schema and real-money calculations. GAME_UPGRADES.md and QA_REPORT.md describe earlier releases; this document supersedes their game controls and permanent-switch design.

## Inspection and findings

Reviewed the Three.js FPS entry, pure rules, HTML and CSS; the runner React Three Fiber game/store/player/spawner/collisions; the fixed-step Jetpack engine, renderer and HUD; the full garden page and its vector-art extension; the embedded forest engine and build injection. Checked the 2D accessible range, story save/ledger integration, hosting manifest, build scripts and existing QA scripts. Existing approved content was retained; the reference screenshot remains the visual direction for the runner. No external game assets were imported.

| Classification | Location | Reproduction / inspection | Expected | Actual before change | Severity |
| --- | --- | --- | --- | --- | --- |
| Reproduced bug | Garden portrait layout | Open at 390×844, start garden | Board and plant cards remain usable | Old portrait CSS hid the game container while another override hid the rotate message, leaving a blank page | High |
| Code-level defect | Runner train collision | Inspect collision rule for block/moving obstacles | Sufficient boot-jump height clears train | Collision depended on lane and longitudinal position without a usable train-clearance height | High |
| Code-level defect | Garden production | Inspect new plant initialization and first loop condition | Start charge at zero, produce after active interval | lastProduction=0 explicitly triggered immediate first production | Medium |
| Missing feature | FPS | Inspect weapon, map and input state | Requested pistol/rifle/sniper/knife, free look, jump/crouch, doors, one-hit defeat | Previous equipment and movement did not cover these new requested mechanics | Medium |
| Requested rule change | Forest | Inspect old gate latch | Open only while matching character is standing on a plate | Previous approved update deliberately latched a gate permanently | Medium |
| Missing feature | Runner / Jetpack | Inspect HUD and expiry | Item timers, distance multiplier, visible vehicle expiry | New requested multiplier and dismantle feedback absent | Medium |

The two code-level defects were identified from source; they were not re-enacted in an old production browser session during this update. Browser tests verify their repaired behavior. During implementation, the expiry regression caught a missing transition call; that implementation error was corrected and the complete new-game suite then passed. Timing assumptions in tests were also corrected: UI charge can advance slightly after a tap, and restored item cards appear on the next React UI tick.

## Implemented behavior and changed source

- source/fps/rules.mjs, detailed-games/fps-entry.js, source/fps/index.html and fps.css: four weapon models with individual magazines/reload/damage/range; sniper scope; knife melee independent of accuracy; free drag look, optional pointer lock, arrow-key look; jump and crouch; patrol/hearing/line-of-sight AI; 17 solid walls/crates and 3 operable doors. Any enemy bullet causes immediate defeat followed by a collapse/retry animation. Armour was removed to preserve this rule. One shared 900-credit campaign budget remains isolated from the story. Purchases apply to the current round, so reserve credits for future rounds.
- detailed-games/runner/src/game/{Game,Player,Track,useCollision,extras}, runner/src/state/gameStore, runner-entry.tsx, shell.css and source/runner-rules.mjs: gravity-based boots reach above 3.1-unit train roofs and allow landing on them; camera follows high jumps; more leg/arm/body movement for slides; distance in metres and weighted travel points; temporary 2× travel pickup; board/shoes/magnet/2× timers with bars and seconds underneath. Street, waterfront and park districts change every 250m, with coastal water/railings and park trees/benches.
- detailed-games/jet/src/{hooks/useGameEngine,utils/renderer,types/game,components/HUD,components/VehicleIcon}: distinct original vector badges and vehicle silhouettes; visible dismantle ring/particles and a reason message when a vehicle expires or a mech absorbs a hit. Expiry is gameplay-clock based, clears once, and reduces motion when requested.
- detailed-games/garden/{index.html,garden-upgrade.js,garden-upgrade.css,sunflower-rules.js}: new sunflower charge is zero, fills only during active play, produces after a full 15-second base interval, and repeats. Charge is shown below the plant. Custom vector art has highlights, stronger silhouettes and type-specific card colours. Portrait board remains visible and plant strip scrolls.
- source/forest-rules.js, forest-art.js, garden-duo.js/css and build.cjs: two doors in level 1 and three in levels 2–3; matching-element switches on both sides, requiring a hold/pass/handoff strategy. Doors close when neither plate is held. Shared safe-room checkpoints prevent a death separating the pair permanently. Higher platforms, wrong-element pools, toxic credit-card pools and timed laser hazards require independent roles. Fire/water plate symbols differ from collectible finance tokens. Descriptions are hidden during actual play; instructions remain before play and through paused help.
- build-detailed.cjs copies the sunflower rule asset; regenerated dist/ contains the actual deployable games. QA scripts and tests cover the new behavior. qa-upgrades.cjs and qa-reworked-duo.cjs now delegate to their current suites, replacing obsolete permanent-gate assertions.

## Controls and score

FPS: WASD move, mouse drag or lock mouse to look; arrow keys also look. Left click or X fires; Space jumps; C or Control crouches; 1 pistol, 2 rifle, 3 sniper, 4 knife; Q/right click scopes the sniper; R reloads; E opens/closes a nearby door or holds defuse at the terminal; F checks the financial plan; J aims at a visible robot; P/Escape pauses. Touch movement, aim dragging, weapon choices, shoot, jump, crouch, reload, scope, door and defuse controls are on screen. “Squad” was interpreted as squat/crouch, not multiplayer squad AI.

FPS financial score: up to 80 for correct first financial decisions, plus up to 20 for equipment credits preserved. Shooting accuracy is shown separately; knives do not inflate it. Each of three rounds requires clearing robots, checking the terminal plan and holding defuse (5 seconds, or 3 with a kit). Free pistol/knife remain usable without purchases. The original untimed text/target version remains at games/budget-defence/range.html.

Runner: arrows or swipes change lanes, jump and slide; touch buttons also work. Score = floor(weighted travel metres) + 10 per coin. The 2× item doubles only new travel points, not physical distance or coin rewards. Board 10s, boots 12s, magnet 8s, multiplier 12s; clocks pause with play. A board is also consumed on a collision. Run limit remains 90 active seconds.

Forest: solo switches with Q or the element buttons; arrows/A-D move, Space/up jumps, down drops through a platform. Cooperative local keyboard controls remain supported. A correct character must remain grounded on a coloured/shape-matched plate to hold a door. One character crosses and holds the far plate so the other can follow. Tokens remain collected after a safe-room respawn.

## Validation actually run

- node build.cjs: production output built successfully.
- node --check on garden-duo.js, forest-art.js and garden-upgrade.js; node check-inline.cjs: 15 script blocks checked, no parse errors.
- node --test tests/*.test.cjs tests/*.test.mjs: 27 passed. Includes saves/branch accounting, original accessible range, purchase idempotency, one-hit defeat, weapon magazines, doors/cover, pressure release/checkpoints, train clearance, travel multiplier and sunflower charging.
- qa-v9.cjs: 41 passing browser assertions. Real input for look/jump/crouch/weapon/reload/door/attack; staged robot positions for deterministic damage, one projectile for death, and fixtures for all three terminal/defuse rounds. Runner actual physics passes an oncoming train without board protection. Charge/pause/production, vehicle icons/expiry, and mobile FPS checks pass.
- qa-forest-handoff.cjs: 21 passed. All three relaxed maps completed using real keyboard movement, jumps, switches, tokens and cooperative exits; Ah Jun's story save stayed unchanged.
- qa-v9-touch.cjs: 19 passed. Emulated touch for runner lane/jump/slide, Jetpack thrust, garden planting and forest movement/jump; portrait/landscape checks and no runtime errors. This test reproduced the garden blank-screen bug before the CSS fix and passed afterward.
- qa-journey.cjs: 25 passed. Complete new player flow; all five ending UIs/rules; four major social choices; clue repetition; refresh/resume; corrupt/future saves; unavailable storage; reset isolation; narrow clue modal and Escape.
- qa-budget-defence.cjs: 30 passed. Original accessible game, practice, purchases, untimed path, judgement, repeated retry/exit, hidden-tab pause, resize/touch mapping, and story-balance isolation.
- qa-shell.cjs: 8 passed. Navigation/Back/Forward, malformed summaries, and accessible range exits.
- qa-detailed-mobile.cjs: 11 passed; updates the game-hub preview images and checks narrow/landscape layouts. The first attempt could not start because an existing preview server already occupied port 8789. The script was changed to use the existing server and rerun.

Fixtures exist only in intercepted QA bundles. Published dist contains no __fx, __runner, __jet or forest fixture hooks. Screenshots were visually inspected for desktop FPS, mobile FPS, active forest maps, runner HUD/jump and Jetpack expiry. Test results are in the corresponding JSON reports.

Across these browser suites: 155 passing assertions, plus 27 passing unit regressions.

## Differences and limits

No changes to Ah Jun's approved story or real balance model. The new forest layouts and non-latching switches, one-hit FPS health and equipment choices, passive sunflower charging, new runner scoring/scenery and original vehicle/plant artwork are intentional responses to this request. This is a custom lightweight browser game collection, not the original commercial game engines or assets.

Full unaided FPS campaign combat, competitive balance, every aim angle and hardware/browser combination were not exhaustively tested. Full forest traversal was tested in relaxed mode; standard/hard laser timing and shorter deadlines require further human playtesting. No deliberate irreversible softlocks were added. Mobile tests use Edge touch emulation, not a physical phone. Distinct art is original rather than copied commercial icons. New arcade scores never add money or bypass clues in the investigation.
