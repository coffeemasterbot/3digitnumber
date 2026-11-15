# Astra Light — FPS controls and interface update

Supervisor brief, 2026-11-11. Baseline inspected: commit `5535f4d`.
Scope: the existing CSGO-inspired Budget Defence game. Preserve other games and the story.

## Findings from source inspection

- Fullscreen exists as the small `#fullscreen` symbol in the top HUD; V invokes `toggleFullscreen()`.
- L invokes `toggleLook()`, and settings contains `#setting-camera`.
- The visible `#look` button is inside `#touch`; desktop CSS hides the entire container for fine pointers. Therefore desktop users do not see that camera button.
- These are source findings; this brief does not claim the controls were browser-tested or that the live site matches this commit.

## Priority 1: Make view controls discoverable

Files: `source/fps/index.html`, `source/fps/fps.css`, `detailed-games/fps-entry.js`.

1. Label the existing fullscreen control with visible text: `全螢幕 V` / `退出全螢幕 V`. Keep an accessible name and synchronize it from the actual fullscreen state.
2. Put a separate desktop-visible camera control in the pause menu and settings: `連續瞄準（鎖定滑鼠）` / `拖動瞄準`. Do not put its only discoverable entry inside touch-only controls.
3. Show the current camera mode and explain: click Continue to capture the mouse; move to aim continuously; Esc pauses and releases it. Fullscreen and mouse lock are separate actions.
4. While locked, players use Esc to access menu buttons; do not require clicking a header control with an invisible, locked cursor.
5. On unsupported fullscreen or failed lock, give a readable message and working retry/fallback. Never show an active fullscreen/locked state based only on a saved preference.

Use the existing `toggleFullscreen`, `toggleLook`, `openSettings`, `resumeRound`, `retryPointerLock`, and `completePointerLock` flow. Retain the authoritative state in `source/fps/pointer-lock.mjs`.

Suggested helpers: `renderViewControls()` derives labels from actual fullscreen/lock state; `setCameraMode(mode)` centralizes explicit mode changes, saving and cancellation. If equivalent existing helpers suffice, use those instead. Ensure dynamically rendered controls receive event handlers through the existing delegation or otherwise without accumulating listeners.

## Priority 2: Update the playable interface

- Keep the original warm green/gold identity, Traditional Chinese text and readable contrast.
- Give top-center round/time the primary position; place 100-HP health at bottom-left and weapon/ammo/reload at bottom-right.
- Keep a compact pause/settings/fullscreen group in menus and an unobtrusive way to find it during play.
- Place concise objective text below the round timer. Show door `[E]` prompts only near an interactable door and defuse progress only near the bomb, with clear spacing.
- Put weapon selection in its own reserved row. Keep the crosshair and aiming area clear.
- Replace long start-screen instruction paragraphs with compact Move / Aim / Combat / Interaction groups. Keep all controls available through a Help panel.
- Add clear selected, hover, focus and disabled states. Separate touch movement from touch action controls and keep them clear of the health, ammo and defuse regions.
- Support 390×844 portrait, 844×390 landscape and 1280×720 desktop, plus the existing short embedded viewport. No clipped dialog actions or overlapping HUD regions. Dialogs can scroll internally.
- Add a small visible build identifier in the help/settings panel so deployed and locally tested versions can be distinguished.

## Verification and delivery

Test direct FPS URL and the homepage iframe. Test V/fullscreen button, Esc/resume, ten repeated lock cycles, settings changes, free-to-locked transition, right-click shooting, resize and fullscreen rejection. Preserve the recent fixes for repeated clicks and void-return Pointer Lock APIs. Run the existing pointer-lock regression tests and appropriate build checks; add behavioral regressions only where a new state transition requires them.

Rebuild the normal site, offline HTML and Pages output with `node build.cjs` and `node build-pages.cjs`. Record browser/version, actual tested viewports and any unavailable-device limitations. Compare screenshots to verify actual HUD spacing.

Report changed files, tests actually run, and the exact commit/build deployed. A GitHub push alone is not evidence that GitHub Pages or the original Sites URL has updated. Do not claim PVP is available until the separate real multiplayer implementation and backend are working; this UI task is not its implementation.

Keep `.env`, credentials and private keys ignored. Do not overwrite concurrent work. Submit the changes and evidence for supervisor review.
