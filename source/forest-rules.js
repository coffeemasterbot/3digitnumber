(function(root,f){if(typeof module==='object')module.exports=f();else root.ForestRules=f()})(globalThis,()=>{
const door=(x,near,far,a,b)=>({x,y:110,w:22,h:390,plates:[{x:near,type:a},{x:far,type:b}],open:false,roomReady:false});
function level(n){const third=n===3;const doors=n===1?[door(330,290,385,0,1),door(660,615,715,1,0)]:[door(300,260,350,0,1),door(580,540,630,1,0),door(820,780,875,1,0)];const pools=doors.flatMap(d=>d.plates.map(p=>({x:p.x-23,w:46,type:p.type})));if(third)pools.push({x:430,w:44,type:2});else if(n===1)pools.push({x:440,w:38,type:2});
return {platforms:[{x:0,y:500,w:960,h:60},{x:150,y:425,w:100,h:18},...(n===1?[{x:480,y:425,w:95,h:18},{x:550,y:350,w:95,h:18}]:[{x:390,y:425,w:95,h:18},{x:455,y:350,w:95,h:18},...(third?[{x:675,y:425,w:85,h:18},{x:720,y:350,w:80,h:18}]:[])])],doors,pools,gems:[{x:180,y:458,type:0},{x:200,y:390,type:1},{x:n===1?515:425,y:390,type:0},{x:n===1?590:495,y:315,type:1}],hazards:n===1?[]:[{x:402,y:365,w:16,h:60},...(third?[{x:697,y:365,w:16,h:60}]:[])]}}
function onPlate(p,plate){return p.grounded&&p.y>445&&Math.abs(p.x+14-plate.x)<20&&p.type===plate.type}
function update(map,players){for(const d of map.doors)d.open=d.plates.some(a=>players.some(p=>onPlate(p,a)));return map.doors}
function checkpoint(map,players){for(const d of map.doors){if(!d.roomReady&&players.every(p=>p.x>d.x+d.w+3)){d.roomReady=true;for(const p of players){let x=d.plates[1].x+24+p.type*8;p.checkpoint=Math.min(910,x)}}}}
function doorCollision(p,doors,oldX){for(const d of doors){if(d.open||p.y+p.h<=d.y||p.y>=d.y+d.h)continue;if(p.x+p.w>d.x&&p.x<d.x+d.w){p.x=oldX+p.w/2<d.x+d.w/2?d.x-p.w:d.x+d.w;p.vx=0}}}
return {level,onPlate,update,checkpoint,doorCollision};
});
