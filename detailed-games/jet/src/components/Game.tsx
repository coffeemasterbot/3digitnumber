'use client';

import { useRef, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Difficulty } from '@/types/game';
import { CANVAS_WIDTH, CANVAS_HEIGHT, MAX_LIVES } from '@/utils/constants';
import { useGameEngine } from '@/hooks/useGameEngine';
import type { Tool } from '@/utils/courses';
import StartScreen from './StartScreen';
import GameOverScreen from './GameOverScreen';
import PauseMenu from './PauseMenu';
import HUD from './HUD';
import { ReviveCard } from './ReviveCard';
import MobileControls from './MobileControls';

const tools: readonly Tool[] = [];

export default function Game() {
  // ── User preferences ──────────────────────────
  const demoTarget = (window as any).arcadeTest?.target;
  const demoMission = /^mission-([1-8])$/.exec(demoTarget ?? '');
  const mode=demoMission?'mission':demoTarget?'trial':'endless';
  const vehicle=!demoMission&&demoTarget||'mecha';
  const mission=demoMission?Number(demoMission[1])-1:0;
  const seed='HARBOR';
  const difficulty:Difficulty='medium';


  const {
    canvasRef,
    uiState,
    startGame,showStart,revive,settle,
    togglePause,
    setThrusting,
  } = useGameEngine(difficulty,mode,vehicle,mission,seed,tools);

  (window as any).detailedUIState=uiState;

  // Track if current game over is a new high score
  const isNewHighScore =
    uiState.gameState === 'gameover' &&
    uiState.score > 0 &&
    uiState.score >= uiState.highScore &&
    uiState.highScore > 0;


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
              key="start"
              onStart={startGame}
              highScore={uiState.highScore}

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

              onRestart={startGame}
              onMenu={showStart}
              course={uiState.course}
            />
          )}

          {uiState.gameState === 'paused' && (
            <PauseMenu
              key="pause"
              onResume={togglePause}
              onRestart={startGame}
              onMenu={showStart}

            />
          )}
        </AnimatePresence>

        {uiState.gameState === 'countdown' && <div className="absolute inset-0 z-20 grid place-items-center pointer-events-none" role="status" aria-label="起飛倒數"><b className="rounded-xl bg-black/70 px-6 py-3 text-5xl text-amber-100">{uiState.countdown}</b></div>}

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
