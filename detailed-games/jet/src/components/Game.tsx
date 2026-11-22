'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Difficulty } from '@/types/game';
import { CANVAS_WIDTH, CANVAS_HEIGHT, MAX_LIVES } from '@/utils/constants';
import { useGameEngine } from '@/hooks/useGameEngine';
import { completedCourses, type Tool } from '@/utils/courses';
import StartScreen from './StartScreen';
import GameOverScreen from './GameOverScreen';
import PauseMenu from './PauseMenu';
import HUD from './HUD';
import { ReviveCard } from './ReviveCard';
import MobileControls from './MobileControls';

export default function Game() {
  // ── User preferences ──────────────────────────
  const demoTarget = (window as any).arcadeTest?.target;
  const demoMission = /^mission-([1-8])$/.exec(demoTarget ?? '');
  const [mode,setMode]=useState(demoMission?'mission':demoTarget?'trial':'endless');
  const [vehicle,setVehicle]=useState(!demoMission&&demoTarget||'mecha');
  const [mission,setMission]=useState(demoMission ? Number(demoMission[1]) - 1 : 0);
  const [seed,setSeed]=useState('HARBOR');
  const [tools,setTools]=useState<Tool[]>([]);
  const difficulty:Difficulty='medium';
  const [soundEnabled, setSoundEnabled] = useState(()=>{try{return localStorage.getItem('jet-sound-enabled')==='true'}catch{return false}});

  const {
    canvasRef,
    uiState,
    startGame,showStart,revive,settle,
    togglePause,
    setThrusting,
  } = useGameEngine(difficulty, soundEnabled,mode,vehicle,mission,seed,tools);
  let completed:string[]=[];
  try{completed=completedCourses(localStorage)}catch{}

  (window as any).detailedUIState=uiState;

  // Track if current game over is a new high score
  const isNewHighScore =
    uiState.gameState === 'gameover' &&
    uiState.score > 0 &&
    uiState.score >= uiState.highScore &&
    uiState.highScore > 0;

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => {const next=!prev;try{localStorage.setItem('jet-sound-enabled',String(next))}catch{}return next});
  }, []);

  useEffect(() => {
    if (uiState.gameState === 'playing') canvasRef.current?.focus({ preventScroll: true });
  }, [uiState.gameState, canvasRef]);
  // ── Canvas responsiveness ─────────────────────
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const parent = wrapperRef.current?.parentElement;
    if (!parent) return;
    const measure = () => {
      const maxW = parent.clientWidth - 16;  // 8px padding each side
      const maxH = parent.clientHeight - 16;
      const scaleX = maxW / CANVAS_WIDTH;
      const scaleY = maxH / CANVAS_HEIGHT;
      if (maxW > 0 && maxH > 0) setScale(Math.min(1.7, scaleX, scaleY));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(parent);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
    >
      {/* ── Scaled canvas wrapper ──────────────── */}
      <div
        ref={wrapperRef}
        className="relative"
        style={{
          width:  CANVAS_WIDTH  * scale,
          height: CANVAS_HEIGHT * scale,
          transformOrigin: 'center',
        }}
      >
        {/* Workshop cabinet frame */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-30"
          style={{
            boxShadow: '0 0 0 1px #927050, 0 8px 20px #30231b40',
            borderRadius: '1rem',
          }}
        />

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          tabIndex={-1}
          aria-label="飛行場，按住空白鍵或觸控上升，放開下降"
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          style={{
            display: 'block',
            borderRadius: '1rem',
            width:  CANVAS_WIDTH  * scale,
            height: CANVAS_HEIGHT * scale,
          }}
        />

        {/* ── Overlays ────────────────────────── */}
        <AnimatePresence>
          {uiState.gameState === 'start' && (
            <StartScreen
              key="start" mode={mode} vehicle={vehicle} setMode={setMode} setVehicle={setVehicle}
              mission={mission} setMission={setMission} seed={seed} setSeed={setSeed}
              tools={tools} setTools={setTools} completed={completed}
              onStart={startGame}
              highScore={uiState.highScore}
              soundEnabled={soundEnabled}
              onSoundToggle={toggleSound}
            />
          )}

          {uiState.gameState==='revive' && <ReviveCard available={uiState.coins} onRevive={revive} onFinish={settle} />}
          {uiState.gameState === 'gameover' && (
            <GameOverScreen
              key="gameover"
              score={uiState.score}
              highScore={uiState.highScore}
              distance={uiState.distance}
              coins={uiState.coins}
              isNewHighScore={isNewHighScore}
              soundEnabled={soundEnabled}
              onSoundToggle={toggleSound}
              onRestart={startGame}
              onMenu={showStart}
              course={uiState.course}
              practice={mode==='practice'}
            />
          )}

          {uiState.gameState === 'paused' && (
            <PauseMenu
              key="pause"
              onResume={togglePause}
              onRestart={startGame}
              onMenu={showStart}
              soundEnabled={soundEnabled}
              onSoundToggle={toggleSound}
            />
          )}
        </AnimatePresence>

        {/* ── HUD (shown during play + pause) ─── */}
        {uiState.gameState === 'playing' && (
          <HUD
            score={uiState.score}
            highScore={uiState.highScore}
            distance={uiState.distance}
            coins={uiState.coins}
            lives={uiState.lives}
            maxLives={MAX_LIVES}
            activePowerUp={uiState.activePowerUp}
            powerUpTimeLeft={uiState.powerUpTimeLeft}
            soundEnabled={soundEnabled}
            onSoundToggle={toggleSound}
            onPause={togglePause}
            course={uiState.course}
          />
        )}

        {/* ── Mobile touch controls ─────────────── */}
        {uiState.gameState === 'playing' && <MobileControls onThrustChange={setThrusting} />}
      </div>

      {/* ── Bottom hints (desktop only) ─────────── */}
    </div>
  );
}
