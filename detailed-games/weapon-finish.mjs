import * as THREE from 'three';

// Attach cosmetic meshes to the first-person viewmodel. Its owner disposes the group on removal.
export function addWeaponFinish(group,type){
  const alloy=new THREE.MeshStandardMaterial({color:'#55646c',metalness:.62,roughness:.43});
  const accent=new THREE.MeshStandardMaterial({color:'#daa753',metalness:.35,roughness:.53});
  function add(geometry,material,x,y,z){
    const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);group.add(m);return m;
  }
  if(type==='bazooka'){
    const tube=add(new THREE.CylinderGeometry(.108,.14,.64,16),alloy,0,.035,-.3);tube.rotation.x=Math.PI/2;
    for(const z of [-.59,-.29,-.04])add(new THREE.TorusGeometry(.12,.018,6,16),accent,0,.035,z);
  }else if(type==='knife'){
    add(new THREE.BoxGeometry(.24,.025,.07),accent,0,.04,.015);
  }else{
    for(const z of [-.13,-.08,-.03])add(new THREE.BoxGeometry(.15,.023,.012),alloy,0,.14,z);
    add(new THREE.BoxGeometry(.033,.026,.035),accent,0,.16,-.11);
  }
}
