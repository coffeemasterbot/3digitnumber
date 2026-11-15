import * as THREE from 'three';

// IDs and positions come from the authoritative simulation. All time is supplied by its owner.
export function createRocketVisuals(scene, { reducedMotion = false, onImpact } = {}) {
  const rockets = new Map(), bursts = new Map(), seen = new Set();
  const rocketGeometry = new THREE.ConeGeometry(.105, .42, 10);
  rocketGeometry.rotateX(Math.PI / 2);
  const trailGeometry = new THREE.ConeGeometry(.075, .28, 8);
  trailGeometry.rotateX(-Math.PI / 2);
  const ringGeometry = new THREE.RingGeometry(.15, .2, 24);
  const shardGeometry = new THREE.TetrahedronGeometry(.08);
  const rocketMaterial = new THREE.MeshStandardMaterial({ color: '#b86436', metalness: .5, roughness: .4 });
  const flameMaterial = new THREE.MeshBasicMaterial({ color: '#ffd374' });
  const ringMaterial = new THREE.MeshBasicMaterial({ color: '#ffd38a', transparent: true, side: THREE.DoubleSide, depthWrite: false });
  const shardMaterial = new THREE.MeshBasicMaterial({ color: '#efa65a', transparent: true });
  function position(mesh, point) { mesh.position.set(point.x, point.y, point.z); }
  function update(projectiles, impacts, dt) {
    const active = new Set();
    for (const projectile of projectiles) {
      active.add(projectile.id);
      let group = rockets.get(projectile.id);
      if (!group) {
        group = new THREE.Group();
        group.add(new THREE.Mesh(rocketGeometry, rocketMaterial));
        const trail = new THREE.Mesh(trailGeometry, flameMaterial);
        trail.position.z = .3; group.add(trail);
        scene.add(group); rockets.set(projectile.id, group);
      }
      position(group, projectile.position);
      const v = projectile.velocity;
      const direction = new THREE.Vector3(v.x, v.y, v.z);
      if (direction.lengthSq()) group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), direction.normalize());
    }
    for (const [id, group] of rockets) if (!active.has(id)) { scene.remove(group); rockets.delete(id); }
    for (const event of impacts) {
      if (seen.has(event.id)) continue;
      seen.add(event.id);
      const group = new THREE.Group();
      const material = ringMaterial.clone();
      const ring = new THREE.Mesh(ringGeometry, material);
      group.add(ring);
      if (!reducedMotion) for (let i = 0; i < 6; i++) {
        const shard = new THREE.Mesh(shardGeometry, shardMaterial.clone());
        shard.userData.direction = new THREE.Vector3(Math.cos(i * Math.PI / 3), .35 + i % 2 * .3, Math.sin(i * Math.PI / 3));
        group.add(shard);
      }
      position(group, event.position); scene.add(group); bursts.set(event.id, { group, age: 0 });
      onImpact?.(event);
    }
    for (const [id, burst] of bursts) {
      burst.age += Math.max(0, dt);
      const progress = Math.min(1, burst.age / .55);
      burst.group.children[0].scale.setScalar(1 + progress * 6);
      burst.group.children[0].material.opacity = .85 * (1 - progress);
      for (const shard of burst.group.children.slice(1)) {
        shard.position.copy(shard.userData.direction).multiplyScalar(progress * 1.4);
        shard.material.opacity = 1 - progress;
      }
      if (progress >= 1) {
        scene.remove(burst.group);
        for (const child of burst.group.children) child.material.dispose();
        bursts.delete(id);
      }
    }
  }
  function dispose() {
    for (const group of rockets.values()) scene.remove(group);
    for (const burst of bursts.values()) {
      scene.remove(burst.group);
      for (const child of burst.group.children) child.material.dispose();
    }
    rockets.clear(); bursts.clear(); seen.clear();
    for (const resource of [rocketGeometry, trailGeometry, ringGeometry, shardGeometry, rocketMaterial, flameMaterial, ringMaterial, shardMaterial]) resource.dispose();
  }
  return { update, dispose };
}
