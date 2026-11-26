import { useEffect, useRef } from 'react';
import { useGameStore } from '../state/gameStore';
import type { PlayerHandle } from './Player';
import { POWER_DURATION } from '../../../../source/runner-rules.mjs';
import { extras } from './extras';

export const RUNNER_CONTROLS = [
  ['←', 'ArrowLeft', '向左換線'],
  ['↑', 'ArrowUp', '跳'],
  ['↓', 'ArrowDown', '滑'],
  ['→', 'ArrowRight', '向右換線'],
] as const;
type RunnerKey = typeof RUNNER_CONTROLS[number][1] | 'KeyB';
const keyboardAction = {
  ArrowLeft: 'moveLeft', KeyA: 'moveLeft',
  ArrowRight: 'moveRight', KeyD: 'moveRight',
  ArrowUp: 'jump', KeyW: 'jump', Space: 'jump',
  ArrowDown: 'slide', KeyS: 'slide',
} as const;

export function sendRunnerInput(key: RunnerKey) {
  window.dispatchEvent(new CustomEvent('runner-input', { detail: key }));
}

export function activateRunnerBoard() {
  const state = useGameStore.getState();
  if (state.gameState !== 'playing' || extras.airKind || extras.board > extras.time || state.boardCharges === 0) return;
  extras.board = extras.time + POWER_DURATION.board;
  extras.boardMounted = extras.time;
  useGameStore.setState({boardCharges:state.boardCharges - 1});
}

export function useInput(playerRef: React.RefObject<PlayerHandle | null>) {
  const touchStart = useRef<{ id: number; x: number; y: number } | null>(null);

  useEffect(() => {
    const trigger = (key: string) => {
      if (key === 'KeyB') {
        activateRunnerBoard();
        return;
      }
      const action = keyboardAction[key as keyof typeof keyboardAction];
      if (action && useGameStore.getState().gameState === 'playing') playerRef.current?.[action]();
    };
    const onKey = (e: KeyboardEvent) => {
      const key = e.code || e.key;
      if (!(key in keyboardAction) && key !== 'KeyB') return;
      if (useGameStore.getState().gameState !== 'playing' ||
          e.altKey || e.ctrlKey || e.metaKey ||
          (e.target instanceof Element && e.target.closest('input,textarea,select,[contenteditable],dialog,a,button'))) return;
      e.preventDefault();
      if (!e.repeat) trigger(key);
    };
    const onControl = (e: Event) => trigger((e as CustomEvent<RunnerKey>).detail);
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'touch' || !e.isPrimary ||
          !(e.target instanceof Element && e.target.closest('.runner-scene canvas')) ||
          useGameStore.getState().gameState !== 'playing') return;
      touchStart.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    };
    const onPointerUp = (e: PointerEvent) => {
      const start = touchStart.current;
      if (!start || e.pointerId !== start.id) return;
      touchStart.current = null;
      const dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
      trigger(Math.abs(dx) >= Math.abs(dy) ? dx < 0 ? 'ArrowLeft' : 'ArrowRight' : dy < 0 ? 'ArrowUp' : 'ArrowDown');
    };
    const cancelTouch = () => { touchStart.current = null; };

    window.addEventListener('keydown', onKey);
    window.addEventListener('runner-input', onControl);
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', cancelTouch);
    document.addEventListener('visibilitychange', cancelTouch);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('runner-input', onControl);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', cancelTouch);
      document.removeEventListener('visibilitychange', cancelTouch);
    };
  }, [playerRef]);
}
