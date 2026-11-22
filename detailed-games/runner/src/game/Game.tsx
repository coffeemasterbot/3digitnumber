import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial, type Group } from 'three';
import { airRoute, forwardMotion } from '../../../../source/runner-air.mjs';
import { POWER_DURATION, trainSupport, travelPoints } from '../../../../source/runner-rules.mjs';
import { runnerGoal } from '../../../../source/runner-campaign.mjs';
import { createRunnerIconTexture } from './runner-icon-texture';
import { runnerPowerProp } from './runner-power-props';
import type { RunnerIconKind } from './runner-icons';
import { extras } from './extras';
import { useGameStore } from '../state/gameStore';
import { Player, type PlayerHandle } from './Player';
import { Track } from './Track';
import { Obstacle, type ObstacleData } from './Obstacle';
import { CoinBatch, type CoinData } from './Coin';
import { useInput } from './useInput';
import { useSpawner } from './useSpawner';
import { useCollision } from './useCollision';
import { INITIAL_SPEED, SPEED_INCREMENT, MAX_SPEED, LANES } from '../utils/constants';

const POWER_ORDER = ['jetpack', 'shoes', 'pogo', 'board', 'double', 'magnet'] as const;
const reducedMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion:reduce)').matches;
const powerPropMaterial = new MeshStandardMaterial({ vertexColors: true, roughness: .69 });
const freshProgress = () => ({ distance: 0, travelPoints: 0, coins: 0, speed: INITIAL_SPEED, score: 0 });
const EMPTY: ObstacleData[] = [];

export function Game({ onReady }: { onReady?: () => void }) {
  const powerTextures = useMemo(() => Object.fromEntries(
    POWER_ORDER.map(kind => [kind, createRunnerIconTexture(kind)]),
  ) as Record<RunnerIconKind, ReturnType<typeof createRunnerIconTexture>>, []);
  const powerProps = useMemo(() => Object.fromEntries(
    POWER_ORDER.map(kind => [kind, runnerPowerProp(kind)]),
  ) as Record<RunnerIconKind, ReturnType<typeof runnerPowerProp>>, []);
  useEffect(() => () => {
    Object.values(powerTextures).forEach(texture => texture.dispose());
    Object.values(powerProps).forEach(prop => prop.dispose());
  }, [powerTextures, powerProps]);

  const runNumber = useGameStore(s => s.runNumber);
  const launch = useGameStore(s => s.launch);
  const goal = useMemo(() => runnerGoal(launch), [launch]);
  const playerRef = useRef<PlayerHandle>(null);
  const progress = useRef(freshProgress());
  const renderCoins = useRef<CoinData[]>([]);
  const renderObstacles = useRef<ObstacleData[]>(EMPTY);
  const obstacleNodes = useRef(new Map<string, Group>());
  const obstacleList = useRef(EMPTY);
  const obstacleParent = useRef<Group>(null);
  const pickupNodes = useRef(new Map<number, Group>());
  const [visibleObstacles, setVisibleObstacles] = useState<ObstacleData[]>(EMPTY);
  const [visiblePickups, setVisiblePickups] = useState<typeof extras.pickups>([]);
  const nextHud = useRef(0);
  const savedFrame = useRef(0);
  const ready = useRef(false);
  const { spawn, reserveAirRoute, removeCoin, reset: resetSpawner } = useSpawner();
  const { checkObstacleCollision, checkCoinCollision } = useCollision();
  useInput(playerRef);

  useLayoutEffect(() => {
    Object.assign(extras, {
      distance: 0, time: 0, airKind: null, airStart: 0, airOrigin: 0, airHeight: 0, airRemaining: 0,
      pogoPhase: 'idle', flightPhase: 'idle', deathTime: 0, impact: 0, deathKind: '',
      board: 0, shoes: 0, magnet: 0, double: 0, index: 0, next: 0, pickups: [],
    });
    progress.current = freshProgress();
    nextHud.current = 0;
    savedFrame.current = 0;
    ready.current = false;
    resetSpawner();
    renderCoins.current = [];
    renderObstacles.current = EMPTY;
    obstacleList.current = EMPTY;
    setVisibleObstacles(EMPTY);
    setVisiblePickups([]);
  }, [runNumber, resetSpawner]);

  useEffect(() => {
    const summary = () => {
      const state = useGameStore.getState();
      return { state:state.gameState, completed:state.completed, mode:state.launch.mode,
        mission:state.launch.mission, seed:state.launch.seed, boardCharges:state.boardCharges,
        ...progress.current, powers:{time:extras.time}, runNumber };
    };
    const snapshot = () => ({
      ...summary(),
      player: playerRef.current ? { lane: playerRef.current.lane, y: playerRef.current.position.y, jump: playerRef.current.isJumping, slide: playerRef.current.isSliding } : null,
      obstacles: renderObstacles.current.map(o => ({ ...o })),
      powers: { ...extras, pickups: extras.pickups.map(p => ({ ...p })) },
      renderCalls: savedFrame.current,
    });
    Object.assign(window, { detailedGameSummary: summary, detailedGameSnapshot: snapshot });
    return () => {
      const runner = window as any;
      if (runner.detailedGameSnapshot === snapshot) {
        delete runner.detailedGameSnapshot;
        delete runner.detailedGameSummary;
      }
    };
  }, [runNumber]);

  function publish() {
    const run = progress.current;
    run.score = Math.floor(run.travelPoints) + run.coins * 10;
    useGameStore.getState().syncProgress({ ...run });
    nextHud.current = extras.time + .12;
  }

  function updateRenderList(obstacles: ObstacleData[], coins: CoinData[]) {
    renderCoins.current = coins;
    renderObstacles.current = obstacles;
    if (obstacleList.current.length !== obstacles.length || obstacleList.current.some((o, i) => o !== obstacles[i])) {
      obstacleList.current = [...obstacles];
      setVisibleObstacles(obstacleList.current);
    }
  }

  useFrame(({ camera, gl }, frameDelta) => {
    savedFrame.current = gl.info.render.calls;
    if (!ready.current) {
      if (!savedFrame.current) return;
      ready.current = true;
      onReady?.();
    }
    const player = playerRef.current;
    if (!player) return;
    const lift = Math.max(0, player.position.y - .9) * .7;
    camera.position.y = 3.5 + lift;
    camera.lookAt(0, 1.4 + lift, -22);

    const store = useGameStore.getState();
    const delta = Math.min(frameDelta, .05);
    if (store.gameState === 'dying') {
      extras.deathTime += delta;
      if (extras.deathTime >= 1.15) store.endGame();
      return;
    }
    if (store.gameState !== 'playing' || delta <= 0) return;

    extras.impact = Math.max(0, extras.impact - delta);
    extras.time = Math.min(goal.time ?? Infinity, extras.time + delta);

    const run = progress.current;
    const previousZ = -run.distance;
    const motion = forwardMotion(run.speed, delta, SPEED_INCREMENT, MAX_SPEED);
    run.speed = motion.speed;
    run.distance += motion.distance;
    extras.distance = run.distance;
    run.travelPoints += travelPoints(motion.distance, extras.double > extras.time ? 2 : 1);
    run.score = Math.floor(run.travelPoints) + run.coins * 10;
    const playerZ = -run.distance;
    let { obstacles, coins } = spawn(playerZ, run.speed, delta);

    if (extras.airKind) {
      const route = airRoute(extras.airKind, extras.time - extras.airStart, extras.airOrigin);
      extras.airHeight = route.height;
      extras.airRemaining = route.remaining;
      if (extras.airKind === 'jetpack') extras.flightPhase = route.phase;
      else extras.pogoPhase = route.phase;
      if (!route.remaining) {
        extras.airKind = null;
        extras.flightPhase = extras.pogoPhase = 'idle';
      }
    }

    const position = player.position;
    const playerState = {
      x: position.x, lane: player.lane, isJumping: player.isJumping, isSliding: player.isSliding,
      y: extras.airKind ? .9 + extras.airHeight : position.y,
    };
    let support = 0;
    for (const obstacle of obstacles) {
      support = Math.max(support, trainSupport(obstacle, playerState.x, playerZ, playerState.y - .9, previousZ));
    }
    player.setSurface(support);
    if (support) playerState.y = Math.max(playerState.y, support + .9);

    const hit = checkObstacleCollision(obstacles, playerState, playerZ);
    if (hit) {
      extras.impact = .4;
      if (extras.board > extras.time) {
        extras.board = 0;
        obstacles.splice(obstacles.indexOf(hit), 1);
      } else {
        extras.deathKind = hit.type;
        extras.deathTime = 0;
        publish();
        useGameStore.setState({ gameState: 'dying' });
        return;
      }
    }

    const collected = checkCoinCollision(coins, playerState, playerZ);
    for (const coin of coins) {
      if (extras.magnet > extras.time && Math.abs(coin.z - playerZ) < 12) coin.attracting = true;
      if (!coin.attracting) continue;
      const blend = Math.min(1, delta * 10);
      coin.lane += (playerState.x - coin.lane) * blend;
      coin.y += (playerState.y + .35 - coin.y) * blend;
      coin.z += (playerZ - coin.z) * blend;
      if (Math.hypot(coin.lane - playerState.x, coin.y - playerState.y - .35, coin.z - playerZ) < .85 &&
          !collected.includes(coin)) collected.push(coin);
    }

    let pickupsChanged = false;
    if (extras.time >= extras.next) {
      const target = (window as any).arcadeTest?.target;
      const testTarget = extras.index === 0 && POWER_ORDER.includes(target) ? target : null;
      const kind = testTarget ? testTarget : POWER_ORDER[extras.index % POWER_ORDER.length];
      const index = extras.index++;
      const lane = testTarget ? 0 : index === 0 ? LANES[2] : LANES[(index + 1) % 3];
      const ahead = testTarget ? 8 : index === 0 ? 21 : 43;
      extras.pickups.push({ id: index, kind, lane, z: playerZ - ahead });
      extras.next = extras.time + 8;
      pickupsChanged = true;
    }
    for (let i = extras.pickups.length - 1; i >= 0; i--) {
      const pickup = extras.pickups[i];
      const reached = Math.abs(pickup.z - playerZ) < 1.35 && Math.abs(pickup.lane - playerState.x) < .7
        && playerState.y < 2.3;
      if (reached) {
        if (pickup.kind === 'jetpack' || pickup.kind === 'pogo') {
          if (!extras.airKind) {
            extras.airKind = pickup.kind;
            extras.airStart = extras.time;
            extras.airOrigin = Math.max(0, playerState.y - .9);
            const route = airRoute(pickup.kind, 0, extras.airOrigin);
            extras.airRemaining = route.remaining;
            extras.airHeight = route.height;
            if (pickup.kind === 'jetpack') extras.flightPhase = route.phase;
            else extras.pogoPhase = route.phase;
            ({ obstacles, coins } = reserveAirRoute(pickup.kind, run.distance, run.speed, extras.airOrigin));
          }
        } else if (pickup.kind === 'board') {
          useGameStore.setState(current => ({boardCharges:Math.min(2,current.boardCharges+1)}));
        } else {
          extras[pickup.kind] = extras.time + POWER_DURATION[pickup.kind];
        }
      }
      if (reached) window.dispatchEvent(new CustomEvent('runner-power-up',{detail:pickup.kind}));
      if (reached || pickup.z - playerZ > 10) {
        extras.pickups.splice(i, 1);
        pickupsChanged = true;
      }
    }
    if (pickupsChanged) setVisiblePickups([...extras.pickups]);

    for (const coin of collected) {
      if (!removeCoin(coin.id)) continue;
      run.coins++;
      window.dispatchEvent(new CustomEvent('runner-coin', { detail: runNumber + ':' + coin.id }));
    }

    // React adds/removes actual objects only. The renderer moves them without committing React state every frame.
    updateRenderList(obstacles, coins);
    if (obstacleParent.current) obstacleParent.current.position.z = run.distance;
    for (const obstacle of obstacles) {
      const node = obstacleNodes.current.get(obstacle.id);
      if (node) node.position.z = obstacle.z;
    }
    for (const pickup of extras.pickups) {
      const node = pickupNodes.current.get(pickup.id);
      if (node) {
        node.position.z = pickup.z + run.distance;
        node.position.y = 1.28 + (reducedMotion ? 0 : .095 * Math.sin(extras.time * 3 + pickup.id));
        if (node.children[0]) node.children[0].rotation.y = reducedMotion ? 0 : extras.time * 1.2;
      }
    }

    const completed = (goal.time !== null && extras.time >= goal.time) || (goal.distance !== null && run.distance >= goal.distance);
    if (extras.time >= nextHud.current || collected.length || completed) publish();
    if (completed) store.endGame(true);
  }, -1);

  return <>
    <ambientLight intensity={1.8} />
    <directionalLight position={[5, 10, 5]} intensity={2.1} color="#fff1d2" />
    <fog attach="fog" args={['#acd6e5', 36, 108]} />
    <Track />
    <group ref={obstacleParent}>
      {visibleObstacles.map(o => <group key={o.id} position={[o.lane, 0, o.z]} ref={node => {
        if (node) obstacleNodes.current.set(o.id, node);
        else obstacleNodes.current.delete(o.id);
      }}>
        <Obstacle position={[0, 0, 0]} variant={o.variant} type={o.type} />
      </group>)}
    </group>
    <CoinBatch coins={renderCoins} />
    {visiblePickups.map(p => <group key={p.id} position={[p.lane, 1.3, p.z + extras.distance]} ref={node => {
      if (node) pickupNodes.current.set(p.id, node);
      else pickupNodes.current.delete(p.id);
    }}>
      <mesh geometry={powerProps[p.kind]} material={powerPropMaterial} dispose={null}/>
      <sprite position={[0, .69, .006]} scale={[.71, .71, .71]}><spriteMaterial map={powerTextures[p.kind]} transparent /></sprite>
    </group>)}
    <Player ref={playerRef} />
  </>;
}
