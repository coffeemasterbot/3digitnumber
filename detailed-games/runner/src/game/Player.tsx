import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial, type Group, type Mesh } from 'three';
import { useGameStore } from '../state/gameStore';
import { extras } from './extras';
import { LANES } from '../utils/constants';
import { runnerCharacter } from './runner-character';

const reducedMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion:reduce)').matches;
const freshPose = () => ({lane:1, jump:0, duration:.72, slide:0, y:.9, vy:0, surface:0, launch:-20});

export interface PlayerHandle {
  lane: number;
  isJumping: boolean;
  isSliding: boolean;
  position: {x:number; y:number};
  setSurface: (height: number) => void;
  moveLeft: () => void;
  moveRight: () => void;
  jump: () => void;
  slide: () => void;
  checkCollision: (o: unknown[]) => boolean;
}

export const Player = forwardRef<PlayerHandle>((_, ref) => {
  const root = useRef<Group>(null);
  const rig = useRef<Group>(null);
  const legs = useRef<Group[]>([]);
  const shins = useRef<Group[]>([]);
  const feet = useRef<Group[]>([]);
  const arms = useRef<Group[]>([]);
  const elbows = useRef<Group[]>([]);
  const board = useRef<Group>(null);
  const shadow = useRef<Mesh>(null);
  const flightPack = useRef<Group>(null);
  const pogo = useRef<Group>(null);
  const jumpRings = useRef<Group>(null);
  const movement = useRef(freshPose());
  const last = useRef(0);
  const landing = useRef(0);

  const art = useMemo(runnerCharacter, []);
  const material = useMemo(() => new MeshStandardMaterial({vertexColors:true, roughness:.76}), []);
  useEffect(() => () => {
    Object.values(art).forEach(mesh => mesh.dispose());
    material.dispose();
  }, [art, material]);

  function sync() {
    if (extras.time < last.current) {
      movement.current = freshPose();
      landing.current = 0;
      if (root.current) root.current.position.x = 0;
    }
    last.current = extras.time;
  }

  function moveLane(direction: number) {
    sync();
    const pose = movement.current;
    const lane = Math.min(2, Math.max(0, pose.lane + direction));
    if (lane !== pose.lane) (window as any).PFAPAudio?.play('lane_whoosh');
    pose.lane = lane;
  }

  useImperativeHandle(ref, () => ({
    setSurface(height) { movement.current.surface = height; },
    get lane() { return movement.current.lane; },
    get isJumping() { return movement.current.jump > 0; },
    get isSliding() { return movement.current.slide > 0; },
    get position() {
      return {x:root.current?.position.x ?? LANES[movement.current.lane], y:movement.current.y};
    },
    moveLeft() { moveLane(-1); },
    moveRight() { moveLane(1); },
    jump() {
      if (extras.airKind) return;
      sync();
      const s = movement.current;
      if (s.jump) return;
      const boosted = extras.shoes > extras.time;
      s.slide = 0;
      s.duration = boosted ? 1.6 : 1;
      s.vy = boosted ? 12 : 7.4;
      s.launch = boosted ? extras.time : -20;
      s.jump = s.duration;
      (window as any).PFAPAudio?.play('jump');
    },
    slide() {
      if (extras.airKind) return;
      sync();
      movement.current.jump = 0;
      movement.current.vy = -8;
      if (!movement.current.slide) (window as any).PFAPAudio?.play('slide');
      movement.current.slide = 1.1;
    },
    checkCollision: () => false,
  }), []);

  useFrame((_, delta) => {
    const actor = root.current;
    const frame = rig.current;
    if (!actor || !frame) return;
    sync();
    const s = movement.current;
    const state = useGameStore.getState();
    const dt = Math.min(delta, .05);
    if (state.gameState === 'playing') {
      if (extras.airKind) {
        s.slide = 0;
        s.jump = .01;
        s.y = .9 + extras.airHeight;
        s.vy = 0;
      } else {
        s.slide = Math.max(0, s.slide - dt);
        s.vy -= 15 * dt;
        s.y += s.vy * dt;
        const floor = .9 + s.surface;
        if (s.y <= floor && s.vy <= 0) {
          if (s.jump && s.vy < -2) landing.current = .19;
          s.y = floor;
          s.vy = 0;
          s.jump = 0;
        } else {
          s.jump = Math.max(.01, s.jump - dt);
        }
      }
      landing.current = Math.max(0, landing.current - dt);
      actor.position.x += (LANES[s.lane] - actor.position.x) * (1 - Math.pow(.74, dt * 60));
    }

    const inAir = s.jump > 0;
    const sliding = s.slide > 0;
    const riding = extras.board > extras.time;
    const boosted = extras.shoes > extras.time;
    const lift = 1 - Math.pow(.7, dt * 60);
    const swing = extras.distance * 1.21;
    const compression = landing.current ? Math.sin(Math.PI * landing.current / .19) * .11 : 0;
    const bounce = !inAir && !sliding && !riding && !reducedMotion ? .035 * Math.abs(Math.sin(swing)) : 0;
    actor.position.y = (sliding ? .38 + s.surface : s.y) + (riding ? .13 : 0) + bounce - compression;
    const leaningBack = Math.min(1, s.slide / .18);
    const lean = sliding ? .95 * leaningBack : extras.airKind==='jetpack' ? -.68 : inAir ? (s.vy > 0 ? .21 : -.16) : -.08;
    frame.rotation.x += (lean - frame.rotation.x) * lift;
    frame.rotation.z = (LANES[s.lane] - actor.position.x) * -.18;

    for (let i = 0; i < 2; i++) {
      const step = i ? swing + Math.PI : swing;
      const run = Math.sin(step);
      const leg = legs.current[i], shin = shins.current[i], foot = feet.current[i];
      if (leg && shin && foot) {
        const thigh = sliding ? 1.46 : inAir ? .56 + i * .48 : riding ? .24 : run * .7;
        const knee = sliding ? -.26 : inAir ? -.78 : riding ? -.4 : -Math.max(0, -run) * 1.09;
        leg.rotation.x += (thigh - leg.rotation.x) * lift;
        shin.rotation.x += (knee - shin.rotation.x) * lift;
        foot.rotation.x = sliding ? -.37 : riding ? .16 : -.22 * leg.rotation.x;
        foot.children[0].visible = !boosted;
        foot.children[1].visible = boosted;
      }
      const arm = arms.current[i], elbow = elbows.current[i];
      if (arm && elbow) {
        const armPose = sliding ? -.78 : inAir ? .82 + i * .26 : riding ? .33 : -.62 * run;
        arm.rotation.x += (armPose - arm.rotation.x) * lift;
        elbow.rotation.x = sliding ? .25 : .82 + .22 * Math.abs(run);
      }
    }

    if (flightPack.current) {
      flightPack.current.visible = extras.airKind === 'jetpack';
      flightPack.current.rotation.x = extras.flightPhase === 'takeoff' ? -.20 : extras.flightPhase === 'landing' ? .2 : 0;
    }
    if (pogo.current) {
      pogo.current.visible = extras.airKind === 'pogo';
      pogo.current.scale.y = extras.pogoPhase === 'rise' ? 1.08 : .8;
    }
    if (board.current) {
      board.current.visible = riding;
      board.current.rotation.z = reducedMotion ? 0 : Math.sin(extras.time * 5) * .06;
    }
    if (shadow.current) {
      shadow.current.position.y = -actor.position.y + s.surface + .027;
      shadow.current.scale.setScalar(1 / (1 + Math.max(0, s.y - s.surface - .9) * .08));
    }
    const age = extras.time - s.launch;
    if (jumpRings.current) {
      jumpRings.current.visible = boosted && !reducedMotion && age >= 0 && age < .65;
      jumpRings.current.position.y = -actor.position.y + s.surface + .08;
      jumpRings.current.scale.setScalar(1 + Math.max(0, Math.min(.65, age)) * 2.4);
    }

    const dead = state.gameState === 'dying';
    actor.position.z = dead ? extras.deathTime * .6 : 0;
    if (dead) {
      const t = extras.deathTime;
      frame.rotation.z = (extras.deathKind === 'jump' ? 1 : -1) * Math.min(1.45, t * 2);
      frame.rotation.x = -Math.min(.8, t);
      actor.position.y = Math.max(.28, s.y - t * 1.4);
    } else if (extras.impact > 0 && !reducedMotion) {
      frame.rotation.z += Math.sin(extras.impact * 35) * .2;
    }
  });

  return <group ref={root} position={[0, .9, 0]}>
    <mesh ref={shadow} rotation={[-Math.PI / 2, 0, 0]} position={[0, -.87, .05]}>
      <circleGeometry args={[.49, 22]}/>
      <meshBasicMaterial color="#233f3c" transparent opacity={.26} depthWrite={false}/>
    </mesh>
    <group ref={rig} dispose={null}>
      <mesh geometry={art.body} material={material}/>
      <mesh geometry={art.head} material={material}/>
      <mesh geometry={art.pack} material={material}/>
      {[-1, 1].map((side, index) => <group key={side} ref={value => {if (value) arms.current[index] = value;}}
        position={[side * .335, .382, .003]} rotation={[0, 0, side * .19]}>
        <mesh geometry={art.sleeve} material={material}/>
        <group ref={value => {if (value) elbows.current[index] = value;}} position={[0, -.26, 0]}>
          <mesh geometry={art.forearm} material={material}/>
        </group>
      </group>)}
      {[-1, 1].map((side, index) => <group key={side} ref={value => {if (value) legs.current[index] = value;}}
        position={[side * .151, -.22, 0]}>
        <mesh geometry={art.thigh} material={material}/>
        <group ref={value => {if (value) shins.current[index] = value;}} position={[0, -.325, .009]}>
          <mesh geometry={art.calf} material={material}/>
          <group ref={value => {if (value) feet.current[index] = value;}} position={[0, -.258, .003]}>
            <mesh geometry={art.shoe} material={material}/>
            <mesh geometry={art.boot} material={material} visible={false}/>
          </group>
        </group>
      </group>)}
      <group ref={flightPack} visible={false}>
        <mesh geometry={art.flight} material={material}/>
        {[-.255, .255].map(x => <mesh key={x} position={[x, -.242, .354]}>
          <coneGeometry args={[.082, .201, 9]}/>
          <meshBasicMaterial color="#99eee1"/>
        </mesh>)}
      </group>
      <group ref={pogo} visible={false} position={[0, -.7, .02]}>
        <mesh geometry={art.pogo} material={material}/>
      </group>
    </group>
    <group ref={board} position={[0, -.87, 0]} visible={false} dispose={null}>
      <mesh geometry={art.board} material={material}/>
    </group>
    <group ref={jumpRings} visible={false}>
      {[0, 1].map(i => <mesh key={i} position={[0, i * .04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[.39 + i * .2, .025, 5, 22]}/>
        <meshBasicMaterial color="#f6d589" transparent opacity={.68 - i * .17}/>
      </mesh>)}
    </group>
  </group>;
});
Player.displayName = 'Player';
