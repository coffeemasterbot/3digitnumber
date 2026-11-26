import { ONCOMING_SPEED, ROUTE_SPACING, routeSegment } from './runner-rules.mjs';

export const RUNNER_MODES = ['practice','mission','endless','seeded'];
export const EXPEDITION_KEY = 'runner-expeditions-v1';

// Each module lists [lane, forward offset in metres, obstacle, train variant].
// Leave a continuous ground lane, even when a faster roof route is available.
export const COURSES = [
  {id:'street-exit',district:'street',slots:[[-2,0,'block','ramp'],[-2,8,'block','car'],[-2,16,'block','car'],[0,5,'crate'],[0,30,'jump']]},
  {id:'shop-awning',district:'street',slots:[[2,0,'block','ramp'],[0,7,'slide'],[2,8,'block','car'],[0,33,'jump']]},
  {id:'market-crates',district:'street',slots:[[-2,1,'crate'],[2,9,'jump'],[-2,29,'crate'],[2,37,'sign']]},
  {id:'night-delivery',district:'street',slots:[[0,0,'block','low'],[2,8,'crate'],[0,15,'block','rise'],[0,23,'block','car']]},
  {id:'receipt-lane',district:'street',slots:[[-2,0,'jump'],[0,8,'hurdle'],[-2,26,'slide'],[0,34,'crate']]},
  {id:'bookshop-lane',district:'street',slots:[[2,0,'block','ramp'],[2,8,'block','car'],[0,16,'sign'],[2,38,'crate']]},
  {id:'station-concourse',district:'station',slots:[[0,0,'block','ramp'],[0,8,'block','car'],[0,16,'block','car'],[-2,16,'gap']]},
  {id:'station-local',district:'station',slots:[[-2,0,'block','ramp'],[-2,8,'block','car'],[0,9,'moving','car']]},
  {id:'station-express',district:'station',slots:[[2,0,'moving','car'],[0,10,'block','ramp'],[0,18,'block','car']]},
  {id:'station-gantry',district:'station',slots:[[0,1,'sign'],[-2,10,'hurdle'],[0,25,'slide'],[-2,38,'jump']]},
  {id:'station-interchange',district:'station',slots:[[-2,0,'block','ramp'],[0,1,'block','ramp'],[-2,8,'block','car'],[0,9,'block','car'],[0,17,'block','car']]},
  {id:'station-luggage',district:'station',slots:[[2,0,'crate'],[-2,8,'block','low'],[-2,23,'block','rise'],[-2,31,'block','car'],[2,29,'slide']]},
  {id:'bridge-entry',district:'bridge',slots:[[-2,0,'block','ramp'],[-2,8,'block','car'],[-2,16,'block','car'],[0,5,'gap'],[0,29,'slide']]},
  {id:'pier-paths',district:'bridge',slots:[[2,0,'block','low'],[2,15,'block','rise'],[2,23,'block','car'],[0,9,'hurdle']]},
  {id:'harbour-overpass',district:'bridge',slots:[[0,0,'block','ramp'],[0,8,'block','car'],[2,11,'jump'],[0,38,'sign']]},
  {id:'river-service',district:'bridge',slots:[[-2,2,'moving','car'],[0,13,'block','ramp'],[0,21,'block','car']]},
  {id:'canal-gap',district:'bridge',slots:[[2,1,'gap'],[0,9,'crate'],[2,25,'jump'],[0,39,'gap']]},
  {id:'bridge-last-span',district:'bridge',slots:[[-2,0,'block','low'],[-2,15,'block','rise'],[-2,23,'block','car'],[2,15,'slide']]},
  {id:'yard-cabins',district:'yard',slots:[[0,2,'crate'],[2,7,'hurdle'],[0,25,'jump'],[2,36,'crate']]},
  {id:'yard-switch',district:'yard',slots:[[0,0,'moving','car'],[-2,9,'block','ramp'],[-2,17,'block','car']]},
  {id:'repair-shed',district:'yard',slots:[[2,1,'block','ramp'],[2,9,'block','car'],[-2,15,'crate'],[2,36,'slide']]},
  {id:'tools-platform',district:'yard',slots:[[0,0,'block','low'],[0,15,'block','rise'],[0,23,'block','car'],[-2,17,'sign']]},
  {id:'containers',district:'yard',slots:[[-2,1,'crate'],[2,4,'sign'],[-2,25,'crate'],[2,32,'hurdle']]},
  {id:'freight-pass',district:'yard',slots:[[-2,3,'moving','car'],[2,11,'block','ramp'],[2,19,'block','car'],[2,27,'block','car']]},
  {id:'tunnel-portal',district:'tunnel',slots:[[0,6,'slide'],[2,7,'sign'],[0,29,'sign'],[2,34,'jump']]},
  {id:'tunnel-rest-bay',district:'tunnel',slots:[[-2,0,'sign'],[2,7,'slide'],[-2,23,'gap'],[2,32,'sign']]},
  {id:'signal-box',district:'tunnel',slots:[[0,0,'block','ramp'],[0,8,'block','car'],[-2,11,'slide'],[0,37,'sign']]},
  {id:'tunnel-arrival',district:'tunnel',slots:[[2,0,'moving','car'],[-2,9,'block','low'],[-2,24,'block','rise'],[-2,32,'block','car']]},
  {id:'tunnel-maintenance',district:'tunnel',slots:[[-2,1,'hurdle'],[2,8,'crate'],[-2,29,'slide'],[2,32,'gap']]},
  {id:'tunnel-exit',district:'tunnel',slots:[[0,2,'sign'],[2,9,'block','ramp'],[2,17,'block','car'],[0,32,'jump']]},
];

export const RUNNER_MISSIONS = [
  {id:'street',title:'街坊三線',target:120,courses:[0,4],goal:'在三條路線之間換線，留意散紙同安全路面。'},
  {id:'market',title:'市集障礙',target:190,courses:[2,1,5],goal:'低欄跳過，高欄滑鏟。'},
  {id:'station',title:'月台車頂',target:230,courses:[6,10,11],goal:'踏上斜坡，沿車頂接駁位前進。'},
  {id:'express',title:'迎面班次',target:230,courses:[7,8,9],goal:'留意迎面列車燈，同車頂路徑分開。'},
  {id:'harbour',title:'海旁分路',target:310,courses:[12,13,14,16],goal:'揀地面安全線，或者用斜坡接上技術路線。'},
  {id:'tunnel',title:'隧道限高',target:310,courses:[24,25,26,28],goal:'提早留意高欄，適時滑鏟。'},
  {id:'yard',title:'車場裝備',target:390,courses:[18,19,20,21,23],goal:'用 B 放滑板；拾取滑板可補回用量。'},
  {id:'all-lines',title:'五區全線',target:670,courses:[3,10,7,15,17,22,27,29],goal:'綜合換線、列車同道具操作。'},
];

export function normalizeSeed(value) {
  return typeof value === 'string' && /^[A-Z0-9-]{1,24}$/i.test(value.trim()) ? value.trim().toUpperCase() : null;
}

export function runnerLaunch(mode = 'practice', mission = 0, seed = '') {
  if (mode === 'mission' && Number.isInteger(mission) && RUNNER_MISSIONS[mission]) return {mode,mission,seed:''};
  if (mode === 'endless') return {mode,mission:0,seed:normalizeSeed(seed) || 'LOCAL'};
  const valid = normalizeSeed(seed);
  return mode === 'seeded' && valid ? {mode,mission:0,seed:valid} : {mode:'practice',mission:0,seed:''};
}

function hash(code, index) {
  let value = 2166136261 ^ Math.imul(index + 1, 1013904223);
  for (const character of code) value = Math.imul(value ^ character.charCodeAt(0), 16777619);
  return value >>> 0;
}

function courseAt(launch, index) {
  if (launch.mode === 'mission') {
    const itinerary = RUNNER_MISSIONS[launch.mission].courses;
    return COURSES[itinerary[index % itinerary.length]];
  }
  const district = (Math.floor(index / 3) + hash(launch.seed, 0)) % 5;
  return COURSES[district * 6 + hash(launch.seed, index + 1) % 6];
}

export function runnerCourse(launch, index, anchor, playerZ, speed) {
  if (launch.mode === 'practice') return routeSegment(index, anchor, playerZ, speed);
  const route = courseAt(launch,index);
  return route.slots.map(([lane,offset,type,variant]) => {
    const lead = type === 'moving' ? ONCOMING_SPEED * Math.max(0,(playerZ-anchor)/speed) : 0;
    return {lane,type,variant,z:anchor-offset-lead};
  });
}

export function runnerDistrict(launch, chunk, size) {
  if (launch.mode === 'practice') return ['street','station','bridge','yard','tunnel'][Math.floor(chunk/4)%5];
  return courseAt(launch, Math.max(0, Math.floor(((chunk + .5) * size - 30) / ROUTE_SPACING))).district;
}

export function runnerGoal(launch) {
  if (launch.mode === 'mission') return {distance:RUNNER_MISSIONS[launch.mission].target,time:null};
  return {distance:null,time:launch.mode === 'endless' ? null : 90};
}

export function readExpeditions(storage) {
  const empty = {version:1, unlocked:0, cleared:[], best:{}};
  try {
    const data = JSON.parse(storage.getItem(EXPEDITION_KEY));
    if (data?.version !== 1 || !Number.isInteger(data.unlocked) || data.unlocked < 0 || data.unlocked >= RUNNER_MISSIONS.length) return empty;
    const best = Object.fromEntries(Object.entries(data.best ?? {})
      .filter(([key,value]) => /^(endless|mission-[0-7]|seed-[A-Z0-9-]{1,24})$/.test(key) && Number.isSafeInteger(value) && value >= 0)
      .slice(-73));
    // Earlier records only unlocked the next mission after a successful finish.
    const knownClears = Array.isArray(data.cleared) ? data.cleared : Array.from({length:data.unlocked}, (_, index) => index);
    const cleared=[...new Set(knownClears.filter(index => Number.isInteger(index) && index >= 0 && index <= data.unlocked))].sort((a,b)=>a-b);
    return {version:1, unlocked:data.unlocked, cleared, best};
  } catch { return empty; }
}

export function expeditionId(launch) {
  if (launch.mode === 'seeded') return 'seed-' + launch.seed;
  if (launch.mode === 'mission') return 'mission-' + launch.mission;
  return launch.mode;
}

export function expeditionResult(progress, launch, result) {
  if (launch.mode === 'practice') return progress;
  const id = expeditionId(launch);
  const score = Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, Math.floor(result.score) || 0));
  const best = {...progress.best, [id]:Math.max(progress.best[id] ?? 0,score)};
  const seeds = Object.keys(best).filter(key => key.startsWith('seed-'));
  for (const old of seeds.slice(0,-64)) delete best[old];
  const unlocked = launch.mode === 'mission' && result.completed ? Math.max(progress.unlocked,Math.min(launch.mission+1,RUNNER_MISSIONS.length-1)) : progress.unlocked;
  const knownClears = progress.cleared ?? [];
  const cleared = launch.mode === 'mission' && result.completed && !knownClears.includes(launch.mission)
    ? [...knownClears,launch.mission].sort((a,b)=>a-b) : knownClears;
  return {version:1,unlocked,cleared,best};
}
