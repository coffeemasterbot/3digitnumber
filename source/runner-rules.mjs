export const POWER_DURATION={board:10,shoes:12,magnet:8,double:12};
export function travelPoints(distance,multiplier=1){return Math.max(0,distance)*(multiplier===2?2:1)}
export const RAMP_LENGTH=7, ROOF_HEIGHT=3.12, ONCOMING_SPEED=9;
const base={width:1.85,roofHeight:ROOF_HEIGHT,front:1,rear:-7,rampLength:RAMP_LENGTH,approachHeight:0};
const geometry={ramp:base,car:{...base,rampLength:0},low:{...base,roofHeight:2.15},rise:{...base,approachHeight:2.15}};
export function trainGeometry(type,variant='ramp'){return type==='moving'?geometry.car:geometry[variant]??base}
const train=o=>o.type==='block'||o.type==='moving';
function surface(o,localZ){
 const g=trainGeometry(o.type,o.variant);
 if(localZ<g.rear||localZ>g.front+g.rampLength)return null;
 if(localZ<=g.front)return g.roofHeight;
 return g.approachHeight+(g.roofHeight-g.approachHeight)*(1-(localZ-g.front)/g.rampLength);
}
export function trainSupport(o,x,z,feet,previousZ=z){
 if(!train(o)||Math.abs(o.lane-x)>trainGeometry(o.type,o.variant).width/2+.12)return 0;
 const h=surface(o,z-o.z);if(h===null)return 0;
 const g=trainGeometry(o.type,o.variant),previousLocal=previousZ-o.z;
 const previous=previousLocal>g.front+g.rampLength&&g.rampLength?g.approachHeight:surface(o,previousLocal);
 // Contact on the previous sample permits a continuous ascent even at max speed.
 return feet+.23>=h||(previous!==null&&feet+.23>=previous)?h:0;
}
export function obstacleHit(o,x,z,feet,sliding){
 if(Math.abs(o.lane-x)>(train(o)?trainGeometry(o.type,o.variant).width/2+.12:.96))return false;
 if(train(o)){const h=surface(o,z-o.z);return h!==null&&feet<h-.16}
 if(Math.abs(o.z-z)>1.3)return false;
 if(o.type==='jump'||o.type==='gap')return feet<.7;
 if(o.type==='crate')return feet<1.1;
 if(o.type==='hurdle')return feet<1.4;
 return (o.type==='slide'||o.type==='sign')&&!sliding&&feet<2.35;
}
function span(o){
 if(!train(o))return [o.z-1.4,o.z+1.4];
 const g=trainGeometry(o.type,o.variant);return [o.z+g.rear,o.z+g.front+g.rampLength];
}
export function overlapsAirCorridor(obstacle,{near,far,duration}){
 const [start,end]=span(obstacle);
 const drift=obstacle.type==='moving'?ONCOMING_SPEED*duration:0;
 return -end-drift<=far&&-start>=near;
}
export function canSpawnObstacle(existing,candidate,playerZ=0,minPlayerSpeed=10){
 const [lo,hi]=span(candidate),v=candidate.type==='moving'?ONCOMING_SPEED:0;
 return !existing.some(o=>{
  if(o.lane!==candidate.lane)return false;
  if(!train(o)&&!train(candidate)&&Math.abs(o.z-candidate.z)<20)return true;
  const [a,b]=span(o),w=o.type==='moving'?ONCOMING_SPEED:0;
  // Retire each occupied interval after its tail has passed the runner.
  const horizon=Math.max(0,Math.min((playerZ+10-lo)/(v+minPlayerSpeed),(playerZ+10-a)/(w+minPlayerSpeed)));
  return lo<b-.001+Math.max(0,(w-v)*horizon)&&hi>a+.001+Math.min(0,(w-v)*horizon);
 });
}
// Each row reserves one continuous ground lane. Between rows there is at least
// 24 m to change lanes even at 30 m/s. Offsets measure forward track distance.
const patterns=[
 [[-2,0,'block','ramp'],[0,6,'crate'],[0,28,'jump']],
 [[2,0,'block','ramp'],[0,4,'slide'],[0,27,'hurdle']],
 [[0,0,'block','ramp'],[0,8,'block','car'],[0,16,'block','car'],[-2,14,'gap']],
 [[-2,0,'block','ramp'],[0,1,'block','ramp'],[-2,8,'block','car'],[0,9,'block','car'],[0,17,'block','car']],
 [[2,0,'block','ramp'],[2,8,'block','car'],[2,41,'slide'],[0,16,'jump']],
 [[-2,0,'block','ramp'],[-2,8,'block','car'],[0,6,'moving','car']],
 [[0,0,'block','low'],[0,15,'block','rise'],[0,23,'block','car'],[2,8,'sign']]
];
export const ROUTE_COUNT=patterns.length, ROUTE_SPACING=78;
export function routeSegment(index,anchor,playerZ,speed){
 return patterns[index%patterns.length].map(([lane,offset,type,variant])=>{
  // Lead an approaching service so it passes when the neighbouring roof is reached.
  const lead=type==='moving'?ONCOMING_SPEED*Math.max(0,(playerZ-anchor)/speed):0;
  return {lane,type,variant,z:anchor-offset-lead};
 });
}
