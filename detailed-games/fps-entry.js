import {launchRocket,stepRocket,impactDamage} from '../source/fps/rocket.mjs';
import {createRocketVisuals} from './rocket-visuals.mjs';
import {openCoop} from './fps-coop.js';
import {siteText} from '../source/site-text.mjs';
import {bindMatchPointer} from './fps-pointer.mjs';
import {buildArenaArt,buildRobotArt,buildEquipmentArt} from './fps-scene-art.mjs';
import {AH_JUN_OFFER,MISSIONS,missionRun,objective,nearObjective,advanceObjective} from '../source/fps/missions.mjs';
import {makeSquad,squadOrders,tickSquad} from './fps-squad.mjs';
import{restoreSettings,aimDelta}from'../source/fps/preferences.mjs';
import * as THREE from 'three';
import{startReload,tickReload,rocketDescription,SOLO_ROBOTS,soloWaveBoost,needsAutoReload,create,WALLS,OFFERS,GEAR,WEAPONS,makeDoors,equip,receiveBullet,damageEnemy,interaction,activateMap,buy,beginRound,move,collides,blocked,route,verify,score}from'../source/fps/rules.mjs';
const elements=new Map();
const $=id=>{
 if(!elements.has(id)){const el=document.getElementById(id);if(el)elements.set(id,el);return el}
 return elements.get(id);
};
const touchStick=$('touch-stick');
let touchRight=0,touchForward=0;
const host=$('world'),events=new AbortController(),keys=new Set(),rays=new THREE.Raycaster();
const squadControl=document.createElement('label');
squadControl.id='squad-control';
squadControl.hidden=true;
squadControl.innerHTML='小隊 <select aria-label="小隊指令">'+Object.entries(squadOrders).map(([id,title])=>'<option value="'+id+'">'+title+'</option>').join('')+'</select>';
document.body.append(squadControl);
const squadSelect=squadControl.querySelector('select');
const weaponButtons=[...document.querySelectorAll('[data-weapon]')];
let hudObserver=null,worldObserver=null,nextHud=0,frameDirty=true,contextLost=false;
let patrolPoints=[],mapRoot=null,activeMap=null,arenaArt=null,skyFill=null,sun=null,settings=null;try{const v2=localStorage.getItem('fps-preferences-v2'),v1=localStorage.getItem('fps-preferences-v1');settings=restoreSettings(v2?JSON.parse(v2):null,JSON.parse(v1||'{}'))}catch{settings=restoreSettings(null)}let recoilPitch=0,headFlash=0;let doors=makeDoors(),doorMeshes=[],scoped=false,crouchToggle=false,noiseUntil=0;let recorded=false,s=create(),renderer,scene,camera,gun,flash,clock=0,last=0,raf=0,enemies=[],bullets=[],effects=[],wallMeshes=[],yaw=0,pitch=0,fireHeld=false,defuseHeld=false,reduced=settings.reduced||matchMedia('(prefers-reduced-motion:reduce)').matches,nextBombBeep=0,nextBeat=0,beat=0,damageFlash=0,hitFlash=0,deadClock=0,closed=false,terminalOpen=false;
let mission=null;
const demoMission=/^mission-([1-3]-(?:verify|dispatch|hold))$/.exec(window.arcadeTest?.target??'');
let squad=[],squadOrder='follow';
const soundtrack=$('fps-bgm');
let trackFailed=false, trackRequest=null;
const storyTrial=()=>window.arcadeStory?.id==='verify';
const exOffer={q:'信用卡結欠 HK$4,000，最低還款 HK$200。扣除基本生活費後，剩 HK$800。應該點安排？',answers:['只付最低額，將其餘用嚟消費','預留必要開支，再多還欠款同核對利息'],right:1,why:'最低還款只係門檻。先保留基本開支，再盡量多還並核對利息與還款期限。'};
const offer=()=>storyTrial()?AH_JUN_OFFER:s.round===4?exOffer:OFFERS[s.round-1];
const missionSaveKey='fps-missions-v1';
const task=()=>objective(mission,s.verified,s.purchases.includes('kit'));
const on=(el,type,fn,opts={})=>el.addEventListener(type,fn,{...opts,signal:events.signal});
on(squadSelect,'change',()=>{
 if(s.phase!=='playing'||!squad.length||!Object.hasOwn(squadOrders,squadSelect.value))return;
 squadOrder=squadSelect.value;
 for(const ally of squad)ally.refresh=0;
 s.feedback='小隊指令 · '+squadOrders[squadOrder];
 host.focus();
});
const audio=window.PFAPAudio;
const cue=name=>audio?.play(name);
function unlock(){audio?.setVolume(settings.volume)}
const musicActive=()=>!closed&&audio?.enabled('bgm')&&settings.volume>0&&s.phase==='playing'&&!terminalOpen&&!document.hidden;
function stopTrack(){
 if(!soundtrack)return;
 trackRequest=null;
 soundtrack.pause();
}
function syncTrack(){
 if(!soundtrack)return;
 if(!musicActive()||trackFailed){stopTrack();return}
 soundtrack.volume=.28*settings.volume;
 if(trackRequest||!soundtrack.paused)return;
 const attempt=soundtrack.play();
 trackRequest=attempt;
 attempt.catch(()=>{
   if(trackRequest===attempt)trackFailed=true;
 }).finally(()=>{
   if(trackRequest===attempt)trackRequest=null;
 });
}
if(soundtrack)on(soundtrack,'error',()=>{trackFailed=true;stopTrack()});
on(window,'pfap-audio-change',syncTrack);
function music(){
 syncTrack();
 if(!musicActive()||(soundtrack&&!trackFailed))return;
 const now=audio.now();
 if(!now||now<nextBeat)return;
 const root=[110,98,130.81,87.31][Math.floor(beat/16)%4];
 audio.note(root*(beat%2?1.5:1),.21,.018,'triangle');
 if(beat%8===0)audio.note(root/2,.48,.024,'sine');
 if(beat%4===2)audio.note(800,.03,.006,'square');
 beat++;
 nextBeat=now+.2;
}
function box(w,h,d,color,x=0,y=0,z=0,parent=scene){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color,roughness:.85}));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
function label(text,color='#254f48'){
 const c=document.createElement('canvas');c.width=512;c.height=128;
 const a=c.getContext('2d'),map=new THREE.CanvasTexture(c);
 const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map}));
 sprite.userData.localize=()=>{
  a.fillStyle=color;a.fillRect(0,0,512,128);a.strokeStyle='#e9d59e';a.lineWidth=6;a.strokeRect(6,6,500,116);
  a.fillStyle='#fff4d5';a.textAlign='center';a.textBaseline='middle';a.font='bold 37px Microsoft JhengHei,sans-serif';
  a.fillText(siteText(text),256,65,475);map.needsUpdate=true;
 };
 sprite.userData.localize();
 sprite.scale.set(4.2,1.05,1);return sprite;
}
function init(){
 scene=new THREE.Scene();scene.fog=new THREE.Fog();
 camera=new THREE.PerspectiveCamera(76,1,.05,100);camera.rotation.order='YXZ';scene.add(camera);
 renderer=new THREE.WebGLRenderer({antialias:matchMedia('(pointer:fine)').matches,powerPreference:'high-performance'});
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.shadowMap.type=THREE.PCFSoftShadowMap;host.append(renderer.domElement);
 skyFill=new THREE.HemisphereLight('#fff0d1','#4d6d59',1.85);scene.add(skyFill);
 sun=new THREE.DirectionalLight('#ffe3b6',2.05);sun.position.set(6,15,8);sun.castShadow=true;sun.shadow.mapSize.set(512,512);
 sun.shadow.camera.left=-23;sun.shadow.camera.right=23;sun.shadow.camera.top=23;sun.shadow.camera.bottom=-23;sun.shadow.normalBias=.03;scene.add(sun);
 buildMap();rebuildGun();resize()
}
function buildMap(){
 if(mapRoot)disposeGroup(mapRoot);
 activeMap=activateMap(s.round);doors=activeMap.doors;mapRoot=new THREE.Group();scene.add(mapRoot);
 arenaArt=buildArenaArt(mapRoot,WALLS,doors,s.round);
 const {theme,station}=arenaArt;
 wallMeshes=arenaArt.wallRays;doorMeshes=arenaArt.doorViews;
 scene.background=new THREE.Color(theme.sky);scene.fog.color.set(theme.fog);scene.fog.near=27;scene.fog.far=64;
 sun.color.set(theme.bright);skyFill.groundColor.set(theme.cold);
 document.body.dataset.court=String(s.round);
 const stationSign=label('北面終端 · 查帳 F','#264745');stationSign.position.set(0,1.55,0);stationSign.scale.set(2.6,.65,1);station.add(stationSign);
 const verifiedSign=label('已核實 · 依照畫面指示','#264745');verifiedSign.position.copy(stationSign.position);verifiedSign.scale.copy(stationSign.scale);verifiedSign.visible=false;station.add(verifiedSign);
 arenaArt.stationSign=stationSign;arenaArt.verifiedSign=verifiedSign;
 const sign=label(activeMap.name,'#374d50');sign.position.set(0,4.0,17.3);mapRoot.add(sign)
}
function rebuildGun(){
 if(gun)disposeGroup(gun);
 gun=new THREE.Group();camera.add(gun);gun.position.set(.34,-.33,-.65);gun.scale.setScalar(.74);
 const tip=buildEquipmentArt(gun,s.weapon);
 flash=new THREE.Mesh(new THREE.ConeGeometry(.07,.17,7),new THREE.MeshBasicMaterial({color:'#ffe5a3'}));
 flash.rotation.x=-Math.PI/2;flash.position.set(tip.x,tip.y,tip.z);flash.visible=false;gun.add(flash);
}
function selectWeapon(key){if(equip(s,key)){scoped=false;rebuildGun();s.feedback=WEAPONS[key].label;}}
function canAim(){return s.weapon!=='knife'&&(s.weapon!=='sniper'||s.cooldown<=0)}
function toggleScope(){if(s.phase==='playing'&&!terminalOpen&&canAim())scoped=!scoped}
function jump(){if(s.phase==='playing'&&!terminalOpen&&s.jumpY===0){s.vy=5.3;crouchToggle=false;s.crouch=false}}
function useDoor(){if(s.phase!=='playing'||terminalOpen)return false;const d=doors.filter(d=>Math.hypot(d.x-s.x,d.z-s.z)<2.7).sort((a,b)=>Math.hypot(a.x-s.x,a.z-s.z)-Math.hypot(b.x-s.x,b.z-s.z))[0];if(!d)return false;if(d.open&&Math.abs(s.x-d.x)<d.w/2+.45&&Math.abs(s.z-d.z)<d.d/2+.45){s.feedback='先離開門框，再關門。';return true}d.open=!d.open;enemies.forEach(e=>e.navTime=0);s.feedback=d.open?'門已開；留意門後。':'門已關。';cue('lever_click');return true}
function disposeGroup(g){g.traverse(o=>{o.geometry?.dispose();if(o.material){const materials=Array.isArray(o.material)?o.material:[o.material];materials.forEach(m=>{m.map?.dispose();m.dispose()})}});g.removeFromParent()}
let rockets=[],rocketVisuals;
function clearRound(){rockets=[];rocketVisuals?.dispose();rocketVisuals=null;enemies.forEach(e=>disposeGroup(e.mesh));enemies=[];squad.forEach(e=>disposeGroup(e.mesh));squad=[];bullets.forEach(b=>disposeGroup(b.mesh));bullets=[];effects.forEach(e=>disposeGroup(e.mesh));effects=[];terminalOpen=false;$('terminal').hidden=true;damageFlash=hitFlash=0;fireHeld=defuseHeld=false;keys.clear()}
function robot(x,z,i){
 const g=new THREE.Group();g.position.set(x,0,z);scene.add(g);
 const hp=easyFirstRound()?59:90+(s.round-1)*10;
 const e={mesh:g,x,z,hp,maxHp:hp,rewarded:false,dying:0,nav:[],navTime:i*.05,patrol:i,shoot:2+i*.3,ammo:9,reload:0,burst:0,burstClock:0,alertUntil:0,origin:{x,z},id:i};
 const art=buildRobotArt(g,i);
 e.parts=art.legs;e.arms=art.arms;e.chassisMaterial=art.chassis;e.visor=art.visor;
 e.motion=0;
 const body=box(.75,.75,.5,'#fff',0,1.05,0,g),head=box(.65,.45,.5,'#fff',0,1.7,0,g);
 body.visible=head.visible=false;
 body.userData.enemy=e;head.userData.enemy=e;head.userData.head=true;
 const l=label(['信用卡超支','情緒課金','分期疊加','湊單衝動','最低還款'][i%5],'#3c4648');l.position.y=2.44;l.scale.set(1.92,.48,1);g.add(l);
 const meter=new THREE.Group();meter.position.y=2.16;g.add(meter);e.meter=meter;
 box(1.15,.12,.05,'#273535',0,0,0,meter);e.bar=box(1.08,.08,.06,'#a9d975',0,0,.04,meter);
 return e
}
function startRound(){if(!beginRoundGate())return;const testRound=/^round-([1-3])$/.exec(window.arcadeTest?.target??'');if(testRound&&!mission)s.round=Number(testRound[1]);startRoundReady()}
function beginRoundGate(){return s.phase==='buy'}
const trophyRuns=new WeakMap();
function startRoundReady(){if(!beginRound(s))return;
 const trophy=trophyRuns.get(s)||{hitless:0,spent:false};
 trophy.roundShots=s.shots;trophy.roundHits=s.hits;trophy.spent||=s.purchases.length>0;
 trophyRuns.set(s,trophy);if(s.round===1||s.round===4||mission)window.arcadeRun?.start('defence',mission?.training?null:mission?.mission.id??(s.round===4?'ex':'quick'));clearRound();buildMap();last=performance.now();yaw=0;pitch=0;clock=0;deadClock=0;nextBombBeep=0;scoped=false;crouchToggle=false;recoilPitch=0;doors.forEach(d=>d.open=false);rebuildGun();const spawns=spawnPoints();patrolPoints=spawns;for(let i=0;i<(storyTrial()?2:Math.min(spawns.length,s.round===4?14:SOLO_ROBOTS[s.round-1]));i++){const bot=robot(...spawns[i],i);bot.maxHp=Math.ceil(bot.maxHp*soloWaveBoost(s.round).health);bot.hp=bot.maxHp;enemies.push(bot)}squadOrder='follow';if(mission?.training)s.time=180;else if(mission)squad=makeSquad(scene,doors);s.feedback=mission?.training?'練習場 · 機械靶唔會還擊。可以練習移動、開門、查帳同拆解。':mission?mission.mission.brief:'100 生命值 · 利用掩體到北面查帳拆彈，毋須消滅所有敵人。';unlock();renderMenu();host.focus()}
function spawnPoints(){const points=[[-12,5],[12,0],[-11,-11],[11,-13],[3,-14],[-13,-1],[13,10]];for(const z of [-14,-9,-3,3,9])for(const x of [-14,-10,-5,0,5,10,14])if(!collides(x,z,.55,doors)&&Math.hypot(x,z-14)>8&&points.every(p=>Math.hypot(x-p[0],z-p[1])>2.5))points.push([x,z]);return points.filter(([x,z])=>!collides(x,z,.55,doors))}
let matchPointer;
function clearPointer(){matchPointer?.clear();fireHeld=false;scoped=false}
function easyFirstRound(){return s.round===1&&!mission&&!storyTrial()&&!window.arcadeTest}
function shoot(){if(s.phase!=='playing'||terminalOpen||s.reload>0||s.cooldown>0)return;const w=WEAPONS[s.weapon],knife=s.weapon==='knife';if(!knife&&(s.ammo<=0)){if(needsAutoReload(s))reload();else{s.feedback='備彈用盡，請切換武器。';cue('lever_click')}return}if(!knife){s.ammo--;s.shots++}else s.melee++;s.cooldown=w.cooldown;s.weaponReady[s.weapon]=w.cooldown;noiseUntil=clock+(knife?.1:1);flash.visible=!knife;flash.userData.life=knife?0:.065;if(knife)cue('slide');else shotSound('shot-'+s.weapon);camera.position.set(s.x,s.y,s.z);camera.rotation.set(pitch+recoilPitch,yaw,0,'YXZ');scene.updateMatrixWorld(true);rays.setFromCamera(new THREE.Vector2(),camera);if(s.weapon==='bazooka'){
 const origin={x:s.x,y:s.y,z:s.z};
 shotSound('rocket-flight');
 rockets.push(launchRocket('solo',origin,rays.ray.direction,clock));
 return;
}const targets=[...wallMeshes,...doorMeshes.filter(v=>!v.d.open).map(v=>v.mesh),...enemies.filter(e=>e.hp>0).flatMap(e=>e.mesh.children.filter(m=>m.userData.enemy))];const hit=rays.intersectObjects(targets,false).find(h=>h.distance<=w.range);const end=hit?hit.point:rays.ray.at(w.range,new THREE.Vector3());if(!knife){const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([camera.localToWorld(new THREE.Vector3(.3,-.3,-.7)),end]),new THREE.LineBasicMaterial({color:'#ffe1a0',transparent:true,opacity:.8}));scene.add(line);effects.push({mesh:line,life:.1})}if(hit?.object.userData.enemy){const e=hit.object.userData.enemy,result=damageEnemy(s,e,!!hit.object.userData.head);if(result){e.chassisMaterial.emissive.setHex(0x9e5420);if(!knife)s.hits++;hitFlash=.13;headFlash=result.head?1.1:headFlash;cue('hit_tick');e.bar.scale.x=e.hp/e.maxHp;e.bar.position.x=-(1-e.hp/e.maxHp)*.54;if(result.killed){cue('hit_tick');e.dying=.001;s.feedback=(result.head?'爆頭！':'目標停機。')+' +100 金幣'}}}if(s.weapon==='sniper'){scoped=false;s.feedback='退鏡拉栓中 · '+w.cooldown.toFixed(1)+'s'}if(s.weapon==='carbine'){recoilPitch=Math.min(.22,recoilPitch+.0231);yaw+=(Math.random()-.5)*.0098}else if(s.weapon==='pistol'){recoilPitch=Math.min(.19,recoilPitch+.043)}}

function shotSound(id){
 if(id.startsWith('shot-')||id==='reload'){
   window.gameAudio?.volume('effects',.45*settings.volume);
   window.gameAudio?.resume();
   window.gameAudio?.effect(id);
 }
 else if(id==='rocket-impact')cue('shield_break');

}
function reload(){if(s.phase!=='playing'||terminalOpen||!startReload(s))return;s.feedback='換彈中…';shotSound('reload')}
function saveSettings(){unlock();syncTrack();reduced=settings.reduced;try{localStorage.setItem('fps-preferences-v2',JSON.stringify(settings))}catch{s.feedback='設定適用於今次遊玩。'}}
function openSettings(){pause();clearPointer();for(const key of ['sensitivity','ads','volume']){$('setting-'+key).value=settings[key];$(''+key+'-output').textContent=key==='volume'?Math.round(settings[key]*100)+'%':settings[key].toFixed(2)+'×'}$('setting-invert').checked=settings.invert;$('setting-reduced').checked=reduced;$('settings-dialog').showModal()}
function enterPlaying(){$('view-status').textContent='';s.phase='playing';last=performance.now();unlock();nextBeat=audio?.now()||0;renderMenu();host.focus()}
function resumeRound(){if(s.phase!=='paused'||contextLost||$('settings-dialog').open)return;enterPlaying()}
async function toggleFullscreen(){$('view-status').textContent='';if(s.phase==='playing')pause();clearPointer();try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();resize()}catch{$('view-status').textContent='瀏覽器未能切換全螢幕。按 V 重試，或以視窗模式繼續。'}}
function fireBot(e){const mesh=new THREE.Mesh(new THREE.SphereGeometry(.1,6,6),new THREE.MeshBasicMaterial({color:'#ff8e56'}));mesh.position.set(e.x,1.4,e.z);scene.add(mesh);const dx=s.x-e.x,dz=s.z-e.z,dy=(s.crouch?.55:1.05)+s.jumpY-1.4,n=Math.hypot(dx,dz,dy)||1,speed=11*soloWaveBoost(s.round).projectile;bullets.push({mesh,x:e.x,y:1.4,z:e.z,vx:dx/n*speed,vy:dy/n*speed,vz:dz/n*speed,life:4});e.ammo--;e.burst--;const rate=easyFirstRound()?.7:1;e.burstClock=.15/rate;if(e.burst===0)e.shoot=(2.9-s.round*.2)/rate;if(e.ammo===0){e.reload=2.2;e.burst=0}}
function pause(){if(s.phase!=='playing')return;s.phase='paused';window.gameAudio?.pause();fireHeld=defuseHeld=false;keys.clear();clearPointer();audio?.stopEffects();renderMenu()}
function check(){if(s.phase!=='playing')return;if(mission&&s.verified)return;if(!nearObjective(s,task().point,3)){s.feedback='先到北面財務炸彈旁邊，撳 F 查帳。';return}s.checked=true;terminalOpen=true;stopTrack();keys.clear();audio?.stopEffects();clearPointer();const o=offer();$('terminal').innerHTML='<h2>先查帳，後拆解</h2><p>答錯會即時引爆裝置。</p><p>'+o.q+'</p>'+o.answers.map((a,i)=>'<button data-answer="'+i+'">'+a+'</button>').join('')+'<p id="terminal-feedback" role="status"></p><button id="terminal-back">返回戰場</button>';$('terminal').hidden=false;fireHeld=false;defuseHeld=false}
function readMissions(){
 try{const data=JSON.parse(localStorage.getItem(missionSaveKey));return data&&data.version===1&&data.completed?data:{version:1,completed:{}}}catch{return {version:1,completed:{}}}
}
function startMission(id,training=false){
 const selection=missionRun(id);
 if(!selection)return;
 clearRound();recorded=false;mission={...selection,training};s=create();s.round=selection.mission.round;s.credits=400;s.phase='buy';renderMenu()
}
function finishRound(){
 if(!mission?.training){
  const run=window.arcadeRun,trophy=trophyRuns.get(s);
  if(trophy){
   if(s.hp===100){
    trophy.hitless++;
    run?.trophies('csgo_hitless_1');
    if(s.round===4)run?.trophies('csgo_hitless_ex');
    if(!mission&&trophy.hitless===3)run?.trophies('csgo_hitless_3');
   }
   if(s.shots>trophy.roundShots&&s.shots-trophy.roundShots===s.hits-trophy.roundHits)run?.trophies('csgo_zero_miss');
   if(mission||s.round>=3){if(!trophy.spent)run?.trophies('csgo_eco_zero');run?.cleared()}
  }
 }
 if((!mission&&s.round>=3)||(mission&&!mission.training)){
  const {judgement,reserve}=score(s);
  window.arcadeRun?.finish(Math.min(100,(mission?s.decisionCorrect*80:judgement)+reserve));
 }
 s.phase='roundend';s.defuse=task().seconds;window.dispatchEvent(new Event('arcade-game-state'));fireHeld=defuseHeld=false;clearPointer();audio?.stopEffects();cue('defuse_ok');
 if(mission&&!mission.training&&!window.arcadeTest&&!storyTrial()){
  try{const data=readMissions(),ms=Math.round(clock*1000),old=data.completed[mission.mission.id];
   data.completed[mission.mission.id]=Number.isFinite(old)?Math.min(ms,old):ms;localStorage.setItem(missionSaveKey,JSON.stringify(data));
  }catch{}
 }
 renderMenu()
}
function updateRockets(dt){
 if(!rockets.length&&!rocketVisuals)return;
 const solids=[...WALLS,...doors.filter(d=>!d.open)], impacts=[];
 for(const rocket of rockets){
  const impact=stepRocket(rocket,dt,solids,enemies);
  if(!impact)continue;
  impacts.push(impact);shotSound('rocket-impact');
  if(impact.direct!==null)s.hits++;
  for(const bot of enemies){
   if(!bot.hp)continue;
   const damage=impactDamage(impact,bot,solids,false,true);
   if(!damage)continue;
   bot.hp=Math.max(0,bot.hp-damage);
   bot.bar.scale.x=bot.hp/bot.maxHp;
   bot.bar.position.x=-(1-bot.bar.scale.x)*.54;
   hitFlash=.13;
   if(!bot.hp&&!bot.rewarded){
    bot.rewarded=true;bot.dying=.001;
    s.kills++;s.totalKills++;s.credits+=100;s.earned+=100;
    cue('hit_tick');
   }
  }
  const selfDamage=impactDamage(impact,s,solids,true);
  if(selfDamage)receiveBullet(s,selfDamage);
 }
 rockets=rockets.filter(r=>r.active);
 rocketVisuals??=createRocketVisuals(scene,{reducedMotion:reduced,onImpact:()=>cue('shield_break')});
 rocketVisuals.update(rockets,impacts,dt);
}
function detonate(reason){
 if(s.phase!=='playing')return;
 s.time=0;s.phase='dead';s.feedback=reason;clearPointer();window.arcadeRun?.finish(0);
 cue('bomb_detonate');renderMenu();
}
function update(dt){if(s.phase==='dying'){deadClock+=dt;camera.rotation.z=reduced?0:Math.min(.65,deadClock*.5);camera.position.y=Math.max(.4,s.y-deadClock*.7);if(deadClock>=1.3){s.phase='dead';renderMenu()}return}if(s.phase!=='playing'||terminalOpen)return;clock+=dt;updateRockets(dt);if(needsAutoReload(s))reload();if(s.phase!=='playing')return;s.time=Math.max(0,s.time-dt);if(s.time>0&&clock>=nextBombBeep){cue('bomb_beep');nextBombBeep=clock+.28+1.12*Math.min(1,s.time/20)}if(!s.time){detonate('財務炸彈倒數完。重試，先安排路線同器材。');return}for(const k in s.weaponReady)s.weaponReady[k]=Math.max(0,s.weaponReady[k]-dt);s.cooldown=Math.max(0,s.cooldown-dt);recoilPitch=Math.max(0,recoilPitch-dt*.14);headFlash=Math.max(0,headFlash-dt);tickReload(s,dt);if(!terminalOpen){yaw+=(Number(keys.has('ArrowLeft'))-Number(keys.has('ArrowRight')))*dt*1.9;let forward=Number(keys.has('KeyW'))-Number(keys.has('KeyS'))+touchForward,right=Number(keys.has('KeyD'))-Number(keys.has('KeyA'))+touchRight;const mag=Math.max(1,Math.hypot(forward,right)),speed=s.crouch?2:keys.has('ShiftLeft')?6:s.weapon==='knife'?5:4.1;move(s,(-Math.sin(yaw)*forward+Math.cos(yaw)*right)/mag*speed*dt,(-Math.cos(yaw)*forward-Math.sin(yaw)*right)/mag*speed*dt,doors);s.crouch=crouchToggle||keys.has('KeyC')||keys.has('ControlLeft');if(s.jumpY>0||s.vy){s.vy-=12*dt;s.jumpY=Math.max(0,s.jumpY+s.vy*dt);if(!s.jumpY)s.vy=0}s.y=(s.crouch?.93:1.65)+s.jumpY;if(fireHeld||keys.has('KeyX'))shoot()}
for(const e of enemies){if(e.hp<=0){e.dying+=dt;e.mesh.rotation.z=Math.min(Math.PI/2,e.dying*2);e.mesh.position.y=-Math.min(.5,e.dying*.4);e.mesh.scale.setScalar(Math.max(.01,1-Math.max(0,e.dying-.8)));continue}e.navTime-=dt;const distance=Math.hypot(e.x-s.x,e.z-s.z),visible=distance<16&&!blocked(e.x,e.z,s.x,s.z,doors,s.crouch?.8:1.4);if(visible){e.lastSeen={x:s.x,z:s.z};e.alertUntil=clock+8}else if(s.round!==4&&clock<noiseUntil&&distance<18)e.alertUntil=clock+8;const aware=e.alertUntil>clock;let target;if(aware&&s.round===4){target=e.lastSeen;if(Math.hypot(e.x-target.x,e.z-target.z)<1){const point=patrolPoints[e.patrol++%patrolPoints.length];target={x:point[0],z:point[1]}}}else if(aware){const angle=clock*.55+e.id*1.7;target=distance>9?{x:s.x,z:s.z}:{x:s.x+Math.sin(angle)*5,z:s.z+Math.cos(angle)*5};if(collides(target.x,target.z,.55,doors))target={x:s.x,z:s.z}}else{const points=patrolPoints,p=points[e.patrol%points.length];target={x:p[0],z:p[1]};if(Math.hypot(e.x-target.x,e.z-target.z)<1.2)e.patrol=(e.patrol+3)%points.length}if(e.navTime<=0){e.nav=route(e.x,e.z,target.x,target.z,doors.map(d=>({...d,open:true})));e.navTime=.7}const prevX=e.x,prevZ=e.z,n=e.nav[0];if(n){for(const d of doors)if(!d.open&&Math.hypot(d.x-e.x,d.z-e.z)<1.6)d.open=true;const dx=n.x-e.x,dz=n.z-e.z,d=Math.hypot(dx,dz);if(d<.3)e.nav.shift();else{const step=Math.min(d,(1.9+s.round*.25)*soloWaveBoost(s.round).movement*dt);if(!collides(e.x+dx/d*step,e.z,.5,doors))e.x+=dx/d*step;if(!collides(e.x,e.z+dz/d*step,.5,doors))e.z+=dz/d*step}}e.mesh.position.set(e.x,0,e.z);e.mesh.rotation.y=Math.atan2(target.x-e.x,target.z-e.z);const travel=Math.hypot(e.x-prevX,e.z-prevZ);
e.motion+=(Math.min(1,travel/Math.max(dt,.001)/1.5)-e.motion)*Math.min(1,dt*13);
const stride=reduced?0:e.motion*.49;
for(const [i,part] of e.parts.entries()){
 const swing=Math.sin(clock*9+i*Math.PI)*stride;
 part.rotation.x=swing;e.arms[i].rotation.x=-swing*.6-(aware?.16:0);
}
e.visor.material.color.setHex(e.reload>0?0xffb15d:aware?0xf99371:0xffdd8d);e.shoot-=dt;e.burstClock-=dt;if(e.reload>0){e.reload=Math.max(0,e.reload-dt);if(!e.reload){e.ammo=9;e.shoot=.4}}else if(aware&&visible&&!mission?.training){if(e.shoot<=0&&e.burst===0)e.burst=Math.min(3,e.ammo);if(e.burst>0&&e.burstClock<=0)fireBot(e)}else e.burst=0}


 if(squad.length)tickSquad(squad,squadOrder,s,task().point,enemies,doors,dt,clock,(_,target)=>{
  target.hp=Math.max(0,target.hp-14);
  target.bar.scale.x=target.hp/target.maxHp;
  target.bar.position.x=-(1-target.bar.scale.x)*.54;
  if(!target.hp)target.dying=.01;
 });
 bullets=bullets.filter(b=>{b.x+=b.vx*dt;b.z+=b.vz*dt;b.y=(b.y??1.4)+(b.vy||0)*dt;b.life-=dt;b.mesh.position.set(b.x,b.y,b.z);let remove=b.life<=0||[...WALLS,...doors.filter(d=>!d.open)].some(w=>Math.abs(b.x-w.x)<w.w/2+.1&&Math.abs(b.z-w.z)<w.d/2+.1&&b.y<w.h);const top=(s.crouch?1.02:1.82)+s.jumpY;if(!remove&&Math.hypot(b.x-s.x,b.z-s.z)<.45&&b.y>s.jumpY&&b.y<top){const heldProgress=s.defuse;receiveBullet(s,storyTrial()?3:easyFirstRound()?6:6+s.round*2);if(storyTrial()&&s.hp>0)s.defuse=heldProgress;damageFlash=.5;cue('hit_thud');remove=true;s.feedback=s.hp?'中彈！餘下 '+s.hp+' 生命值。':'生命值歸零。';if(!s.hp){clearPointer();fireHeld=false;audio?.stopEffects();renderMenu()}}if(remove)disposeGroup(b.mesh);return !remove});

const progress=advanceObjective(mission,s,defuseHeld&&!terminalOpen,dt);
if(progress==='relay'){s.feedback='北面記錄準備好。去'+task().point.name+'，按住 E 交接。';defuseHeld=false}
if(progress==='complete')finishRound();
music()}
function missionMenu(){
 const cleared=readMissions().completed;
 return '<section class="panel mission-panel"><h1>任務選擇</h1><p>三張地圖各有三個任務。每局有獨立嘅 400 裝備點。</p><div class="mission-grid">'+
  [1,2,3].map(round=>{const group=MISSIONS.filter(m=>m.round===round);return '<section><h2>'+group[0].map+'</h2>'+
   group.map(m=>'<button data-mission="'+m.id+'"><b>'+m.title+'</b><span>'+m.brief+'</span>'+(Number.isFinite(cleared[m.id])?'<small>最佳 '+(cleared[m.id]/1000).toFixed(1)+' 秒</small>':'')+'</button>').join('')+'</section>'}).join('')+
  '</div><button data-action="main-menu">返回</button></section>'
}
function renderMenu(){
 const previous=document.body.dataset.phase;
 const finished=!mission&&(s.phase==='results'||(s.phase==='roundend'&&s.round===4))&&previous!==s.phase;
 if(finished)window.arcadeRun?.complete('defence');
 syncTrack();invalidateFrame();document.body.dataset.phase=s.phase;squadControl.hidden=!(s.phase==='playing'&&squad.length);squadSelect.value=squadOrder;const el=$('menu');el.innerHTML='';if(s.phase==='menu')el.innerHTML='<section class="panel"><small>FIRST PERSON · 原創機械人訓練</small><h1>預算防衛戰<br>拆解財務炸彈。</h1><p>避開消費壞習慣機械人，到北面終端核對帳目，再拆解炸彈。</p><div class="control-guide"><span><b>移動</b> WASD／左屏搖桿</span><span><b>瞄準</b> 右鍵拖動／方向鍵／觸控拖動</span><span><b>射擊</b> 左鍵或按住 X · Q 瞄準</span><span><b>互動</b> F 查帳 · E 拆解</span></div><details><summary>操作說明</summary><p>WASD 移動 · 右鍵拖動／方向鍵轉向 · Esc 暫停 · 左鍵／X 射擊 · Q 瞄準 · 空白跳躍 · C 蹲下 · 1–5 換武器 · R 換彈 · F 查帳 · E 開門／拆解 · P／Esc 暫停 · V 全螢幕。</p><p>觸控板：可用方向鍵轉向、X 射擊、Q 瞄準。手機：左半屏拖動搖桿移動、右半屏拖動瞄準；按 E 開門，按住 E 拆解。</p></details><div class="settings"><label><input id="reduce" type="checkbox" '+(reduced?'checked':'')+'> 減少鏡頭動態</label></div><div class="actions"><button data-action="begin">'+(storyTrial()?'開始核對貸款':'單人三輪')+'</button>'+(storyTrial()?'':'<button data-action="ex">EX 關 · 機械人圍攻</button><button data-action="duel">1 對 1</button><a href="range.html">無障礙不限時文字／標靶版 ↗</a>')+'</div></section>';
else if(s.phase==='missions')el.innerHTML=missionMenu();
else if(s.phase==='buy')el.innerHTML='<section class="panel"><small>'+(s.round===4?'EX 關':'ROUND '+s.round+' / 3')+' · BUY PHASE</small><h1>'+ (mission?.training?'3D 練習場':mission?mission.mission.map+' · '+mission.mission.title:'先留下一輪嘅資源。') +'</h1><p>餘下 <b>'+s.credits+' 金幣</b>。手槍與匕首免費。每輪有 100 生命值，請利用掩體；器材只限今輪。</p>'+(storyTrial()?'<p>已提供快速拆解工具。到北面終端核對阿俊嘅貸款資料。</p>':mission?'<p>'+mission.mission.brief+'</p>':'')+'<div class="gear">'+Object.entries(GEAR).map(([key,g])=>'<div><b>'+g.label+'</b><small>'+({bazooka:rocketDescription(),carbine:'24 發，射速較快',sniper:'5 發，單發高威力，可開鏡',kit:'拆解由 5 秒減至 3 秒'})[key]+'</small><strong>'+g.cost+' 金幣</strong><button data-buy="'+key+'" '+(s.purchases.includes(key)||s.credits<g.cost?'disabled':'')+'>'+(s.purchases.includes(key)?'已購買':'購買')+'</button></div>').join('')+'</div><div class="actions"><button data-action="start">進入戰場</button>'+(mission?'<button data-action="missions">返回選關</button>':'')+'</div></section>';
else if(s.phase==='paused')el.innerHTML='<section class="panel"><h1>任務暫停</h1><span data-pfap-audio-slot></span><p>按住右鍵拖動轉向，放開即停。Esc 暫停。V 切換全螢幕。</p><p>移動、AI、子彈、換彈同倒數已停。'+Math.ceil(s.time)+' 秒 · '+s.ammo+' 發。</p><div class="actions"><button data-action="resume">繼續任務</button><button data-action="retry">'+(s.round===4?'重試 EX 關':mission?'重試任務':'由第一輪重試')+'</button></div></section>';
else if(s.phase==='roundend'&&storyTrial())el.innerHTML='<section class="panel"><h1>核對完成</h1><p>'+offer().why+'</p><button data-action="exit">返回調查</button></section>';
else if(s.phase==='roundend'&&mission)el.innerHTML='<section class="panel"><h1>任務完成</h1><p>'+mission.mission.map+' · '+mission.mission.title+' · '+clock.toFixed(1)+' 秒</p><p>'+OFFERS[s.round-1].why+'</p><div class="actions"><button data-action="retry">再試一次</button><button data-action="missions">返回選關</button></div></section>';
else if(s.phase==='roundend'&&s.round===4)el.innerHTML='<section class="panel"><h1>EX 關 · 拆解完成</h1><p>'+exOffer.why+'</p><div class="actions"><button data-action="retry">再戰 EX 關</button><button data-action="exit">退出</button></div></section>';
else if(s.phase==='roundend')el.innerHTML='<section class="panel"><small>FINANCIAL BOMB DEFUSED</small><h1>第 '+s.round+' 輪：拆解完成。</h1><p>'+OFFERS[s.round-1].why+'</p><p>制止 '+s.kills+' 個消費壞習慣機械人。器材剩餘 '+s.credits+' 金幣，留畀下一輪。</p><button data-action="next">'+(s.round>=3?'查看任務總結':'下一輪')+'</button></section>';
else if(s.phase==='results'){const z=score(s);if(!recorded&&!storyTrial()&&!window.arcadeTest){recorded=true;try{const a=JSON.parse(localStorage.getItem('website-v1-arcade')||'{}'),records=JSON.parse(localStorage.getItem('website-v1-records')||'{}');a.defence={score:z.judgement+z.reserve,completed:true};records.defence={best:Math.max(records.defence?.best||0,z.judgement+z.reserve),plays:(records.defence?.plays||0)+1};localStorage.setItem('website-v1-arcade',JSON.stringify(a));localStorage.setItem('website-v1-records',JSON.stringify(records))}catch{}};el.innerHTML='<section class="panel"><small>MISSION COMPLETE</small><h1>保住需要，留低未來。</h1><div class="score-row"><p>金融判斷<br><b>'+z.judgement+'／80</b></p><p>資源保留<br><b>'+z.reserve+'／20</b></p><p>射擊準確率（另計）<br><b>'+z.accuracy+'%</b></p></div><p>制止 '+s.totalKills+' 個機械人，拆解三枚虛構財務炸彈。金融判斷只計終端首次核對，射擊準確率唔加入金融分數。先保基本生活、查清總額同收入日期，再為未來目標預留資源。七日後再檢視安排。</p><div class="actions"><button data-action="retry">再玩一次</button><button data-action="exit">返回遊戲選單</button></div></section>'}
else if(s.phase==='dead'&&s.time===0&&s.hp>0)el.innerHTML='<section class="panel detonation-panel"><h1>拆解失敗</h1><p>'+s.feedback+'</p><div class="actions"><button data-action="retry">重試</button><button data-action="exit">退出</button></div></section>';
else if(s.phase==='dead')el.innerHTML='<section class="panel"><small>RETRY / 再安排路線</small><h1>'+(s.hp?'今次未能趕及拆解。':'生命值歸零。再安排伏擊路線。')+'</h1><p>用掩體阻擋火力，避開或反擊機械人，再到北面終端查帳。成績唔會改動阿俊嘅故事。</p><div class="actions"><button data-action="retry">'+(s.round===4?'重試 EX 關':mission?'重試任務':'由第一輪重試')+'</button><button data-action="exit">退出</button></div></section>';
if(['playing','dying'].includes(s.phase))el.innerHTML='';audio?.mountControls();}
const text=(id,value)=>{const el=$(id);if(window.siteLocale)window.siteLocale.write(el,value);else if(el.textContent!==value)el.textContent=value};
const flag=(el,key,value)=>{if(el[key]!==value)el[key]=value};
const attr=(el,key,value)=>{if(el.getAttribute(key)!==value)el.setAttribute(key,value)};
function measureHud(){
 const bar=$('hud');
 document.documentElement.style.setProperty('--hud-bottom',bar.offsetTop+bar.offsetHeight+'px');
}
const minimap=$('minimap');
function drawMinimap(goal){
 const ctx=minimap.getContext('2d');
 if(!ctx||!activeMap)return;
 const scale=3.5,px=x=>64+x*scale;
 ctx.fillStyle='#162e2c';ctx.fillRect(0,0,128,128);
 ctx.fillStyle='#748783';
 for(const wall of activeMap.walls)ctx.fillRect(px(wall.x-wall.w/2),px(wall.z-wall.d/2),wall.w*scale,wall.d*scale);
 ctx.fillStyle='#dda767';
 for(const door of doors)if(!door.open)ctx.fillRect(px(door.x-door.w/2),px(door.z-door.d/2),door.w*scale,door.d*scale);
 function mark(x,z,color,radius){ctx.fillStyle=color;ctx.beginPath();ctx.arc(px(x),px(z),radius,0,Math.PI*2);ctx.fill()}
 mark(goal.x,goal.z,'#ffd277',3);
 for(const enemy of enemies)if(enemy.hp>0)mark(enemy.x,enemy.z,'#ff8e76',2.2);
 mark(s.x,s.z,'#a9f5de',3);
 ctx.strokeStyle='#a9f5de';ctx.beginPath();ctx.moveTo(px(s.x),px(s.z));ctx.lineTo(px(s.x)-Math.sin(yaw)*9,px(s.z)-Math.cos(yaw)*9);ctx.stroke();
}
function hud(){
 const goal=task();
 const active=s.phase==='playing'&&!terminalOpen;
 const nearDevice=active&&nearObjective(s,goal.point);
 minimap.hidden=!active;
 if(active)drawMinimap(goal.point);
 const nearby=mission?doors.find(d=>nearObjective(s,d)):interaction(s,doors);
 const doorNear=active&&!nearDevice&&(mission?!!nearby:nearby?.type==='door');
 flag($('interaction-hint'),'hidden',!doorNear);
 if(doorNear)text('interaction-hint',nearby.open?'[ E ] 關門':'[ E ] 開門');
 const alive=enemies.reduce((count,enemy)=>count+Number(enemy.hp>0),0);
 text('round', s.round===4?'EX':mission?activeMap.name:s.round+'/3');
 text('health',s.hp+' / 100');
 flag($('health-bar'),'value',s.hp);
 attr($('health-wrap'),'data-low',String(s.hp<=25));
 text('ammo',s.weapon==='knife'?'匕首 · 近戰':WEAPONS[s.weapon].label+' · 彈匣 '+s.ammo+' / 備彈 '+s.reserves[s.weapon]+(s.reload?' · 換彈 '+s.reload.toFixed(1)+'s':'')+(s.weapon==='sniper'&&s.cooldown>0?' · 拉栓 '+s.cooldown.toFixed(1)+'s':''));
 text('timer',Math.ceil(s.time)+'s');
 text('money',s.credits+' 金幣');
 const verb={check:'F 查帳',defuse:'按住 E 拆解',prepare:'按住 E 整理',handoff:'按住 E 交接',upload:'留喺範圍內上傳'}[goal.kind];
 text('objective',goal.point.name+' · '+verb+' · '+alive+' 個機械人活動中');
 text('notice',s.feedback);
 flag($('defuse'),'hidden',!nearDevice);
 if(nearDevice){
  text('defuse-label',s.defuse>0?verb+' · '+s.defuse.toFixed(1)+' / '+goal.seconds+' 秒':verb);
  flag($('defuse-progress'),'max',goal.seconds);
  flag($('defuse-progress'),'value',s.defuse);
 }
 attr($('crouch'),'aria-pressed',String(s.crouch));
 for(const button of weaponButtons){
  flag(button,'disabled',!s.owned.includes(button.dataset.weapon));
  attr(button,'aria-pressed',String(s.weapon===button.dataset.weapon));
 }
}
function activeFrame(){return s.phase==='dying'||(s.phase==='playing'&&!terminalOpen)}
function scheduleFrame(){
 if(!document.body.dataset.webglError&&!raf&&!closed&&!contextLost&&!document.hidden&&(frameDirty||activeFrame()))raf=requestAnimationFrame(loop);
}
function invalidateFrame(){if(!renderer||document.body.dataset.webglError)return;frameDirty=true;scheduleFrame()}
let nextPaint=0;
const paintPeriod=1000/60;
function loop(t){
 raf=0;
 if(closed||contextLost||document.hidden)return;
 const dt=last?Math.max(0,(t-last)/1000):0;
 last=t;
 if(activeFrame()){
  const elapsed=Math.min(dt,.15);
  const n=Math.max(1,Math.ceil(elapsed/.03));
  for(let i=0;i<n;i++)update(elapsed/n);
  if(dt>.15&&s.phase==='playing')s.time=Math.max(0,s.time-(dt-.15));
  const fade=Math.exp(-dt*13);
  for(const enemy of enemies)enemy.chassisMaterial?.emissive.multiplyScalar(fade);
  damageFlash=Math.max(0,damageFlash-dt);
  hitFlash=Math.max(0,hitFlash-dt);
  effects=effects.filter(effect=>{effect.life-=dt;if(effect.life>0)return true;disposeGroup(effect.mesh);return false});
  if(flash.userData.life>0)flash.userData.life-=dt;
  flash.visible=flash.userData.life>0;
  gun.position.z=-.65+(!reduced&&flash.visible?.05:0);
  gun.rotation.x=s.reload?-Math.sin(s.reload/WEAPONS[s.weapon].reload*Math.PI)*.7:s.weapon==='knife'&&s.cooldown>0?-Math.sin(s.cooldown/.6*Math.PI)*1.4:0;
  gun.position.y=-.32+(reduced?0:Math.sin(clock*9)*.007);
 }
 if(frameDirty||t>=nextHud){hud();nextHud=t+80}
 attr(document.body,'data-terminal',String(terminalOpen));
 flag($('scope-view'),'hidden',!(scoped&&s.weapon==='sniper'));
 flag($('hitmarker'),'hidden',hitFlash<=0);
 flag($('headshot'),'hidden',headFlash<=0);
 flag($('damage').style,'opacity',reduced?'0':String(Math.min(.65,damageFlash)));
 if(s.phase!=='dying'){camera.position.set(s.x,s.y,s.z);camera.rotation.set(pitch+recoilPitch,yaw,0,'YXZ')}
 for(const enemy of enemies){
  enemy.meter.visible=enemy.hp>0;
  if(enemy.meter.visible)enemy.meter.rotation.y=Math.atan2(s.x-enemy.x,s.z-enemy.z)-enemy.mesh.rotation.y;
 }
 const doorStep=1-Math.pow(.8,dt*60);
 for(const view of doorMeshes){
  view.group.position.y+=((view.d.open?view.d.h+2:view.d.h/2)-view.group.position.y)*doorStep;
  view.status.material.color.setHex(view.d.open?0x85c6a0:0xe6ad65);
 }
 const point=task().point;arenaArt.station.position.set(point.x,0,point.z);
 const light=s.verified?0x80d4aa:s.time<10?0xf38a70:0xedb663;
 arenaArt.strip.material.color.setHex(light);arenaArt.lamp.material.color.setHex(light);
 arenaArt.stationSign.visible=!s.verified;arenaArt.verifiedSign.visible=s.verified;
 const fov=scoped?(s.weapon==='sniper'?28:57):76;
 if(camera.fov!==fov){camera.fov=fov;camera.updateProjectionMatrix()}
 gun.visible=!(scoped&&s.weapon==='sniper');

 if(frameDirty||t>=nextPaint-1){
  renderer.render(scene,camera);
  nextPaint=nextPaint<t-paintPeriod||frameDirty?t+paintPeriod:nextPaint+paintPeriod;
 }
 frameDirty=false;
 scheduleFrame();
}
let viewWidth=0,viewHeight=0,viewRatio=0;
function resize(){
 if(!renderer)return;
 const w=host.clientWidth,h=host.clientHeight;
 if(!w||!h)return;
 const ratio=Math.min(devicePixelRatio||1,1.35,Math.sqrt(1500000/(w*h)));
 if(w===viewWidth&&h===viewHeight&&ratio===viewRatio)return;
 viewWidth=w;viewHeight=h;viewRatio=ratio;
 renderer.setPixelRatio(ratio);renderer.setSize(w,h,false);
 renderer.shadowMap.enabled=w>=900&&matchMedia('(pointer:fine)').matches;
 camera.aspect=w/h;camera.updateProjectionMatrix();
 invalidateFrame();
}
function cleanup(){if(closed)return;closed=true;stopTrack();hudObserver?.disconnect();worldObserver?.disconnect();rockets=[];rocketVisuals?.dispose();rocketVisuals=null;cancelAnimationFrame(raf);events.abort();keys.clear();audio?.stopEffects();scene?.traverse(o=>{o.geometry?.dispose();const materials=o.material?(Array.isArray(o.material)?o.material:[o.material]):[];materials.forEach(m=>{m.map?.dispose();m.dispose()})});renderer?.dispose();renderer?.forceContextLoss();clearPointer()}
function exit(){cleanup();if(parent!==window){parent.postMessage({type:'budget-defence-exit'},location.origin);parent.postMessage({type:'website-v1-back'},location.origin)}else location.href='../../#play'}
try{init()}catch(e){
 document.body.dataset.webglError='true';
 document.body.dataset.phase='unavailable';
 $('pause').disabled=true;
 host.innerHTML='<section class="panel webgl-fallback"><h1>3D 畫面未能啟動</h1><p>可以轉用相同學習內容嘅不限時標靶版。</p><a href="./range.html">打開無障礙版本</a></section>';
 console.warn('Budget Defence WebGL unavailable', e);
}
on(document,'click',e=>{unlock();const a=e.target.closest('[data-action]')?.dataset.action,b=e.target.closest('[data-buy]')?.dataset.buy,weapon=e.target.closest('[data-weapon]')?.dataset.weapon,answer=e.target.closest('[data-answer]')?.dataset.answer;if(weapon)selectWeapon(weapon);if(b&&buy(s,b)){cue('buy_equip');s.feedback='已買 '+GEAR[b].label+'，只扣一次。';renderMenu()}if(a==='duel'&&s.phase==='menu'&&!window.arcadeTest&&!storyTrial())openCoop(()=>shotSound('rocket-impact'),shotSound,'duel');if(a==='ex'){mission=null;s=create();s.round=4;s.credits=600;s.phase='buy';renderMenu()}if(a==='begin'){mission=null;s.phase='buy';if(storyTrial())s.purchases=['kit'];renderMenu()}if(a==='training'&&!storyTrial())startMission('1-verify',true);if(a==='missions'&&!storyTrial()){clearRound();mission=null;s=create();s.phase='missions';renderMenu()}if(a==='main-menu'){mission=null;s=create();renderMenu()}const chosen=e.target.closest('[data-mission]')?.dataset.mission;if(chosen&&s.phase==='missions')startMission(chosen);if(a==='start')startRound();if(a==='resume')resumeRound();if(a==='retry'){if(mission)startMission(mission.mission.id,mission.training);else{const ex=s.round===4;clearRound();recorded=false;s=create();if(ex){s.round=4;s.credits=600}s.phase='buy';if(storyTrial())s.purchases=['kit'];renderMenu()}}if(a==='next'){if(s.phase!=='roundend'||mission||storyTrial())return;if(s.round>=3)s.phase='results';else{s.round++;s.phase='buy';s.purchases=[]}renderMenu()}if(a==='exit')exit();if(answer!==undefined){if(verify(s,Number(answer),offer())){terminalOpen=false;$('terminal').hidden=true;if(mission&&task().kind==='upload')s.feedback='資料已核實。去'+task().point.name+'，留喺範圍內上傳。';unlock();host.focus()}else if(s.phase==='playing'&&s.checked&&!s.verified){terminalOpen=false;$('terminal').hidden=true;detonate('核實錯誤，裝置已引爆。')}}if(e.target.id==='terminal-back'){terminalOpen=false;$('terminal').hidden=true;host.focus()}if(answer!==undefined||e.target.id==='terminal-back'){last=0;syncTrack();invalidateFrame()}});
on($('fullscreen'),'click',toggleFullscreen);on($('settings-open'),'click',openSettings);on(document,'fullscreenchange',()=>{$('fullscreen').textContent=document.fullscreenElement?'退出全螢幕 V':'全螢幕 V';$('fullscreen').setAttribute('aria-pressed',String(!!document.fullscreenElement));resize()});for(const key of ['sensitivity','ads','volume'])on($('setting-'+key),'input',e=>{settings[key]=Number(e.target.value);$(''+key+'-output').textContent=key==='volume'?Math.round(settings[key]*100)+'%':settings[key].toFixed(2)+'×';saveSettings()});for(const key of ['invert','reduced'])on($('setting-'+key),'change',e=>{settings[key]=e.target.checked;saveSettings()});on($('pause'),'click',pause);on($('exit'),'click',exit);$('mute').replaceWith(audio.controls());on(document,'change',e=>{if(e.target.id==='reduce')reduced=e.target.checked});on($('reload'),'click',reload);on($('check'),'click',check);on($('jump'),'click',jump);on($('crouch'),'click',()=>{if(s.phase==='playing'&&!terminalOpen)crouchToggle=!crouchToggle});on($('scope'),'click',toggleScope);
on(document,'keydown',e=>{if(e.target instanceof Element&&e.target.matches('input,select,textarea'))return;if($('settings-dialog').open)return;if(['KeyP','Escape'].includes(e.code)){if(!e.repeat){if(e.code==='KeyP'&&s.phase==='paused')resumeRound();else pause()}return}if(e.code==='KeyV'&&!e.repeat){e.preventDefault();toggleFullscreen();return}if(s.phase!=='playing'||terminalOpen)return;if(['KeyW','KeyA','KeyS','KeyD','Space','KeyE','KeyR','KeyF','KeyX','KeyQ','ArrowLeft','ArrowRight','ShiftLeft'].includes(e.code))e.preventDefault();keys.add(e.code);if(e.code==='Space'&&!e.repeat)jump();if(e.code==='KeyX'&&!e.repeat)shoot();if(e.code==='KeyQ'&&!e.repeat)toggleScope();if(/^Digit[1-5]$/.test(e.code))selectWeapon(['pistol','carbine','sniper','knife','bazooka'][Number(e.code.slice(-1))-1]);if(e.code==='KeyR'&&!e.repeat)reload();if(e.code==='KeyF'&&!e.repeat)check();if(e.code==='KeyE'&&!e.repeat)interact();});on(document,'keyup',e=>{keys.delete(e.code);if(e.code==='KeyE')defuseHeld=false});
function interact(){
 const atDevice=mission?s.verified&&nearObjective(s,task().point):interaction(s,doors)?.type==='defuse';
 if(atDevice||!useDoor())defuseHeld=true;
}
function look(dx,dy){const d=aimDelta(dx,dy,scoped,settings);yaw-=d.yaw;pitch=Math.max(-1.2,Math.min(1.2,pitch-d.pitch))}
const canvas=renderer?.domElement ?? host;
const playing=()=>s.phase==='playing'&&!terminalOpen&&!$('settings-dialog').open;
on(canvas,'webglcontextlost',event=>{
 event.preventDefault();
 contextLost=true;clearPointer();keys.clear();pause();
 text('view-status','3D 畫面暫停。等候瀏覽器恢復，亦可使用不限時標靶版。');
});
on(canvas,'webglcontextrestored',()=>{
 contextLost=false;last=0;
 text('view-status','3D 畫面已恢復。按「繼續任務」返回。');
 invalidateFrame();
});
matchPointer=bindMatchPointer({
 on,canvas,active:playing,look,
 stickRadius:()=>touchStick.offsetWidth*.3 || 36,
 walk(right,forward,knob,anchor){
  touchRight=right;touchForward=forward;
  if(anchor){
   const rect=host.getBoundingClientRect();
   const half=touchStick.offsetWidth/2;
   touchStick.style.left=Math.max(half,Math.min(rect.width/2-half,anchor.x-rect.left))+'px';
   touchStick.style.top=Math.max(half,Math.min(rect.height-half,anchor.y-rect.top))+'px';
   touchStick.style.bottom='auto';
   touchStick.style.setProperty('--stick-x',knob.x+'px');
   touchStick.style.setProperty('--stick-y',knob.y+'px');
  }else touchStick.removeAttribute('style');
 },
 fire(pressed){fireHeld=pressed;if(pressed){unlock();shoot()}},
 clearInput(){keys.clear();fireHeld=defuseHeld=scoped=false}
});
for(const button of document.querySelectorAll('[data-hold]')){
 let pointer=null;
 const fire=button.dataset.hold==='fire';
 on(button,'pointerdown',event=>{
  if(!playing()||pointer!==null||event.button!==0)return;
  event.preventDefault();
  button.setPointerCapture(event.pointerId);
  pointer=event.pointerId;
  if(fire){fireHeld=true;unlock();shoot()}
  else interact();
 });
 for(const type of ['pointerup','pointercancel','lostpointercapture']){
  on(button,type,event=>{
   if(pointer!==event.pointerId)return;
   pointer=null;
   if(fire)fireHeld=false;
   else defuseHeld=false;
  });
 }
}
on(document,'visibilitychange',()=>{if(document.hidden){pause();last=0}else invalidateFrame()});on(window,'blur',()=>{pause()});on(window,'resize',resize);on(window,'pagehide',cleanup);
on(window,'site-language-change',()=>{scene.traverse(object=>object.userData.localize?.());invalidateFrame()});
hudObserver = new ResizeObserver(measureHud);
hudObserver.observe($('hud'));
worldObserver = new ResizeObserver(resize);
worldObserver.observe(host);
measureHud();
window.fpsSnapshot=()=>({...s,recoilPitch,score:score(s),enemies:enemies.map(e=>({x:e.x,z:e.z,hp:e.hp,maxHp:e.maxHp,ammo:e.ammo,reload:e.reload,burst:e.burst,dying:e.dying})),bullets:bullets.length,terminalOpen,squad:{order:squadOrder,members:squad.map(({id,x,z})=>({id,x,z}))},audio:audio?.now()?'running':'not-started',walls:WALLS,doors:doors.map(d=>({...d})),view:{yaw,pitch,scoped,locked:!!document.pointerLockElement},settings:{...settings},fullscreen:!!document.fullscreenElement,map:activeMap?.name,mission:mission?{id:mission.mission.id,stage:mission.stage,target:task()}:null,graphics:{court:document.body.dataset.court,calls:renderer?.info.render.calls||0,triangles:renderer?.info.render.triangles||0},posture:{crouch:s.crouch,jump:s.jumpY}});if(!document.body.dataset.webglError){if(demoMission)startMission(demoMission[1]);else renderMenu();}
