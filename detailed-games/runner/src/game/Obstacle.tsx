import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { COLORS, PLAYER_HEIGHT } from '../utils/constants';
import type { Mesh, MeshStandardMaterial } from 'three';

export type ObstacleType = 'jump' | 'slide' | 'block';

interface ObstacleProps {
  position: [number, number, number];
  type: ObstacleType;
  onCollision?: () => void;
}

const OBSTACLE_CONFIGS = {
  jump: {
    // Low barrier - must jump over
    width: 1.8,
    height: 0.6,
    depth: 0.4,
    yOffset: 0.3,
    color: COLORS.obstacleJump,
  },
  slide: {
    // High barrier - must slide under
    width: 1.8,
    height: 0.8,
    depth: 0.4,
    yOffset: PLAYER_HEIGHT - 0.2,
    color: COLORS.obstacleSlide,
  },
  block: {
    // Full block - must switch lanes
    width: 1.8,
    height: PLAYER_HEIGHT,
    depth: 0.8,
    yOffset: PLAYER_HEIGHT / 2,
    color: COLORS.obstacleBlock,
  },
};

export function Obstacle({ position, type }: ObstacleProps) {
  const meshRef = useRef<Mesh>(null);
  const config = OBSTACLE_CONFIGS[type];

  useFrame(() => {
    if (!meshRef.current) return;
    // Pulse effect
    const time = Date.now() * 0.003;
    const material = meshRef.current.material as MeshStandardMaterial;
    material.emissiveIntensity = 0.3 + Math.sin(time) * 0.2;
  });

  if(type==='block')return <group position={[position[0],0,position[2]]}><mesh position={[0,1.4,-1.2]}><boxGeometry args={[1.8,2.8,4]}/><meshStandardMaterial color="#526e8b" metalness={.3}/></mesh><mesh position={[0,1.95,.84]}><boxGeometry args={[1.4,.7,.05]}/><meshStandardMaterial color="#8ad6e3" emissive="#4a92b0" emissiveIntensity={.5}/></mesh>{[-.6,.6].map(x=><mesh key={x} position={[x,.65,.87]}><sphereGeometry args={[.12,8,8]}/><meshBasicMaterial color="#fff5b7"/></mesh>)}<mesh position={[0,.2,0]}><boxGeometry args={[2,.3,4.2]}/><meshStandardMaterial color="#243e51"/></mesh></group>;
  return (
    <mesh
      ref={meshRef}
      position={[position[0], config.yOffset, position[2]]}
    >
      <boxGeometry args={[config.width, config.height, config.depth]} />
      <meshStandardMaterial
        color={config.color}
        emissive={config.color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export interface ObstacleData {
  id: string;
  lane: number;
  type: ObstacleType;
  z: number;
}
