const fs=require('fs'),path=require('path');const root=__dirname,stage=path.dirname(root),dist=path.join(root,'dist');fs.mkdirSync(path.join(dist,'story'),{recursive:true});fs.mkdirSync(path.join(dist,'assets'),{recursive:true});
let arcade=fs.readFileSync(path.join(root,'source','arcade-base.js'),'utf8');
arcade=arcade.replace("genre:'相鄰三消'","genre:'拖珠三消'").replace('揀兩格相鄰記錄交換；同類三格連成一線就整理好。','按住一格沿途拖動，同類三格連成一線就整理好。').replace('點一格，再點隔籬一格。完成8次有效交換後回到帳單。','每次按住可拖5秒，放開消除；8次後回到帳單。鍵盤亦可點兩格交換。').replace('← → 或下方按鈕換線。','← → 換線，↑／空白鍵跳起。手機用下方按鈕。');
arcade=arcade.replace('← 向左</button>','← 向左</button><button class="btn secondary" onclick="window.websiteJump()">↑ 跳起</button>');
arcade=arcade.replace("'ArrowRight','Space','KeyP'","'ArrowRight','ArrowUp','Space','KeyP'");
arcade=arcade.replace("if(e.code==='Space'){game.held=true;","if((e.code==='ArrowUp'||e.code==='Space')&&game.v.kind==='runner')window.websiteJump();if(e.code==='Space'){game.held=true;");
arcade=arcade.replace("function step(dt){const g=game,kind=g.v.kind;","function step(dt){const g=game,kind=g.v.kind;g.jump=Math.max(0,(g.jump||0)-dt);");
arcade=arcade.replace('else{g.hits++;g.flash=.25}}if(it.y>360','else if(!g.jump){g.hits++;g.flash=.25}}if(it.y>360');
arcade=arcade.replace("251,50,48,'#366b55'","251-(g.jump?40:0),50,48,'#366b55'").replace('g.lane*200,282)','g.lane*200,282-(g.jump?40:0))');
arcade=arcade.replace("deMatch();drawBoard();update();return","deMatch();drawBoard();update();if(window.websiteBindBoard)window.websiteBindBoard();return");
arcade=arcade.replace("8次有效交換","8次拖珠／交換").replace('按自己節奏玩，無倒數。','每次拖珠有5秒，兩次之間可以慢慢諗。');
arcade=arcade.replace("window.addEventListener('pagehide',stop);",`window.websiteJump=()=>{if(game&&!game.paused&&game.v.kind==='runner'&&!game.jump)game.jump=.65};
window.websiteResolveDrag=(values,index,moved)=>{if(!game||game.v.kind!=='match'||game.paused)return;const vocab=['飯錢','交通','月供','儲備','休閒'];game.board=values.map(v=>vocab.indexOf(v));game.selected=-1;if(moved){const found=matches(game.board);game.moves++;game.matched+=found.length;found.forEach(i=>game.board[i]=Math.floor(Math.random()*5));deMatch();$('arcade-guide').textContent=found.length?'整理咗 '+found.length+' 格。月供仍然要照付。':'今次未連成三格。放慢一步，睇清下一條路線。';}drawBoard();update();if(!hasMove(game.board))window.arcadeShuffle();if(game.moves>=8)window.finishArcade()};
window.addEventListener('pagehide',stop);`);

arcade=arcade.replace('elapsed:0,last:0,','duration:new URLSearchParams(location.search).has("arcade")?60:28,elapsed:0,last:0,').replace('28-g.elapsed','g.duration-g.elapsed').replace('g.elapsed>=28','g.elapsed>=g.duration');
const startDraw=arcade.indexOf('function draw(){'),endDraw=arcade.indexOf('const labels=',startDraw);if(startDraw<0||endDraw<0)throw Error('Draw function missing');arcade=arcade.slice(0,startDraw)+fs.readFileSync(path.join(root,'game-draw.js'),'utf8')+'\n'+arcade.slice(endDraw);
arcade=arcade.replace('Math.max(28,Math.min(312,g.y','Math.max(43,Math.min(280,g.y');
arcade=arcade.replace('Math.min(312,g.y','Math.min(290,g.y').replace('g.y>322','g.y>302').replace('Math.min(322,g.y','Math.min(302,g.y');
arcade=arcade.replace('function step(dt){const g=game,kind=g.v.kind;','function step(dt){const g=game,kind=g.v.kind;dt*=window.websiteTempo||1;');
arcade=arcade.replace('function stop(){cancelAnimationFrame(frame);','function stop(){window.moneyJourneyMusic?.(null);cancelAnimationFrame(frame);');
arcade=arcade.replace('step(dt);if(g.elapsed>=g.duration)', 'step(dt);if(window.arcadeCheckChallenge?.())return;if(g.elapsed>=g.duration)');
arcade=arcade.replace('dt*=window.websiteTempo||1;', 'dt*=(window.websiteTempo||1)*(g.challenge?g.challenge.pace*(1+.28*g.elapsed/g.duration):1);');
arcade=arcade.replace('if(g.elapsed>=g.duration)', 'if(g.elapsed>=g.duration&&!g.dying)');
arcade=arcade.replace('g.elapsed+=dt;','g.elapsed+=dt*(window.websiteTempo||1);');
arcade=arcade.replace('g.jump=Math.max(0,(g.jump||0)-dt);','g.jump=Math.max(0,(g.jump||0)-dt);if(kind===\'runner\')g.displayLane=(g.displayLane??g.lane)+(g.lane-(g.displayLane??g.lane))*(1-Math.exp(-dt*18));');
arcade=arcade.replaceAll('g.lane*200','(g.displayLane??g.lane)*200');
arcade=arcade.replace('else if(!g.jump){',"else if(it.obstacle==='train'||(it.obstacle==='overhead'?!g.slide:!g.jump)){");
arcade=arcade.replace('Math.hypot(it.x-100,it.y-g.y)<43',"(it.obstacle==='laser'?Math.abs(it.x-100)<23&&Math.abs(it.y-g.y)<63:Math.hypot(it.x-100,it.y-g.y)<43)");
arcade=arcade.replace('game.board=values.map(v=>vocab.indexOf(v));','game.board=values.map(v=>vocab.indexOf(v));');

arcade = arcade.slice(0,arcade.lastIndexOf('})();')) + '\n' + fs.readFileSync(path.join(root,'game-mechanics.js'),'utf8') + '\n' + fs.readFileSync(path.join(root,'arcade-challenge.js'),'utf8')+'\n'+fs.readFileSync(path.join(root,'arcade-powerups.js'),'utf8')+'\n'+fs.readFileSync(path.join(root,'arcade-skills.js'),'utf8') + '\n})();';
// Board controls remain keyboard-usable through the original two-cell swap handler.
const freeBridge=`<script>
(()=>{const q=new URLSearchParams(location.search),key=q.get('arcade');const standalone=['coins','shipping','instalments','pause'].includes(key);const embedded=parent!==window;const close=window.closeModal;function back(){if(embedded)parent.postMessage({type:'website-v1-back'},location.origin);else location.href='../#arcade'}
if(standalone){enterDemo();document.body.classList.add('standalone');const finish=window.finishArcade;window.finishArcade=function(){finish();try{const r=JSON.parse(localStorage.getItem('website-v1-arcade')||'{}');if(s.arcade?.[key])r[key]={...s.arcade[key],demo:false};localStorage.setItem('website-v1-arcade',JSON.stringify(r))}catch{}};window.closeModal=function(){close();back()};window.openMini(key)}
else if(q.has('plan')&&s.budgetDone){s.started=true;s.stage=4;s.complete=false;render(true)}
document.getElementById('dialog').addEventListener('cancel',()=>{if(standalone)back()});
if(!embedded){const a=document.createElement('a');a.className='site-return';a.href='../';a.textContent='← 戶口三位數 website v1';document.body.prepend(a)}
})();</script>`;
const extraCSS=`<style>.arcade-tile{user-select:none;-webkit-user-select:none;touch-action:none;border-radius:50%;aspect-ratio:1;display:grid;place-items:center;padding:0!important;box-shadow:inset 0 -5px #362a2415;font-size:.75rem}.arcade-board{padding:12px;background:#584633;border-radius:16px;gap:7px}.standalone .top,.standalone .hud,.standalone .layout,.standalone>.footer{display:none!important}.standalone{min-height:100svh;background:#ece7d9}.standalone dialog{max-width:720px}.standalone dialog::backdrop{background:#ece7d9}.site-return{display:block;background:#173f36;color:#fff8ed;padding:12px 20px;font-size:13px;text-decoration:none}.arcade-controls .btn{touch-action:none}</style>`;
let h=fs.readFileSync(path.join(root,'source','story-base.html'),'utf8');const old=fs.readFileSync(path.join(root,'source','arcade-base.js'),'utf8');if(!h.includes(old))throw Error('Source integration mismatch');h=h.replace(old,()=>arcade).replace(/<title>.*?<\/title>/,'<title>人生失物認領處｜website v1</title>').replace('</head>',extraCSS+'</head>').replace('</body>',()=>'<script>'+fs.readFileSync(path.join(root,'game-upgrades.js'),'utf8')+'</script>'+freeBridge+'</body>');h=h.replace('</head>','<style>'+fs.readFileSync(path.join(root,'game-polish.css'),'utf8')+'</style></head>');fs.writeFileSync(path.join(dist,'story','index.html'),h);
// New games wrap only instalments and pause; the two remaining games keep their existing flow.
h=h.replace(freeBridge,()=>'<script>'+fs.readFileSync(path.join(root,'source','forest-rules.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'garden-duo-art.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'forest-art.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'source/landscape-gate.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'garden-duo.js'),'utf8')+'</script>'+freeBridge);
h=h.replace('</head>','<style>'+fs.readFileSync(path.join(root,'garden-duo.css'),'utf8')+'</style></head>').replaceAll('月供拼圖','預算守護花園').replaceAll('呼吸之間','冰火同行');
h=h.replace('const nowScene=','let nowScene=');
h=h.replace('const oldFinishMini=finishMini;',()=>fs.readFileSync(path.join(root,'arcade-score.js'),'utf8')+'\nconst oldFinishMini=finishMini;');
h=h.replace('const oldFinishMini=finishMini;','window.moneyJourneySound=effect;window.moneyJourneyAudioMuted=()=>prefs.muted;\n  const oldFinishMini=finishMini;');
h=h.replace('</head>','<style>'+fs.readFileSync(path.join(root,'game-premium.css'),'utf8')+'</style></head>');
h=h.replace('</body>',()=>'<script>'+fs.readFileSync(path.join(root,'game-sprites.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'arcade-experience.js'),'utf8')+'</script></body>');
fs.writeFileSync(path.join(dist,'story','index.html'),h);
// Keep repair logic outside the preserved story script; load after arcade wrappers.
h=h.replace('</body>','<script src="journey-repairs.js"></script></body>').replace('</head>','<link rel="stylesheet" href="journey-repairs.css"><link rel="icon" href="../assets/site-icon.svg" type="image/svg+xml"></head>');
fs.writeFileSync(path.join(dist,'story','index.html'),h);
for(const file of ['journey-core.js','journey-repairs.js','journey-repairs.css'])fs.copyFileSync(path.join(root,'source',file),path.join(dist,'story',file));
fs.mkdirSync(path.join(dist,'games','budget-defence'),{recursive:true});
for(const file of ['model.js','game.js','style.css'])fs.copyFileSync(path.join(root,'source','budget-defence',file),path.join(dist,'games','budget-defence',file));
fs.copyFileSync(path.join(root,'source','budget-defence','index.html'),path.join(dist,'games','budget-defence','range.html'));
fs.copyFileSync(path.join(root,'source','fps','index.html'),path.join(dist,'games','budget-defence','index.html'));
fs.copyFileSync(path.join(root,'source','fps','fps.css'),path.join(dist,'games','budget-defence','fps.css'));
fs.copyFileSync(path.join(root,'source','fps','preview.svg'),path.join(dist,'assets','preview-defence.svg'));
fs.copyFileSync(path.join(root,'source','site-icon.svg'),path.join(dist,'assets','site-icon.svg'));
fs.copyFileSync(path.join(root,'garden-duo.css'),path.join(dist,'garden-duo.css'));
if(!fs.existsSync(path.join(dist,'assets','talk-poster.png')))throw Error('Missing talk poster asset');
const css=path.join(dist,'style.css');fs.writeFileSync(css,fs.readFileSync(css,'utf8').replace("@import url('');\n",''));console.log('Built website v1');

fs.copyFileSync(path.join(root,'source/presentation.js'),path.join(dist,'presentation.js'));require('./landing-build.cjs');fs.copyFileSync(path.join(root,'landing.css'),path.join(dist,'style.css'));

if(!process.argv.includes('--preserve-arcade'))require('node:child_process').execFileSync(process.execPath,[path.join(root,'build-detailed.cjs')],{stdio:'inherit'});

require('./build-offline.cjs');
require('./build-server.cjs');
