const fs=require('fs'),path=require('path');const root=__dirname;let build=fs.readFileSync(path.join(root,'build.cjs'),'utf8');
const marker="// Board controls remain keyboard-usable";
const inject=`
arcade=arcade.replace('elapsed:0,last:0,','duration:new URLSearchParams(location.search).has(\'arcade\')?60:28,elapsed:0,last:0,').replace('28-g.elapsed','g.duration-g.elapsed').replace('g.elapsed>=28','g.elapsed>=g.duration');
const startDraw=arcade.indexOf('function draw(){'),endDraw=arcade.indexOf('const labels=',startDraw);if(startDraw<0||endDraw<0)throw Error('Draw function missing');arcade=arcade.slice(0,startDraw)+fs.readFileSync(path.join(root,'game-draw.js'),'utf8')+'\\n'+arcade.slice(endDraw);
arcade=arcade.replace('function step(dt){const g=game,kind=g.v.kind;','function step(dt){const g=game,kind=g.v.kind;dt*=window.websiteTempo||1;');
arcade=arcade.replace('game.board=values.map(v=>vocab.indexOf(v));','game.board=values.map(v=>vocab.indexOf(v));');
`;
if(!build.includes('startDraw=arcade.indexOf'))build=build.replace(marker,inject+'\n'+marker);
build=build.replace(/const src='C:[^\n]+\n/,'if(!fs.existsSync(path.join(dist,\'assets\',\'talk-poster.png\')))throw Error(\'Missing talk poster asset\');\n');
fs.writeFileSync(path.join(root,'build.cjs'),build);
let html=fs.readFileSync(path.join(root,'dist','index.html'),'utf8');html=html.replaceAll('識使錢，更識留錢','理財有道 創建未來').replace('18:00–19:30<br>Academic Building 1104','18:00–19:00<br>Academic Building 1104');html=html.replace('查看講座海報 ↗','查看嘉賓介紹 ↗').replace('<span>報名連結稍後公布。</span>','<a href="assets/talk-details.png" target="_blank" rel="noopener">內容與報名詳情 ↗</a><span>報名連結稍後公布。</span>');fs.writeFileSync(path.join(root,'dist','index.html'),html);
fs.copyFileSync('C:/Users/danie/.codex/generated_images/01a0f271-87e3-7230-95ed-787bd4f5f2f5/exec-5a6e3c26-9795-472d-a420-408b5856472a.png',path.join(root,'dist','assets','talk-poster.png'));fs.copyFileSync('C:/Users/danie/.codex/generated_images/01a0f271-87e3-7230-95ed-787bd4f5f2f5/exec-fb93921b-28c8-4aee-af45-5ac2fc0b2ca6.png',path.join(root,'dist','assets','talk-details.png'));
