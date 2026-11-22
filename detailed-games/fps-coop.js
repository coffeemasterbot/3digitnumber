import {bindMatchPointer} from './fps-pointer.mjs';
import {createRocketVisuals} from './rocket-visuals.mjs';
import {buildArenaArt,buildRobotArt,buildEquipmentArt} from './fps-scene-art.mjs';
import * as THREE from 'three';
import {createMap,OFFERS,WEAPONS,rocketDescription} from '../source/fps/rules.mjs';
export function openCoop(onRocketImpact,onShot=()=>{}){
 const local=['localhost','127.0.0.1'].includes(location.hostname);
 const endpoint=local?'ws://127.0.0.1:8791/rooms':document.querySelector('meta[name=coop-endpoint]')?.content;
 const dialog=document.createElement('dialog');dialog.style.cssText='width:min(960px,96vw);max-height:96dvh;background:#173a32;color:#fff6da;padding:12px;overflow:auto';
 dialog.innerHTML='<h2>兩人合作 · 舊城街區</h2><p role="status"></p><div class="room-controls"><label>名稱 <input maxlength="20" value="玩家"></label> <button data-create>建立房間</button> <label>房間碼 <input maxlength="8"></label> <button data-join>加入</button> <button data-resume hidden>重新連線</button></div><button data-match-resume hidden>繼續操作</button><button data-ready hidden>準備／再戰</button> <button data-exit>離開房間</button><div data-field hidden><canvas tabindex="0" style="display:block;width:100%;height:min(52vh,450px);touch-action:none"></canvas><p>WASD 移動 · 左鍵／X 射擊 · 右鍵拖動／←／→ 轉向 · Q 瞄準 · R 換彈 · E 開門／長按拆解 · F 查帳</p><button data-buy-rocket>購買火箭筒 · 350</button><button data-reload>換彈 R</button><button data-equip>切換武器</button><div data-offer hidden></div></div>';
 dialog.querySelector('[data-buy-rocket]').title=rocketDescription();
 dialog.querySelector('[data-buy-rocket]').insertAdjacentText('afterend',' '+rocketDescription()+' ');
 document.body.append(dialog);dialog.showModal();
 const q=selector=>dialog.querySelector(selector),status=q('[role=status]'),canvas=q('canvas'),inputs=dialog.querySelectorAll('input'),abort=new AbortController();
 const on=(el,event,fn)=>el.addEventListener(event,fn,{signal:abort.signal});let socket,id,code,token,seq=0,state,renderer,scene,camera,raf,timer,fire=false,aiming=false,fireUntil=0,yaw=0,pitch=0,ref=null,suspended=false,leaving=false;
 const keys=new Set(),objects=new Map();
 const send=data=>{if(socket?.readyState===1)socket.send(JSON.stringify({v:3,seq:++seq,...data}))};
 let matchPointer;
 const clearInput=()=>{keys.clear();fire=aiming=false;fireUntil=0;sendInput()};
 const clear=()=>matchPointer?matchPointer.clear():clearInput();
 const controlsActive=()=>state?.phase==='playing'&&!suspended&&q('[data-offer]').hidden&&state.players.some(p=>p.id===id&&p.hp);
 function sendInput(){
  const active=controlsActive();
  send({type:'input',f:active?Number(keys.has('KeyW'))-Number(keys.has('KeyS')):0,r:active?Number(keys.has('KeyD'))-Number(keys.has('KeyA')):0,
   fire:active&&(fire||keys.has('KeyX')||performance.now()<fireUntil),use:active&&keys.has('KeyE'),yaw,pitch});
 }
 let viewmodel,shownWeapon,rocketVisuals,previousProjectiles=new Map(),snapshotTime=0,lastDraw=0,pendingImpacts=[],pistolKick=0;
 function drawRockets(now){
  const mix=Math.min(1,(now-snapshotTime)/100);
  const positions=state.projectiles.map(rocket=>{
   const from=previousProjectiles.get(rocket.id)?.position||rocket.previousPosition,to=rocket.position;
   return {...rocket,position:{x:from.x+(to.x-from.x)*mix,y:from.y+(to.y-from.y)*mix,z:from.z+(to.z-from.z)*mix}};
  });
  rocketVisuals.update(positions,pendingImpacts.splice(0),Math.min(.1,(now-lastDraw)/1000));lastDraw=now;
 }
 const eyeTarget=new THREE.Vector3(),reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
 function drawActor(key,x,z,index,visible,angle,isAlly){
  let actor=objects.get(key);
  if(!actor){
   const root=new THREE.Group();
   root.position.set(x,0,z);scene.add(root);
   const art=buildRobotArt(root,index);
   if(isAlly){art.chassis.color.setHex(0x569498);art.visor.material.color.setHex(0x99fff2)}
   actor={root,art};
   objects.set(key,actor);
  }
  const {root,art}=actor;
  root.visible=visible;
  if(!visible)return;
  const dx=x-root.position.x,dz=z-root.position.z;
  root.position.x+=dx*.35;root.position.z+=dz*.35;
  const speed=Math.hypot(dx,dz);
  if(angle!=null)root.rotation.y=Math.PI+angle;
  else if(speed>.005)root.rotation.y=Math.atan2(dx,dz);
  const gait=reduceMotion.matches?0:Math.min(.42,speed*3);
  const step=performance.now()/114;
  for(const [i,leg] of art.legs.entries()){
   const swing=Math.sin(step+i*Math.PI)*gait;
   leg.rotation.x=swing;art.arms[i].rotation.x=-swing*.6;
  }
 }
 function setup(){
  renderer=new THREE.WebGLRenderer({canvas,antialias:matchMedia('(pointer:fine)').matches});scene=new THREE.Scene();
  camera=new THREE.PerspectiveCamera(72,1,.08,65);scene.add(camera);
  const map=createMap(1),arena=buildArenaArt(scene,map.walls,map.doors,1);
  const {theme,doorViews}=arena;
  scene.background=new THREE.Color(theme.sky);scene.fog=new THREE.Fog(theme.fog,27,61);
  scene.add(new THREE.HemisphereLight('#fff0d1',theme.cold,1.85));
  const sun=new THREE.DirectionalLight(theme.bright,2.05);sun.position.set(6,15,8);scene.add(sun);
  const doorMap=new Map(doorViews.map(d=>[d.d.id,d]));
  let lastPaint=performance.now();
  const draw=(now=performance.now())=>{
   const dt=Math.min(.05,(now-lastPaint)/1000);lastPaint=now;
   if(controlsActive())yaw+=(Number(keys.has('ArrowLeft'))-Number(keys.has('ArrowRight')))*dt*1.9;
   const fov=aiming?54:72;
   if(camera.fov!==fov){camera.fov=fov;camera.updateProjectionMatrix()}
   raf=requestAnimationFrame(draw);if(!state||!canvas.clientWidth)return;
   const me=state.players.find(p=>p.id===id),eye=me?.hp?me:state.players.find(p=>p.hp)||me;if(!eye)return;
   const w=canvas.clientWidth,h=canvas.clientHeight;if(canvas.width!==w||canvas.height!==h){renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
   eyeTarget.set(eye.x,1.55,eye.z);
   if(!ref)ref=eyeTarget.clone();ref.lerp(eyeTarget,.34);camera.position.copy(ref);pistolKick=Math.max(0,pistolKick-.009);camera.rotation.set(pitch+pistolKick,yaw,0,'YXZ');
   for(const d of state.doors){
    const view=doorMap.get(d.id);
    if(!view)continue;
    view.group.position.y+=((d.open?d.h+2:d.h/2)-view.group.position.y)*.25;
    view.status.material.color.setHex(d.open?0x85c6a0:0xe6ad65);
   }
   const terminalColor=state.verified?0x80d4aa:state.time<10?0xf38a70:0xedb663;
   arena.strip.material.color.setHex(terminalColor);arena.lamp.material.color.setHex(terminalColor);
   for(const b of state.bots)drawActor('b'+b.id,b.x,b.z,b.id,b.hp>0,null,false);
   for(const p of state.players)drawActor(p.id,p.x,p.z,1,p.id!==eye.id&&p.hp>0,p.yaw,true);
   if(me?.weapon!==shownWeapon){
    if(viewmodel){camera.remove(viewmodel);viewmodel.traverse(o=>{o.geometry?.dispose();o.material?.dispose()})}
    shownWeapon=me?.weapon;viewmodel=new THREE.Group();viewmodel.position.set(.34,-.33,-.65);viewmodel.scale.setScalar(.74);camera.add(viewmodel);buildEquipmentArt(viewmodel,shownWeapon||'pistol');
   }
   if(rocketVisuals)drawRockets(performance.now());
   renderer.render(scene,camera);
  };draw();
 }
 function show(){
  const me=state.players.find(p=>p.id===id);if(!me)return;
  status.textContent='房間 '+code+' · '+state.players.map(p=>p.name+' '+p.hp+' HP'+(!p.online?'（離線）':p.ready?'（已準備）':'')).join(' ／ ')+' · '+(state.phase==='playing'?Math.ceil(state.time)+' 秒 · 彈匣 '+me.ammo+' / 備彈 '+me.reserve+(me.reload?' · 換彈 '+me.reload.toFixed(1)+'s':'')+' · '+(state.verified?'已核實':'到北面查帳')+' · 拆解 '+state.progress.toFixed(1)+'/5 秒'+(suspended?' · 選單開啟，合作對局繼續':''):state.result||'等候兩人準備');
  q('[data-buy-rocket]').disabled=!me.hp||me.launcher||me.credits<350;
  q('[data-reload]').disabled=!me.hp||me.reload>0||!me.reserve||me.ammo>=WEAPONS[me.weapon].mag;
  q('[data-equip]').disabled=!me.hp||!me.launcher;
  if(state.phase==='playing')status.textContent+=' · 裝備點 '+me.credits+' · '+(me.weapon==='bazooka'?'火箭筒':'手槍');
  q('[data-match-resume]').hidden=state.phase!=='playing'||!suspended;
  q('[data-ready]').hidden=state.phase==='playing';q('[data-ready]').disabled=me.ready;
  q('[data-field]').hidden=state.phase!=='playing';q('[data-offer]').hidden=!(state.phase==='playing'&&me.hp&&me.checked&&!state.verified&&Math.hypot(me.x,me.z+13)<2.7);
  if(state.phase==='playing'&&!renderer)setup();
 }
 function connect(type){
  if(socket&&socket.readyState<2)return;
  let session;try{session=JSON.parse(sessionStorage.getItem('coop-room-session'))}catch{}
  const url=new URL(endpoint);url.searchParams.set('action',type);if(type!=='create')url.searchParams.set('code',type==='reconnect'?session?.code:inputs[1].value.trim().toUpperCase());
  socket=new WebSocket(local?endpoint:url);status.textContent='連線中…';
  socket.onopen=()=>send({type,code:type==='reconnect'?session?.code:inputs[1].value.trim().toUpperCase(),token:type==='reconnect'?session?.token:undefined,name:inputs[0].value});
  socket.onmessage=e=>{const m=JSON.parse(e.data);if(m.v!==3){status.textContent='合作版本不同，請更新遊戲同房間伺服器。';socket.close();return}if(m.type==='joined'){({id,code,token}=m);try{sessionStorage.setItem('coop-room-session',JSON.stringify({code,token}))}catch{}q('.room-controls').hidden=true;return}
   if(m.type==='state'){
    const fresh=state?.round!==m.round;
    if(!fresh&&m.phase==='playing')for(const player of m.players){
     const previous=state.players.find(item=>item.id===player.id);
     if(player.shot&&previous&&player.shot>(previous.shot??0)&&['pistol','bazooka'].includes(player.shotWeapon)){
      onShot('shot-'+player.shotWeapon);
      if(player.id===id&&player.shotWeapon==='pistol')pistolKick=Math.min(.19,pistolKick+.043);
      if(player.shotWeapon==='bazooka')onShot('rocket-flight');
     }
     if(player.id===id&&player.reload>0&&previous&&!previous.reload)onShot('reload');
    }
    previousProjectiles=new Map((fresh?[]:state.projectiles).map(r=>[r.id,r]));
    if(fresh||m.phase!=='playing'){rocketVisuals?.dispose();rocketVisuals=null;pendingImpacts=[]}
    const wasActive=controlsActive();
    state=m;snapshotTime=performance.now();show();
    if(wasActive&&!controlsActive())clear();
    if(state.phase==='playing'){
     rocketVisuals??=createRocketVisuals(scene,{reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches,onImpact:onRocketImpact});
     pendingImpacts.push(...m.impacts);
    }
   }else if(m.type==='error')status.textContent=m.message};
  socket.onerror=()=>status.textContent='房間伺服器未能連線。';
  socket.onclose=()=>{if(leaving)return;clear();q('[data-field]').hidden=q('[data-ready]').hidden=true;q('.room-controls').hidden=false;q('[data-resume]').hidden=!token;status.textContent+=' · 連線已關閉'};
 }
 function close(){clear();leaving=true;clearInterval(timer);cancelAnimationFrame(raf);abort.abort();rocketVisuals?.dispose();socket?.close();scene?.traverse(o=>{o.geometry?.dispose();o.material?.map?.dispose();o.material?.dispose()});renderer?.dispose();renderer?.forceContextLoss();dialog.remove()}
 q('[data-exit]').onclick=close;
 q('[data-match-resume]').onclick=()=>{suspended=false;clear();if(state)show();canvas.focus()};
 on(dialog,'cancel',e=>{e.preventDefault();suspended=true;clear();if(state)show()});on(window,'pagehide',close);
 if(window.offlineEdition||!endpoint){q('.room-controls').hidden=true;status.textContent=window.offlineEdition?'離線版可玩單人；合作需要網絡。':'公開合作伺服器尚未連接。';return}
 try{q('[data-resume]').hidden=!sessionStorage.getItem('coop-room-session')}catch{}
 q('[data-create]').onclick=()=>connect('create');q('[data-join]').onclick=()=>connect('join');q('[data-resume]').onclick=()=>connect('reconnect');q('[data-ready]').onclick=()=>send({type:'ready'});
 q('[data-buy-rocket]').onclick=()=>{send({type:'buy',item:'bazooka'});send({type:'equip',weapon:'bazooka'});canvas.focus()};
 q('[data-reload]').onclick=()=>{send({type:'reload'});canvas.focus()};
 q('[data-equip]').onclick=()=>{send({type:'equip',weapon:state.players.find(p=>p.id===id)?.weapon==='bazooka'?'pistol':'bazooka'});canvas.focus()};
 const offer=q('[data-offer]');offer.textContent=OFFERS[0].q+" 答錯會即時引爆，全隊任務失敗。";OFFERS[0].answers.forEach((a,i)=>{const b=document.createElement('button');b.textContent=a;b.onclick=()=>send({type:'answer',answer:i});offer.append(b)});

 matchPointer=bindMatchPointer({
  on,canvas,active:controlsActive,
  look(dx,dy){const sensitivity=aiming?.0018:.003;yaw-=dx*sensitivity;pitch=Math.max(-1.2,Math.min(1.2,pitch-dy*sensitivity))},
  fire(pressed){fire=pressed;if(pressed){fireUntil=performance.now()+70;sendInput()}},
  clearInput,
 });
 on(dialog,'keydown',e=>{
  if(!controlsActive()||e.target.matches('input,select,textarea'))return;
  if(!['KeyW','KeyA','KeyS','KeyD','KeyX','KeyQ','KeyE','KeyF','KeyR','ArrowLeft','ArrowRight'].includes(e.code))return;
  e.preventDefault();keys.add(e.code);
  if(e.repeat)return;
  if(e.code==='KeyX'){fireUntil=performance.now()+70;sendInput()}
  if(e.code==='KeyQ')aiming=!aiming;
  const action={KeyE:'door',KeyF:'check',KeyR:'reload'}[e.code];if(action)send({type:action});
 });
 on(window,'keyup',e=>keys.delete(e.code));
 on(window,'blur',clear);
 on(document,'visibilitychange',()=>{if(document.hidden)clear()});
 timer=setInterval(()=>{if(state?.phase==='playing')sendInput()},75);
 status.textContent='建立房間後，將八位房間碼交畀隊友。';
}
