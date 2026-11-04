import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore } from '../state/gameStore';
import { CHUNK_LENGTH, VISIBLE_CHUNKS, LANE_WIDTH, COLORS } from '../utils/constants';
import type { Group } from 'three';

interface ChunkProps {
  position: [number, number, number];
}

function TrackChunk({ position }: ChunkProps) {
  return (
    <group position={position}>
      {[-2,0,2].flatMap(x=>[-.65,.65].map(off=><mesh key={x+':'+off} position={[x+off,.035,0]}><boxGeometry args={[.07,.06,CHUNK_LENGTH]}/><meshStandardMaterial color="#b7c9cb" metalness={.65}/></mesh>))}
      {Array.from({length:12},(_,i)=><mesh key={'sleep'+i} position={[0,.02,-CHUNK_LENGTH/2+i*4]}><boxGeometry args={[7,.05,.35]}/><meshStandardMaterial color="#614e43"/></mesh>)}
      {[-1,1].flatMap(k=>[0,1,2,3].map(i=><mesh key={k+':'+i} position={[k*(7+i%2),3+i%3,-CHUNK_LENGTH/2+i*13]}><boxGeometry args={[3,6+i%3,5]}/><meshStandardMaterial color={i%2?'#233f56':'#37536a'} emissive="#123247" emissiveIntensity={.15}/></mesh>))}
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[LANE_WIDTH * 3 + 2, CHUNK_LENGTH]} />
        <meshStandardMaterial color={COLORS.track} />
      </mesh>

      {/* Lane lines */}
      {[-LANE_WIDTH - 0.05, -0.05, LANE_WIDTH - 0.05, LANE_WIDTH * 2 - 0.05].map((x, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[x - LANE_WIDTH + 0.05, 0.01, 0]}>
          <planeGeometry args={[0.1, CHUNK_LENGTH]} />
          <meshStandardMaterial 
            color={COLORS.trackLines} 
            emissive={COLORS.trackLines}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}

      {/* Side walls (neon) */}
      <mesh position={[-LANE_WIDTH * 1.5 - 1, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, CHUNK_LENGTH]} />
        <meshStandardMaterial 
          color={COLORS.trackLines}
          emissive={COLORS.trackLines}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[LANE_WIDTH * 1.5 + 1, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, CHUNK_LENGTH]} />
        <meshStandardMaterial 
          color={COLORS.trackLines}
          emissive={COLORS.trackLines}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

export function Track() {
  const groupRef = useRef<Group>(null);
  const gameState = useGameStore((s) => s.gameState);
  const speed = useGameStore((s) => s.speed);
  const offsetRef = useRef(0);

  useFrame((_, delta) => {
    if (gameState !== 'playing' || !groupRef.current) return;

    // Move track towards camera
    offsetRef.current += speed * delta;

    // Wrap offset when it exceeds chunk length
    if (offsetRef.current >= CHUNK_LENGTH) {
      offsetRef.current -= CHUNK_LENGTH;
    }

    groupRef.current.position.z = offsetRef.current;
  });

  // Generate chunk positions
  const chunks = [];
  for (let i = 0; i < VISIBLE_CHUNKS; i++) {
    const z = -i * CHUNK_LENGTH - CHUNK_LENGTH / 2;
    chunks.push(<TrackChunk key={i} position={[0, 0, z]} />);
  }

  return (
    <group ref={groupRef}>
      {chunks}
    </group>
  );
}
