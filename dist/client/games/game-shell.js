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
    const shouldResume = interrupted;
    interrupted = false;
    dialog.close();
    if (shouldResume && !playing()) resume();
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

(() => {
  const kind = document.body.dataset.game;
  const recordsKey = 'website-v1-records';
  const progressKey = 'website-v1-arcade';
  const parentOrigin = location.origin === 'null' ? '*' : location.origin;
  const bar = document.createElement('div');
  bar.className = 'shell-controls';
  bar.innerHTML = '<button id="shell-sound" type="button">音樂</button><span id="shell-timer"></span><button id="shell-full" type="button">全螢幕 ↗</button><button id="shell-back" type="button">遊戲選單</button>';
  document.body.append(bar);

  const sound = document.getElementById('shell-sound');
  const timer = document.getElementById('shell-timer');
  const full = document.getElementById('shell-full');
  const back = document.getElementById('shell-back');
  timer.hidden = kind !== 'garden';
  if (kind==='jet') sound.remove();
  else if(window.PFAPAudio)sound.replaceWith(window.PFAPAudio.controls());
  if(kind==='garden')document.querySelector('#pauseMenu h2')?.after(window.PFAPAudio.controls());

  full.onclick = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      full.textContent = '未能開啟全螢幕 · 重試';
    }
  };
  document.addEventListener('fullscreenchange', () => {
    full.textContent = document.fullscreenElement ? '離開全螢幕' : '全螢幕 ↗';
  });
  full.hidden = !document.fullscreenEnabled;

  function state() {
    if (kind !== 'garden') return window.detailedGameSummary?.() ?? window.detailedGameSnapshot?.() ?? {state:'start'};
    if (typeof gameState === 'undefined') return {state:'start'};
    const phase = gameState.isVictory ? 'victory' : gameState.isGameOver ? 'gameover' : gameState.isPaused ? 'paused' : 'playing';
    return {state:phase, score:gameState.score, wave:gameState.wave, mode:window.gardenMode?.()||'campaign'};
  }

  function readMap(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      if (value && typeof value === 'object' && !Array.isArray(value)) return value;
    } catch {}
    return {};
  }

  let lastPhase = 'start';
  let recorded = false;
  let lastRun;
  function flushResult(snapshot = state(), exiting = false) {
    const phase = String(snapshot.state).toLowerCase();
    if (kind === 'runner' && snapshot.runNumber != null) {
      if (lastRun !== snapshot.runNumber) recorded = false;
      lastRun = snapshot.runNumber;
    } else if (phase === 'playing' && ['start','menu','gameover','victory'].includes(lastPhase)) recorded = false;
    lastPhase = phase;
    const finished = phase === 'gameover' || phase === 'victory';
    const abandoned = !finished && exiting && kind === 'runner' && snapshot.distance > 0;
    if (window.arcadeTest || window.arcadeStory || recorded || (!finished && !abandoned)) return;
    if (abandoned) window.saveRunnerAttempt?.();
    recorded = true;
    const key = {runner:'coins',jet:'shipping',garden:'instalments'}[kind];
    if (!key) return;
    const score = Number.isFinite(snapshot.score) ? Math.max(0, Math.floor(snapshot.score)) : 0;
    const progress = readMap(progressKey);
    const records = readMap(recordsKey);
    const mode = snapshot.mode;
    const separateScore = kind==='garden'?mode&&mode!=='campaign':mode&&mode!=='practice';
    if (finished) progress[key] = {
      score,
      levels: snapshot.wave,
      completed: snapshot.completed === true || phase === 'victory' || (kind === 'runner' && (!snapshot.mode||snapshot.mode==='practice') && snapshot.powers?.time >= 90)
        || (kind === 'jet' && snapshot.mode === 'practice' && snapshot.seconds >= 90),
    };
    const previous = records[key];
    records[key] = {
      best: Math.max(Number.isFinite(previous?.best) ? previous.best : 0, separateScore?0:score),
      plays: (Number.isSafeInteger(previous?.plays) && previous.plays >= 0 ? previous.plays : 0) + 1,
    };
    try {
      localStorage.setItem(progressKey, JSON.stringify(progress));
      localStorage.setItem(recordsKey, JSON.stringify(records));
      if (parent !== window) parent.postMessage({type:'arcade-records-change'}, parentOrigin);
    } catch {}
  }
  // Give the launcher a chance to persist results before it removes or reloads an iframe.
  window.flushArcadeResult = () => flushResult(state(), true);
  back.onclick = () => {
    window.flushArcadeResult();
    if (parent !== window) parent.postMessage({type:'website-v1-back'}, parentOrigin);
    else location.href = '../../#play';
  };

  let activeTrack;
  function update() {
    const snapshot = state();
    flushResult(snapshot);
    if (!timer.hidden) {
      const text = '第 ' + (snapshot.wave || 1) + (snapshot.mode==='survival'?'':'/5') + ' 波';
      if (timer.textContent !== text) timer.textContent = text;
    }
    const audio = window.gameAudio;
    if (!audio || kind === 'jet') return;
    const intro = kind === 'garden' && document.getElementById('garden-intro');
    const picker = intro && !intro.hidden;
    const track = document.hidden || (!picker && snapshot.state !== 'playing')
      ? null : kind === 'runner' ? 'runner' : picker ? 'garden-picker'
        : gameState.boss?.z.element ? 'garden-boss' : 'garden-' + gardenLevel();
    if (!track && snapshot.state === "paused") window.PFAPAudio?.stopEffects();
    if (track === activeTrack) return;
    activeTrack = track;
    if (track) {
      audio.track(track);
      audio.resume();
    } else audio.pause();
  }
  if (kind === 'runner') {
    let previousTime = -Infinity, previousRun, pitch = 0;
    window.addEventListener('runner-coin', event => {
      const run = event.detail.split(':')[0];
      const now = performance.now();
      pitch = run === previousRun && now-previousTime < 1200 ? Math.min(12,pitch+1) : 0;
      previousTime = now;
      previousRun = run;
      window.PFAPAudio?.play('coin_pickup',pitch);
    });
  }
  window.addEventListener('arcade-game-state', update);
  document.addEventListener('visibilitychange', update);
  // The older Garden loop may change state without emitting an event.
  const uiTimer = setInterval(update, 500);
  window.addEventListener('pagehide', () => { window.flushArcadeResult(); clearInterval(uiTimer); });
  window.detailedMusicStatus = () => ({kind, muted:!window.PFAPAudio?.enabled("bgm"), running:!!activeTrack, track:activeTrack, state:state().state});

  if (kind === 'garden') {
    window.detailedGameSnapshot = () => ({
      ...state(), sun:gameState.sun, plants:gameState.plants.length, zombies:gameState.zombies.length,
    });
    window.addEventListener('load', () => {
      togglePause();
      document.getElementById('pauseMenu').style.display = 'none';
      const intro = document.createElement('div');
      intro.id = 'garden-intro';
      intro.innerHTML = '<section><small>五個世界 · 五關戰役</small><h1>守住你嘅花園</h1><p>先種陽光植物儲資源，再安排防線。</p><p>揀植物，再撳草地。撳陽光收集。</p><button id="garden-start" type="button">選關同揀植物</button></section>';
      document.body.append(intro);
      document.getElementById('garden-start').onclick = () => {
        intro.hidden=true;
        if(intro.dataset.next==='yes'){delete intro.dataset.next;resetGame()}
        else resumeGame();
        update();
      };
      update();
    });
  }
  window.addEventListener('load', () => installLandscapeGate({
    playing:() => state().state === 'playing',
    pause:() => kind === 'garden' ? togglePause() : window.orientationPause?.(),
    resume:() => kind === 'garden' ? resumeGame() : window.orientationPause?.(),
    leave:() => back.click(),
  }));
})();
