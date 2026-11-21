import { useMemo } from 'react';
import {
  BufferGeometry, Color, Float32BufferAttribute, MeshStandardMaterial, SRGBColorSpace,
  type BufferAttribute,
} from 'three';
import { trainGeometry } from '../../../../source/runner-rules.mjs';
import { artGeometry } from './art-geometry';
import { StreetLabel } from './StreetLabel';
import { trainModels } from './train-models';

export type ObstacleType = 'jump' | 'slide' | 'block' | 'moving' | 'crate' | 'hurdle' | 'sign' | 'gap';
export interface ObstacleData {
  id: string;
  lane: number;
  type: ObstacleType;
  z: number;
  variant?: 'ramp' | 'car' | 'low' | 'rise';
}
type Position = [number, number, number];
type Variant = NonNullable<ObstacleData['variant']>;

const paint = new MeshStandardMaterial({ vertexColors: true, roughness: .72 });
const rollingStock = new Map<string, BufferGeometry>();
const ramps = new Map<Variant, BufferGeometry>();

function bytes(encoded: string) {
  const binary = atob(encoded);
  const data = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) data[i] = binary.charCodeAt(i);
  return new DataView(data.buffer);
}

function modelTrain(type: ObstacleType, variant: Variant) {
  const key = type + ':' + variant;
  const existing = rollingStock.get(key);
  if (existing) return existing;
  const { width, roofHeight, front, rear } = trainGeometry(type, variant);
  const [vertices, triangles, span] = trainModels[type === 'moving' || variant !== 'car' ? 'cab' : 'car'];
  const packed = bytes(vertices);
  const points = [], normals = [], colors = [], indices = [];
  const tint = new Color();
  for (let offset = 0; offset < packed.byteLength; offset += 12) {
    points.push(
      span[0] * packed.getInt16(offset, true) / 16000,
      span[1] * (.5 + packed.getInt16(offset + 2, true) / 16000),
      span[2] * packed.getInt16(offset + 4, true) / 16000,
    );
    normals.push(packed.getInt8(offset + 6) / 127, packed.getInt8(offset + 7) / 127, packed.getInt8(offset + 8) / 127);
    tint.setRGB(packed.getUint8(offset + 9) / 255, packed.getUint8(offset + 10) / 255, packed.getUint8(offset + 11) / 255, SRGBColorSpace);
    colors.push(tint.r, tint.g, tint.b);
  }
  const packedIndices = bytes(triangles);
  for (let offset = 0; offset < packedIndices.byteLength; offset += 2) indices.push(packedIndices.getUint16(offset, true));
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(points, 3));
  geometry.setAttribute('normal', new Float32BufferAttribute(normals, 3));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.scale(width / span[0], roofHeight / span[1], (front - rear) / span[2]);
  geometry.translate(0, 0, (front + rear) / 2);

  if (type === 'moving') {
    const values = geometry.getAttribute('color') as BufferAttribute;
    for (let i = 0; i < values.count; i++) {
      const r = values.getX(i), g = values.getY(i), b = values.getZ(i);
      // Existing saturated livery areas distinguish an approaching service.
      if (r - b > .14 && g - b > .1) values.setXYZ(i, .64, .085, .035);
    }
  }
  rollingStock.set(key, geometry);
  return geometry;
}

function modelRamp(variant: Variant) {
  const existing = ramps.get(variant);
  if (existing) return existing;
  const { width, roofHeight, approachHeight, rampLength } = trainGeometry('block', variant);
  const length = Math.hypot(roofHeight - approachHeight, rampLength);
  const ramp = artGeometry();
  ramp.box([0, -.08, 0], [width, .16, length], '#536364');
  ramp.box([0, -.012, 0], [width - .14, .024, length - .1], '#bd9b6a');
  for (const x of [-width / 2 + .05, width / 2 - .05]) {
    ramp.box([x, .022, 0], [.1, .045, length], '#ffe3a0');
    ramp.box([x * .88, .009, 0], [.033, .021, length - .14], '#72543e');
  }
  for (let z = -length / 2 + .3; z < length / 2; z += .46) {
    ramp.box([0, .007, z], [width - .25, .018, .024], '#958053');
  }
  for (const z of [-length / 2 + .36, -.4, length / 2 - .47]) {
    for (const direction of [-1, 1]) {
      ramp.box([direction * .23, .025, z], [.54, .022, .072], '#fff0b4', [0, direction * .58, 0]);
    }
  }
  const geometry = ramp.finish();
  ramps.set(variant, geometry);
  return geometry;
}

function Train({ position, type, variant }: { position: Position; type: ObstacleType; variant: Variant }) {
  const { width, roofHeight, front, rear, rampLength, approachHeight } = trainGeometry(type, variant);
  const rise = roofHeight - approachHeight;
  const moving = type === 'moving';
  const geometry = useMemo(() => modelTrain(type, variant), [type, variant]);
  const ramp = useMemo(() => rampLength ? modelRamp(variant) : null, [rampLength, variant]);
  return <group position={position}>
    <mesh geometry={geometry} material={paint} dispose={null}/>
    <mesh position={[0, roofHeight - .012, (front + rear) / 2]}>
      <boxGeometry args={[width * .77, .024, front - rear - .07]}/>
      <meshStandardMaterial color={moving ? '#adb4ad' : '#c1c3b4'} roughness={.79}/>
    </mesh>
    <StreetLabel text={moving ? '衝動消費' : '固定承諾'} position={[0, roofHeight * .48, front + .035]}
      size={[1.35, .34]} color={moving ? '#a84730' : '#344f58'}/>
    {moving && [-.55, .55].map(x => <mesh key={x} position={[x, .76, front + .012]}>
      <boxGeometry args={[.26, .135, .025]}/>
      <meshBasicMaterial color="#ffe3a0"/>
    </mesh>)}
    {ramp && <mesh geometry={ramp} material={paint} dispose={null} position={[0, (roofHeight + approachHeight) / 2, front + rampLength / 2]}
      rotation={[Math.atan2(rise, rampLength), 0, 0]}/>}
  </group>;
}

const obstacleArt = new Map<ObstacleType, BufferGeometry>();
function modelObstacle(type: ObstacleType) {
  const cached = obstacleArt.get(type);
  if (cached) return cached;
  const prop = artGeometry();
  if (type === 'gap') {
    prop.box([0, .096, 0], [1.93, .046, 2.58], '#182e2d');
    for (const end of [-1.4, 1.4]) {
      prop.box([0, .14, end], [1.92, .12, .27], '#283e42');
      for (const x of [-.73, -.36, 0, .36, .73]) prop.box([x, .212, end], [.16, .022, .24], '#e3a34e', [0, .43, 0]);
    }
  } else if (type === 'crate') {
    prop.box([0, .56, 0], [1.76, 1.09, 1.66], '#af7d48');
    for (const x of [-.88, .88]) {
      prop.box([x, .57, 0], [.12, 1.15, 1.75], '#71513d');
      prop.box([x * .69, .58, .854], [.145, 1.11, .09], '#d3ad73');
    }
    for (const y of [.13, .37, .79, 1.01]) prop.box([0, y, .85], [1.68, .042, .045], '#704f35');
    for (const y of [.116, .997]) prop.box([0, y, .893], [1.73, .16, .04], '#b48253');
    for (const z of [-.46, .46]) prop.box([0, 1.125, z], [1.74, .035, .2], '#d1a469');
  } else {
    const slide = type === 'slide' || type === 'sign';
    const height = slide ? 2.26 : type === 'hurdle' ? 1.4 : .74;
    const boardY = slide ? 1.91 : type === 'hurdle' ? 1.16 : .43;
    const panel = slide ? '#256570' : '#b55232';
    for (const x of [-.81, .81]) {
      prop.box([x, .064, 0], [.27, .128, .67], '#293d3f');
      prop.box([x, height / 2, 0], [.14, height, .23], panel);
      prop.box([x, height - .02, .006], [.17, .11, .27], '#eec76d');
    }
    prop.box([0, boardY, 0], [1.86, slide ? .48 : .49, .29], panel);
    for (const x of [-.71, -.47, -.23, 0, .23, .47, .71]) {
      prop.box([x, boardY - .2, .157], [.145, .058, .028], '#f1ce7d', [0, 0, -.2]);
    }
  }
  const geometry = prop.finish();
  obstacleArt.set(type, geometry);
  return geometry;
}

const labels: Record<Exclude<ObstacleType, 'block' | 'moving'>, { text: string; y: number; z: number }> = {
  gap: {text:'資金缺口 ↑', y:.36, z:-1.23},
  crate: {text:'囤貨支出 ↑', y:.59, z:.895},
  hurdle: {text:'月底缺口 ↑', y:1.18, z:.17},
  jump: {text:'不必要支出 ↑', y:.45, z:.17},
  slide: {text:'湊單誘惑 ↓', y:1.93, z:.17},
  sign: {text:'高息分期 ↓', y:1.93, z:.17},
};

export function Obstacle({ position, type, variant = 'ramp' }: { position: Position; type: ObstacleType; variant?: Variant }) {
  if (type === 'block' || type === 'moving') return <Train position={position} type={type} variant={variant}/>;
  const label = labels[type];
  return <group position={position}>
    <mesh geometry={modelObstacle(type)} material={paint} dispose={null}/>
    <StreetLabel text={label.text} position={[0, label.y, label.z]} size={[1.62, .34]} color={type === 'sign' || type === 'slide' ? '#285a63' : '#8a3924'}/>
  </group>;
}
