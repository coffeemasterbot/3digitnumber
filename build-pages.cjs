const fs=require('node:fs');
const path=require('node:path');

const root=__dirname;
const client=path.join(root,'dist','client');
const output=path.join(root,'dist-pages');
if(!fs.existsSync(path.join(client,'index.html')))throw new Error('Run node build.cjs before building GitHub Pages output.');
if(path.dirname(output)!==root)throw new Error('Unsafe Pages output path.');
fs.rmSync(output,{recursive:true,force:true});
fs.cpSync(client,output,{recursive:true});

const replaceRequired=(value,from,to,label)=>{
  if(!value.includes(from))throw new Error('Expected '+label+' text was not found.');
  return value.replaceAll(from,to);
};
const jsString=value=>value.replace(/[^\x00-\x7F]/g,char=>'\\u'+char.charCodeAt(0).toString(16).padStart(4,'0').toUpperCase());

let home=fs.readFileSync(path.join(output,'index.html'),'utf8');
home=replaceRequired(home,
  '公開遊戲連結，不需要登入。排行榜會顯示玩家自選暱稱及每局成績。',
  '呢個 GitHub Pages 版本毋須登入；遊戲最佳分數只保存在本機，不設共用排行榜。',
  'Pages score notice');
home=replaceRequired(home,
  'value="https://lost-found-money-journey.cottonpatch1.chatgpt.site/#play"',
  'value=""',
  'share link');
home=home.replace('</body>', '<script>const share=document.getElementById("share-url");if(share)share.value=location.href.split("#")[0]+"#play";</script></body>');
fs.writeFileSync(path.join(output,'index.html'),home);

const slideFile=path.join(output,'presentation.js');
let slides=fs.readFileSync(slideFile,'utf8');
slides=replaceRequired(slides,'跑酷與飛行設有所有玩家共享的線上排行榜。','跑酷與飛行的最佳分數只保存在本機。','Chinese slide leaderboard copy');
slides=replaceRequired(slides,'Running and flying have a shared online leaderboard.','Runner and flight best scores stay in this browser.','English slide leaderboard copy');
fs.writeFileSync(slideFile,slides);

const appFile=path.join(output,'app.js');
let app=fs.readFileSync(appFile,'utf8');
app=replaceRequired(app,
  '跑酷及飛行的線上排行榜會儲存及公開每局暱稱、分數、距離、難度及遊玩時間，並使用匿名識別 cookie 防止重複提交；不會上傳阿俊的故事存檔。',
  'GitHub Pages 版本只在本機保存跑酷及飛行最佳分數，不會提交共用排行榜；不會上傳阿俊的故事存檔。',
  'Pages privacy copy');
fs.writeFileSync(appFile,app);

for(const game of ['runner','jet']){
  const htmlFile=path.join(output,'games',game,'index.html');
  let html=fs.readFileSync(htmlFile,'utf8');
  html=replaceRequired(html,'<link rel="stylesheet" href="../leaderboard.css"><script src="../leaderboard.js"></script>','','disabled shared leaderboard');
  fs.writeFileSync(htmlFile,html);
  const jsFile=path.join(output,'games',game,'app.js');
  let bundle=fs.readFileSync(jsFile,'utf8');
  if(game==='jet'){
    bundle=replaceRequired(bundle,jsString('每局成績可見於共同排行榜'),jsString('成績只保存在本機'),'Jet start-screen score copy');
    bundle=replaceRequired(bundle,jsString('共同排行榜會記錄每一局。選擇另一條路線，再試一次。'),jsString('本機最佳分數會保存在此瀏覽器。選擇另一條路線，再試一次。'),'Jet results score copy');
  }
  if(/fetch\(["'`]\/api\/(?:leaderboard|runs\/)/.test(bundle))throw new Error('Unexpected leaderboard API request in '+game+' bundle.');
  fs.writeFileSync(jsFile,bundle);
}
for(const file of ['leaderboard.js','leaderboard.css']){
  const target=path.join(output,'games',file);
  if(fs.existsSync(target))fs.unlinkSync(target);
}

if(fs.readdirSync(output,{recursive:true}).some(name=>String(name).startsWith('server/')))throw new Error('Pages output must be static-only.');
console.log('Built static GitHub Pages edition in dist-pages/; online leaderboard scripts and API calls are disabled.');
