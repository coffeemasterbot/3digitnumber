import React, { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { POWER_DURATION } from '../source/runner-rules.mjs';
import {
  EXPEDITION_KEY, RUNNER_MISSIONS, expeditionId, expeditionResult, normalizeSeed,
  readExpeditions, runnerGoal, runnerLaunch,
} from '../source/runner-campaign.mjs';
import { extras } from './runner/src/game/extras';
import { Game } from './runner/src/game/Game';
import { RUNNER_CONTROLS, sendRunnerInput } from './runner/src/game/useInput';
import { runnerStyle } from './runner/src/runner-style';
import { useGameStore, type RunnerLaunch, type RunnerMode } from './runner/src/state/gameStore';
import { RunnerIcon } from './runner/src/ui/components/RunnerIcon';

const BEST_KEY = 'runner-detailed-best';
const runnerWindow = window as Window & {
  orientationPause?: () => void;
  flushArcadeResult?: () => void;
  arcadeTest?: {target:string};
  arcadeRun?: {start(game:string,board:string,difficulty:string):void;finish(score:number,duration:number,distance:number):void};
  arcadeStory?: object;
  gameAudio?: {pause(): void};
};

function loadBest() {
  try { return Math.max(0, Number(localStorage.getItem(BEST_KEY)) || 0); }
  catch { return 0; }
}

let practiceBest = loadBest();
let expeditions = (() => {
  try { return readExpeditions(localStorage); }
  catch { return readExpeditions(undefined); }
})();
useGameStore.subscribe((state, previous) => {
  if (state.runNumber !== previous.runNumber) {
    const launch = state.launch;
    const board = launch.mode === 'mission' ? 'mission-' + (launch.mission + 1)
      : launch.mode === 'seeded' ? 'seed-' + launch.seed : launch.mode;
    runnerWindow.arcadeRun?.start('runner', board, 'standard');
  }
  if (state.gameState === previous.gameState) return;
  if (state.gameState === 'gameOver') {
    persistRunnerBest(state);
    runnerWindow.arcadeRun?.finish(state.score, extras.time, state.distance);
  }
  window.dispatchEvent(new CustomEvent('arcade-game-state', {
    detail: {state:state.gameState, mode:state.launch.mode, completed:state.completed, runNumber:state.runNumber},
  }));
});

function persistRunnerBest(state: ReturnType<typeof useGameStore.getState>, completed = state.completed) {
  if (!runnerWindow.arcadeTest && !runnerWindow.arcadeStory) {
    if (state.launch.mode === 'practice' && state.score > practiceBest) {
      practiceBest = state.score;
      try { localStorage.setItem(BEST_KEY, String(practiceBest)); }
      catch { /* Keep the in-session best if storage is unavailable. */ }
    } else if (state.launch.mode !== 'practice') {
      expeditions = expeditionResult(expeditions, state.launch, {...state, completed});
      try { localStorage.setItem(EXPEDITION_KEY, JSON.stringify(expeditions)); }
      catch { /* The campaign remains playable within this page. */ }
    }
  }
}

function togglePause() {
  const state = useGameStore.getState();
  if (state.gameState === 'playing') state.pauseGame();
  else if (state.gameState === 'paused' && !document.hidden) state.resumeGame();
}

runnerWindow.orientationPause = togglePause;
Object.assign(runnerWindow, {saveRunnerAttempt: () => {
  const state = useGameStore.getState();
  if (state.distance > 0) persistRunnerBest(state, false);
}});

function leaveGame() {
  runnerWindow.flushArcadeResult?.();
  if (parent === window) {
    location.href = '../../#play';
    return;
  }
  parent.postMessage({ type: 'website-v1-back' }, location.origin === 'null' ? '*' : location.origin);
}

class SceneBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() { return { failed: true }; }

  componentDidCatch(error: Error) {
    console.error('Runner could not initialise the 3D scene.', error);
    this.props.onFailure();
  }

  render() { return this.state.failed ? null : this.props.children; }
}

const powerLabels = { board: '滑板', shoes: '彈跳鞋', magnet: '磁石', double: '雙倍里程' } as const;
const powerKinds = ['board', 'shoes', 'magnet', 'double'] as const;
const modeLabels: Record<RunnerMode,string> = {
  practice:'90 秒練習', mission:'路線任務', endless:'無盡跑酷', seeded:'同碼挑戰',
};

function runStatus(launch: RunnerLaunch, distance: number) {
  const goal = runnerGoal(launch);
  if (goal.distance !== null) return '尚餘 ' + Math.max(0,Math.ceil(goal.distance-distance)) + ' 米';
  if (goal.time !== null) return '剩 ' + Math.max(0,goal.time - Math.floor(extras.time)) + ' 秒';
  return '無盡 · ' + Math.floor(extras.time) + ' 秒';
}

function RunHud({ onPause }: { onPause: () => void }) {
  const score = useGameStore(s => s.score);
  const coins = useGameStore(s => s.coins);
  const distance = useGameStore(s => s.distance);
  const phase = useGameStore(s => s.gameState);
  const launch = useGameStore(s => s.launch);
  const charges = useGameStore(s => s.boardCharges);
  const remaining = runStatus(launch,distance);
  const [pickup,setPickup] = useState<keyof typeof powerLabels|'jetpack'|'pogo'|null>(null);
  useEffect(()=>{
    if(phase!=='playing'){setPickup(null);return}
    let timer = 0;
    const acquired = (event:Event) => {
      clearTimeout(timer);
      setPickup((event as CustomEvent).detail);
      timer = window.setTimeout(()=>setPickup(null),1200);
    };
    window.addEventListener('runner-power-up',acquired);
    return ()=>{clearTimeout(timer);window.removeEventListener('runner-power-up',acquired)};
  },[phase]);

  return <>
    <div className="runner-hud" aria-label="跑局狀態">
      <span>散紙追蹤 <b>3D</b></span>
      <strong>{score} 分</strong>
      <span aria-label={'距離 ' + Math.floor(distance) + ' 米'}>{Math.floor(distance)} m</span>
      <span className="remaining">{remaining}</span>
      <span className="long-label">散紙 × {coins}</span><span className="short-label" aria-label={'散紙 ' + coins}>◉ {coins}</span>
      {phase === 'playing' && <>
        <button type="button" aria-label={'放滑板，剩餘 ' + charges + ' 次'} disabled={!charges || extras.board > extras.time || !!extras.airKind}
          onClick={() => sendRunnerInput('KeyB')}>滑板 {charges}</button>
        <button type="button" onClick={onPause}>暫停</button>
      </>}
    </div>
    {phase === 'playing' && <>
      <div className="runner-powers">
        {extras.airKind && <span><RunnerIcon kind={extras.airKind}/>{extras.airKind === 'pogo' ? '彈射' : '噴射飛行'}
          <progress aria-label="飛行剩餘時間" max={extras.airKind==='pogo'?2:8} value={extras.airRemaining}/>
          <small>{Math.ceil(extras.airRemaining)} 秒</small></span>}
        {powerKinds.filter(kind => extras[kind] > extras.time).map(kind => {
          const timeLeft = extras[kind] - extras.time;
          return <span key={kind}><RunnerIcon kind={kind}/>{powerLabels[kind]}
            <progress aria-label={powerLabels[kind] + '剩餘時間'} max={POWER_DURATION[kind]} value={timeLeft}/>
            <small>{Math.ceil(timeLeft)} 秒</small></span>;
        })}
      </div>
      {!extras.airKind && extras.nextBudgetGate-extras.distance<30 &&
        <div className="runner-budget-gate">左／中線留起 $5 · 右線花 $5，雙倍里程 3 秒</div>}
      {pickup&&<div className="runner-pickup" role="status"><RunnerIcon kind={pickup}/>
        <b>{pickup==='jetpack'?'噴射飛行':pickup==='pogo'?'彈射':powerLabels[pickup]}</b></div>}
      <div className="runner-touch" aria-label="觸控操作">
        {RUNNER_CONTROLS.map(([label, key, description]) => (
          <button type="button" aria-label={description} key={key} onClick={() => sendRunnerInput(key)}>{label}</button>
        ))}
      </div>
    </>}
    {(phase === 'dying' || extras.impact > 0) && <div className="runner-impact" aria-live="polite">
      {phase === 'dying' ? '撞到障礙！' : '滑板擋住咗撞擊'}
    </div>}
  </>;
}

const costLabels: Record<string, string> = {
  jump: '不必要支出', slide: '湊單誘惑', block: '固定承諾', moving: '衝動消費',
  crate: '囤貨支出', hurdle: '月底缺口', sign: '高息分期', gap: '資金缺口',
};
const costSteps: Record<string, string> = {
  jump: '下次付款前，先問自己係需要定想要。',
  slide: '免運湊單之前，先比較額外貨品同送貨費。',
  block: '列低每月固定支出，出糧先預留嗰筆錢。',
  moving: '見到限時優惠，可以等到聽日再決定。',
  crate: '買多件之前，先睇屋企仲有幾多存貨。',
  hurdle: '先留起下次出糧前要用嘅交通同飯錢。',
  sign: '揀分期之前，計清楚利息、手續費同總還款。',
  gap: '為突發開支預留一小筆緊急儲備。',
};

function App() {
  const phase = useGameStore(s => s.gameState);
  const [renderer, setRenderer] = useState(0);
  const [sceneReady, setSceneReady] = useState(false);
  const [renderProblem, setRenderProblem] = useState<'lost' | 'failed' | null>(null);
  const demoMission = /^mission-([1-8])$/.exec(runnerWindow.arcadeTest?.target ?? '');
  const [mode, setMode] = useState<RunnerMode>(demoMission ? 'mission' : 'endless');
  const [mission, setMission] = useState(demoMission ? Number(demoMission[1]) - 1 : expeditions.unlocked);
  const [code, setCode] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const codeRef = useRef<HTMLInputElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const running = phase === 'playing' || phase === 'dying';

  const focusGame = () => requestAnimationFrame(() => viewport.current?.focus({ preventScroll: true }));
  const start = (chosen?: RunnerLaunch) => {
    setSceneReady(false);
    if (!window.WebGLRenderingContext && !window.WebGL2RenderingContext) {
      setRenderProblem('failed');
      return;
    }
    if (renderProblem) {
      setRenderProblem(null);
      setRenderer(n => n + 1);
    }
    useGameStore.getState().startGame(chosen);
    focusGame();
  };
  const startSelected = () => {
    if (mode === 'seeded' && !normalizeSeed(code)) return;
    if (mode === 'mission' && mission > expeditions.unlocked) return;
    if (mode === 'endless') {
      start(runnerLaunch(mode,mission,Date.now().toString(36)) as RunnerLaunch);
      return;
    }
    start(runnerLaunch(mode,mission,code) as RunnerLaunch);
  };
  const copySeed = async () => {
    const seed = normalizeSeed(code);
    if (!seed) return;
    try {
      await navigator.clipboard.writeText(seed);
      setCopyStatus('已複製路線代碼。');
    } catch {
      codeRef.current?.focus();
      codeRef.current?.select();
      setCopyStatus('已選取代碼，可以按 Ctrl+C 複製。');
    }
  };

  useEffect(() => {
    if (!running || renderProblem) overlay.current?.focus({ preventScroll: true });
    else focusGame();
  }, [running, renderProblem]);

  const reportFailure = React.useCallback(() => {
    if (useGameStore.getState().gameState === 'playing') useGameStore.getState().pauseGame();
    runnerWindow.gameAudio?.pause();
    setRenderProblem('failed');
  }, []);
  const showScene = React.useCallback(() => setSceneReady(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || (e.target instanceof Element && e.target.closest('input,textarea,select,[contenteditable],dialog'))) return;
      if (e.code === 'KeyP' || e.code === 'Escape') togglePause();
    };
    const pauseIfHidden = () => {
      const state = useGameStore.getState();
      if (document.hidden && state.gameState === 'playing') state.pauseGame();
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('visibilitychange', pauseIfHidden);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('visibilitychange', pauseIfHidden);
    };
  }, []);

  useEffect(() => {
    const host = viewport.current;
    if (!host) return;
    const onLost = (e: Event) => {
      e.preventDefault();
      const state = useGameStore.getState();
      if (state.gameState === 'playing') state.pauseGame();
      runnerWindow.gameAudio?.pause();
      setRenderProblem('lost');
    };
    const onRestored = () => setRenderProblem(previous => previous === 'lost' ? null : previous);
    host.addEventListener('webglcontextlost', onLost, true);
    host.addEventListener('webglcontextrestored', onRestored, true);
    return () => {
      host.removeEventListener('webglcontextlost', onLost, true);
      host.removeEventListener('webglcontextrestored', onRestored, true);
    };
  }, []);

  const store = useGameStore.getState();
  const results = phase === 'gameOver';
  const completed = results && store.completed;
  const bestForRun = store.launch.mode === 'practice' ? practiceBest : expeditions.best[expeditionId(store.launch)] ?? 0;
  const lastMission = store.launch.mode === 'mission' && store.launch.mission === RUNNER_MISSIONS.length - 1;
  const obstacle = costLabels[extras.deathKind];
  const nextStep = costSteps[extras.deathKind] ?? '下次定個小額儲蓄目標，出糧後先留起嗰一份。';
  const paused = phase === 'paused';
  return <div className="runner-app" ref={viewport} tabIndex={-1} aria-label="散紙追蹤 3D">
    <style>{runnerStyle + 'html,body,#root{height:100%;margin:0}#root{display:grid;place-items:center;background:#102721}.runner-app{width:min(100vw,233.333333dvh);height:min(100dvh,75vw)}'}</style>
    {phase !== 'menu' && <div className="runner-scene">
      <SceneBoundary key={renderer} onFailure={reportFailure}>
        <Canvas frameloop={running && !renderProblem ? 'always' : 'demand'} dpr={1}
          camera={{ position: [0, 3.5, 7], fov: 68, near: .1, far: 130 }}
          gl={{ antialias: false, alpha: false }}
          fallback={<p>瀏覽器未能啟動 WebGL 3D。可返回大廳。</p>}>
          <color attach="background" args={['#acd6e5']}/>
          <Game onReady={showScene}/>
        </Canvas>
      </SceneBoundary>
    </div>}
    {running && !renderProblem && (sceneReady
      ? <RunHud onPause={togglePause}/>
      : <p className="runner-loading" role="status">載入賽道…</p>)}
    {(!running || renderProblem) && <div className="runner-overlay" role="dialog" aria-labelledby="runner-panel-title">
      <section ref={overlay} tabIndex={-1}>
        <h1 id="runner-panel-title">{renderProblem ? '3D 畫面暫停' : results ? (completed ? '順利完成跑局' : '今次跑局完結') : paused ? '休息一下' : '散紙追蹤 3D'}</h1>
        {renderProblem ? <p role="status">{renderProblem === 'lost' ? '3D 畫面中斷。你可以等畫面恢復、重試或返回大廳。' : '瀏覽器未能啟動 WebGL 3D。你可以重試，或者返回大廳。'}</p> : results ? <>
          <p>{store.launch.mode === 'mission' ? RUNNER_MISSIONS[store.launch.mission].title : modeLabels[store.launch.mode]}
            {store.launch.mode === 'seeded' ? ' · ' + store.launch.seed : ''}
            {completed && lastMission && expeditions.cleared.length === RUNNER_MISSIONS.length ? ' · 八條任務路線完成'
              : completed && !lastMission && store.launch.mode === 'mission' ? ' · 下一關已開放' : ''}</p>
          <div className="runner-summary">
            <span>得分 <b>{store.score}</b></span><span>距離 <b>{Math.floor(store.distance)} m</b></span>
            <span>散紙 <b>{store.coins}</b></span><span>最佳 <b>{bestForRun}</b></span>
          </div>
          {obstacle && <p>撞到「{obstacle}」。</p>}
          <p>沿途預留 ${extras.budget} · 小額支出 ${extras.spent}</p><p className="runner-lesson">{nextStep}</p>
        </> : paused ? <p>距離 {Math.floor(store.distance)} m · {runStatus(store.launch,store.distance)}</p> : <>
          <p>低欄跳過、高欄滑鏟。見斜坡可以跑上靜止列車。</p>
          <div className="runner-modes">
            {demoMission && <><label htmlFor="runner-mode">遊玩模式</label>
            <select id="runner-mode" value={mode} onChange={event => setMode(event.currentTarget.value as RunnerMode)}>
              {Object.entries(modeLabels).filter(([id])=>id==='endless'||(demoMission&&id==='mission')).map(([id,label]) => <option key={id} value={id}>{label}</option>)}
            </select></>}
            {mode === 'mission' && <>
              <label htmlFor="runner-mission">揀路線</label>
              <select id="runner-mission" value={mission} onChange={event => setMission(Number(event.currentTarget.value))}>
                {RUNNER_MISSIONS.map((item,index) => <option key={item.id} value={index} disabled={index > expeditions.unlocked}>
                  {index + 1}. {item.title}{index > expeditions.unlocked ? '（未開放）' : expeditions.cleared.includes(index) ? '（已完成）' : ''}
                </option>)}
              </select>
              <p>{RUNNER_MISSIONS[mission].target} 米 · {RUNNER_MISSIONS[mission].goal}</p>
            </>}
            {mode === 'seeded' && <>
              <label htmlFor="runner-seed">路線代碼</label>
              <div className="runner-seed">
                <input id="runner-seed" ref={codeRef} value={code} maxLength={24} placeholder="例如 HARBOUR-8"
                  onChange={event => { setCode(event.currentTarget.value); setCopyStatus(''); }} autoComplete="off"/>
                <button type="button" disabled={!normalizeSeed(code)} onClick={copySeed}>複製</button>
              </div>
              <p role="status">{copyStatus || '1–24 個英文字母、數字或連字號。同一代碼係同一路線。'}</p>
            </>}
          </div>
          <p className="runner-controls-copy">← → 換線、↑／空白跳、↓ 滑鏟、B 放滑板。手機可用畫面控制。</p>
          {mode === 'practice' && practiceBest > 0 && <p>最佳紀錄 <b>{practiceBest} 分</b></p>}
        </>}
        {paused && <span data-pfap-audio-slot ref={node=>{if(node&&!node.firstChild)node.append((window as any).PFAPAudio.controls());}}/>}
        {paused && <p className="runner-controls-copy">← → 換線、↑／空白跳、↓ 滑鏟、B 放滑板。手機可用畫面控制。</p>}
        <button type="button" className="start" disabled={phase === 'menu' && mode === 'seeded' && !normalizeSeed(code)}
          onClick={() => {
            if (paused && !renderProblem) togglePause();
            else if (phase === 'menu') startSelected();
            else start();
          }}>
          {renderProblem ? '重試 3D' : paused ? '繼續挑戰' : results ? '再跑一轉' : '開始跑酷'}
        </button>
        {results && <button type="button" onClick={() => {
          if (store.launch.mode === 'mission') setMission(expeditions.unlocked);
          store.resetGame();
        }}>返回準備畫面</button>}
        <button type="button" onClick={leaveGame}>返回遊戲選單</button>
      </section>
    </div>}
  </div>;
}

createRoot(document.getElementById('root')!).render(<App/>);
