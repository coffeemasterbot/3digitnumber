function draw(){
 const g=game,c=g.ctx,t=g.elapsed,run=g.v.kind==='runner',quiet=matchMedia('(prefers-reduced-motion: reduce)').matches,A=window.MoneyArt,anim=quiet?0:t;
 const box=(x,y,w,h,color,r=8)=>{c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill()},text=(s,x,y,size=12,color='#f7eac8',align='left')=>{c.font=`700 ${size}px Microsoft JhengHei,sans-serif`;c.fillStyle=color;c.textAlign=align;c.fillText(s,x,y)},orb=(x,y,r,color)=>{c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill()};
 c.save();c.clearRect(0,0,600,340);const bg=c.createLinearGradient(0,0,0,340);bg.addColorStop(0,run?'#263e4b':'#173c4b');bg.addColorStop(1,run?'#597166':'#457477');c.fillStyle=bg;c.fillRect(0,0,600,340);
 if(run){
 orb(476,44,28,'#eac486');for(let layer=0;layer<2;layer++){c.fillStyle=layer?'#26493f':'#36555b';for(let i=0;i<10;i++){const x=(i*86-anim*(layer?17:7)+1000)%860-100,h=34+(i*37)%69;c.fillRect(x,111-h,65,h);if(layer){c.fillStyle='#d0bc7760';for(let k=0;k<3;k++)c.fillRect(x+12+k*14,99-h,5,8);c.fillStyle='#26493f'}}}
 c.fillStyle='#d2bf96';c.fillRect(0,108,600,10);box(17,119,566,223,'#233e3c',10);c.fillStyle='#f0d9a9';c.fillRect(23,119,5,221);c.fillRect(572,119,5,221);
 c.strokeStyle='#c9d6af55';c.lineWidth=2;c.setLineDash([18,16]);c.lineDashOffset=-anim*125;for(const x of [200,400]){c.beginPath();c.moveTo(x,118);c.lineTo(x,340);c.stroke()}c.setLineDash([]);
 for(const it of g.items){if(it.hit)continue;A?.pickup(c,it.x,it.y,{kind:it.good?'receipt':'upsell',good:it.good,scale:1.1});box(it.x-51,it.y+25,102,20,it.good?'#e2edd0':'#ebbea0',5);text(it.good?['飲品 $35','附加費 $25','車費 $40'][Math.floor(it.x/200)%3]:'順手買 +$20',it.x,it.y+39,10,'#28483d','center')}
 const x=100+(g.displayLane??g.lane)*200,j=g.jump?Math.sin((.65-g.jump)/.65*Math.PI)*52:0;orb(x,312,17,'#102e2c55');A?.runner(c,x,278,anim,{jump:j,scale:1.12});
 }else{
 for(let i=0;i<7;i++){const x=(i*125-anim*24+1000)%875-125;box(x,26,80,240,'#6c92913b',10);box(x+7,34,66,223,'#0f35464f',6);c.strokeStyle='#82b8b32b';c.lineWidth=2;c.beginPath();c.moveTo(x+17,63);c.lineTo(x+60,63);c.moveTo(x+17,235);c.lineTo(x+60,235);c.stroke();orb(x+70,46,3,'#edc88d99');orb(x+10,247,3,'#edc88d99')}
 box(0,0,600,16,'#19363a',0);box(0,310,600,30,'#173a3a',0);c.fillStyle='#b79b65';c.fillRect(0,310,600,4);c.strokeStyle='#8cab8f45';c.lineWidth=2;c.setLineDash([15,25]);c.lineDashOffset=-anim*125;c.beginPath();c.moveTo(0,329);c.lineTo(600,329);c.stroke();c.setLineDash([]);
 if(!quiet&&g.held){for(let i=0;i<6;i++){const k=(t*3+i*.17)%1;c.globalAlpha=(1-k)*.35;orb(70-k*60,g.y+30+k*25,2+k*4,'#f7d092')}c.globalAlpha=1}
 for(const it of g.items){if(it.hit)continue;c.save();c.translate(it.x,it.y);c.rotate(it.good?Math.sin(anim*2+it.x)*.05:Math.sin(anim*3+it.x)*.12);A?.pickup(c,0,0,{kind:it.good?'need':'upsell',good:it.good,scale:1.05});c.restore();box(it.x-31,it.y+23,62,19,it.good?'#e0eed4':'#e6b58e',5);text(it.good?'需要 ✓':'湊單 !',it.x,it.y+36,10,'#234b3b','center')}
 A?.jet(c,100,g.y,anim,{thrust:g.held,vy:g.vy,scale:1.06});
 }
 if(g._prevScore===undefined)g._prevScore=g.score;if(g._prevHits===undefined)g._prevHits=g.hits;
 if(g.score>g._prevScore){g.banner=run?'收據 +1':'需要 +1';g.bannerUntil=t+.9;g._prevScore=g.score;window.moneyJourneySound?.('select')}
 if(g.hits>g._prevHits){g.banner='碰撞！留意前面';g.bannerUntil=t+.9;g._prevHits=g.hits}
 if(g.bannerUntil>t){box(207,18,186,32,'#fff1cdeb',8);text(g.banner,300,39,14,'#28503c','center')}
 if(g.flash>0){c.fillStyle='#f4ac6b22';c.fillRect(0,0,600,340)}c.fillStyle='#0d2a2a88';c.fillRect(0,335,600,5);c.fillStyle='#e8bf78';c.fillRect(0,335,600*Math.min(1,t/g.duration),5);
 c.restore();if(g.paused){c.fillStyle='#122d32dd';c.fillRect(0,0,600,340);text('暫停中',300,157,29,'#fff0cd','center');text('準備好就按「繼續」',300,191,14,'#c8dac4','center')}
}
