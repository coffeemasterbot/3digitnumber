import type {Player,Missile} from '@/types/game';
import {CEILING_Y,GROUND_Y} from './constants';
import {courseHazardHits} from './courses';

export const TELEPORT_PREVIEW_TICKS = 24;

export function nextTeleportHeight(p: Player, previous: number | undefined, random = Math.random) {
  const slots = Array.from({length:11}, (_, i) =>
    CEILING_Y + 10 + (GROUND_Y - p.height - CEILING_Y - 20) * i / 10);
  const choices = slots.filter(y => Math.abs(y - p.y) >= 24 && (previous === undefined || Math.abs(y - previous) >= 24));
  return choices[Math.floor(random() * choices.length)];
}

export function getTeleportPreview(p: Player, missiles: Missile[], y: number) {
  return {y, safe: !missiles.some(m => m.active && courseHazardHits({...p, y}, m))};
}

