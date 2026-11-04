function draw(){
 const g=game,c=g.ctx,t=g.elapsed,run=g.v.kind==='runner',quiet=matchMedia('(prefers-reduced-motion: reduce)').matches,A=window.MoneyArt,anim=quiet?0:t;
 const box=(x,y,w,h,color,r=8)=>{c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill()},text=(s,x,y,size=12,color='#f7eac8',align='left')=>{c.font=`700 ${size}px Microsoft JhengHei,sans-serif`;c.fillStyle=color;c.textAlign=align;c.fillText(s,x,y)},orb=(x,y,r,color)=>{c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill()};
 c.save();c.clearRect(0,0,600,340);const bg=c.createLinearGradient(0,0,0,340);bg.addColorStop(0,run?'#263e4b':'#173c4b');bg.addColorStop(1,run?'#597166':'#457477');c.fillStyle=bg;c.fillRect(0,0,600,340);
 if(run){
 orb(476,44,28,'#eac486');
 const project=(lane,z)=>{const d=Math.max(0,Math.min(1.25,z));return {x:300+(lane-1)*(25+175*d),y:100+215*d*d,scale:.15+.85*d}};
 for(let side of [-1,1])for(let i=0;i<9;i++){const z=(i/9+anim*.2)%1,q=project(side<0?-1:3,z),h=40+z*100;box(q.x-25*z,q.y-h,50*z+4,h,'#29483f',2);c.fillStyle='#e6c48399';c.fillRect(q.x-12*z,q.y-h+12*z,9*z+1,12*z+1)}
 c.fillStyle='#42554c';c.beginPath();c.moveTo(258,100);c.lineTo(342,100);c.lineTo(620,340);c.lineTo(-20,340);c.fill();
 for(const lane of [-.5,.5,1.5,2.5]){c.strokeStyle='#dccbab';c.lineWidth=lane===-.5||lane===2.5?4:2;c.beginPath();const a=project(lane,0),b=project(lane,1.1);c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke()}
 for(let i=0;i<15;i++){const z=(i/15+anim*.48)%1,a=project(-.4,z),b=project(2.4,z);c.strokeStyle='#172f2a';c.lineWidth=2+z*5;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke()}
 for(const it of [...g.items].sort((a,b)=>a.y-b.y)){if(it.hit)continue;const q=project(Math.round((it.x-100)/200),(it.y+35)/310),w=65*q.scale,h=56*q.scale;if(it.good){A?.pickup(c,q.x,q.y-18*q.scale,{kind:'receipt',good:true,scale:q.scale*.7})}else{c.fillStyle='#f3ab58';c.fillRect(q.x-w/2,q.y-h,w,h);c.fillStyle='#9b502e';c.beginPath();c.moveTo(q.x+w/2,q.y);c.lineTo(q.x+w/2+13*q.scale,q.y-13*q.scale);c.lineTo(q.x+w/2+13*q.scale,q.y-h-13*q.scale);c.lineTo(q.x+w/2,q.y-h);c.fill();c.fillStyle='#f9cb86';c.beginPath();c.moveTo(q.x-w/2,q.y-h);c.lineTo(q.x-w/2+13*q.scale,q.y-h-13*q.scale);c.lineTo(q.x+w/2+13*q.scale,q.y-h-13*q.scale);c.lineTo(q.x+w/2,q.y-h);c.fill();c.strokeStyle='#70442d';c.lineWidth=5*q.scale;c.beginPath();c.moveTo(q.x-w/2+8*q.scale,q.y-10*q.scale);c.lineTo(q.x+w/2-8*q.scale,q.y-h+10*q.scale);c.stroke()}}
 const q=project(g.displayLane??g.lane,1),j=g.jump?Math.sin(((g.jumpDuration||.65)-g.jump)/(g.jumpDuration||.65)*Math.PI)*(g.powers?.shoes>0?105:65):0;orb(q.x,315,22,'#102e2c66');if(g.powers?.board>0){box(q.x-30,307-j,60,9,'#e6b361',5);c.strokeStyle='#ffe5a0';c.lineWidth=3;c.beginPath();c.moveTo(q.x-48,322-j);c.lineTo(q.x-21,315-j);c.stroke()}if(g.powers?.shoes>0){box(q.x-16,302-j,13,8,'#86cfe0',3);box(q.x+4,302-j,13,8,'#86cfe0',3)}c.save();if(g.dying){c.translate(q.x,305);c.rotate(Math.min(1.4,g.dying.time*2));A?.runner(c,0,-22,anim,{scale:1.12})}else A?.runner(c,q.x,283,anim,{jump:j,scale:1.12});c.restore();
 }else{
 for(let i=0;i<7;i++){const x=(i*125-anim*24+1000)%875-125;box(x,26,80,240,'#6c92913b',10);box(x+7,34,66,223,'#0f35464f',6);c.strokeStyle='#82b8b32b';c.lineWidth=2;c.beginPath();c.moveTo(x+17,63);c.lineTo(x+60,63);c.moveTo(x+17,235);c.lineTo(x+60,235);c.stroke();orb(x+70,46,3,'#edc88d99');orb(x+10,247,3,'#edc88d99')}
 box(0,0,600,16,'#19363a',0);box(0,310,600,30,'#173a3a',0);c.fillStyle='#b79b65';c.fillRect(0,310,600,4);c.strokeStyle='#8cab8f45';c.lineWidth=2;c.setLineDash([15,25]);c.lineDashOffset=-anim*125;c.beginPath();c.moveTo(0,329);c.lineTo(600,329);c.stroke();c.setLineDash([]);
 if(!quiet&&g.held){for(let i=0;i<6;i++){const k=(t*3+i*.17)%1;c.globalAlpha=(1-k)*.35;orb(70-k*60,g.y+30+k*25,2+k*4,'#f7d092')}c.globalAlpha=1}
 for(const it of g.items){if(it.hit)continue;c.save();c.translate(it.x,it.y);c.rotate(it.good?Math.sin(anim*2+it.x)*.05:Math.sin(anim*3+it.x)*.12);A?.pickup(c,0,0,{kind:it.good?'need':'upsell',good:it.good,scale:1.05});c.restore();box(it.x-31,it.y+23,62,19,it.good?'#e0eed4':'#e6b58e',5);text(it.good?'需要 ✓':'湊單 !',it.x,it.y+36,10,'#234b3b','center')}
 if(g.dying){const d=quiet?1:g.dying.time;c.save();c.translate(100+Math.min(100,d*75),Math.min(280,g.dying.y+180*d*d));c.rotate(d*4.8);A?.jet(c,0,0,anim,{thrust:false,vy:150,scale:1.06});c.restore();for(let i=0;i<8;i++){const a=i*Math.PI/4;orb(100+Math.cos(a)*(10+d*45),g.dying.y+Math.sin(a)*(10+d*35),Math.max(1,4-d*3),'#ffd68c')}}else{if(g.powers?.shield>0||g.invincible>0){c.strokeStyle='#a1e6f1';c.lineWidth=3;c.beginPath();c.ellipse(100,g.y,37,48,0,0,Math.PI*2);c.stroke()}A?.jet(c,100,g.y,anim,{thrust:g.held,vy:g.vy,scale:1.06});}
 }
 for(const p of g.powerItems||[]){if(run){const d=Math.max(0,(p.y+35)/310);A?.powerup(c,300+(Math.round((p.x-100)/200)-1)*(25+175*d),100+215*d*d-18*d,p.kind,.2+.8*d)}else A?.powerup(c,p.x,p.y,p.kind,.9)}
 if(g.powerNoticeFor>0){box(181,35,238,30,'#fff0c9ee',8);text(g.powerNotice,300,56,14,'#31584a','center')}
 if(g.dying){c.fillStyle=`rgba(224,114,69,${Math.max(0,.3-g.dying.time*.45)})`;c.fillRect(0,0,600,340);text('撞擊！',300,85,27,'#fff2d7','center')}
 if(g._prevScore===undefined)g._prevScore=g.score;if(g._prevHits===undefined)g._prevHits=g.hits;
 if(g.score>g._prevScore){g.banner=run?'收據 +1':'需要 +1';g.bannerUntil=t+.9;g._prevScore=g.score;window.moneyJourneySound?.('select')}
 if(g.hits>g._prevHits){g.banner='碰撞！留意前面';g.bannerUntil=t+.9;g._prevHits=g.hits}
 if(g.bannerUntil>t&&!g.dying){box(207,18,186,32,'#fff1cdeb',8);text(g.banner,300,39,14,'#28503c','center')}
 if(g.flash>0){c.fillStyle='#f4ac6b22';c.fillRect(0,0,600,340)}c.fillStyle='#0d2a2a88';c.fillRect(0,335,600,5);c.fillStyle='#e8bf78';c.fillRect(0,335,600*Math.min(1,t/g.duration),5);
 c.restore();if(g.paused){c.fillStyle='#122d32dd';c.fillRect(0,0,600,340);text('暫停中',300,157,29,'#fff0cd','center');text('準備好就按「繼續」',300,191,14,'#c8dac4','center')}
}
