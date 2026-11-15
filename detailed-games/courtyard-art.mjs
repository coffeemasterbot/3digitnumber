import * as THREE from 'three';

// All detail is drawn onto the existing world surfaces. Raycast meshes keep their original dimensions.
function surface(width,height,paint) {
  const canvas=document.createElement('canvas');
  canvas.width=width;
  canvas.height=height;
  const c=canvas.getContext('2d');
  paint(c);
  const texture=new THREE.CanvasTexture(canvas);
  texture.colorSpace=THREE.SRGBColorSpace;
  texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
  texture.anisotropy=4;
  return texture;
}

export function courtyardSurface(kind) {
  return surface(256,256,c=>{
    const crate=kind==='crate',floor=kind==='floor';
    c.fillStyle=crate?'#b99a71':floor?'#c9bdab':'#e6d5bb';
    c.fillRect(0,0,256,256);
    let seed=153;
    function random(){seed=(1664525*seed+1013904223)>>>0;return seed/4294967296}
    for(let i=0;i<4600;i++){
      c.fillStyle=random()>.54?'rgba(255,246,216,.17)':'rgba(69,57,46,.11)';
      c.fillRect(random()*256,random()*256,crate?2+random()*21:1+random()*4,1+random()*2);
    }
    if(crate){
      for(let y=0;y<256;y+=42){c.fillStyle='#655440';c.fillRect(0,y,256,3);c.fillStyle='#dfc59f';c.fillRect(0,y+3,256,2)}
      for(const x of [12,232]){c.fillStyle='#60655e';c.fillRect(x,0,11,256);for(let y=14;y<256;y+=44){c.fillStyle='#b9b7a6';c.fillRect(x+3,y,4,4)}}
      c.lineWidth=13;c.strokeStyle='#987954';c.beginPath();c.moveTo(25,232);c.lineTo(230,21);c.stroke();
    }else{
      if(!floor){
        c.fillStyle='#c8b59a';c.fillRect(0,18,256,5);
        c.fillStyle='#f5e6cf';c.fillRect(0,13,256,5);
        // Shallow shuttered niches, set high above the playable space.
        for(const x of [36,155]){
          c.fillStyle='#baaa93';c.beginPath();c.arc(x+24,76,27,Math.PI,0);c.lineTo(x+51,130);c.lineTo(x-3,130);c.fill();
          c.fillStyle='#687064';c.beginPath();c.arc(x+24,76,21,Math.PI,0);c.lineTo(x+45,126);c.lineTo(x+3,126);c.fill();
          for(let y=83;y<123;y+=7){c.fillStyle='#949782';c.fillRect(x+4,y,40,2)}
          c.fillStyle='#eedecc';c.fillRect(x-6,129,60,5);
        }
      }
      const start=floor?0:176,step=floor?56:24;
      for(let row=0,y=start;y<256;y+=step,row++){
        c.fillStyle=floor?'#a39a8a':'#b5a592';
        c.fillRect(0,y,256,2);for(let x=(row%2)*40;x<256;x+=82)c.fillRect(x,y,2,step);
        c.fillStyle='#e5d9c4';c.fillRect(0,y+2,256,1);
      }
    }
  });
}

function facadeTexture(){
  return surface(256,384,c=>{
    c.fillStyle='#dbcbb1';c.fillRect(0,0,256,384);
    for(let y=0;y<384;y+=9){c.fillStyle=y%3?'#cfc0a880':'#eee0c46b';c.fillRect(0,y,(y*19)%256,2)}
    for(const y of [24,167,314]){c.fillStyle='#ac9983';c.fillRect(0,y,256,5);c.fillStyle='#f4e5c9';c.fillRect(0,y-5,256,5)}
    for(const x of [30,146])for(const y of [62,210]){
      c.fillStyle='#a39179';c.beginPath();c.arc(x+30,y+27,32,Math.PI,0);c.lineTo(x+62,y+89);c.lineTo(x-2,y+89);c.fill();
      c.fillStyle='#525651';c.beginPath();c.arc(x+30,y+27,24,Math.PI,0);c.lineTo(x+54,y+86);c.lineTo(x+6,y+86);c.fill();
      for(let k=0;k<6;k++){c.fillStyle='#697469';c.fillRect(x+8,y+38+k*7,44,3)}
      c.fillStyle='#f1dec2';c.fillRect(x-5,y+88,70,5);
    }
  });
}

// The skyline sits outside the arena. Recesses are painted to keep all doors and paths unambiguous.
export function skyline(scene) {
  const mat=new THREE.MeshStandardMaterial({map:facadeTexture(),roughness:1});
  const stone=new THREE.MeshStandardMaterial({color:'#d5c5ab',roughness:.94});
  const block=new THREE.BoxGeometry(1,1,1);
  function building(x,z,w,h,d){
    const mesh=new THREE.Mesh(block,mat);mesh.position.set(x,h/2,z);mesh.scale.set(w,h,d);mesh.castShadow=true;scene.add(mesh);
    const cap=new THREE.Mesh(block,stone);cap.scale.set(w+.22,.22,d+.22);cap.position.set(x,h,z);scene.add(cap);
  }
  for(let i=0;i<7;i++){
    const h=[8,10,7,12,9,11,7][i];
    building(-20+i*6.8,-22,6.5,h,5);
    building(-22,-17+i*6,4,17-h*.65,5.8);
    building(22,-17+i*6,4,5+h*.5,5.8);
  }
  const dome=new THREE.Mesh(new THREE.SphereGeometry(2,20,12,0,Math.PI*2,0,Math.PI/2),stone);
  dome.position.set(.4,12,-22);scene.add(dome);
}

export function handGrip(gun) {
  const glove=new THREE.MeshStandardMaterial({color:'#454742',roughness:.96});
  const leather=new THREE.MeshStandardMaterial({color:'#756d59',roughness:.9});
  const shape=new THREE.SphereGeometry(1,12,8);
  function pad(x,y,z,w,h,d,material){
    const mesh=new THREE.Mesh(shape,material);mesh.scale.set(w,h,d);mesh.position.set(x,y,z);gun.add(mesh);return mesh;
  }
  const wrist=pad(.075,-.23,.15,.09,.12,.19,glove);wrist.rotation.x=-.45;
  for(let i=0;i<3;i++)pad(.026,-.095-i*.042,.012,.072,.024,.064,leather);
  pad(.092,-.09,-.015,.031,.043,.089,glove);
}
