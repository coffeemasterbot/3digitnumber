function draw(){
 const g=game,c=g.ctx,t=g.elapsed,runner=g.v.kind==='runner',jet=g.v.kind==='jet',quiet=matchMedia('(prefers-reduced-motion: reduce)').matches;
 c.save();c.clearRect(0,0,600,340);const sky=c.createLinearGradient(0,0,0,340);sky.addColorStop(0,runner?'#e8c99e':jet?'#f2d9aa':'#d7e8de');sky.addColorStop(1,'#fff6df');c.fillStyle=sky;c.fillRect(0,0,600,340);
 // Quiet layered cityscape and clouds create depth without obscuring objects.
 c.fillStyle='#ffffff65';for(let i=0;i<5;i++){let x=(i*160-t*(quiet?0:8))%800-80;c.beginPath();c.ellipse(x,45+(i%3)*26,65,10,0,0,Math.PI*2);c.fill()}
 const pulse=g.flash>0&&!quiet?Math.sin(g.flash*30)*2:0;c.translate(pulse,0);
 function pill(text,x,y,w,color){c.shadowColor='#423c2722';c.shadowBlur=7;c.shadowOffsetY=3;rect(c,x-w/2,y-20,w,40,color);c.shadowBlur=0;c.shadowOffsetY=0;c.fillStyle='#253b32';c.font='bold 15px Microsoft JhengHei, sans-serif';c.textAlign='center';c.fillText(text,x,y+5)}
 function person(x,y,jump){c.save();c.translate(x,y-jump);c.strokeStyle='#27483b';c.lineWidth=7;c.lineCap='round';const stride=quiet?0:Math.sin(t*16)*7;c.beginPath();c.moveTo(-5,12);c.lineTo(-11+stride,26);c.moveTo(5,12);c.lineTo(11-stride,26);c.stroke();rect(c,-12,-18,24,32,'#366b55');c.fillStyle='#e9bc91';c.beginPath();c.arc(0,-30,10,0,Math.PI*2);c.fill();c.fillStyle='#343a2e';c.beginPath();c.arc(0,-33,10,Math.PI,Math.PI*2);c.fill();c.strokeStyle='#e9bc91';c.lineWidth=5;c.beginPath();c.moveTo(-12,-10);c.lineTo(-21,-5+stride/2);c.moveTo(12,-10);c.lineTo(21,-5-stride/2);c.stroke();c.restore()}
 if(runner){
  c.fillStyle='#b3bca76e';for(let i=0;i<8;i++){const h=25+(i*17)%60;c.fillRect(i*90-20,95-h,65,h)}
  c.fillStyle='#d6ccb4';c.fillRect(0,98,600,242);rect(c,15,98,570,245,'#56695c');
  c.strokeStyle='#f5e6bb88';c.lineWidth=3;c.setLineDash([20,20]);c.lineDashOffset=-t*115;for(const x of [200,400]){c.beginPath();c.moveTo(x,102);c.lineTo(x,340);c.stroke()}c.setLineDash([]);
  c.fillStyle='#c8d0b4';c.fillRect(20,98,6,242);c.fillRect(574,98,6,242);
  for(const it of g.items){if(it.hit)continue;if(it.good){pill(['飲品 $35','附加費 $25','車費 $40'][Math.floor(it.x/200)%3],it.x,it.y,136,'#e9f1d9');c.fillStyle='#aab99b';c.fillRect(it.x-48,it.y+11,96,2)}else{pill('順手買 +$20',it.x,it.y,143,'#f1bea0');c.fillStyle='#ad5638';c.fillRect(it.x-62,it.y+16,124,4)}}
  const j=g.jump?Math.sin((.65-g.jump)/.65*Math.PI)*48:0;c.fillStyle='#152f272e';c.beginPath();c.ellipse(100+g.lane*200,313,24-j*.14,7,0,0,Math.PI*2);c.fill();person(100+g.lane*200,279,j);
 }else if(jet){
  c.fillStyle='#d5b98055';c.beginPath();c.moveTo(0,290);for(let x=0;x<=600;x+=20)c.lineTo(x,285+Math.sin(x*.02)*16);c.lineTo(600,340);c.lineTo(0,340);c.fill();
  c.strokeStyle='#c8a16b55';c.setLineDash([4,9]);c.lineWidth=2;c.beginPath();for(let x=0;x<=600;x+=8){const y=170+Math.sin(x*.018+t)*35;x?c.lineTo(x,y):c.moveTo(x,y)}c.stroke();c.setLineDash([]);
  for(const it of g.items){if(it.hit)continue;pill(it.good?'清單：需要':'加購：湊單',it.x,it.y,120,it.good?'#d4e6c9':'#edb899');}
  c.save();c.translate(100,g.y);c.rotate(Math.max(-.18,Math.min(.18,g.vy*.002)));c.fillStyle='#668475';c.beginPath();c.ellipse(-6,0,28,19,0,0,Math.PI*2);c.fill();rect(c,10,-22,18,42,'#2b5142');rect(c,-18,-12,30,25,'#f7eed6');c.fillStyle='#374c3a';c.font='bold 11px Microsoft JhengHei';c.textAlign='center';c.fillText('清單',-3,5);if(g.held){c.fillStyle='#ee9b49';c.beginPath();c.moveTo(13,22);c.lineTo(21,45+(quiet?0:Math.sin(t*25)*5));c.lineTo(28,22);c.fill();c.fillStyle='#ffe9ac';c.fillRect(17,23,8,14)}c.restore();
 }else{
  for(let layer=0;layer<2;layer++){c.fillStyle=layer?'#9ebca164':'#bed4b260';c.beginPath();c.moveTo(0,340);for(let x=0;x<=600;x+=15)c.lineTo(x,280-layer*22+Math.sin(x*.013+layer)*24);c.lineTo(600,340);c.fill()}
  for(const [index,it] of g.items.entries()){const col=it.hit?'#b9baa3':'#567e68';rect(c,it.x-22,-15,44,it.y-75,col);rect(c,it.x-22,it.y+90,44,350-it.y-90,col);c.fillStyle='#344f40';c.font='bold 13px Microsoft JhengHei';c.textAlign='center';c.fillText(['限時','快啲','立即'][index%3],it.x,it.y-102);c.strokeStyle='#d2a763';c.lineWidth=2;c.setLineDash([4,6]);c.beginPath();c.arc(it.x,it.y,23,0,Math.PI*2);c.stroke();c.setLineDash([])}
  c.save();c.translate(100,g.y);c.rotate(Math.max(-.25,Math.min(.4,g.vy*.002)));c.fillStyle='#d9a44c';c.beginPath();c.ellipse(0,0,21,16,0,0,Math.PI*2);c.fill();c.fillStyle='#f6d486';c.beginPath();c.ellipse(-9,3+Math.sin(t*18)*2,11,6,-.4,0,Math.PI*2);c.fill();c.fillStyle='#243e32';c.beginPath();c.arc(9,-4,2.5,0,Math.PI*2);c.fill();c.fillStyle='#c77837';c.beginPath();c.moveTo(19,0);c.lineTo(29,5);c.lineTo(19,8);c.fill();c.restore();
 }
 if(g._prevScore===undefined)g._prevScore=g.score;if(g._prevHits===undefined)g._prevHits=g.hits;
 if(g.score>g._prevScore){g.banner='留意到一筆';g.bannerUntil=t+1.1;g._prevScore=g.score}if(g.hits>g._prevHits){g.banner='停一停，再嚟';g.bannerUntil=t+1.1;g._prevHits=g.hits}
 if(g.bannerUntil>t){pill(g.banner,300,47,160,'#fff8e8')}
 c.fillStyle='#fffdf4d9';c.fillRect(0,320,600,20);c.fillStyle='#45634d';c.fillRect(0,335,600*Math.min(1,t/g.duration),5);c.fillStyle='#4e6550';c.font='11px Microsoft JhengHei';c.textAlign='left';c.fillText('每個選擇，都可以停一停再諗。',14,334);
 c.restore();if(g.paused){c.fillStyle='#fff8edf2';c.fillRect(0,0,600,340);c.fillStyle='#274b3d';c.font='bold 28px Microsoft JhengHei';c.textAlign='center';c.fillText('抖一抖，個故事會等你。',300,160);c.font='15px Microsoft JhengHei';c.fillText('按「繼續」返到遊戲',300,195)}
}
