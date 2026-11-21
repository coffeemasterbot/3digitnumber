import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  BoxGeometry, BufferGeometry, Color, CylinderGeometry, Float32BufferAttribute, SphereGeometry,
  MeshStandardMaterial, type Group,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { cityModels } from './city-models';
import { extras } from './extras';
import { StreetLabel } from './StreetLabel';
import { addOuterBlock, makeRoadGeometry, paintDistrictRoad } from './street-art';
import { useGameStore } from '../state/gameStore';
import { CHUNK_LENGTH } from '../utils/constants';
import { runnerDistrict } from '../../../../source/runner-campaign.mjs';

const districts = [
  { label: '街坊商店', colors: ['#d8895b', '#ead1a7', '#2c8783', '#ca5042'], key: 'street' },
  { label: '通勤車站', colors: ['#b2aa92', '#eedabc', '#386673', '#d7a04c'], key: 'station' },
  { label: '沿岸橋道', colors: ['#dcb987', '#e7dfbe', '#3d9ba6', '#356379'], key: 'bridge' },
  { label: '維修工房', colors: ['#a5917b', '#cebaa7', '#59747a', '#be6044'], key: 'yard' },
  { label: '隧道入口', colors: ['#636a64', '#bbb49d', '#537c72', '#e3a65b'], key: 'tunnel' },
] as const;
type District = typeof districts[number];

function makeDistrict({ key, colors }: District, variant = 0) {
  const parts: BufferGeometry[] = [];
  const [wall, stone, trim, bright] = colors;
  const base = key === 'tunnel' ? '#676a61' : '#a69a86';

  function solid(geometry: BufferGeometry, color: string, x: number, y: number, z: number) {
    const tint = new Color(color);
    const colors = new Float32Array(geometry.attributes.position.count * 3);
    for (let offset = 0; offset < colors.length; offset += 3) tint.toArray(colors, offset);
    geometry.deleteAttribute('uv');
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    geometry.translate(x, y, z);
    parts.push(geometry);
  }

  function box(x: number, y: number, z: number, w: number, h: number, d: number, color: string) {
    solid(new BoxGeometry(w, h, d), color, x, y, z);
  }

  function tree(x: number, z: number) {
    box(x, .27, z, .88, .28, 1.02, '#7f7763');
    box(x, .41, z, .77, .025, .9, '#746044');
    solid(new CylinderGeometry(.073, .115, 1.95, 7), '#6a5143', x, 1.34, z);
    solid(new SphereGeometry(.63, 8, 6).scale(.8, 1.3, .9), '#567d65', x, 2.63, z);
    solid(new SphereGeometry(.54, 8, 6).scale(.91, 1.15, 1), '#6e9166', x - .28, 2.56, z + .36);
    solid(new SphereGeometry(.52, 8, 6), '#80a073', x + .16, 2.72, z + .25);
  }

  function model(name: keyof typeof cityModels, x: number, z: number, scale: number, angle: number) {
    const asset = cityModels[name];
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(asset.positions, 3));
    geometry.setAttribute('normal', new Float32BufferAttribute(asset.normals, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(asset.colors, 3));
    geometry.setIndex(asset.indices);
    geometry.scale(scale, scale, scale);
    geometry.rotateY(angle);
    geometry.translate(x, .14, z);
    parts.push(geometry);
  }

  box(0, -.19, 0, 26, .29, CHUNK_LENGTH, base);
  for (const lane of [-2, 0, 2]) {
    for (const offset of [-.62, .62]) {
      box(lane + offset, .033, 0, .097, .067, CHUNK_LENGTH, '#645d55');
      box(lane + offset, .073, 0, .065, .024, CHUNK_LENGTH, '#bfc4bf');
    }
  }
  for (let z = -24, tie = 0; z < 25; z += 2.4, tie++) {
    for (const lane of [-2, 0, 2]) {
      box(lane, -.001, z, 1.78, .067, .21, tie % 5 === 1 ? '#67574b' : '#4e4139');
    }
    for (const lane of [-2, 0, 2]) for (const rail of [-.62, .62]) {
      box(lane + rail, .054, z, .24, .027, .12, '#aa9b89');
    }
  }

  for (const side of [-1, 1]) {
    box(side * 4.6, .02, 0, 2.8, .24, CHUNK_LENGTH, stone);
    box(side * 3.21, .14, 0, .18, .055, CHUNK_LENGTH, stone);
    for (let z = -24; z <= 24; z += 1.5) {
      box(side * 3.19, .176, z + .65, .164, .014, .43, key === 'station' ? '#e4aa54' : '#d4bb98');
    }
    if (key === 'bridge') {
      box(side * 14.5, -.09, 0, 3, .08, CHUNK_LENGTH, '#5c8992');
      box(side * 6.15, .55, 0, .1, .09, CHUNK_LENGTH, trim);
      box(side * 6.15, .35, 0, .07, .047, CHUNK_LENGTH, '#544d43');
      for (let z = -24; z <= 25; z += 6) {
        box(side * 6.15, .37, z, .22, .8, .22, stone);
        box(side * 9.3, -.040, z, 1.7, .012, .065, '#a5d9ca');
        box(side * 7.4, -.040, z + 1.3, .86, .012, .04, '#65aeae');
        box(side * 10, -.040, z + 2.2, 1.35, .012, .035, '#80bcba');
      }
      if (side === 1) model('fountain', side * 6.7, 5, 2.8, 0);
    } else if (key === 'yard') {
      model('garage', side * 8.2, -15, 6.5, -side * Math.PI / 2);
      model('garage', side * 8.2, 13, 6.5, -side * Math.PI / 2);
      for (const z of [-3, 2, 7]) {
        box(side * 7.65, .88, z, 3, 1.6, 4.6, z === 2 ? bright : trim);
        box(side * 6.12, .87, z, .09, 1.25, 4.4, wall);
        for (const stripe of [-1.8, -1.25, -.7, -.15, .4, .95, 1.5]) {
          box(side * 6.055, .88, z + stripe, .07, 1.25, .13, z === 2 ? '#9b5040' : '#4d6470');
        }
      }
    } else if (key === 'tunnel') {
      box(side * 7.12, 3, 0, 2.25, 6, CHUNK_LENGTH, wall);
      box(side * 6.02, .6, 0, .09, .28, CHUNK_LENGTH, trim);
      box(side * 6.01, 4.98, 0, .09, .12, CHUNK_LENGTH, '#434c4c');
      for (const z of [-22, -9, 4, 17]) {
        box(side * 5.87, 3, z, .32, 6, .6, stone);
        box(side * 5.35, 5.85, z, 1.25, .2, .62, stone);
        box(side * 5.2, 5.65, z, .62, .12, .3, bright);
      }
    } else if (key === 'station') {
      box(side * 6.45, 5, 0, 4, .16, CHUNK_LENGTH, trim);
      box(side * 4.45, 4.94, 0, .26, .34, CHUNK_LENGTH, bright);
      for (const z of [-21, -8, 5, 18]) {
        box(side * 5.3, 2.45, z, .32, 4.8, .34, trim);
        box(side * 5.44, .62, z + 3.9, .72, .18, 2.2, '#6d5746');
        box(side * 5.71, .89, z + 3.9, .14, .5, 2.2, '#6d5746');
        box(side * 4.92, 4.76, z + 2.55, 1.67, .10, .2, '#f2dda7');
        box(side * 5.83, 2.44, z - 2.8, .36, 3.62, 1.05, '#9f926f');
        box(side * 5.61, 2.44, z - 2.8, .06, 2.87, .87, '#b65d45');
        box(side * 5.57, 2.59, z - 2.8, .038, 2.37, .65, '#76969a');
      }
      if (side === 1) model('fountain', 7.1, -2, 3, 0);
    } else {
      const rotation = -side * Math.PI / 2;
      model('shop', side * 8.15, -16.5, 6.1, rotation);
      model(side === 1 ? 'shop' : 'garage', side * 8.4, 13.5, 6.7, rotation);
      for (const z of [-5, 22]) {
        const x = side * 7.65;
        const front = x - side * 1.86;
        const height = (z === -5 ? 7.7 : 6) + (variant === (side === 1 ? 0 : 2) ? 2.1 : 0);
        box(x, height / 2, z, 3.7, height, 8.3, z === -5 ? wall : stone);
        box(x, height + .1, z, 3.86, .2, 8.55, stone);
        box(front, 1.55, z, .05, 2.8, 8.22, trim);
        box(front - side * .25, 2.16, z, .8, .16, 7.9, bright);
        box(front - side * .065, .24, z, .08, .23, 8.16, '#54584f');
        for (const edge of [-4.12, 4.12]) {
          box(front - side * .075, height * .55, z + edge, .12, height * .9, .17, '#d9c2a2');
        }
        for (let stripe = -3.72; stripe <= 3.8; stripe += .75) {
          box(front - side * .26, 2.247, z + stripe, .77, .024, .26, stone);
        }
        for (const offset of [-2.6, 0, 2.6]) {
          box(front - side * .077, 1.04, z + offset, .075, 1.28, 1.74, '#edcb92');
          box(front - side * .116, 1.08, z + offset, .05, .99, 1.48, '#678d89');
          box(front - side * .145, 1.06, z + offset, .04, .032, 1.39, '#d7d9be');
          for (let level = 3.4; level < height - .5; level += 1.7) {
            box(front, level, z + offset, .075, 1.15, 1.33, stone);
            box(front - side * .07, level, z + offset, .08, .87, 1.12, '#416877');
            box(front - side * .13, level - .43, z + offset, .23, .082, 1.28, '#ddc8a5');
            box(front - side * .13, level, z + offset, .04, .97, .055, '#889d8e');
            box(front - side * .127, level + .13, z + offset, .04, .033, 1.11, '#b5bd99');
            if (offset !== 0 && level < 5) {
              box(front - side * .17, level - .39, z + offset + .43, .28, .22, .38, '#8b9891');
              box(front - side * .316, level - .39, z + offset + .43, .02, .085, .29, '#4b6365');
            }
          }
        }
      }
      tree(side * 4.77, side > 0 ? 11.8 : 1.9);
      tree(side * 5.07, -22.5);
    }
    for (const z of [-11, 11]) {
      solid(new CylinderGeometry(.065, .09, 4, 6), '#4f6460', side * 3.9, 2.05, z);
      box(side * 3.74, 4.01, z, .5, .13, .26, '#f2d78f');
    }
    addOuterBlock(box, side, key, colors, variant);
  }
  if (key === 'street' || key === 'station') {
    for (const z of [-21, 16]) {
      for (const side of [-1, 1]) {
        box(side * 3.62, 2.98, z, .11, 5.84, .14, '#626557');
        box(side * 3.62, .22, z, .25, .32, .24, '#8c8072');
      }
      box(0, 5.58, z, 7.28, .037, .038, '#646359');
      for (const lane of [-2, 0, 2]) {
        box(lane, 5.42, z, .055, .30, .066, '#78756a');
        box(lane, 5.27, z, .23, .045, .084, '#524d46');
      }
    }
  }
  const geometry = mergeGeometries(parts);
  parts.forEach(part => part.dispose());
  if (!geometry) throw new Error('Runner district geometry attributes differ');
  geometry.computeBoundingSphere();
  return geometry;
}

export function Track() {
  const segment = useGameStore(s => Math.floor(s.distance / CHUNK_LENGTH));
  const launch = useGameStore(s => s.launch);
  const group = useRef<Group>(null);
  const scenery = useMemo(() => districts.map(district => district.key === 'street'
    ? [0, 1, 2].map(variant => makeDistrict(district, variant))
    : [makeDistrict(district)]), []);
  const material = useMemo(() => new MeshStandardMaterial({ vertexColors: true, roughness: .9 }), []);
  const road = useMemo(makeRoadGeometry, []);
  const pavement = useMemo(() => districts.map(({ key, colors }) => new MeshStandardMaterial({
    map: paintDistrictRoad(key, colors[1]),
    roughness: .94,
  })), []);

  useEffect(() => () => {
    scenery.flat().forEach(geometry => geometry.dispose());
    material.dispose();
    road.dispose();
    pavement.forEach(surface => {
      surface.map?.dispose();
      surface.dispose();
    });
  }, [scenery, material, road, pavement]);

  useFrame(() => {
    if (group.current) group.current.position.z = extras.distance;
  });
  const chunks = Array.from({ length: 4 }, (_, index) => Math.max(0, segment - 1) + index);
  return <group ref={group}>
    {chunks.map(id => {
      const district = Math.max(0, districts.findIndex(area => area.key === runnerDistrict(launch, id, CHUNK_LENGTH)));
      const variants = scenery[district];
      return <group key={id} position={[0, 0, -(id + .5) * CHUNK_LENGTH]}>
        <mesh geometry={variants[id % variants.length]} material={material} dispose={null}/>
        <mesh geometry={road} material={pavement[district]} dispose={null}/>
        <group position={[5.72, 2.58, -5]} rotation={[0, -Math.PI / 2, 0]}>
          <StreetLabel text={districts[district].label} size={[4.2, .8]} color={districts[district].colors[2]}/>
        </group>
        {districts[district].key === 'street' && <group position={[-5.69, 2.6, 21.8]} rotation={[0, Math.PI / 2, 0]}>
          <StreetLabel text="街坊士多" size={[3.65, .69]} color="#995340"/>
        </group>}
      </group>;
    })}
  </group>;
}
