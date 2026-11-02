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
// Board controls remain keyboard-usable through the original two-cell swap handler.
const freeBridge=`<script>
(()=>{const q=new URLSearchParams(location.search),key=q.get('arcade');const standalone=['coins','shipping','instalments','pause'].includes(key);const embedded=parent!==window;const close=window.closeModal;function back(){if(embedded)parent.postMessage({type:'website-v1-back'},location.origin);else location.href='../#arcade'}
if(standalone){enterDemo();document.body.classList.add('standalone');const finish=window.finishArcade;window.finishArcade=function(){finish();try{const r=JSON.parse(localStorage.getItem('website-v1-arcade')||'{}');if(s.arcade?.[key])r[key]={...s.arcade[key],demo:false};localStorage.setItem('website-v1-arcade',JSON.stringify(r))}catch{}};window.closeModal=function(){close();back()};window.openMini(key)}
else if(q.has('plan')&&s.budgetDone){s.started=true;s.stage=4;s.complete=false;render(true)}
document.getElementById('dialog').addEventListener('cancel',()=>{if(standalone)back()});
if(!embedded){const a=document.createElement('a');a.className='site-return';a.href='../';a.textContent='← 戶口三位數 website v1';document.body.prepend(a)}
})();</script>`;
const extraCSS=`<style>.arcade-tile{user-select:none;-webkit-user-select:none;touch-action:none;border-radius:50%;aspect-ratio:1;display:grid;place-items:center;padding:0!important;box-shadow:inset 0 -5px #362a2415;font-size:.75rem}.arcade-board{padding:12px;background:#584633;border-radius:16px;gap:7px}.standalone .top,.standalone .hud,.standalone .layout,.standalone>.footer{display:none!important}.standalone{min-height:100svh;background:#ece7d9}.standalone dialog{max-width:720px}.standalone dialog::backdrop{background:#ece7d9}.site-return{display:block;background:#173f36;color:#fff8ed;padding:12px 20px;font-size:13px;text-decoration:none}.arcade-controls .btn{touch-action:none}</style>`;
let h=fs.readFileSync(path.join(root,'source','story-base.html'),'utf8');const old=fs.readFileSync(path.join(root,'source','arcade-base.js'),'utf8');if(!h.includes(old))throw Error('Source integration mismatch');h=h.replace(old,arcade).replace(/<title>.*?<\/title>/,'<title>人生失物認領處｜website v1</title>').replace('</head>',extraCSS+'</head>').replace('</body>','<script>'+fs.readFileSync(path.join(root,'game-upgrades.js'),'utf8')+'</script>'+freeBridge+'</body>');fs.writeFileSync(path.join(dist,'story','index.html'),h);
const src='C:/Users/danie/.codex/generated_images/01a0f271-87e3-7230-95ed-787bd4f5f2f5/exec-e8be58d9-6867-4530-a920-037ff759b132.png';fs.copyFileSync(src,path.join(dist,'assets','talk-poster.png'));
const css=path.join(dist,'style.css');fs.writeFileSync(css,fs.readFileSync(css,'utf8').replace("@import url('');\n",''));console.log('Built website v1');
