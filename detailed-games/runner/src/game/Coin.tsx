import { useMemo, useRef } from 'react';
import type { MutableRefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import { CylinderGeometry, Object3D, TorusGeometry } from 'three';
import type { InstancedMesh } from 'three';
import { artGeometry } from './art-geometry';
import { extras } from './extras';

export interface CoinData {
  id: string;
  attracting?: boolean;
  lane: number;
  z: number;
  y: number;
}

const reducedMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion:reduce)').matches;
const MAX_COINS = 192;

export function CoinBatch({ coins }: { coins: MutableRefObject<CoinData[]> }) {
  const mesh = useRef<InstancedMesh>(null);
  const transform = useMemo(() => new Object3D(), []);
  const geometry = useMemo(() => {
    const parts = artGeometry();
    parts.part(new CylinderGeometry(.28, .28, .084, 12).rotateX(Math.PI / 2), '#d79938', [0, 0, 0]);
    for (const direction of [-1, 1]) {
      const face = .045 * direction;
      parts.part(new TorusGeometry(.234, .022, 4, 12), '#fff1a5', [0, 0, face]);
      parts.box([0, 0, face], [.16, .226, .016], '#ffdf82');
      for (const y of [-.044, .019, .081]) parts.box([0, y, face + .012 * direction], [.105, .023, .01], '#977037');
    }
    return parts.finish();
  }, []);
  useFrame(() => {
    if (!mesh.current) return;
    const visible = coins.current;
    let index = 0;
    for (const coin of visible) {
      const z = coin.z + extras.distance;
      if (z < -106 || z > 11 || index >= MAX_COINS) continue;
      transform.position.set(coin.lane, coin.y + (reducedMotion ? 0 : Math.sin(extras.time * 2) * .08), z);
      transform.rotation.y = reducedMotion ? 0 : extras.time * 3 + coin.z * .03;
      transform.updateMatrix();
      mesh.current.setMatrixAt(index++, transform.matrix);
    }
    mesh.current.count = index;
    if (index) mesh.current.instanceMatrix.needsUpdate = true;
  });
  return <instancedMesh ref={mesh} args={[geometry, undefined, MAX_COINS]} frustumCulled={false}>
    <meshStandardMaterial vertexColors roughness={.4} metalness={.18} />
  </instancedMesh>;
}
