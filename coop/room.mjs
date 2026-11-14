import {createMap,move,blocked,interaction,WEAPONS,OFFERS} from '../source/fps/rules.mjs';
const gun=WEAPONS.pistol;
const neutral=()=>({f:0,r:0,fire:false,use:false,yaw:0,pitch:0});
const near=p=>Math.hypot(p.x,p.z+13)<2.7;
export class Room {
 constructor(code){this.code=code;this.players=[];this.reset()}
 reset(){
  this.phase='waiting';this.time=95;this.progress=0;this.verified=false;this.result='';
  this.doors=createMap(1).doors;this.round=(this.round||0)+1;
  this.bots=[[-11,5],[12,0],[-11,-11],[11,-13]].map(([x,z],i)=>({id:i,x,z,hp:72,origin:x,t:i,fireIn:2+i}));
  this.players.forEach((p,i)=>Object.assign(p,{ready:false,x:i?1:-1,z:14,hp:100,ammo:gun.mag,cool:0,reload:0,checked:false,input:neutral()}));
 }
 attach(send,{token,name},now){
  let p=token&&this.players.find(p=>p.token===token&&!p.send&&p.until>now);
  if(!p){if(token||this.players.length>=2||this.phase!=='waiting')throw Error('房間已滿或重連已逾時');
   p={id:crypto.randomUUID(),token:crypto.randomUUID(),name:String(name||'玩家').slice(0,20),ready:false,hp:100,x:this.players.length?1:-1,z:14,ammo:gun.mag,cool:0,reload:0,checked:false,input:neutral(),seq:-1};
   this.players.push(p);
  }
  p.send=send;p.until=0;p.seq=-1;p.last=now;p.burst=0;p.window=now;
  send({v:1,type:'joined',id:p.id,token:p.token,code:this.code});this.broadcast();return p;
 }
 detach(p,now){p.send=null;p.ready=false;p.until=now+30000;p.input=neutral()}
 expire(now){if(this.phase==='playing'&&this.players.some(p=>!p.send&&now>=p.until))this.finish('隊員離線逾時');this.players=this.players.filter(p=>p.send||p.until>now)}
 finish(result){if(this.phase==='playing'){this.phase='result';this.result=result;this.players.forEach(p=>p.ready=false)}}
 input(p,m,now){
  if(!p.send||!m||m.v!==1||!Number.isSafeInteger(m.seq)||m.seq<=p.seq)return;
  if(now-p.window>=1000){p.window=now;p.burst=0}if(++p.burst>60)return;
  p.seq=m.seq;
  if(m.type==='ready'&&this.phase!=='playing'){p.ready=true;if(this.players.length===2&&this.players.every(p=>p.ready&&p.send)){this.reset();this.phase='playing'}return}
  if(this.phase!=='playing'||!p.hp)return;
  if(m.type==='input'){
   if(![m.f,m.r,m.yaw,m.pitch].every(Number.isFinite)||Math.abs(m.f)>1||Math.abs(m.r)>1)return;
   p.input={f:m.f,r:m.r,yaw:m.yaw%(2*Math.PI),pitch:Math.max(-1.2,Math.min(1.2,m.pitch)),fire:m.fire===true,use:m.use===true};p.last=now;return;
  }
  if(m.type==='reload'&&p.ammo<gun.mag&&!p.reload)p.reload=gun.reload;
  if(m.type==='check'&&near(p))p.checked=true;
  if(m.type==='answer'&&p.checked&&near(p)&&m.answer===OFFERS[0].right)this.verified=true;
  if(m.type==='door'){const i=interaction({...p,phase:'playing',verified:this.verified},this.doors);if(i?.type==='door'){const d=this.doors.find(d=>d.id===i.id);if(!this.players.some(a=>Math.abs(a.x-d.x)<d.w/2+.34&&Math.abs(a.z-d.z)<d.d/2+.34))d.open=!d.open}}
 }
 step(dt,now){
  this.expire(now);if(this.phase!=='playing')return;
  this.time=Math.max(0,this.time-dt);
  let using=false;
  for(const p of this.players){
   if(!p.send||!p.hp)continue;
   if(now-p.last>450)p.input={...neutral(),yaw:p.input.yaw,pitch:p.input.pitch};
   const i=p.input,n=Math.max(1,Math.hypot(i.f,i.r)),c=Math.cos(i.yaw),s=Math.sin(i.yaw);
   move(p,(i.r*c-i.f*s)*5*dt/n,(-i.f*c-i.r*s)*5*dt/n,this.doors);
   p.cool=Math.max(0,p.cool-dt);if(p.reload){p.reload=Math.max(0,p.reload-dt);if(!p.reload)p.ammo=gun.mag}
   if(i.fire&&p.ammo&&!p.cool&&!p.reload){
    p.ammo--;p.cool=gun.cooldown;
    const target=this.bots.filter(b=>{const dx=b.x-p.x,dz=b.z-p.z,d=Math.hypot(dx,dz);
     return b.hp&&d<gun.range&&-dx*s-dz*c>0&&Math.abs(dx*c-dz*s)<.65&&Math.abs(Math.tan(i.pitch)*d)<1&&!blocked(p.x,p.z,b.x,b.z,this.doors)
    }).sort((a,b)=>Math.hypot(a.x-p.x,a.z-p.z)-Math.hypot(b.x-p.x,b.z-p.z))[0];
    if(target)target.hp=Math.max(0,target.hp-gun.damage);
   }
   using||=i.use&&near(p)&&this.verified;
  }
  for(const b of this.bots){if(!b.hp)continue;b.t+=dt;move(b,Math.cos(b.t)*dt*.75,0,this.doors);b.fireIn-=dt;
   if(b.fireIn<=0){const p=this.players.find(p=>p.send&&p.hp&&Math.hypot(b.x-p.x,b.z-p.z)<13&&!blocked(b.x,b.z,p.x,p.z,this.doors));
    if(p){p.hp=Math.max(0,p.hp-6);b.fireIn=2.4}}
  }
  this.progress=using?Math.min(5,this.progress+dt):0;
  if(this.progress>=5)this.finish('合作拆解成功');else if(!this.time||this.players.every(p=>!p.hp))this.finish('任務失敗');
 }
 broadcast(){const snapshot={v:1,type:'state',phase:this.phase,result:this.result,round:this.round,time:this.time,progress:this.progress,verified:this.verified,
  players:this.players.map(({id,name,x,z,hp,ammo,ready,send,checked,input})=>({id,name,x,z,hp,ammo,ready,online:!!send,checked,yaw:input.yaw})),
  bots:this.bots.map(({id,x,z,hp})=>({id,x,z,hp})),doors:this.doors};
  this.players.forEach(p=>p.send?.(snapshot));
 }
}
export function drive(room){
 let last=performance.now(),acc=0,ticks=0;
 const timer=setInterval(()=>{const now=performance.now();acc+=Math.min(.25,(now-last)/1000);last=now;
  while(acc>=.05){room.step(.05,now);acc-=.05;if(++ticks%2===0)room.broadcast()}
  if(!room.players.length)clearInterval(timer);
 },50);
 return timer;
}
