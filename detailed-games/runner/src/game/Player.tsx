import {forwardRef,useImperativeHandle,useRef} from 'react';
import {useFrame} from '@react-three/fiber';import {useGameStore} from '../state/gameStore';import {extras} from './extras';import {LANES,PLAYER_HEIGHT} from '../utils/constants';import type{Mesh}from'three';
export interface PlayerHandle{lane:number;isJumping:boolean;isSliding:boolean;position:{y:number};moveLeft:()=>void;moveRight:()=>void;jump:()=>void;slide:()=>void;checkCollision:(o:unknown[])=>boolean}
export const Player=forwardRef<PlayerHandle,any>((props,ref)=>{const meshRef=useRef<Mesh>(null);const state=useRef({lane:1,jump:0,slide:0,y:.9});const previousTime=useRef(0);
useImperativeHandle(ref,()=>({get lane(){return state.current.lane},get isJumping(){return state.current.jump>0},get isSliding(){return state.current.slide>0},get position(){return{y:state.current.y}},moveLeft(){state.current.lane=Math.max(0,state.current.lane-1)},moveRight(){state.current.lane=Math.min(2,state.current.lane+1)},jump(){if(state.current.jump<=0){state.current.slide=0;state.current.jump=extras.shoes>extras.time?.95:.6}},slide(){state.current.jump=0;state.current.slide=.65},checkCollision:()=>false}),[]);
useFrame((_,delta)=>{if(!meshRef.current||useGameStore.getState().gameState!=='playing')return;delta=Math.min(delta,.05);const s=state.current,m=meshRef.current;if(extras.time<previousTime.current){s.lane=1;s.jump=0;s.slide=0;s.y=.9;m.position.x=0}previousTime.current=extras.time;s.jump=Math.max(0,s.jump-delta);s.slide=Math.max(0,s.slide-delta);const duration=extras.shoes>extras.time?.95:.6;s.y=.9+(s.jump>0?Math.sin(Math.min(1,s.jump/duration)*Math.PI)*(extras.shoes>extras.time?2.4:1.5):0);m.position.x+=(LANES[s.lane]-m.position.x)*(1-Math.exp(-delta*22));m.position.y=s.slide>0?.3:s.y;m.scale.y=s.slide>0?.4:1;});
  return (
    <mesh ref={meshRef} position={[LANES[1], PLAYER_HEIGHT / 2, 0]}>
      <group>
        <mesh position={[0,.1,0]}><boxGeometry args={[.65,.85,.42]}/><meshStandardMaterial color="#de843f"/></mesh>
        <mesh position={[0,.8,0]}><sphereGeometry args={[.32,12,10]}/><meshStandardMaterial color="#e9b383"/></mesh>
        <mesh position={[0,.99,-.02]}><boxGeometry args={[.6,.25,.56]}/><meshStandardMaterial color="#382f2b"/></mesh>
        <mesh position={[0,.1,.32]}><boxGeometry args={[.43,.6,.22]}/><meshStandardMaterial color="#405d72"/></mesh>
        {[-1,1].map(k=><group key={k}><mesh position={[k*.23,-.59,0]}><boxGeometry args={[.22,.65,.26]}/><meshStandardMaterial color="#33485d"/></mesh><mesh position={[k*.23,-.88,-.08]}><boxGeometry args={[.28,.16,.48]}/><meshStandardMaterial color={extras.shoes>extras.time?'#44ddff':'#f1e5c5'}/></mesh><mesh position={[k*.46,.12,0]} rotation={[0,0,k*.12]}><boxGeometry args={[.2,.7,.24]}/><meshStandardMaterial color="#e9b383"/></mesh></group>)}
        {extras.board>extras.time&&<mesh position={[0,-.99,0]}><boxGeometry args={[1.25,.12,.6]}/><meshStandardMaterial color="#ffbd54" emissive="#ce6823" emissiveIntensity={.6}/></mesh>}
      </group>
    </mesh>
  );

});
Player.displayName="Player";
