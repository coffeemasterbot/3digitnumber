import * as THREE from 'three';
import {createMap,OFFERS} from '../source/fps/rules.mjs';
export function openCoop(){
 const local=['localhost','127.0.0.1'].includes(location.hostname);
 const endpoint=local?'ws://127.0.0.1:8791/rooms':document.querySelector('meta[name=coop-endpoint]')?.content;
 const dialog=document.createElement('dialog');dialog.style.cssText='width:min(960px,96vw);max-height:96dvh;background:#173a32;color:#fff6da;padding:12px;overflow:auto';
 dialog.innerHTML='<h2>兩人合作 · 舊城街區</h2><p role="status"></p><div class="room-controls"><label>名稱 <input maxlength="20" value="玩家"></label> <button data-create>建立房間</button> <label>房間碼 <input maxlength="8"></label> <button data-join>加入</button> <button data-resume hidden>重新連線</button></div><button data-ready hidden>準備／再戰</button> <button data-exit>離開房間</button><div data-field hidden><canvas tabindex="0" style="display:block;width:100%;height:min(52vh,450px);touch-action:none"></canvas><p>WASD 移動 · 左鍵拖動 · 右鍵射擊 · R 換彈 · E 開門／長按拆解 · F 查帳</p><div data-offer hidden></div></div>';
 document.body.append(dialog);dialog.showModal();
 const q=selector=>dialog.querySelector(selector),status=q('[role=status]'),canvas=q('canvas'),inputs=dialog.querySelectorAll('input'),abort=new AbortController();
 const on=(el,event,fn)=>el.addEventListener(event,fn,{signal:abort.signal});let socket,id,code,token,seq=0,state,renderer,scene,camera,raf,timer,drag=false,fire=false,yaw=0,pitch=0,ref=null,suspended=false,leaving=false;
 const keys=new Set(),objects=new Map();
 const send=data=>{if(socket?.readyState===1)socket.send(JSON.stringify({v:1,seq:++seq,...data}))};
 const clear=()=>{keys.clear();fire=drag=false;sendInput()};
 function sendInput(){send({type:'input',f:Number(keys.has('KeyW'))-Number(keys.has('KeyS')),r:Number(keys.has('KeyD'))-Number(keys.has('KeyA')),fire,use:keys.has('KeyE'),yaw,pitch})}
 function box(w,h,d,color,x,y,z){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color}));mesh.position.set(x,y,z);scene.add(mesh);return mesh}
 function setup(){
  renderer=new THREE.WebGLRenderer({canvas,antialias:true});scene=new THREE.Scene();scene.background=new THREE.Color(0xc8bea2);
  camera=new THREE.PerspectiveCamera(72,1,.08,65);scene.add(new THREE.HemisphereLight(0xffeec0,0x61745a,2.5));
  box(36,.1,36,0x888470,0,-.05,0);for(const w of createMap(1).walls)box(w.w,w.h,w.d,0x6b7966,w.x,w.h/2,w.z);
  box(1.2,1.2,1.2,0xffba55,0,.6,-13);
  const draw=()=>{
   raf=requestAnimationFrame(draw);if(!state||!canvas.clientWidth)return;
   const me=state.players.find(p=>p.id===id),eye=me?.hp?me:state.players.find(p=>p.hp)||me;if(!eye)return;
   const w=canvas.clientWidth,h=canvas.clientHeight;if(canvas.width!==w||canvas.height!==h){renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
   if(!ref)ref=new THREE.Vector3(eye.x,1.55,eye.z);ref.lerp(new THREE.Vector3(eye.x,1.55,eye.z),.34);camera.position.copy(ref);camera.rotation.set(pitch,yaw,0,'YXZ');
   const drawObject=(key,x,z,w,h,d,color,visible)=>{let o=objects.get(key);if(!o){o=box(w,h,d,color,x,h/2,z);objects.set(key,o)}o.position.x+=(x-o.position.x)*.35;o.position.z+=(z-o.position.z)*.35;o.visible=visible};
   for(const d of state.doors)drawObject(d.id,d.x,d.z,d.w,d.h,d.d,0x9f6f3b,!d.open);
   for(const b of state.bots)drawObject('b'+b.id,b.x,b.z,1.1,1.9,.95,0x995039,b.hp>0);
   for(const p of state.players)drawObject(p.id,p.x,p.z,.7,1.75,.6,0x3aaac5,p.id!==eye.id&&p.hp>0);
   renderer.render(scene,camera);
  };draw();
 }
 function show(){
  const me=state.players.find(p=>p.id===id);if(!me)return;
  status.textContent='房間 '+code+' · '+state.players.map(p=>p.name+' '+p.hp+' HP'+(!p.online?'（離線）':p.ready?'（已準備）':'')).join(' ／ ')+' · '+(state.phase==='playing'?Math.ceil(state.time)+' 秒 · 子彈 '+me.ammo+' · '+(state.verified?'已核實':'到北面查帳')+' · 拆解 '+state.progress.toFixed(1)+'/5 秒'+(suspended?' · 選單開啟，合作對局繼續':''):state.result||'等候兩人準備');
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
  socket.onmessage=e=>{const m=JSON.parse(e.data);if(m.type==='joined'){({id,code,token}=m);try{sessionStorage.setItem('coop-room-session',JSON.stringify({code,token}))}catch{}q('.room-controls').hidden=true;return}
   if(m.type==='state'){state=m;show()}else if(m.type==='error')status.textContent=m.message};
  socket.onerror=()=>status.textContent='房間伺服器未能連線。';
  socket.onclose=()=>{if(leaving)return;clear();q('[data-field]').hidden=q('[data-ready]').hidden=true;q('.room-controls').hidden=false;q('[data-resume]').hidden=!token;status.textContent+=' · 連線已關閉'};
 }
 function close(){leaving=true;clearInterval(timer);cancelAnimationFrame(raf);abort.abort();socket?.close();scene?.traverse(o=>{o.geometry?.dispose();o.material?.dispose()});renderer?.dispose();renderer?.forceContextLoss();dialog.remove()}
 q('[data-exit]').onclick=close;on(dialog,'cancel',e=>{e.preventDefault();suspended=!suspended;clear();if(state)show()});on(window,'pagehide',close);
 if(window.offlineEdition||!endpoint){q('.room-controls').hidden=true;status.textContent=window.offlineEdition?'離線版可玩單人；合作需要網絡。':'公開合作伺服器尚未連接。';return}
 try{q('[data-resume]').hidden=!sessionStorage.getItem('coop-room-session')}catch{}
 q('[data-create]').onclick=()=>connect('create');q('[data-join]').onclick=()=>connect('join');q('[data-resume]').onclick=()=>connect('reconnect');q('[data-ready]').onclick=()=>send({type:'ready'});
 const offer=q('[data-offer]');offer.textContent=OFFERS[0].q;OFFERS[0].answers.forEach((a,i)=>{const b=document.createElement('button');b.textContent=a;b.onclick=()=>send({type:'answer',answer:i});offer.append(b)});
 on(dialog,'keydown',e=>{if(state?.phase!=='playing'||suspended||e.target.tagName==='INPUT')return;keys.add(e.code);if(!e.repeat){const action={KeyE:'door',KeyF:'check',KeyR:'reload'}[e.code];if(action)send({type:action})}});
 on(window,'keyup',e=>keys.delete(e.code));on(window,'blur',clear);
 on(canvas,'contextmenu',e=>e.preventDefault());on(canvas,'mousedown',e=>{if(suspended)return;canvas.focus();if(e.button===0)drag=true;if(e.button===2)fire=true});
 on(window,'mousemove',e=>{if(!drag||!(e.buttons&1)||suspended)return;yaw-=e.movementX*.003;pitch=Math.max(-1.2,Math.min(1.2,pitch-e.movementY*.003))});
 on(window,'mouseup',e=>{if(e.button===0)drag=false;if(e.button===2)fire=false});timer=setInterval(()=>{if(state?.phase==='playing')sendInput()},75);
 status.textContent='建立房間後，將八位房間碼交畀隊友。';
}
