const {chromium}=require('C:/Users/danie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');const fs=require('fs'),path=require('path');require('./preview.cjs');
const report={checks:[],errors:[]};let browser,p;
const check=(name,ok,extra)=>{report.checks.push({name,ok,...extra});if(!ok)throw Error(name+' failed '+JSON.stringify(extra||{}));console.log('PASS',name)};
const save=()=>fs.writeFileSync(path.join(__dirname,'qa-reworked-duo-results.json'),JSON.stringify(report,null,2));
const snap=()=>p.evaluate(()=>window.moneyJourneySnapshot());
async function start(key){await p.goto('http://127.0.0.1:8789/story/index.html?arcade='+key);await p.locator('#journey-difficulty').selectOption('relaxed');await p.getByRole('button',{name:key==='instalments'?'進入花園':'進入森林',exact:true}).click();await p.getByRole('button',{name:'準備好，開始',exact:true}).click();await p.clock.runFor(160)}
async function plant(kind,row,col){await p.locator(`[data-plant="${kind}"]`).click();const box=await p.locator('#journey-canvas').boundingBox();await p.mouse.click(box.x+box.width*(195+col*110)/960,box.y+box.height*(148+row*76)/560)}
async function select(type){await p.locator(type?'#duo-ice':'#duo-fire').click()}
async function move(type,target,limit=5000){await select(type);for(let t=0;t<limit;t+=50){const s=await snap();if(!s||s.phase!=='playing')return;const x=s.players[type].x+14,d=target-x;const predicted=d-s.players[type].vx/16;if(Math.abs(predicted)<5)break;const code=predicted<0?'ArrowLeft':'ArrowRight';await p.keyboard.down(code);await p.clock.runFor(50);await p.keyboard.up(code)}await p.clock.runFor(140)}
async function jumpTo(type,target,hold=0){await select(type);if(hold)await p.clock.runFor(hold);const x=(await snap()).players[type].x+14,code=target<x?'ArrowLeft':'ArrowRight';await p.keyboard.down(code);await p.keyboard.press('Space');for(let t=0;t<780;t+=40){await p.clock.runFor(40);const s=await snap();if(!s||s.phase!=='playing')break;const center=s.players[type].x+14;if(Math.abs(center-target)<10||(target>x?center>target:center<target))await p.keyboard.up(code)}await p.keyboard.up(code);await p.clock.runFor(150)}
async function gather1(){await move(0,180);await move(0,320);await jumpTo(0,430);await move(0,465);await jumpTo(0,620);await jumpTo(0,735);await p.keyboard.press('ArrowDown');await p.clock.runFor(650);await move(0,742);await p.clock.runFor(550);await move(0,700);await p.clock.runFor(200);await move(1,205);await jumpTo(1,365);await p.keyboard.press('Space');await p.clock.runFor(850);await move(1,463);await jumpTo(1,620);await move(1,640);await p.clock.runFor(200);await move(1,740);await p.clock.runFor(550);await jumpTo(1,853);}
async function exitPair(holder=0){if(holder===0){await move(1,853);await move(0,(await snap()).level===3?735:705);await jumpTo(0,815);await move(0,892);await move(1,934)}else{await move(0,858);await move(1,934);await move(0,892)}await p.clock.runFor(300)}
(async()=>{browser=await chromium.launch({headless:true,channel:'msedge',args:['--no-proxy-server']});p=await browser.newPage({viewport:{width:1280,height:1000}});p.setDefaultTimeout(7000);p.on('pageerror',e=>report.errors.push(e.message));await p.clock.install();
await p.goto('http://127.0.0.1:8789/');check('Home has both replacements',(await p.locator('.game-card h3').allTextContents()).includes('預算守護花園')&&(await p.locator('.game-card h3').allTextContents()).includes('冰火同行'));await p.locator('[data-play="story"]').first().click();await p.frameLocator('#game-frame').getByRole('button',{name:'打開佢留低嘅箱',exact:true}).click();const storyBefore=await p.evaluate(()=>localStorage.getItem('life-lost-found-guided-v5'));
await start('pause');await p.locator('#journey-canvas').screenshot({path:'dist/assets/preview-duo.png'});
for(let level=1;level<=3;level++){
for(const type of [0,1]){
if(level===1){if(type===0)await move(type,180);await move(type,210);await jumpTo(type,330);await move(type,400);await jumpTo(type,550);await move(type,590);await jumpTo(type,710)}
if(level===2){await move(type,125);await jumpTo(type,250);await move(type,315);await jumpTo(type,425);await move(type,495);await jumpTo(type,585);await move(type,660);await jumpTo(type,755)}
if(level===3){await move(type,200);await move(type,270);let landed=false;for(let n=0;n<15&&!landed;n++){const platform=(await snap()).platforms.find(x=>x.moving);if(platform.x<330){await jumpTo(type,platform.x+55);landed=(await snap()).players[type].y<420}else await p.clock.runFor(400)}check('Level3 moving bridge landing '+type,landed);const gem=(await snap()).gems.find(x=>x.type===type&&x.follow);if(gem&&!gem.got)await move(type,gem.x,2000);for(let n=0;n<80;n++){if((await snap()).platforms.find(x=>x.moving).x>330)break;await p.clock.runFor(100)}await move(type,(await snap()).platforms.find(x=>x.moving).x+130,2000);await jumpTo(type,560);await move(type,600);await jumpTo(type,710)}
}
let state=await snap();check('New forest level '+level+' all gems through player inputs',state.gems.every(x=>x.got));
for(const type of [0,1]){await select(type);for(let n=0;n<3&&(await snap()).players[type].y<450;n++){await p.keyboard.press('ArrowDown');await p.clock.runFor(700)}}
await move(0,735);check('New forest level '+level+' switch opens gate',(await snap()).gateOpen);await move(0,892);await move(1,934);await p.clock.runFor(300);state=await snap();check('New forest level '+level+' cooperative exit',state.phase==='between'&&state.cleared===level);await p.locator('#journey-next').click();}
check('Cooperative completion recorded',(await p.evaluate(()=>JSON.parse(localStorage.getItem('website-v1-arcade')).pause)).completed===true);check('Cooperative game preserves real story',await p.evaluate(()=>localStorage.getItem('life-lost-found-guided-v5'))===storyBefore);
check('No browser runtime errors',report.errors.length===0);save();await browser.close();console.log('ALL PASS');process.exit(0)
})().catch(async e=>{report.failure=String(e.stack||e);save();console.error(e);if(p){console.log(await snap().catch(()=>null));await p.screenshot({path:path.join(__dirname,'qa-game-failure.png'),fullPage:true}).catch(()=>{})}await browser?.close();process.exit(1)});







