/* The embedding page can be portrait even when the arcade iframe is wide. */
window.installLandscapeGate = function ({ playing, pause, resume, leave }) {
  const dialog = document.createElement('dialog');
  dialog.style.cssText = 'margin:auto;max-width:90vw;padding:24px;border:2px solid #ab8c50;border-radius:14px;background:#fff3d6;color:#254b3b;text-align:center';
  dialog.innerHTML = '<h2>請橫放裝置</h2><p>橫向畫面可以睇清路線同操作掣。</p><button type="button">繼續</button> <button type="button">返回選單</button>';
  const [next, back] = dialog.querySelectorAll('button');
  const heading = dialog.querySelector('h2');
  document.body.append(dialog);
  let host = window;
  try { if (window.top.document) host = window.top; } catch { /* cross-origin embeds use the local viewport */ }
  let interrupted = false;
  function portrait() { return host.innerHeight > host.innerWidth || innerHeight > innerWidth; }
  function update() {
    const blocked = portrait();
    if (blocked && playing()) { interrupted = true; pause(); }
    if (blocked || interrupted) {
      heading.textContent = blocked ? '請橫放裝置' : '準備好繼續？';
      next.hidden = blocked;
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) dialog.close();
  }
  function guard(event) {
    if (!dialog.open) return;
    if (event.type === 'keydown' && ['Tab','Enter','Space'].includes(event.code) && dialog.contains(event.target)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  next.onclick = () => {
    if (portrait()) return;
    interrupted = false;
    dialog.close();
    if (!playing()) resume();
    window.dispatchEvent(new Event('resize'));
  };
  back.onclick = leave;
  dialog.oncancel = event => event.preventDefault();
  const listeners = new AbortController();
  for (const target of new Set([window,host])) target.addEventListener('resize',update,{signal:listeners.signal});
  window.addEventListener('keydown',guard,{capture:true,signal:listeners.signal});
  update();
  return () => { listeners.abort(); dialog.remove(); };
};
