import {coinMotif,motifIndex} from './coin-patterns';
import type { Missile, PowerUpType, Rect } from '@/types/game';
import { CANVAS_WIDTH, CEILING_Y, GROUND_Y, MISSILE_HEIGHT, MISSILE_WIDTH } from './constants';
import { rectIntersects } from './collision';

export type Tool = 'forecast'|'magnet'|'eject'|'shield';
type Zone = 'high'|'mid'|'low';
export type CourseHazard = 'zapper'|'homing'|'rotor'|'piston'|'gate';
type Encounter = [second:number,hazard:CourseHazard,zone:Zone];
type CoinLine = [second:number,zone:Zone];
export interface Course {
  id: string;
  title: string;
  hint: string;
  seconds: number;
  coins: number;
  keepReserve?: boolean;
  vehicle?: PowerUpType;
  encounters: readonly Encounter[];
  deposits: readonly CoinLine[];
}

export const TOOL_OPTIONS: readonly {id:Tool;label:string;wins:number}[] = [
  {id:'forecast',label:'預警延長',wins:0},
  {id:'magnet',label:'起飛吸附',wins:2},
  {id:'eject',label:'安全彈出',wins:4},
  {id:'shield',label:'一次防護',wins:6},
];

export const COURSES: readonly Course[] = [
  {id:'basics',title:'起飛試航',hint:'按住向上、放開下降。拾至少 4 枚金幣並抵達終點。',seconds:18,coins:4,
    encounters:[[6,'zapper','high'],[11,'zapper','low']],deposits:[[1,'low'],[4,'mid'],[7,'high'],[12,'low']]},
  {id:'warning',title:'邊緣預警',hint:'留意前方鎖定，等提示出現先揀飛行高度。',seconds:22,coins:0,
    encounters:[[2,'homing','mid'],[7,'zapper','high'],[10,'homing','low'],[15,'homing','high']],deposits:[[2,'mid'],[6,'low'],[11,'high'],[16,'low']]},
  {id:'rotor',title:'旋轉電閘',hint:'避開旋轉電棒。見到它轉過中線，預先轉高度。',seconds:23,coins:0,
    encounters:[[2,'rotor','mid'],[7,'rotor','low'],[11,'zapper','high'],[15,'rotor','high']],deposits:[[2,'low'],[6,'high'],[10,'mid'],[15,'low']]},
  {id:'piston',title:'工房活塞',hint:'活塞會上下行，從行程另一邊通過。',seconds:24,coins:0,
    encounters:[[2,'piston','high'],[6,'piston','low'],[10,'piston','mid'],[14,'zapper','mid'],[17,'piston','low']],deposits:[[1,'mid'],[6,'high'],[10,'low'],[15,'mid']]},
  {id:'gravity',title:'翻轉走廊',hint:'駕駛重力裝置，點按翻轉。提早由上面或下面穿越。',seconds:25,coins:0,vehicle:'gravity',
    encounters:[[2,'gate','low'],[6,'zapper','high'],[10,'gate','mid'],[14,'piston','high'],[18,'gate','high']],deposits:[[1,'low'],[5,'high'],[11,'low'],[15,'high']]},
  {id:'blink',title:'瞬移走廊',hint:'睇住透明載具同落點標示，點按轉移。',seconds:26,coins:0,vehicle:'blink',
    encounters:[[2,'zapper','mid'],[6,'zapper','high'],[9,'gate','low'],[13,'rotor','mid'],[17,'gate','high'],[20,'zapper','low']],deposits:[[1,'low'],[7,'high'],[11,'mid'],[15,'low'],[19,'high']]},
  {id:'mix',title:'交錯防線',hint:'光閘、導彈同擺動活塞逐個嚟。每段留返轉向空間。',seconds:29,coins:0,
    encounters:[[2,'gate','mid'],[6,'homing','high'],[10,'piston','low'],[14,'rotor','low'],[18,'homing','mid'],[22,'gate','high']],deposits:[[1,'high'],[5,'low'],[11,'mid'],[15,'high'],[19,'low']]},
  {id:'reserve',title:'保留儲備',hint:'拾至少 12 枚金幣，保持儲備，靠一次航程飛抵終點。',seconds:34,coins:12,keepReserve:true,
    encounters:[[3,'rotor','high'],[7,'gate','low'],[11,'piston','mid'],[15,'homing','low'],[19,'zapper','high'],[23,'rotor','mid'],[27,'gate','high']],deposits:[[1,'low'],[5,'mid'],[9,'high'],[13,'low'],[17,'mid'],[21,'high'],[25,'low'],[30,'mid']]},
];

export function normalizeSeed(value: string) {
  return value.trim().toUpperCase().replace(/[^A-Z0-9-]/g,'').slice(0,24) || 'HARBOR';
}

export function seededCourse(value: string): Course {
  const id=normalizeSeed(value);
  let state=2166136261;
  for(const letter of id) state=Math.imul(state^letter.charCodeAt(0),16777619)>>>0;
  const choose=<T>(choices: readonly T[]): T => {
    state=(Math.imul(state,1664525)+1013904223)>>>0;
    return choices[Math.floor(state/4294967296*choices.length)];
  };
  const zones: readonly Zone[]=['high','mid','low'];
  const dangers: readonly CourseHazard[]=['zapper','homing','rotor','piston','gate'];
  return {
    id,title:'固定航線 '+id,hint:'45 秒內穿過障礙；用同一代碼可以重玩相同航線。',seconds:45,coins:0,
    encounters:Array.from({length:11},(_,i)=>[2+i*3.6,choose(dangers),choose(zones)]),
    deposits:Array.from({length:10},(_,i)=>[1+i*4,choose(zones)]),
  };
}

export function coursePassed(course: Course, ticks: number, collected: number, spent: number) {
  return ticks >= course.seconds*60 && collected >= course.coins && (!course.keepReserve || spent===0);
}

export function completedCourses(storage: Pick<Storage,'getItem'> | undefined) {
  try {
    const data = JSON.parse(storage?.getItem('jet-courses-v2') ?? '[]');
    return Array.isArray(data)?COURSES.map(x=>x.id).filter(id=>data.includes(id)):[];
  } catch {return []}
}

const zoneY = {high:114,mid:250,low:371};
export function courseCoinLine(zone: Zone, index = 0, seed = '') {
  return coinMotif(motifIndex(index,seed),zoneY[zone],7);
}

export function courseObstacle(hazard: CourseHazard, zone: Zone, speed: number, warningFrames: number): Missile {
  const shape=hazard==='homing'?undefined:hazard;
  const width=shape==='rotor'?90:shape==='piston'?36:shape==='gate'?20:shape==='zapper'?28:MISSILE_WIDTH;
  const height=shape==='rotor'?90:shape==='piston'?74:shape==='gate'?138:shape==='zapper'?92:MISSILE_HEIGHT;
  const y=Math.max(CEILING_Y+14,Math.min(GROUND_Y-height-10,zoneY[zone]-height/2));
  return {x:CANVAS_WIDTH-width,y,width,height,velocityX:-speed*1.17,velocityY:0,angle:0,type:hazard==='homing'?'homing':'horizontal',
    warningAlpha:warningFrames,active:true,warningFrames,hazard:shape??'missile',originY:y,travel:0};
}

export function courseMotion(m: Missile) {
  m.travel=(m.travel??0)+1;
  if(m.hazard==='rotor')m.angle+=.042;
  if(m.hazard==='piston'){
    const motion=(Math.sin(m.travel*.036)*.5+.5)*108-54;
    m.y=Math.max(CEILING_Y+6,Math.min(GROUND_Y-m.height-5,(m.originY??m.y)+motion));
  }
}

export function gateIsLive(m: Missile) {
  return m.hazard!=='gate'||((m.travel??0)%126)<78;
}

export function courseHazardHits(box: Rect, m: Missile) {
  if(!gateIsLive(m))return false;
  if(m.hazard!=='rotor')return rectIntersects(box,m);
  const cx=m.x+m.width/2,cy=m.y+m.height/2;
  const radius=Math.min(m.width,m.height)*.42;
  const dx=Math.cos(m.angle)*radius,dy=Math.sin(m.angle)*radius;
  const xmin=box.x+box.width*.2-6,xmax=box.x+box.width*.8+6,ymin=box.y+box.height*.2-6,ymax=box.y+box.height*.8+6;
  let start=0,end=1;
  const edges=[[-2*dx,cx-dx-xmin],[2*dx,xmax-cx+dx],[-2*dy,cy-dy-ymin],[2*dy,ymax-cy+dy]];
  for(const [rise,length] of edges){
    if(rise===0){if(length<0)return false}
    else if(rise<0)start=Math.max(start,length/rise);
    else end=Math.min(end,length/rise);
    if(start>end)return false;
  }
  return true;
}
