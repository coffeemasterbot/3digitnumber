export const POWER_DURATION={board:10,shoes:12,magnet:8,double:12};
export function obstacleHit(obstacle,lane,z,feet,sliding){if(Math.abs(obstacle.lane-lane)>.2)return false;const relative=obstacle.z-z;if(obstacle.type==='block'||obstacle.type==='moving'){return relative>=-1.4&&relative<=7.5&&feet<3.05}if(Math.abs(relative)>1.3)return false;if(obstacle.type==='jump')return feet<.7;if(obstacle.type==='slide')return !sliding&&feet<2.35;return false}
export function travelPoints(distance,multiplier=1){return Math.max(0,distance)*(multiplier===2?2:1)}
