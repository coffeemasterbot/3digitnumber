import type {Coin} from '@/types/game';
import {CANVAS_WIDTH, CEILING_Y, GROUND_Y, COIN_SIZE} from './constants';

// Heart, three rising strokes, savings graph, and a wave.
const motifs = [
  [[0,0],[1,-1],[2,0],[3,-1],[4,0],[3,1],[2,2],[1,1]],
  [[0,2],[1,2],[2,2],[1,.5],[2,.5],[3,.5],[2,-1],[3,-1],[4,-1]],
  [[0,1.5],[1,1.5],[2,.5],[3,1],[4,-.5],[5,0],[6,-1.5]],
  [[0,0],[1,-1],[2,-1],[3,0],[4,1],[5,1],[6,0],[7,-1]],
] as const;

export function motifIndex(index: number, seed = '') {
  let offset = 0;
  for (const ch of seed) offset = (offset * 31 + ch.charCodeAt(0)) >>> 0;
  return (index + offset % motifs.length) % motifs.length;
}

export function coinMotif(index: number, height: number, count: number): Coin[] {
  const shape = motifs[index];
  const points = shape.slice(0,count);
  const step = 32;
  const top = Math.min(...points.map(([, y]) => y * step));
  const bottom = Math.max(...points.map(([, y]) => y * step));
  const baseY = Math.max(CEILING_Y + 8 - top,
    Math.min(GROUND_Y - COIN_SIZE - 8 - bottom, height));
  return points.map(([x,y]) => ({
    x:CANVAS_WIDTH + 20 + x*step,y:baseY+y*step,
    width:COIN_SIZE,height:COIN_SIZE,collected:false,collectedTimer:0,attracting:false,active:true,
  }));
}
