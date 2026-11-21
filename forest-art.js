/* Original ancient treasury art. Collision and puzzle logic remain in ForestRules. */
(()=>{const prior=window.drawMoneyJourney,reduced=matchMedia('(prefers-reduced-motion: reduce)');
const scenery=new WeakMap(),chambers=new Map();
// Kenney Starter Kit 3D Platformer (CC0), orthographic renders of brick.glb and grass.glb.
const propTextures={"brick": "data:image/webp;base64,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", "grass": "data:image/webp;base64,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"};
const props=new Map();
for (const [name,uri] of Object.entries(propTextures)){
 const image=new Image();
 image.onload=()=>chambers.clear();
 image.src=uri;
 props.set(name,image);
}

const themes=[
 {dark:'#1f2922',mid:'#3b4934',base:'#5c5b3e',recess:'#18291e',blocks:['#344333','#3c4935','#495039'],edge:'#898161',plant:'#64774c',metal:'#bc945c',stone:['#b5aa85','#827d59','#4f5c40'],crest:'weight'},
 {dark:'#211c23',mid:'#49382f',base:'#6e5140',recess:'#29221e',blocks:['#49362f','#543f32','#5c4938'],edge:'#9e7961',plant:'#68774f',metal:'#d18c56',stone:['#d5ad80','#907052','#634e41'],crest:'lift'},
 {dark:'#111f2b',mid:'#253c49',base:'#48646a',recess:'#142831',blocks:['#263a45','#2c4450','#34505a'],edge:'#6e979b',plant:'#518680',metal:'#93c5ca',stone:['#a1c1bc','#638a8d','#33545e'],crest:'light'},
];
window.drawMoneyJourney=function(g){
 if(g.key!=='pause')return prior(g);
 const main=g.ctx,m=g.map,t=g.time,quiet=reduced.matches;
 const theme=themes[m.id?.startsWith('light')?2:m.id?.startsWith('motion')?1:0];
 let c=main;
const rect=(x,y,w,h,color,r=3)=>{c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill()},oval=(x,y,rx,ry,color)=>{c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill()},line=(pts,color,width=2)=>{c.strokeStyle=color;c.lineWidth=width;c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke()};
function rune(x,y,type,size=1){c.save();c.translate(x,y);c.scale(size,size);c.fillStyle=type?'#85e5ff':'#ff9b4f';c.beginPath();if(type){c.moveTo(0,-13);c.bezierCurveTo(-18,7,-7,17,0,17);c.bezierCurveTo(18,17,16,5,0,-13)}else{c.moveTo(2,-15);c.bezierCurveTo(-2,-4,-15,1,-11,11);c.bezierCurveTo(-2,23,15,12,9,1);c.lineTo(5,7);c.closePath()}c.fill();c.strokeStyle=type?'#4a929d':'#c18548';c.lineWidth=1.5;c.stroke();c.restore()}
function spirit(x,y,type,size=1){c.save();c.translate(x,y);c.scale(size,size);const glow=c.createRadialGradient(0,-2,2,0,-2,31);glow.addColorStop(0,type?'#adf7f8aa':'#ffdc92bb');glow.addColorStop(1,type?'#adf7f800':'#ffdc9200');oval(0,-2,31,31,glow);c.fillStyle=type?'#b9f9ed':'#ffe3a0';c.strokeStyle=type?'#4aafc2':'#db9055';c.lineWidth=1.6;c.beginPath();c.moveTo(-13,6);c.bezierCurveTo(-20,-5,-7,-21,0,-17);c.bezierCurveTo(11,-22,21,-7,12,5);c.bezierCurveTo(10,11,16,15,18,18);c.bezierCurveTo(7,19,6,9,0,13);c.bezierCurveTo(-7,20,-12,16,-13,6);c.closePath();c.fill();c.stroke();oval(-5,-3,2,3,'#315d5c');oval(5,-3,2,3,'#315d5c');line([[-3,4],[0,6],[3,4]],'#598877',1.5);oval(-9,3,3,1.5,type?'#79d7d2':'#f1a26e');oval(9,3,3,1.5,type?'#79d7d2':'#f1a26e');for(const k of [-1,1]){c.fillStyle=type?'#c7ffff88':'#fff1bc88';c.beginPath();c.ellipse(k*17,0,7,3,k*.6,0,7);c.fill()}rune(0,-24,type,.27);c.restore()}
function stone(x,y,w,h,light=false){const gradient=c.createLinearGradient(x,y,x+w*.4,y+h);gradient.addColorStop(0,light?theme.stone[0]:theme.stone[1]);gradient.addColorStop(1,theme.stone[2]);rect(x,y,w,h,'#172523',3);rect(x+1,y+1,w-2,h-2,gradient,2);line([[x+2,y+h-2],[x+2,y+2],[x+w-2,y+2]],'#d2d4aa66',2);line([[x+w-2,y+3],[x+w-2,y+h-2],[x+3,y+h-2]],'#14211f88',2)}
function arch(x,y,w,h,ready,type){c.fillStyle='#112e27';c.beginPath();c.moveTo(x,y+h);c.lineTo(x,y+w/2);c.arc(x+w/2,y+w/2,w/2,Math.PI,0);c.lineTo(x+w,y+h);c.closePath();c.fill();for(let i=0;i<5;i++){const a=Math.PI+i*Math.PI/5,b=a+Math.PI/5;c.beginPath();c.arc(x+w/2,y+w/2,w/2+7,a,b);c.arc(x+w/2,y+w/2,w/2,a,b,true);c.closePath();c.fillStyle=i%2?'#a8a481':'#878e71';c.fill();c.strokeStyle='#3b5544';c.stroke()}stone(x-6,y+w/2,6,h-w/2);stone(x+w,y+w/2,6,h-w/2);if(ready){const glow=c.createLinearGradient(x,y,x,y+h);glow.addColorStop(0,type?'#96e5e755':'#f6cc8055');glow.addColorStop(1,'#173c2d');rect(x+3,y+w/2-5,w-6,h-w/2+5,glow)}else{for(let i=0;i<3;i++)rect(x+4+i*(w-8)/3,y+w/2-4,(w-8)/3-1,h-w/2+4,i%2?'#76674a':'#655b42',1);line([[x+3,y+h-15],[x+w-3,y+h-15]],'#c3a265',3)}rune(x+w/2,y+h/2,type,.42);stone(x-9,y+h,w+18,7,true)}
function actor(p){
 const ice=p.type===1;
 const palette=ice?['#d4f5e8','#65c0c9','#316c81','#243e57','#bce5d3']:['#ffedb1','#f89155','#9a4732','#412b28','#f6d180'];
 const cx=p.x+14,foot=p.y+34;
 const running=Math.abs(p.vx||0)>9,airborne=Math.abs(p.vy||0)>24;
 const walk=quiet||!running||airborne?0:Math.sin(t*17+p.type)*3.1;
 const eyeDir=Math.sign(p.vx||0)*1.55;
 oval(cx,foot,17,4,'#101e2290');
 c.save();c.translate(cx,foot);
 if(p.immunity>.1&&!quiet)c.globalAlpha=.82;
 if(!quiet)c.rotate(Math.max(-.1,Math.min(.1,(p.vx||0)*.00065)));
 const cloth=c.createLinearGradient(-14,-23,9,-7);
 cloth.addColorStop(0,palette[1]);cloth.addColorStop(1,palette[2]);
 c.fillStyle=cloth;c.strokeStyle=palette[3];c.lineWidth=1.8;
 c.beginPath();c.moveTo(0,-21);c.quadraticCurveTo(-10,-22,-16,-10);
 c.quadraticCurveTo(-9,-11+walk,-14,-3);c.quadraticCurveTo(-5,-5,1,-12);c.closePath();c.fill();c.stroke();
 const step=airborne?2:walk;
 for(const side of [-1,1]){
  const x=side*(6+(running?walk*.45:0)),y=side*step-1;
  line([[side*6,-9],[x,y]],palette[3],5);
  line([[side*6,-9],[x,y]],palette[2],3.2);
  oval(x+1,y,4.5,2,palette[3]);
  line([[x-2,y-1.5],[x+3,y-1.5]],palette[1],1);
 }
 const body=c.createLinearGradient(-6,-21,10,-5);
 body.addColorStop(0,palette[0]);body.addColorStop(.34,palette[1]);body.addColorStop(1,palette[2]);
 rect(-9,-20,18,16,palette[3],6);rect(-8,-19,16,13,body,5);
 line([[-7,-11],[7,-11]],palette[3],2.8);rect(-2,-12,4,3,palette[4],1);
 for(const side of [-1,1]){
  const handX=side*(running?11:10)+eyeDir*.35,handY=-14+side*walk*.55;
  line([[side*7,-19],[handX,handY]],palette[3],6);
  line([[side*7,-19],[handX,handY]],palette[2],3.9);
  oval(handX,handY,2.4,2.6,palette[0]);
 }
 const face=c.createLinearGradient(-7,-37,11,-14);
 face.addColorStop(0,palette[0]);face.addColorStop(.62,palette[1]);face.addColorStop(1,palette[2]);
 c.fillStyle=face;c.strokeStyle=palette[3];c.lineWidth=1.8;c.beginPath();
 if(ice){
  c.moveTo(0,-42);c.bezierCurveTo(4,-36,12,-34,13,-25);c.bezierCurveTo(14,-15,-11,-14,-13,-24);c.bezierCurveTo(-14,-33,-6,-35,0,-42);
 }else{
  c.moveTo(1,-42);c.bezierCurveTo(5,-39,4,-34,8,-31);c.quadraticCurveTo(11,-33,12,-37);c.bezierCurveTo(19,-21,9,-16,0,-16);c.bezierCurveTo(-11,-16,-17,-24,-9,-35);c.quadraticCurveTo(-6,-27,1,-42);
 }
 c.closePath();c.fill();c.stroke();
 line(ice?[[-9,-28],[-7,-33],[0,-38]]:[[-8,-28],[-6,-30],[-2,-33],[1,-38]],palette[4],1.7);
 oval(-4+eyeDir,-26,1.7,2.4,palette[3]);oval(4+eyeDir,-26,1.7,2.4,palette[3]);
 oval(-4.5+eyeDir,-27.1,.55,.6,palette[0]);oval(3.5+eyeDir,-27.1,.55,.6,palette[0]);
 line([[-2+eyeDir,-22],[eyeDir,-20.9],[2+eyeDir,-22]],palette[3],1.35);
 c.restore();
 if(g.mode==='solo'&&g.active===p.type){
  c.fillStyle=palette[0];c.strokeStyle=palette[3];c.lineWidth=2;
  c.beginPath();c.moveTo(cx-6,p.y-20);c.lineTo(cx+6,p.y-20);c.lineTo(cx,p.y-13);c.closePath();c.stroke();c.fill();
 }
}
let chamber=chambers.get(theme.crest);
if(!chamber){
chamber=document.createElement('canvas');chamber.width=960;chamber.height=560;c=chamber.getContext('2d');
const bg=c.createLinearGradient(0,0,0,560);bg.addColorStop(0,theme.dark);bg.addColorStop(.47,theme.mid);bg.addColorStop(1,theme.base);c.fillStyle=bg;c.fillRect(0,0,960,560);
for(let r=0;r<13;r++)for(let k=0;k<15;k++){
 const x=k*69-(r%2?34:0),y=r*44;
 const cell=(r*13+k*37)%19;
 c.globalAlpha=.55;rect(x+2,y+2,66,40,theme.blocks[cell%3],3);line([[x+4,y+41],[x+4,y+4],[x+65,y+4]],theme.edge+'38',1);c.globalAlpha=1;
 if(cell%4===0)line([[x+19,y+5],[x+21,y+14],[x+17,y+22],[x+29,y+34]],theme.recess+'a0',1);
 for(let j=0;j<7;j++)rect(x+(cell*17+j*11)%56+5,y+(j*19+cell)%32+4,j%3===0?3:1,1,theme.edge+'25',0);
}
for(const [i,x] of [43,246,449,652,855].entries()){
 const y=65+(i%2)*19,w=90,h=213;
 c.save();c.globalAlpha=.58;
 c.fillStyle=theme.recess;c.beginPath();c.moveTo(x,y+h);c.lineTo(x,y+w/2);c.arc(x+w/2,y+w/2,w/2,Math.PI,0);c.lineTo(x+w,y+h);c.closePath();c.fill();
 for(let j=0;j<9;j++){
  const a=Math.PI+j*Math.PI/9,b=a+Math.PI/9-.017;
  c.beginPath();c.arc(x+w/2,y+w/2,w/2+11,a,b);c.arc(x+w/2,y+w/2,w/2,a,b,true);c.closePath();c.fillStyle=j%2?theme.stone[1]:theme.stone[2];c.fill();
 }
 for(let j=0;j<5;j++){rect(x-10,y+52+j*29,9,27,theme.stone[1],1);rect(x+w+1,y+52+j*29,9,27,theme.stone[1],1)}
 rect(x-13,y+h,w+26,8,theme.stone[2],1);rect(x-11,y+h-2,w+22,3,theme.stone[1],1);
 const cx=x+w/2,cy=y+96;
 if(theme.crest==='lift'){
   for(const side of [-1,1])for(let j=0;j<9;j++){c.strokeStyle=theme.metal+'6f';c.lineWidth=1.6;c.beginPath();c.ellipse(cx+side*16,y+35+j*14,3+(j%2)*2,8,0,0,Math.PI*2);c.stroke()}
   rect(cx-29,y+153,58,9,theme.metal,2);oval(cx,y+153,13,4,theme.stone[0]);
 }else if(theme.crest==='light'){
   for(const side of [-1,0,1]){line([[cx+side*20,cy-39],[cx+side*14,cy+15]],theme.metal+'70',2)}
   c.beginPath();c.moveTo(cx,cy-14);c.lineTo(cx+19,cy+13);c.lineTo(cx,cy+44);c.lineTo(cx-19,cy+13);c.closePath();c.fillStyle=theme.metal+'65';c.fill();
   line([[cx,cy-12],[cx,cy+40]],theme.stone[0],1);
 }else{
   stone(cx-20,y+141,40,42);oval(cx,y+139,24,9,theme.stone[2]);
   for(let j=0;j<4;j++)oval(cx+9*(j-1),y+134-(j%2)*7,9,5,theme.plant);
 }
 c.restore();
}
for(let i=0;i<7;i++){
 const x=124+i*137;
 if(theme.crest==='weight'){
  line([[x,0],[x+7,35],[x-4,68],[x+6,105]],theme.plant,3);
  for(let j=0;j<7;j++){c.save();c.translate(x+(j%2?7:-5),j*13+12);c.rotate(j%2?.42:-.52);oval(0,0,8,3,theme.plant);line([[-5,0],[3,0]],theme.stone[0]+'70',1);c.restore()}
 }else{rect(x,0,8,44,theme.stone[2],1);rect(x+8,0,3,40,theme.metal+'60',1)}
}
for(const [i,x] of [34,174,288,513,690,882].entries()){
 const rubble=props.get('brick'),grass=props.get('grass');
 const y=425+(i%3)*13;
 c.globalAlpha=.32;
 if(rubble?.complete&&rubble.naturalWidth)c.drawImage(rubble,x,y,43+i%2*10,38);
 c.globalAlpha=theme.crest==='weight'?.63:.27;
 if(grass?.complete&&grass.naturalWidth)c.drawImage(grass,x+13,y+13,37,32);
 c.globalAlpha=1;
}
const haze=c.createRadialGradient(450,255,80,450,255,510);haze.addColorStop(0,theme.edge+'35');haze.addColorStop(.7,'#100e1510');haze.addColorStop(1,'#0f161a9a');rect(0,0,960,560,haze,0);
chambers.set(theme.crest,chamber);
c=main;
}
c.save();
c.drawImage(chamber,0,0);
for(const x of [65,895]){stone(x-8,145,18,112);rect(x-13,139,28,8,'#92774e');const flicker=quiet?0:Math.sin(t*5+x)*2;const glow=c.createRadialGradient(x,126,2,x,126,55);glow.addColorStop(0,'#f7d68755');glow.addColorStop(1,'#e4b05d00');oval(x,126,55,75,glow);oval(x,126,10+flicker,20,'#e8a551');oval(x-2,122,5,13,'#ffedac')}
function platform(p){
 const moving=p.lift||p.moving;
 if(p.lift)for(const x of [p.x+9,p.x+p.w-9]){
  line([[x,70],[x,p.y]],'#302b27',3);
  for(let y=p.y-5;y>70;y-=10){c.strokeStyle=theme.metal;c.lineWidth=1.25;c.beginPath();c.ellipse(x,y,2+(y%20<10),4.5,0,0,Math.PI*2);c.stroke()}
 }
 stone(p.x,p.y,p.w,p.h,p.h<30);
 rect(p.x,p.y,p.w,4,moving?theme.metal:theme.stone[0],1);
 rect(p.x,p.y+p.h-3,p.w,3,theme.recess,1);
 const width=p.h<30?24:38;
 for(let k=4;k<p.w-5;k+=width){
  const x=p.x+k;
  if(p.h<30)line([[x,p.y+5],[x+6,p.y+10],[x+3,p.y+p.h-4]],theme.recess+'bb',1);
  else{rect(x,p.y+8,Math.min(33,p.w-k-1),11,theme.blocks[1],2);line([[x+3,p.y+21],[x+3,p.y+35],[x+14,p.y+43]],theme.recess+'99',1)}
  if(k%4===0&&theme.crest==='weight'){oval(x+3,p.y+3,5,2,theme.plant);line([[x+5,p.y+3],[x+6,p.y+8],[x+10,p.y+12]],theme.plant,2)}
  if(moving)oval(x+4,p.y+7,1.8,1.8,theme.metal);
 }
}
let masonry=scenery.get(m);
if(!masonry){
 masonry=document.createElement('canvas');masonry.width=960;masonry.height=560;
 c=masonry.getContext('2d');
 for(const p of m.platforms)if(!p.lift&&!p.moving)platform(p);
 c=main;
 scenery.set(m,masonry);
}
c.drawImage(masonry,0,0);
for(const p of m.platforms)if(p.lift||p.moving)platform(p);
for(const pool of m.pools){const color=['#d57f45','#57a5ad','#9063a2'][pool.type];const py=pool.y??500;stone(pool.x-3,py-13,pool.w+6,23);rect(pool.x,py-9,pool.w,15,'#102e29');rect(pool.x+2,py-5,pool.w-4,10,color);for(let x=pool.x+6;x<pool.x+pool.w-4;x+=13)oval(x,py-1+(quiet?0:Math.sin(t*3+x)*2),4,2,'#f4f2ce77');if(pool.type===2){rect(pool.x+pool.w/2-12,py+21,24,15,'#c4b887');line([[pool.x+pool.w/2-7,py+24],[pool.x+pool.w/2+7,py+32]],'#684175',4);line([[pool.x+pool.w/2+7,py+24],[pool.x+pool.w/2-7,py+32]],'#684175',4)}}
for(const d of m.doors){
 const top=d.y??110,height=d.h??390,bottom=top+height;
 for(const plate of d.plates||[]){
  const pressed=ForestRules.platePressed(m,g.players,plate),py=plate.y??500,color=plate.type?'#83cdd2':'#ebba6b';
  stone(plate.x-24,py-12,48,12,true);oval(plate.x,py-(pressed?3:7),17,4,pressed?'#d4dda2':color);rune(plate.x,py-27,plate.type,.42);
 }
 stone(d.x-7,top-7,d.w+14,8,true);
 line([[d.x-5,top],[d.x-5,bottom]],theme.stone[1]+'94',2);
 line([[d.x+d.w+5,top],[d.x+d.w+5,bottom]],theme.stone[2]+'a0',2);
 if(!d.open){
  stone(d.x,top,d.w,height);
  const x=d.x+d.w/2,center=top+height/2;
  line([[d.x+4,top+3],[d.x+4,bottom-3]],theme.stone[0]+'b0',1);
  for(let y=top+14;y<bottom-7;y+=36){
   line([[d.x+3,y-4],[x,y+2],[d.x+d.w-3,y-4]],theme.metal,1.6);
   oval(x,y+9,1.4,1.4,theme.recess);
  }
  oval(x,center,Math.min(10,d.w/2),14,'#272e23');
  oval(x,center,Math.min(8,d.w/2),11,theme.metal);
  oval(x,center-2,2.2,2.7,theme.recess);rect(x-1,center-1,2,6,theme.recess,1);
 }else{rect(d.x,top,d.w,7,theme.metal);rect(d.x+5,top+2,d.w-10,2,'#cbe8a2',1)}
 if(d.open&&g.time-(g.gateFlashes?.get(d)??-10)<.75){
  const source=(m.levers||[]).find(l=>l.on&&(d.requires?.includes(l.id)||d.any?.includes(l.id)));
  const color=source?.type===1?'#99e2f3':source?'#ffc782':'#dbeda5';
  c.save();
  c.strokeStyle=color;c.lineWidth=3;
  c.strokeRect(d.x-5,top-4,d.w+10,height+8);
  if(source&&!quiet){
   c.setLineDash([6,5]);
   line([[source.x,source.y-15],[d.x+d.w/2,source.y-15],[d.x+d.w/2,top+10]],color,2);
  }
  c.restore();
 }
}
for(const h of m.hazards){stone(h.x-7,h.y-8,h.w+14,8);stone(h.x-7,h.y+h.h,h.w+14,8);if(h.on){c.save();c.shadowColor='#ed8060';c.shadowBlur=quiet?0:13;rect(h.x,h.y,h.w,h.h,'#d6634b',2);rect(h.x+h.w/2-2,h.y,4,h.h,'#fff0b9',1);c.restore()}else{c.setLineDash([3,5]);line([[h.x+h.w/2,h.y],[h.x+h.w/2,h.y+h.h]],'#a2aa7d',1);c.setLineDash([])}}
for(const l of m.levers||[]){stone(l.x-17,l.y-8,34,29,true);oval(l.x,l.y+7,8,5,'#5d6549');line([[l.x,l.y+5],[l.x+(l.on?11:-11),l.y-17]],'#ac8051',6);oval(l.x+(l.on?11:-11),l.y-17,7,7,l.on?'#c7d9a3':l.type?'#87cbd4':'#e4b666');rune(l.x,l.y-41,l.type,.65);line([[l.x+16,l.y+8],[l.x+33,l.y+8],[l.x+33,550]],l.on?'#b5bf87':'#5e7655',2)}
// Socket bowl uses a carved spiral; a seated stone keeps its pressure circuit lit.
for(const dock of m.docks||[]){const seated=m.bodies.some(b=>b.dock===dock.id);stone(dock.x-29,494,58,10,true);c.strokeStyle=seated?'#e1f5ac':'#c7ca97';c.lineWidth=2;c.beginPath();c.ellipse(dock.x,494,23,6,0,0,Math.PI);c.stroke();for(const side of [-1,1])line([[dock.x+side*27,481],[dock.x+side*22,487],[dock.x+side*27,491]],seated?'#e1f5ac':'#c7ca97',2)}
for(const b of m.bodies||[]){if(b.kind==='box'){const wood=c.createLinearGradient(b.x,b.y,b.x+b.w,b.y+b.h);wood.addColorStop(0,'#c29458');wood.addColorStop(1,'#7d5938');rect(b.x,b.y,b.w,b.h,wood,4);for(let i=0;i<4;i++)line([[b.x+5+i*12,b.y+4],[b.x+5+i*12,b.y+b.h-4]],'#5d4d34',1);line([[b.x+5,b.y+5],[b.x+b.w-5,b.y+b.h-5]],'#e2ba76',6);line([[b.x+b.w-5,b.y+5],[b.x+5,b.y+b.h-5]],'#b98b53',6);c.strokeStyle='#ead2a1';c.lineWidth=3;c.strokeRect(b.x+2,b.y+2,b.w-4,b.h-4);for(const x of [b.x+7,b.x+b.w-7])for(const y of [b.y+7,b.y+b.h-7])oval(x,y,2,2,'#4c5141');line([[b.x+17,b.y+27],[b.x+24,b.y+18],[b.x+31,b.y+27]],'#fff0b9',2);line([[b.x+24,b.y+18],[b.x+24,b.y+34]],'#fff0b9',2)}else{const cx=b.x+b.w/2,cy=b.y+b.h/2,r=b.w/2;c.save();if(b.locked){c.shadowColor='#d6eb9d';c.shadowBlur=quiet?0:13}const rock=c.createRadialGradient(cx-8,cy-10,1,cx,cy,r);rock.addColorStop(0,'#bdc4aa');rock.addColorStop(1,'#627b68');oval(cx,cy,r,r,rock);c.strokeStyle=b.locked?'#d3e9a8':'#3e594d';c.lineWidth=2;c.beginPath();c.arc(cx,cy,r-1,0,7);c.stroke();c.translate(cx,cy);c.rotate(b.angle);line([[-16,-8],[-6,-12],[1,-2],[12,-6],[15,4]],'#425d5099',2);c.strokeStyle=b.locked?'#e5f4b7':'#d2d7ad';c.lineWidth=2;c.beginPath();for(let i=0;i<45;i++){const a=i*.16,r=1+i*.28;const x=Math.cos(a)*r,y=Math.sin(a)*r;i?c.lineTo(x,y):c.moveTo(x,y)}c.stroke();c.restore()}}
for(const circuit of (m.lights || (m.light?[m.light]:[]))){
 const {source,receiver,mirrors,segments,lit}=circuit;
 for(const [x,y,nx,ny] of segments){line([[x,y],[nx,ny]],'#edbd6444',6);line([[x,y],[nx,ny]],'#ffeaa3',2)}
 for(const mirror of mirrors){const {x,y,turned}=mirror;stone(x-9,y+7,18,6,true);oval(x,y,8,8,'#695f50');const slope=turned?-1:1;line([[x-9,y-9*slope],[x+9,y+9*slope]],'#a7ece3',4)}
 oval(source[0],source[1],6,6,'#ffda72');oval(receiver[0],receiver[1],9,9,'#625c49');oval(receiver[0],receiver[1],5,5,lit?'#bdff9c':'#9d927a');
}
for(const item of m.gems)if(!item.got){
 const y=item.y+(quiet?0:Math.sin(t*3+item.x)*2);
 const light=item.type?'#a7edff':'#ffb46e',dark=item.type?'#2088af':'#c84c31';
 c.save();c.translate(item.x,y);c.shadowColor=light;c.shadowBlur=quiet?0:7;
 c.beginPath();c.moveTo(-10,-5);c.lineTo(-5,-10);c.lineTo(6,-10);c.lineTo(11,-4);c.lineTo(0,10);c.closePath();
 c.fillStyle=dark;c.fill();c.shadowBlur=0;c.strokeStyle='#28372c';c.lineWidth=2;c.stroke();
 line([[-8,-4],[0,-6],[8,-4],[0,7],[0,-6]],light,1.5);
 spirit(0,-12,item.type,.62);
 c.restore();
}
for(const [i,exit] of (m.exits||[{x:893,y:500},{x:938,y:500}]).entries())arch(exit.x-18,exit.y-75,36,75,m.gems.every(x=>x.got),i);
for(const p of g.players)actor(p);
if(!quiet){for(const p of g.particles){c.globalAlpha=Math.max(0,p.life/.7);oval(p.x,p.y,3,3,p.color)}for(let i=0;i<12;i++){c.globalAlpha=.12;oval((i*83+t*5)%960,100+(i*47)%380,1,1,'#ffedbc')}}c.globalAlpha=1;c.restore()};})();
