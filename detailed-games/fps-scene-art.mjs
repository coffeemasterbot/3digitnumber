import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { kenneyMeshes } from './fps-kenney-art.mjs';

const oldCity = {
  sky: '#cadcde', fog: '#c8d5ca', floor: '#a69780', wall: '#c7a27d', inlay: '#87765c',
  trim: '#efe0be', edge: '#ab7e62', cover: '#a48762', door: '#50726b',
  cold: '#465750', bright: '#ffe3b6', landmark: '#477b70',
};
const warehouse = {
  sky: '#c1d3de', fog: '#b5c5c5', floor: '#8f9b9c', wall: '#849c9d', inlay: '#405c67',
  trim: '#d6bf89', edge: '#687f89', cover: '#93896b', door: '#4e6b77',
  cold: '#453f35', bright: '#f0edda', landmark: '#b07c40',
};
const fortress = {
  sky: '#d2dace', fog: '#c9d3bc', floor: '#90967d', wall: '#abb191', inlay: '#747c62',
  trim: '#e0d6b2', edge: '#8c9c76', cover: '#827a58', door: '#686f53',
  cold: '#4a594d', bright: '#fff4cc', landmark: '#955a40',
};
const COURTS = [oldCity, warehouse, fortress];

function canvasTexture(width, height, paint) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  paint(canvas.getContext('2d'), width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}

function surface(map, kind) {
  return canvasTexture(256, 256, c => {
    c.fillStyle = map[kind];
    c.fillRect(0, 0, 256, 256);
    let seed = 62431;
    const hash = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    const grout = 'rgba(40,44,38,.32)';
    const highlight = 'rgba(255,245,219,.27)';
    if (kind === 'door' || kind === 'wall' && map === warehouse) {
      for (let x = 0; x < 256; x += 16) {
        const rib = c.createLinearGradient(x, 0, x + 16, 0);
        rib.addColorStop(0, grout);
        rib.addColorStop(.27, highlight);
        rib.addColorStop(.56, 'rgba(0,0,0,0)');
        c.fillStyle = rib;
        c.fillRect(x, 0, 16, 256);
      }
      c.fillStyle = map.inlay;
      c.fillRect(0, 0, 256, 8);
      c.fillRect(0, 244, 256, 12);
      if (kind === 'door') {
        c.fillStyle = map.trim;
        c.fillRect(18, 121, 220, 2);
        c.fillRect(18, 156, 220, 2);
        c.strokeStyle = map.inlay;
        c.lineWidth = 8;
        c.strokeRect(15, 15, 226, 226);
      }
    } else {
      const rise = kind === 'cover' ? 32 : kind === 'wall' ? 42 : 64;
      for (let y = 0; y < 256; y += rise) {
        const offset = Math.floor(y / rise) % 2 ? 32 : 0;
        c.fillStyle = grout;
        c.fillRect(0, y, 256, 3);
        c.fillStyle = highlight;
        c.fillRect(0, y + 3, 256, 2);
        if (kind === 'cover') continue;
        for (let x = offset; x < 256; x += 64) {
          c.fillStyle = grout;
          c.fillRect(x, y, 2, rise);
          c.fillStyle = highlight;
          c.fillRect(x + 2, y + 3, 1, rise - 4);
        }
      }
      if (kind === 'cover') {
        c.fillStyle = map.inlay;
        c.fillRect(16, 0, 13, 256);
        c.fillRect(227, 0, 13, 256);
        for (const x of [20, 231]) {
          for (const y of [19, 79, 150, 228]) {
            c.fillStyle = highlight;
            c.fillRect(x, y, 5, 5);
          }
        }
      }
    }
    for (let i = 0; i < 860; i++) {
      const x = hash() * 256;
      const y = hash() * 256;
      c.fillStyle = hash() > .58 ? 'rgba(255,250,221,.075)' : 'rgba(40,34,28,.11)';
      c.fillRect(x, y, (1 + hash() * 2) * (kind === 'cover' ? 3 : 1), 1 + hash() * 2);
    }
    if (map === fortress && kind === 'wall') {
      const damp = c.createLinearGradient(0, 256, 0, 158);
      damp.addColorStop(0, '#54684650');
      damp.addColorStop(1, '#54684600');
      c.fillStyle = damp;
      c.fillRect(0, 158, 256, 98);
    }
  });
}

function solid(color, properties = {}) {
  return new THREE.MeshStandardMaterial({color, roughness:.84, ...properties});
}

function translatedBox(w,h,d,x,y,z) {
  return new THREE.BoxGeometry(w,h,d).translate(x,y,z);
}

function mesh(geometry, material, parent, cast = true, receive = true) {
  const object = new THREE.Mesh(geometry, material);
  object.castShadow = cast;
  object.receiveShadow = receive;
  parent.add(object);
  return object;
}

function finishGeometry(geometries) {
  if (geometries.length === 1) return geometries[0];
  const linear = geometries.some(geometry => !geometry.index);
  const compatible = linear ? geometries.map(geometry => geometry.index ? geometry.toNonIndexed() : geometry) : geometries;
  const merged = mergeGeometries(compatible);
  new Set([...geometries,...compatible]).forEach(geometry => geometry.dispose());
  return merged;
}

function createBatch(root) {
  const sets = new Map();
  return {
    add(geometry, material) {
      if (!sets.has(material)) sets.set(material, []);
      sets.get(material).push(geometry);
    },
    finish() {
      for (const [material, pieces] of sets) mesh(finishGeometry(pieces), material, root);
    },
  };
}

function scaledUV(geometry, repeatX, repeatY) {
  const uv = geometry.getAttribute('uv');
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * repeatX, uv.getY(i) * repeatY);
  return geometry;
}

const meshArrays = new Map();
function kenneyGeometry(name) {
  if (!meshArrays.has(name)) {
    const [pos, norm, rgb, index] = kenneyMeshes[name].map(ascii => Uint8Array.from(atob(ascii), c => c.charCodeAt(0)));
    meshArrays.set(name, {
      positions: Float32Array.from(new Int16Array(pos.buffer), n => n / 4096),
      normals: new Int16Array(norm.buffer),
      colors: rgb,
      indices: new Uint16Array(index.buffer),
    });
  }
  const {positions, normals, colors, indices} = meshArrays.get(name);
  return new THREE.BufferGeometry()
    .setAttribute('position', new THREE.BufferAttribute(positions.slice(),3))
    .setAttribute('normal', new THREE.BufferAttribute(normals.slice(),3,true))
    .setAttribute('color', new THREE.BufferAttribute(colors,3,true))
    .setIndex(new THREE.BufferAttribute(indices,1));
}

function nearestFace(w, x, z) {
  return w.w>=w.d ? [w.x+x,w.z+z*Math.sign(-w.z||1)] : [w.x+z*Math.sign(-w.x||1),w.z+x];
}

function decorateWall(batch, w, theme, mats, tall, external) {
  const alongX = w.w>=w.d;
  const width = Math.max(w.w,w.d), depth = Math.min(w.w,w.d);
  const add = (x,y,z,bw,bh,bd,mat) => {
    const [px,pz] = nearestFace(w,x,z);
    batch.add(translatedBox(alongX?bw:bd,bh,alongX?bd:bw,px,y,pz),mat);
  };
  if (!tall) {
    add(0,w.h-.07,0,width+.035,.08,depth+.03,mats.trim);
    add(0,.08,0,width+.035,.09,depth+.03,mats.inlay);
    for (const x of [-width*.34,width*.34]) add(x,w.h*.51,depth*.49,.09,w.h*.8,.042,mats.inlay);
    return;
  }
  add(0,w.h-.07,0,width+.045,.13,depth+.045,mats.trim);
  add(0,.29,0,width,.52,depth+.04,mats.inlay);
  add(0,.58,0,width,.07,depth+.06,mats.trim);
  if (theme === warehouse) {
    for (let x = -width/2 + .14;x < width/2;x += 5) {
      add(x,(w.h+.6)/2,depth*.5,.13,w.h-.6,.07,mats.inlay);
      add(x,w.h-.34,depth*.54,.42,.14,.065,mats.landmark);
    }
  } else if (theme === oldCity) {
    for (let x = -width/2 + 1.35;x < width/2 - .75;x += 3.2) {
      add(x,w.h - 1.05,depth*.5,.91,1.16,.064,mats.trim);
      add(x,w.h - 1.05,depth*.54,.71,.9,.06,mats.inlay);
      for (let slat = 0; slat < 4; slat++) add(x,w.h-.75-slat*.18,depth*.57,.66,.033,.045,mats.edge);
      add(x,w.h - 1.63,depth*.55,1.02,.08,.14,mats.trim);
    }
  } else if (external) {
    for (let x = -width/2 + .55;x < width/2;x += 1.55)
      add(x,w.h+.25,0,.62,.5,depth,mats.edge);
  }
}

function civicQuarter(batch,mats) {
  for (let i=0;i<7;i++){
    const x=-19+i*6.25;
    const h=[7,10,8,13,10,8,7][i];
    batch.add(translatedBox(5.95,h,4,x,h/2,-21.3),mats.edge);
    batch.add(translatedBox(6.2,.25,4.1,x,h,-21.3),mats.trim);
    for(const n of [-1.6,0,1.6]){
      if(i===3&&n===0) continue;
      batch.add(translatedBox(.72,1.23,.04,x+n,h-1.4,-19.29),mats.inlay);
      batch.add(translatedBox(1.04,.12,.15,x+n,h-2.04,-19.22),mats.trim);
    }
  }
  // City clock, warehouse roof and fortress towers give each map a different silhouette.
  const rim = new THREE.CylinderGeometry(.72,.72,.15,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.25);
  const face = new THREE.CylinderGeometry(.60,.60,.16,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.19);
  batch.add(rim,mats.inlay);
  batch.add(face,mats.trim);
  batch.add(translatedBox(.43,.075,.04,-.09,11.25,-19.08),mats.inlay);
  batch.add(translatedBox(.075,.33,.04,-.25,11.40,-19.08),mats.inlay);
}

function industrialYard(batch,mats) {
  for(const x of [-14,0,14]){
    const high=x===0;
    const h=high?9.4:7.4;
    batch.add(translatedBox(13.45,h,5,x,h/2,-22),mats.edge);
    batch.add(translatedBox(13.65,.3,5.2,x,h,-22),mats.inlay);
    batch.add(translatedBox(11,.34,.08,x,h-1.15,-19.46),mats.landmark);
    for(const n of [-4,-2,0,2,4])
      batch.add(translatedBox(1.33,.76,.1,x+n,h-.57,-19.45),mats.trim);
    if(high){
      batch.add(translatedBox(9.8,1.45,2.6,x,h+.69,-22),mats.edge);
      batch.add(translatedBox(10.05,.2,2.85,x,h+1.46,-22),mats.inlay);
      for(const n of [-3.5,3.5])
        batch.add(new THREE.CylinderGeometry(.32,.43,2.0,12).translate(x+n,h+2.1,-22),mats.inlay);
    }
  }
}

function gardenRampart(batch,mats) {
  batch.add(translatedBox(38.5,6.7,4,0,3.35,-23),mats.edge);
  batch.add(translatedBox(38.5,.17,4.1,0,6.62,-23),mats.trim);
  for(let x=-17.8;x<18.8;x+=1.65)
    batch.add(translatedBox(.76,.59,1.18,x,6.96,-21.5),mats.edge);
  for(const x of [-12.7,0,12.7]){
    const height=x===0?11.5:9;
    batch.add(new THREE.CylinderGeometry(2.35,2.58,height,14).translate(x,height/2,-22),mats.edge);
    batch.add(new THREE.CylinderGeometry(2.5,2.43,.25,14).translate(x,height-.48,-22),mats.trim);
    batch.add(new THREE.ConeGeometry(2.65,2.8,14).translate(x,height+1.33,-22),mats.landmark);
    batch.add(translatedBox(.53,1.18,.075,x,height-1.55,-19.62),mats.inlay);
    batch.add(translatedBox(.83,.11,.16,x,height-2.16,-19.55),mats.trim);
  }
}

function skyline(batch, root, theme, mats) {
  if(theme===oldCity) civicQuarter(batch,mats);
  if(theme===warehouse) industrialYard(batch,mats);
  if(theme===fortress) gardenRampart(batch,mats);
  for (const side of [-1,1]) {
    const frame = kenneyGeometry('station').scale(.95,1.45,.95).translate(side*2.5,4.92,-18.3);
    mesh(frame,solid(theme.trim,{vertexColors:true}),root,false);
  }
}

export function buildArenaArt(root, walls, doors, round) {
  const theme = COURTS[round-1] ?? oldCity;
  const batch = createBatch(root);
  const mats = Object.fromEntries(['trim','inlay','edge','landmark'].map(key=>[key,solid(theme[key])]));
  const floor = surface(theme,'floor');
  floor.repeat.set(10,10);
  mesh(new THREE.PlaneGeometry(38,38).rotateX(-Math.PI/2),solid('#fff8ed',{map:floor}),root,false);
  const floorStripe = solid(theme.landmark);
  for (const side of [-1,1]) {
    for (let z=12;z>=-12;z-=2.4) {
      batch.add(translatedBox(.086,.009,1.5,side*1.15,.006,z),floorStripe);
    }
  }
  const sideWall=solid('#ffffff',{map:surface(theme,'wall')});
  const sideCover=solid('#ffffff',{map:surface(theme,'cover')});
  const rayMaterial=solid('#ffffff');
  const wallRays = walls.map((w,i)=>{
    const tall=w.h>=1.5;
    const repeats = Math.max(1,Math.round(Math.max(w.w,w.d)/3.7));
    const paint = scaledUV(translatedBox(w.w,w.h,w.d,w.x,w.h*.5,w.z),repeats,1);
    batch.add(paint,tall?sideWall:sideCover);
    decorateWall(batch,w,theme,mats,tall,i<4);
    const hit = mesh(translatedBox(w.w,w.h,w.d,w.x,w.h*.5,w.z),rayMaterial,root,false,false);
    hit.visible=false;
    return hit;
  });
  const doorMaterial=solid('#ffffff',{map:surface(theme,'door')});
  const doorViews=doors.map(d=>{
    const group = new THREE.Group();
    group.position.set(d.x,d.h/2,d.z);
    root.add(group);
    const meshBox = mesh(new THREE.BoxGeometry(d.w,d.h,d.d),doorMaterial,group);
    const horizontal=d.w>d.d;
    const trim = [
      translatedBox(d.w+.035,.11,d.d+.035,0,-d.h/2+.12,0),
      translatedBox(d.w+.035,.07,d.d+.035,0,d.h/2-.15,0),
    ];
    for(const side of [-1,1]){
      trim.push(translatedBox(horizontal?.08:d.w+.03,d.h-.18,horizontal?d.d+.03:.08,horizontal?side*(d.w/2-.16):0,0,horizontal?0:side*(d.d/2-.16)));
    }
    mesh(finishGeometry(trim),mats.trim,group);
    const status = mesh(translatedBox(horizontal?.24:d.w+.04,.075,horizontal?d.d+.04:.24,0,.8,0),new THREE.MeshBasicMaterial({color:'#e6ad65'}),group,false,false);
    return {d,mesh:meshBox,group,status};
  });
  const station = new THREE.Group();
  station.position.set(0,0,-13);
  root.add(station);
  const stationAlloy = solid('#435c60',{metalness:.38,roughness:.58});
  const hardware = [
    translatedBox(1.48,.09,1.06,0,.05,0),
    new RoundedBoxGeometry(1.3,.62,.88,2,.055).translate(0,.37,0),
    translatedBox(1.15,.065,.72,0,.74,0),
    translatedBox(.12,.13,1,0,.12,0),
  ];
  mesh(finishGeometry(hardware),stationAlloy,station);
  const drawer = mesh(new RoundedBoxGeometry(.67,.18,.075,2,.02).translate(0,.43,.46),solid('#d2a35f',{metalness:.4}),station);
  drawer.name='device-case';
  const panel = mesh(translatedBox(.66,.076,.43,0,.802,0),solid('#213238',{metalness:.36}),station);
  panel.rotation.x=.025;
  const strip = mesh(translatedBox(.54,.024,.36,0,.85,.015),new THREE.MeshBasicMaterial({color:'#edb663'}),station,false,false);
  const lamp = mesh(new THREE.SphereGeometry(.044,10,6).translate(.31,.56,.457),new THREE.MeshBasicMaterial({color:'#edb663'}),station,false,false);
  const contact = mesh(new THREE.CircleGeometry(1.17,36).rotateX(-Math.PI/2),solid(theme.trim,{transparent:true,opacity:.22,depthWrite:false}),station,false,false);
  contact.position.y=.012;
  skyline(batch,root,theme,mats);
  batch.finish();
  return {theme,wallRays,doorViews,station,strip,lamp};
}

function component(parent, geometry, material, x, y, z) {
  const node = mesh(geometry,material,parent,false,false);
  node.position.set(x,y,z);
  return node;
}

function bevel(w, h, d, radius, x = 0, y = 0, z = 0) {
  return new RoundedBoxGeometry(w, h, d, 1, radius).translate(x, y, z);
}

function collar(radius, depth, x, y, z, axis = 'z', sides = 12) {
  const geometry = new THREE.CylinderGeometry(radius, radius, depth, sides);
  if (axis === 'z') geometry.rotateX(Math.PI / 2);
  if (axis === 'x') geometry.rotateZ(Math.PI / 2);
  return geometry.translate(x, y, z);
}

function paintedParts(root, material, parts) {
  const colored = parts.map(([geometry, color]) => {
    const tint = new THREE.Color(color);
    const colors = new Float32Array(geometry.getAttribute('position').count * 3);
    for (let i = 0; i < colors.length; i += 3) tint.toArray(colors, i);
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  });
  return mesh(finishGeometry(colored), material, root, false, false);
}

export function buildRobotArt(root, index) {
  const graphite = '#38434a';
  const alloy = '#788287';
  const ceramic = '#abb3ae';
  const padding = '#282d30';
  const hazard = ['#d8904a', '#b88560', '#ccaa65'][index % 3];
  const chassis = solid(['#d39864', '#b99070', '#d2aa71'][index % 3], {
    vertexColors: true, metalness: .32, roughness: .53, emissive: '#000000',
  });
  const mechanics = solid('#ffffff', {vertexColors: true, metalness: .30, roughness: .61});
  const wear = [
    [bevel(.63, .47, .36, .063, 0, 1.17, -.013), '#ded9c6'],
    [bevel(.42, .21, .28, .029, 0, .79, -.02), '#8a989c'],
    [bevel(.45, .33, .37, .054, 0, 1.68, -.003), '#d8d4c2'],
    [bevel(.34, .08, .28, .024, 0, 1.864, -.018), '#e7dbbd'],
    [bevel(.43, .19, .08, .034, 0, 1.20, .176), '#bebcb3'],
  ];
  const equipment = [
    [bevel(.41, .21, .08, .038, 0, 1.69, .172), graphite],
    [bevel(.33, .132, .037, .021, 0, 1.70, .214), '#263436'],
    [bevel(.25, .069, .075, .019, 0, 1.574, .166), alloy],
    [collar(.108, .108, 0, 1.47, -.02, 'y'), alloy],
    [bevel(.36, .23, .33, .045, 0, .92, 0), padding],
    [bevel(.32, .29, .15, .035, 0, 1.27, -.22), graphite],
    [bevel(.27, .055, .05, .012, 0, 1.02, .174), graphite],
    [bevel(.18, .072, .036, .013, 0, 1.20, .223), '#252f31'],
  ];
  for (const side of [-1, 1]) {
    wear.push([bevel(.057, .11, .30, .014, side * .219, 1.756, -.01), '#8b9294']);
    equipment.push([collar(.037, .026, side * .223, 1.69, .171, 'x'), alloy]);
    equipment.push([collar(.018, .016, side * .257, 1.24, .183), '#c2c2b5']);
    for (let rib = 0; rib < 4; rib++) {
      equipment.push([translatedBox(.084, .012, .046, side * .103, 1.18 + rib * .032, -.298), '#151f22']);
    }
  }
  paintedParts(root, chassis, wear);
  paintedParts(root, mechanics, equipment);
  const visor = mesh(finishGeometry([
    bevel(.162, .057, .025, .012, 0, 1.700, .238),
    collar(.029, .019, -.118, 1.700, .235),
    collar(.029, .019, .118, 1.700, .235),
    bevel(.10, .023, .017, .006, 0, 1.20, .247),
  ]), new THREE.MeshBasicMaterial({color: '#ffc277'}), root, false, false);

  const legs = [];
  const arms = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * .214, .74, 0);
    root.add(leg);
    paintedParts(leg, mechanics, [
      [bevel(.196, .27, .27, .031, 0, -.11, -.039), ceramic],
      [collar(.093, .235, 0, -.31, .023, 'x'), graphite],
      [collar(.058, .022, side * .123, -.31, .023, 'x'), alloy],
      [collar(.039, .26, side * .041, -.448, -.065, 'y'), alloy],
      [bevel(.15, .26, .156, .026, 0, -.455, .04), graphite],
      [bevel(.165, .20, .086, .024, 0, -.435, .133), hazard],
      [bevel(.21, .135, .37, .028, 0, -.639, .047), alloy],
      [bevel(.23, .056, .385, .016, 0, -.711, .05), padding],
      [bevel(.167, .078, .125, .015, 0, -.628, .207), ceramic],
    ]);
    legs.push(leg);

    const arm = new THREE.Group();
    root.add(arm);
    arm.position.set(side * .393, 1.40, -.01);
    arm.rotation.z = side * .10;
    paintedParts(arm, mechanics, [
      [collar(.10, .16, 0, -.04, -.017, 'x'), padding],
      [bevel(.215, .157, .281, .040, side * .032, -.007, .014), ceramic],
      [bevel(.068, .103, .176, .016, side * .124, -.020, .027), hazard],
      [bevel(.128, .20, .149, .022, 0, -.17, -.013), graphite],
      [collar(.068, .171, 0, -.26, .017, 'x'), alloy],
      [bevel(.167, .206, .205, .034, 0, -.373, .047), graphite],
      [bevel(.124, .143, .048, .017, 0, -.38, .16), alloy],
      [bevel(.127, .108, .136, .020, 0, -.514, .065), padding],
    ]);
    arms.push(arm);
  }
  return {legs, arms, chassis, visor};
}

function paintedGrip(group, type) {
  const fabric = '#49575a';
  const seam = '#70766b';
  const leather = '#303936';
  const grip = solid('#ffffff', {vertexColors: true, roughness: .82});
  const parts = [
    [bevel(.16, .15, .48, .049, .056, -.22, .24).rotateZ(.21), fabric],
    [bevel(.17, .153, .092, .027, .046, -.20, .095), seam],
    [bevel(.157, .167, .179, .048, .031, -.137, .056), leather],
    [bevel(.105, .064, .102, .022, -.056, -.104, .051).rotateZ(.13), '#4d5b55'],
    [bevel(.087, .031, .094, .012, .039, -.116, -.045), '#495853'],
    [bevel(.093, .026, .083, .011, .040, -.152, -.043), '#495853'],
  ];
  if (type === 'carbine' || type === 'sniper' || type === 'bazooka') parts.push(
    [bevel(.19, .17, .40, .049, -.102, -.214, -.24).rotateZ(-.13), fabric],
    [bevel(.175, .117, .111, .026, -.055, -.145, -.447), seam],
    [bevel(.162, .096, .162, .035, -.024, -.095, -.480), leather],
    [bevel(.048, .074, .131, .021, -.093, -.056, -.49), '#495853'],
  );
  if (type === 'knife') {
    for (const [piece] of parts) piece.translate(0, .066, .037);
  }
  paintedParts(group, grip, parts);
}

export function buildEquipmentArt(group, type) {
  const steel = '#647277';
  const slate = '#434e53';
  const underside = '#283237';
  const anodized = '#797f72';
  const warm = '#a89065';
  const accent = '#cfb581';
  const metal = solid('#ffffff',{vertexColors:true,metalness:.37,roughness:.44});
  const detail = [];
  let tip;

  if (type === 'knife') {
    const outline = new THREE.Shape();
    outline.moveTo(-.07, .085);
    outline.lineTo(.063, .085);
    outline.lineTo(.06,-.22);
    outline.quadraticCurveTo(.046,-.48,-.055,-.58);
    outline.lineTo(-.07,-.30);
    outline.closePath();
    const blade = new THREE.ExtrudeGeometry(outline,{
      depth:.016, bevelEnabled:true, bevelSize:.008, bevelThickness:.008, bevelSegments:1, curveSegments:8,
    }).rotateX(Math.PI / 2).translate(0, .052, -.14);
    detail.push(
      [blade, '#bfcbc9'],
      [bevel(.058, .011, .32, .005, .015, .055, -.307), '#8f9d9e'],
      [bevel(.185, .054, .067, .014, 0, .04, -.081), slate],
      [bevel(.112, .088, .304, .029, 0, .032, .104), underside],
    );
    for (let index = 0; index < 6; index++) {
      detail.push([bevel(.121, .095, .025, .008, 0, .032, -.006 + index * .042), slate]);
    }
    tip = {x:0, y:.052, z:-.72};
  } else if (type === 'bazooka') {
    detail.push(
      [collar(.102,.64,0,.027,-.28,'z',18), anodized],
      [collar(.113,.052,0,.027,-.588,'z',18), slate],
      [collar(.108,.071,0,.027,.058,'z',18), slate],
      [collar(.081,.013,0,.027,-.619), underside],
      [bevel(.181,.088,.198,.019,0,-.095,-.22), underside],
      [bevel(.206,.060,.324,.017,0,.138,-.24), steel],
      [bevel(.096,.079,.121,.016,0,.181,-.10), slate],
      [bevel(.057,.026,.012,.006,0,.184,-.034), '#587c77'],
    );
    for (const z of [-.519, -.42, -.04]) {
      detail.push([collar(.106,.026,0,.027,z,'z',18), z === -.42 ? warm : steel]);
    }
    tip = {x:0, y:.027, z:-.658};
  } else if (type === 'pistol') {
    detail.push(
      [bevel(.131,.100,.41,.023,0,.073,-.183), steel],
      [bevel(.119,.057,.355,.015,0,.119,-.16), slate],
      [bevel(.119,.068,.365,.014,0,.008,-.135), underside],
      [bevel(.107,.181,.115,.024,0,-.079,.036).rotateX(-.14), slate],
      [bevel(.123,.035,.141,.011,0,-.167,.049), underside],
      [collar(.038,.027,0,.066,-.393), slate],
      [collar(.023,.019,0,.066,-.412), underside],
      [bevel(.110,.023,.115,.006,.016,.121,-.170), '#939b9a'],
      [bevel(.095,.028,.043,.006,0,.149,.004), underside],
      [bevel(.047,.033,.04,.006,0,.149,-.35), underside],
      [bevel(.027,.010,.026,.004,0,.168,-.348), accent],
      [bevel(.081,.031,.092,.006,0,-.04,-.183), slate],
    );
    for (let index = 0; index < 6; index++) {
      const z = -.017 - index * .024;
      detail.push([translatedBox(.132,.056,.009,0,.082,z).rotateX(.016), underside]);
    }
    tip = {x:0, y:.066, z:-.438};
  } else {
    const sniper = type === 'sniper';
    const nose = sniper ? -.855 : -.708;
    detail.push(
      [bevel(.154,.138,.409,.023,0,.067,-.109), steel],
      [bevel(.125,.092,.242,.019,0,.024,.204), slate],
      [bevel(.154,.065,.231,.017,0,.084,.264), underside],
      [bevel(.151,.172,.143,.019,0,-.085,-.215).rotateX(-.09), underside],
      [bevel(.131,.027,.324,.008,0,.147,-.202), underside],
      [bevel(.149,.113,.318,.015,0,.072,-.464), sniper ? anodized : slate],
      [collar(.026,sniper?.26:.13,0,.071,nose+.083), steel],
      [collar(.039,.067,0,.071,nose), slate],
      [collar(.025,.009,0,.071,nose-.037), underside],
    );
    for (let index = 0; index < 7; index++) {
      detail.push([bevel(.141,.015,.025,.003,0,.161,-.079-index*.039), slate]);
      detail.push([translatedBox(.152,.035,.014,0,.064,-.338-index*.042), underside]);
    }
    if (sniper) {
      detail.push(
        [bevel(.064,.071,.227,.012,0,.172,-.25), slate],
        [collar(.051,.251,0,.233,-.218), underside],
        [collar(.069,.103,0,.233,-.382), slate],
        [collar(.061,.072,0,.233,-.059), slate],
        [collar(.044,.008,0,.233,-.020), '#497d79'],
        [collar(.041,.034,0,.293,-.20,'y'), steel],
      );
    } else {
      detail.push(
        [bevel(.069,.052,.088,.012,0,.183,-.089), underside],
        [bevel(.061,.067,.054,.010,0,.169,-.570), slate],
        [bevel(.020,.016,.025,.004,0,.21,-.570), accent],
        [bevel(.024,.059,.114,.006,.081,.071,-.081), warm],
      );
    }
    tip = {x:0, y:.071, z:nose-.067};
  }
  paintedGrip(group, type);
  paintedParts(group, metal, detail);
  return tip;
}
