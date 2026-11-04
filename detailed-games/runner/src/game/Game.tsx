import { CanvasTexture } from 'three';
import { extras } from './extras';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore } from '../state/gameStore';
import { useUIStore } from '../state/uiStore';
import { Player, PlayerHandle } from './Player';
import { Track } from './Track';
import { Obstacle, ObstacleData } from './Obstacle';
import { Coin, CoinData } from './Coin';
import { useInput } from './useInput';
import { useSpawner } from './useSpawner';
import { useCollision } from './useCollision';
import { SPEED_INCREMENT, MAX_SPEED } from '../utils/constants';

export function Game() {
  const powerTextures=useMemo(()=>Object.fromEntries(['board','shoes','magnet'].map(kind=>{const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;const c=canvas.getContext('2d')!;c.fillStyle='#102a3bdd';c.beginPath();c.arc(64,60,54,0,Math.PI*2);c.fill();c.strokeStyle='#ffe5a1';c.lineWidth=4;c.stroke();if(kind==='board'){c.fillStyle='#f7bd5e';c.beginPath();c.roundRect(20,42,88,28,14);c.fill();c.strokeStyle='#8b542d';c.lineWidth=6;c.beginPath();c.moveTo(46,45);c.lineTo(65,68);c.lineTo(82,46);c.stroke()}else if(kind==='shoes'){c.fillStyle='#7ed6ee';c.fillRect(34,24,25,45);c.beginPath();c.roundRect(34,60,65,25,8);c.fill();c.fillStyle='#fff0b1';c.fillRect(32,82,69,7)}else{c.strokeStyle='#f19494';c.lineWidth=18;c.beginPath();c.moveTo(36,28);c.lineTo(36,59);c.arc(64,59,28,Math.PI,0,true);c.lineTo(92,28);c.stroke();c.fillStyle='#b6edf8';c.fillRect(27,24,18,19);c.fillRect(83,24,18,19)}c.fillStyle='#fff5cf';c.font='bold 16px Microsoft JhengHei';c.textAlign='center';c.fillText(kind==='board'?'滑板':kind==='shoes'?'彈跳鞋':'磁石',64,116);return[kind,new CanvasTexture(canvas)]})),[]);

  const gameState = useGameStore((s) => s.gameState);
  const addDistance = useGameStore((s) => s.addDistance);
  const addCoin = useGameStore((s) => s.addCoin);
  const speed = useGameStore((s) => s.speed);
  const setSpeed = useGameStore((s) => s.setSpeed);
  const endGame = useGameStore((s) => s.endGame);
  const openGameOverModal = useUIStore((s) => s.openGameOverModal);
  
  const playerRef = useRef<PlayerHandle>(null);
  const distanceRef = useRef(0);
  
  const [obstacles, setObstacles] = useState<ObstacleData[]>([]);
  const [coins, setCoins] = useState<CoinData[]>([]);
  
  const { spawn, removeCoin, reset: resetSpawner } = useSpawner();
  const { checkObstacleCollision, checkCoinCollision } = useCollision();

  // Reset spawner when game starts
  useEffect(() => {
    if (gameState === 'playing' && useGameStore.getState().distance===0) {
 extras.time=0;extras.board=0;extras.shoes=0;extras.magnet=0;extras.index=0;extras.next=0;extras.pickups=[];
      resetSpawner();
      distanceRef.current = 0;
    }
  }, [gameState, resetSpawner]);

  (window as any).detailedGameSnapshot=()=>({state:useGameStore.getState().gameState,distance:useGameStore.getState().distance,score:useGameStore.getState().score,player:playerRef.current?{lane:playerRef.current.lane,y:playerRef.current.position?.y,jump:playerRef.current.isJumping,slide:playerRef.current.isSliding}:null,obstacles:obstacles.map(x=>({...x})),powers:{...extras}});
  // Handle input
  useInput(playerRef);

  // Game loop
  useFrame((_, delta) => {
    if (gameState !== 'playing' || !playerRef.current) return;delta=Math.min(delta,.05);extras.time+=delta;if(extras.time>=90){endGame();return;}

    // Update distance
    const distanceDelta = speed * delta;
    distanceRef.current += distanceDelta;
    addDistance(distanceDelta);

    // Increase speed over time
    if (speed < MAX_SPEED) {
      setSpeed(Math.min(speed + SPEED_INCREMENT * delta, MAX_SPEED));
    }

    // Spawn obstacles and coins
    const spawnedItems = spawn(-distanceRef.current);
    setObstacles(spawnedItems.obstacles);
    setCoins(spawnedItems.coins);

    // Get player state
    const playerState = {
      lane: playerRef.current.lane,
      isJumping: playerRef.current.isJumping,
      isSliding: playerRef.current.isSliding,
      y: playerRef.current.position?.y ?? 0,
    };

    // Check obstacle collision
    const hitObstacle = checkObstacleCollision(
      spawnedItems.obstacles,
      playerState,
      -distanceRef.current
    );

    if(hitObstacle){if(extras.board>extras.time){extras.board=0;spawnedItems.obstacles.splice(spawnedItems.obstacles.indexOf(hitObstacle),1)}else{handleCollision();return}}

    // Check coin collection
    let collectedCoins = checkCoinCollision(
      spawnedItems.coins,
      playerState,
      -distanceRef.current
    );

    if(extras.magnet>extras.time)collectedCoins=spawnedItems.coins.filter(c=>Math.abs(c.z+distanceRef.current)<7);
    if(extras.time>=extras.next){extras.pickups.push({kind:['board','shoes','magnet'][extras.index++%3] as any,lane:[-2,0,2][extras.index%3],z:-distanceRef.current-55});extras.next=extras.time+8}extras.pickups=extras.pickups.filter(p=>{if(Math.abs(p.z+distanceRef.current)<2&&Math.abs(p.lane-[-2,0,2][playerState.lane])<.5){extras[p.kind]=extras.time+(p.kind==='magnet'?8:10);return false}return p.z+distanceRef.current<10});
    if (collectedCoins.length > 0) {
      collectedCoins.forEach(coin => {
        addCoin();
        removeCoin(coin.id);
      });
    }
  });

  const handleCollision = () => {
    endGame();
    openGameOverModal();
  };

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-5, 3, -5]} intensity={0.7} color="#ff00ff" />

      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0a0f', 10, 80]} />

      {/* Track */}
      <Track />

      {/* Obstacles */}
      {obstacles.map((obstacle) => (
        <Obstacle
          key={obstacle.id}
          position={[obstacle.lane, 0, obstacle.z + distanceRef.current]}
          type={obstacle.type}
        />
      ))}

      {/* Coins */}
      {coins.map((coin) => (
        <Coin
          key={coin.id}
          position={[coin.lane, coin.y, coin.z + distanceRef.current]}
        />
      ))}

      {extras.pickups.map((p,i)=><group key={i} position={[p.lane,1.3,p.z+distanceRef.current]}><sprite scale={[1.5,1.5,1.5]}><spriteMaterial map={powerTextures[p.kind]} transparent/></sprite><mesh rotation={[Math.PI/2,0,0]}><torusGeometry args={[.65,.06,8,20]}/><meshBasicMaterial color="#fff0aa"/></mesh></group>)}
      {/* Player */}
      <Player ref={playerRef} onCollision={handleCollision} />
    </>
  );
}
