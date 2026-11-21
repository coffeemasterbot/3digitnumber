export const runnerStyle = `
html:fullscreen .runner-app, body:fullscreen .runner-app {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
}
.runner-app{isolation:isolate;background:#192f31;color:#fff6df;outline:none}
.runner-scene{position:absolute;inset:0;touch-action:none}
.runner-scene canvas{touch-action:none}
.runner-loading{position:absolute;inset:auto 0 50%;width:max-content;margin:auto;padding:10px 16px;border-radius:8px;background:#253c48;color:#fff1d9;pointer-events:none}
.runner-hud{top:max(9px,env(safe-area-inset-top));left:max(10px,env(safe-area-inset-left));right:max(10px,env(safe-area-inset-right));z-index:3;gap:clamp(7px,2vw,24px);font-variant-numeric:tabular-nums;box-sizing:border-box}
.runner-hud .remaining{padding-inline-start:.5rem}
.runner-hud button{min-height:40px;padding:4px 11px;margin-left:0;color:#fff8e5}
.runner-hud button:first-of-type{margin-left:auto}
.runner-hud .short-label{display:none}
.runner-powers{top:72px;z-index:3}
.runner-powers span{grid-template-columns:28px minmax(0,1fr);align-items:center}
.runner-powers canvas{grid-row:1/4}
.runner-powers progress{grid-column:2;width:100%}
.runner-touch{z-index:4}
.runner-touch button{min-width:44px;min-height:44px}
.runner-overlay{z-index:10;backdrop-filter:none;padding:8px}
.runner-overlay section{width:min(100% - 16px,510px);padding:clamp(12px,3vh,28px);border-radius:13px}
.runner-overlay h1{margin:.3em 0;font-size:clamp(23px,5.2vw,40px);line-height:1.15}
.runner-overlay .runner-summary{display:flex;flex-wrap:wrap;gap:8px 16px;justify-content:center;border-block:1px dashed #8c7153;margin:8px 0;padding:7px;font-variant-numeric:tabular-nums;font-size:14px}
.runner-overlay .runner-summary b{color:#8e4125}
.runner-overlay .runner-summary span{color:#433125}
.runner-overlay .runner-lesson{font-weight:600;line-height:1.5}
.runner-overlay button{min-height:44px}
.runner-overlay p{font-size:14px;line-height:1.55;margin:6px 0}
.runner-modes{display:grid;grid-template-columns:auto minmax(0,1fr);gap:7px 11px;align-items:center;padding:10px 0;text-align:left}
.runner-modes label{font-size:14px;font-weight:700;color:#594b39}
.runner-modes select,.runner-modes input{width:100%;min-height:42px;border:1px solid #86734e;border-radius:6px;background:#fff8e6;color:#484335;padding:5px 9px;box-sizing:border-box;font:inherit}
.runner-modes p{grid-column:1/-1}
.runner-seed{display:flex;align-items:center;gap:8px}
.runner-seed input{min-width:0}
.runner-seed button{width:auto;min-height:42px;margin:0;white-space:nowrap;padding:5px 12px}
.runner-hud button:disabled,.runner-overlay button:disabled{opacity:.56;cursor:default}
.runner-overlay[role=dialog] section:focus{outline:none}
.runner-help{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:13px;font-weight:600;background:#213b33e8;padding:6px 12px;border-radius:5px;color:#fff8df;pointer-events:none}
.runner-impact{pointer-events:none;z-index:4}
body[data-game=runner] #shell-timer{display:none}
@media (hover:hover) and (pointer:fine){.runner-touch{display:none}}
@media (hover:none),(pointer:coarse){.runner-help{display:none}.runner-touch{bottom:max(44px,calc(env(safe-area-inset-bottom) + 36px));left:50%;right:auto;transform:translateX(-50%)}}
@media (max-height:450px){.runner-powers{top:60px}.runner-hud{padding:4px 9px}.runner-hud button{min-height:36px}.runner-overlay section{padding:10px 18px}.runner-overlay button{min-height:38px;padding:5px 14px}}
@media (max-width:530px){.runner-hud .long-label{display:none}.runner-hud .short-label{display:inline}.runner-hud .remaining{padding:0}.runner-overlay button{margin:4px}.runner-seed button{margin:0}.runner-powers{left:8px;gap:4px}.runner-powers span{font-size:12px}.runner-help{display:none}}
`;
