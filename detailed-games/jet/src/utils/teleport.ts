import type {Player,Missile} from '@/types/game';
import {CEILING_Y,GROUND_Y} from './constants';
import {rectIntersects} from './collision';

export function getTeleportPreview(p:Player, missiles:Missile[]){
 const heights=[CEILING_Y+12,(GROUND_Y+CEILING_Y-p.height)/2,GROUND_Y-p.height-10];
 const targets=heights.map((y,i)=>({id:['high','middle','low'][i],y,
  safe:!missiles.some(m=>m.active&&rectIntersects({...p,y},m))}));
 const choices=targets.filter(t=>t.safe&&Math.abs(t.y-p.y)>10);
 return {targets,nextId:(p.y<heights[1]?choices.at(-1):choices[0])?.id??null};
}

