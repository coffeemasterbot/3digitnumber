import * as THREE from 'three';
import {blocked,collides,move,route} from '../source/fps/rules.mjs';
import {buildRobotArt} from './fps-scene-art.mjs';

export const squadOrders={follow:'跟隨',hold:'守位',cover:'掩護',advance:'突破'};

export function makeSquad(scene,doors) {
  return [[-1.4,15.6],[1.6,15.2],[0,16.5]].map(([x,z],id)=>{
    const mesh=new THREE.Group(),art=buildRobotArt(mesh,id);
    mesh.position.set(x,0,z);
    art.chassis.color.set('#397c73');
    art.visor.material.color.set('#abf4d5');
    scene.add(mesh);
    return {id,x,z,mesh,art,plan:[],refresh:id*.2,action:1+id*.3,open:!collides(x,z,.33,doors)};
  });
}

export function tickSquad(squad,order,player,point,enemies,doors,dt,clock,onSupport) {
  for(const ally of squad){
    if(!ally.open)continue;
    const target=order==='advance'?point:order==='follow'
      ?{x:player.x+(ally.id-1)*1.16,z:Math.min(16.5,player.z+1.7+ally.id*.5)}:null;
    ally.refresh-=dt;
    if(target&&ally.refresh<=0){
      ally.refresh=.9+ally.id*.11;
      const distance=Math.hypot(ally.x-target.x,ally.z-target.z);
      ally.plan=distance<1.2?[]:blocked(ally.x,ally.z,target.x,target.z,doors)?route(ally.x,ally.z,target.x,target.z,doors):[target];
    }
    const step=target&&ally.plan[0];
    if(step){
      const dx=step.x-ally.x,dz=step.z-ally.z,distance=Math.hypot(dx,dz);
      if(distance<.45)ally.plan.shift();
      else{
        const rate=Math.min(2.8*dt,distance)/distance;
        move(ally,dx*rate,dz*rate,doors);
        ally.mesh.position.set(ally.x,0,ally.z);
        ally.mesh.rotation.y=Math.atan2(dx,dz);
      }
    }
    for(const [i,leg] of ally.art.legs.entries())leg.rotation.x=step?Math.sin(clock*9+i*Math.PI)*.34:0;
    ally.action-=dt;
    if(ally.action>0||!['cover','advance'].includes(order))continue;
    ally.action=1.7+ally.id*.12;
    const visible=enemies.find(enemy=>enemy.hp>0&&Math.hypot(ally.x-enemy.x,ally.z-enemy.z)<10
      &&!blocked(ally.x,ally.z,enemy.x,enemy.z,doors));
    if(visible)onSupport(ally,visible);
  }
}
