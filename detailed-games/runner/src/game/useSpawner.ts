import {airCoinRows,forwardMotion} from '../../../../source/runner-air.mjs';
import {canSpawnObstacle, ONCOMING_SPEED, ROUTE_SPACING, trainGeometry, overlapsAirCorridor} from '../../../../source/runner-rules.mjs';
import {runnerCourse} from '../../../../source/runner-campaign.mjs';
import { useRef, useCallback } from 'react';
import { LANES, MAX_SPEED, SPEED_INCREMENT } from '../utils/constants';
import { useGameStore } from '../state/gameStore';
import type { ObstacleData } from './Obstacle';
import type { CoinData } from './Coin';

interface SpawnerState {
  obstacles: ObstacleData[];
  coins: CoinData[];
  lastSpawnZ: number;
  routeIndex: number;
}

let idCounter = 0;
const generateId = () => `item_${++idCounter}`;

export function useSpawner() {
  const stateRef = useRef<SpawnerState>({
    obstacles: [],
    coins: [],
    lastSpawnZ: -30, routeIndex: 0,
  });

  const reserved=useRef<{near:number,far:number,duration:number}|null>(null);
  const reserveAirRoute=useCallback((kind:'jetpack'|'pogo',distance:number,speed:number,start:number)=>{
    const duration=kind==='jetpack'?8:2;
    const near=distance-10,far=distance+forwardMotion(speed,duration+1.5,SPEED_INCREMENT,MAX_SPEED).distance;
    const corridor={near,far,duration:duration+1.5};
    reserved.current=corridor;
    const state=stateRef.current;
    state.obstacles=state.obstacles.filter(o=>!overlapsAirCorridor(o,corridor));
    const rows=airCoinRows(kind,start,speed,SPEED_INCREMENT,MAX_SPEED);
    const coins=rows.flatMap(row=>LANES.map(lane=>({
      id:generateId(),lane,z:-distance-row.ahead,y:row.y
    })));
    state.coins=state.coins.concat(coins);
    return {coins:state.coins,obstacles:state.obstacles};
  },[]);
  const spawn = useCallback((currentZ: number,speed: number,delta: number) => {
    const state=stateRef.current;
    for(const o of state.obstacles)if(o.type==='moving')o.z+=ONCOMING_SPEED*delta;
    const spawnAheadDistance=110;
    const despawnBehindDistance=12;
    while(state.lastSpawnZ>currentZ-spawnAheadDistance){
      const anchor=state.lastSpawnZ;
      const row=runnerCourse(useGameStore.getState().launch,state.routeIndex++,anchor,currentZ,speed);
      state.lastSpawnZ-=ROUTE_SPACING;
      const corridor=reserved.current;
      for(const data of row){
        const obstacle={...data,id:generateId()} as ObstacleData;
        const entersAirRoute=corridor&&overlapsAirCorridor(obstacle,corridor);
        if(entersAirRoute||!canSpawnObstacle(state.obstacles,obstacle,currentZ,speed))continue;
        state.obstacles.push(obstacle);
        if(obstacle.type==='block'){
          const g=trainGeometry(data.type,data.variant);
          for(const dz of [0,-4])state.coins.push({id:generateId(),lane:obstacle.lane,z:obstacle.z+dz,y:g.roofHeight+1.25});
        }
      }
      const clearLane=LANES.find(lane=>row.every(o=>o.lane!==lane));
      if(clearLane!==undefined)for(const offset of [1,5,9,13])state.coins.push({id:generateId(),lane:clearLane,z:anchor-offset,y:1.25});
    }
    // Despawn items behind player
    // Keep the same arrays unless membership changes. Movement uses object transforms.
    if(state.obstacles.some(o=>o.z-8 >= currentZ + despawnBehindDistance))
      state.obstacles = state.obstacles.filter(o=>o.z-8 < currentZ + despawnBehindDistance);
    if(state.coins.some(c=>c.z >= currentZ + despawnBehindDistance))
      state.coins = state.coins.filter(c=>c.z < currentZ + despawnBehindDistance);

    return {
      obstacles: state.obstacles,
      coins: state.coins,
    };
  }, []);

  const removeObstacle = useCallback((id: string) => {
    stateRef.current.obstacles = stateRef.current.obstacles.filter(o => o.id !== id);
  }, []);

  const removeCoin = useCallback((id: string) => {
    const coins=stateRef.current.coins;
    const index=coins.findIndex(c=>c.id===id);
    if(index<0)return false;
    coins.splice(index,1);
    return true;
  }, []);

  const reset = useCallback(() => {
    idCounter = 0;
    stateRef.current = {
      obstacles: [],
      // The opening collects before the first route fork and teaches the reward sound.
      coins: [5, 9, 13].map(ahead => ({ id: generateId(), lane: 0, z: -ahead, y: 1.25 })),
      lastSpawnZ: -30, routeIndex: 0,
    };
    reserved.current = null;
  }, []);

  return { spawn,reserveAirRoute, removeObstacle, removeCoin, reset };
}
