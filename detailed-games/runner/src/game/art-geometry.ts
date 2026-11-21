import {
  BoxGeometry, BufferGeometry, Color, CylinderGeometry, Float32BufferAttribute,
  Matrix4, Quaternion, Euler, SphereGeometry, Vector3,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

type Axes = [number, number, number];
const origin: Axes = [0, 0, 0];
const unit: Axes = [1, 1, 1];

// Merge painted pieces to keep each rigid prop or animated limb on one draw call.
export function artGeometry() {
  const pieces: BufferGeometry[] = [];
  function part(geometry: BufferGeometry, color: string, center: Axes, rotation = origin, scale = unit) {
    const matrix = new Matrix4().compose(
      new Vector3(...center), new Quaternion().setFromEuler(new Euler(...rotation)), new Vector3(...scale),
    );
    geometry.applyMatrix4(matrix);
    geometry.deleteAttribute('uv');
    const count = geometry.attributes.position.count;
    const colors = new Float32Array(count * 3);
    const tint = new Color(color);
    for (let index = 0; index < colors.length; index += 3) tint.toArray(colors, index);
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    if (!geometry.index) geometry.setIndex(Array.from({ length: count }, (_, index) => index));
    pieces.push(geometry);
  }
  return {
    part,
    box(center: Axes, size: Axes, tint: string, rotation?: Axes) {
      part(new BoxGeometry(...size), tint, center, rotation);
    },
    oval(center: Axes, radius: Axes, tint: string) {
      part(new SphereGeometry(1, 12, 8), tint, center, origin, radius);
    },
    tube(center: Axes, radii: [number, number, number], tint: string, rotation?: Axes) {
      part(new CylinderGeometry(...radii, 10), tint, center, rotation);
    },
    finish() {
      const geometry = mergeGeometries(pieces);
      pieces.forEach(piece => piece.dispose());
      if (!geometry) throw new Error('Runner art geometry attributes differ');
      return geometry;
    },
  };
}
