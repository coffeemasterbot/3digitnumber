import test from 'node:test';
import assert from 'node:assert/strict';
import {create,beginRound,equip,startReload,tickReload,WEAPONS} from '../source/fps/rules.mjs';
import {Room} from '../coop/room.mjs';

function round(){
 const s=create();s.phase='buy';s.purchases=['carbine','sniper','bazooka'];beginRound(s);return s;
}
test('partial reload transfers available reserve exactly once for each weapon',()=>{
 const s=round();
 for(const key of ['pistol','carbine','sniper','bazooka']){
  equip(s,key);
  const w=WEAPONS[key];assert.equal(s.ammo,w.mag);assert.equal(s.reserves[key],w.reserve);
  assert.equal(startReload(s),false);
  s.ammo=Math.floor(w.mag/2);
  const total=s.ammo+s.reserves[key];
  assert.equal(startReload(s),true);tickReload(s,w.reload/2);
  assert.equal(startReload(s),false);assert.equal(s.ammo,Math.floor(w.mag/2));
  tickReload(s,w.reload/2);tickReload(s,w.reload);
  assert.equal(s.ammo,w.mag);assert.equal(s.ammo+s.reserves[key],total);
 }
});
test('switch cancels reload and empty stock cannot create ammunition',()=>{
 const s=round();equip(s,'pistol');s.ammo=4;s.reserves.pistol=2;
 startReload(s);tickReload(s,.3);equip(s,'knife');
 assert.equal(startReload(s),false);tickReload(s,5);equip(s,'pistol');
 assert.equal(s.ammo,4);assert.equal(s.reserves.pistol,2);
 startReload(s);tickReload(s,2);assert.equal(s.ammo,6);assert.equal(s.reserves.pistol,0);
 assert.equal(startReload(s),false);s.phase='buy';beginRound(s);assert.equal(s.reserves.pistol,60);
});
test('two room peers receive identical authoritative ammo while forged stock and firing during reload are ignored',()=>{
 const frames=[[],[]],room=new Room('ammo');
 const players=frames.map(list=>room.attach(m=>list.push(m),{},0));
 const send=(p,type,data={})=>room.input(p,{v:3,type,seq:p.seq+1,...data},0);
 players.forEach(p=>send(p,'ready'));
 const [p]=players;
 send(p,'input',{f:0,r:0,yaw:0,pitch:0,fire:true});room.step(.05,0);
 assert.equal(p.ammo,11);
 send(p,'reload',{ammo:999,reserve:999});send(p,'reload');room.step(.5,50);
 assert.equal(p.ammo,11);assert.equal(p.reserves.pistol,60);
 send(p,'input',{f:0,r:0,yaw:0,pitch:0,fire:false});room.step(.91,100);room.broadcast();
 for(const list of frames){
  const view=list.at(-1).players.find(player=>player.id===p.id);
  assert.deepEqual([view.ammo,view.reserve,view.reload],[12,59,0]);
 }
});
