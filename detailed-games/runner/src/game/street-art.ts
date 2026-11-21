import { CanvasTexture, Float32BufferAttribute, PlaneGeometry, SRGBColorSpace } from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CHUNK_LENGTH } from '../utils/constants';

type District = 'street' | 'station' | 'bridge' | 'yard' | 'tunnel';
type Box = (x: number, y: number, z: number, w: number, h: number, d: number, color: string) => void;
const WIDTH = 26;

export function makeRoadGeometry() {
  const surface = (width: number, x: number, height: number) => {
    const plane = new PlaneGeometry(width, CHUNK_LENGTH).rotateX(-Math.PI / 2).translate(x, height, 0);
    const positions = plane.getAttribute('position');
    const coordinates = Array.from({ length: positions.count }, (_, i) => [
      positions.getX(i) / WIDTH + .5,
      .5 - positions.getZ(i) / CHUNK_LENGTH,
    ]).flat();
    plane.setAttribute('uv', new Float32BufferAttribute(coordinates, 2));
    return plane;
  };
  const parts = [surface(WIDTH, 0, -.041), surface(2.8, -4.6, .142), surface(2.8, 4.6, .142)];
  const geometry = mergeGeometries(parts)!;
  parts.forEach(part => part.dispose());
  return geometry;
}

export function paintDistrictRoad(key: District, stone: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(canvas.width / WIDTH, canvas.height / CHUNK_LENGTH);
  ctx.translate(WIDTH / 2, CHUNK_LENGTH / 2);
  const half = CHUNK_LENGTH / 2;
  const fill = (color: string, x: number, z: number, w: number, d: number) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, z, w, d);
  };

  fill(key === 'bridge' ? '#5c8992' : '#54595a', -13, -half, WIDTH, CHUNK_LENGTH);
  fill(key === 'tunnel' ? '#544f46' : '#81756a', -3.22, -half, 6.44, CHUNK_LENGTH);
  let seed = 45291;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 0x100000000;
  };
  for (let i = 0; i < 6000; i++) {
    const x = random() * WIDTH - 13;
    const z = random() * CHUNK_LENGTH - half;
    const width = random() * .13 + .015;
    fill(i % 3 === 0 ? '#e6d4b02d' : '#252d2b30', x, z, width, width * .67);
  }
  for (const lane of [-2, 0, 2]) {
    fill('#50474038', lane - .84, -half, .19, CHUNK_LENGTH);
    fill('#50474038', lane + .60, -half, .19, CHUNK_LENGTH);
    for (let z = -24; z < 24; z += 2.4) {
      fill('#37342e42', lane - .95, z + .02, 1.9, .33);
    }
  }
  if (key === 'street' || key === 'station') {
    // Pedestrian crossings sit below the rails and do not share obstacle colors.
    for (const z of [-14, 15]) {
      fill('#90877c', -3.22, z - .58, 6.44, 1.16);
      for (let x = -3.03; x < 3.10; x += .51) fill('#d6c9ae', x, z - .38, .23, .76);
    }
  }
  for (const side of [-1, 1]) {
    const sidewalk = (color: string, x: number, z: number, w: number, d: number) =>
      fill(color, side > 0 ? x : -x - w, z, w, d);
    sidewalk(stone, 3.2, -half, 2.8, CHUNK_LENGTH);
    sidewalk('#554e4438', 5.52, -half, .48, CHUNK_LENGTH);
    sidewalk('#ece0bc', 3.37, -half, .095, CHUNK_LENGTH);
    sidewalk('#b28a51', 3.51, -half, .19, CHUNK_LENGTH);
    for (let z = -24; z < 25; z += .16) sidewalk('#edc979', 3.545, z, .115, .052);
    for (let z = -25, row = 0; z < 25; z += .78, row++) {
      sidewalk(row % 5 === 3 ? '#fff2d22b' : '#90806b20', 3.74, z, 2.26, .76);
      sidewalk('#645c4938', 3.74, z, 2.26, .029);
      sidewalk('#796d553a', row % 2 ? 4.89 : 4.47, z, .028, .76);
    }
    for (const z of [-20, -5, 10, 21]) {
      // A route marking and a drain live outside the three playable lanes.
      const x = side * 4.24;
      ctx.save();
      ctx.translate(x, z);
      ctx.fillStyle = key === 'station' ? '#356367' : '#eee1bd';
      ctx.beginPath();
      ctx.moveTo(0, -.46);
      ctx.lineTo(.21, -.10);
      ctx.lineTo(.069, -.10);
      ctx.lineTo(.069, .34);
      ctx.lineTo(-.069, .34);
      ctx.lineTo(-.069, -.10);
      ctx.lineTo(-.21, -.10);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      sidewalk('#474f4d', 3.75, z + 2.1, .53, .4);
      for (let rib = 0; rib < 6; rib++) sidewalk('#7e8070', 3.80 + rib * .071, z + 2.14, .026, .32);
    }
    if (key === 'street' || key === 'yard') {
      sidewalk('#ccc7a3', 10.42, -half, .10, CHUNK_LENGTH);
      sidewalk('#dfb057', 12.16, -half, .072, CHUNK_LENGTH);
      for (let z = -24; z <= 24; z += 4) sidewalk('#cdc6ab', 11.16, z, .084, 1.68);
    }
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export function addOuterBlock(box: Box, side: number, key: District, colors: readonly string[], variant: number) {
  const [wall, stone, trim, bright] = colors;
  if (key === 'tunnel') {
    for (const z of [-16, 0, 16]) {
      box(side * 5.96, 2.18, z, .19, 2.62, 2.28, '#353d3c');
      box(side * 5.85, 2.18, z, .085, 2.29, 1.94, '#505e56');
      box(side * 5.78, 3.53, z, .20, .10, 1.47, '#eabb71');
      box(side * 5.76, 2.75, z, .07, .033, 1.65, '#899186');
    }
    return;
  }

  const skyline = [
    [14, 9, 12, 7, 11, 14],
    [9, 13, 8, 13, 16, 10],
    [12, 15, 9, 11, 7, 13],
  ][(variant + (side === 1 ? 1 : 0)) % 3];
  const towers = key === 'bridge' ? [0, 2, 5] : [0, 1, 2, 3, 4, 5];
  for (const i of towers) {
    const z = -21 + 8.3 * i + (side === 1 ? 1.2 : 0);
    const height = skyline[i] + (key === 'yard' ? -3 : 0);
    const x = side * (key === 'bridge' ? 18.6 : i % 2 ? 12.6 : 14.5);
    const width = i % 2 ? 4.6 : 5.1;
    const depth = i % 3 ? 6.8 : 7.5;
    const front = x - side * width / 2;
    const facade = [stone, wall, '#b5aa92', '#cda383', '#9daaa0', '#dfbe93'][(i + variant) % 6];
    box(x, height / 2, z, width, height, depth, facade);
    box(x, height - .05, z, width + .28, .25, depth + .26, stone);
    box(x + side * .5, height + .4, z - 1.1, 1.5, .8, 2.8, trim);
    box(x, height + .10, z - depth / 2, width + .14, .34, .11, facade);
    for (let floor = 2.75; floor < height - .7; floor += 2.0) {
      box(front - side * .03, floor - .72, z, .26, .075, depth - .20, '#e0c6aa');
      for (const col of [-1, 0, 1]) {
        const windowZ = z + col * 1.76;
        box(front - side * .045, floor, windowZ, .10, .97, 1.13, '#53727a');
        box(front - side * .107, floor - .46, windowZ, .24, .073, 1.24, stone);
        if ((i + col) % 2 === 0) box(front - side * .111, floor, windowZ + .09, .026, .91, .076, '#9eb0a7');
        if (col === (i % 2 ? 1 : -1) && floor < 9 && key === 'street') {
          box(front - side * .23, floor - .54, windowZ, .48, .12, 1.36, stone);
          box(front - side * .45, floor - .32, windowZ, .081, .36, 1.36, '#8b7965');
        }
      }
      // Windows on the end walls also read when approaching along the rails.
      for (const offset of [-.88, .88]) {
        box(x + offset, floor, z + depth / 2 + .018, .97, .95, .073, '#58717a');
      }
    }
  }
  if (key !== 'street') return;
  for (const z of [-10.9, 6.8]) {
    const x = side * 7.1;
    box(x, 1.43, z, 2.75, 2.62, 2.48, z < 0 ? trim : wall);
    box(x, 2.84, z, 3.0, .25, 2.68, stone);
    box(side * 5.69, 1.65, z, .1, 1.22, 1.97, '#314c51');
    box(side * 5.49, 2.47, z, .63, .17, 2.61, bright);
    for (const stripe of [-1, -.50, 0, .50, 1]) {
      box(side * 5.39, 2.56, z + stripe, .64, .025, .235, stone);
    }
    box(side * 5.55, 1.04, z, .35, .10, 2.12, stone);
  }
  const binX = side * 5.08;
  const binZ = side > 0 ? 3.2 : -1.2;
  box(binX, .50, binZ, .48, .71, .55, '#476d64');
  box(binX, .87, binZ, .51, .105, .57, '#384f4d');
  box(binX - side * .245, .70, binZ, .021, .10, .39, '#344b49');
  for (const z of [-19.1, -18.2, 19.7, 20.6]) {
    box(side * 3.91, .40, z, .13, .53, .13, '#5a6b66');
    box(side * 3.91, .60, z, .135, .075, .135, '#d8b97a');
  }
}
