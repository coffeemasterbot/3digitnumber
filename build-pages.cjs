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

let home=fs.readFileSync(path.join(output,'index.html'),'utf8');
home=replaceRequired(home,
  '打開網址就可以直接遊玩，毋須登入或下載。',
  '呢個 GitHub Pages 版本毋須登入；遊戲最佳分數只保存在本機，不設共用排行榜。',
  'Pages score notice');

fs.writeFileSync(path.join(output,'index.html'),home.replace('<body>','<body data-pfap-static>'));

fs.writeFileSync(path.join(output,'metrics.html'),'<!doctype html><html lang="zh-HK"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>戶口三位數 · 成效</title><p><a href="https://lost-found-money-journey.cottonpatch1.chatgpt.site/metrics.html">開啟私人成效面板 / Open team metrics</a></p></html>');
fs.rmSync(path.join(output,'metrics.js'),{force:true});
const slideFile=path.join(output,'presentation.js');
let slides=fs.readFileSync(slideFile,'utf8');
slides=replaceRequired(slides,'跑酷與飛行設有所有玩家共享的線上排行榜。','跑酷與飛行的最佳分數只保存在本機。','Chinese slide leaderboard copy');
slides=replaceRequired(slides,'Running and flying have a shared online leaderboard.','Runner and flight best scores stay in this browser.','English slide leaderboard copy');
fs.writeFileSync(slideFile,slides);

const appFile=path.join(output,'app.js');
let app=fs.readFileSync(appFile,'utf8');
app=replaceRequired(app,
  '開啟公開成績後，排行榜會顯示暱稱、遊戲、模式、成績及遊玩時間，並使用匿名 cookie 識別此瀏覽器。你可以刪除由此瀏覽器發布嘅成績；阿俊嘅故事存檔留喺本機。',
  '此版本只保留本機成績。',
  'Pages privacy copy');

fs.writeFileSync(appFile,app);

for(const game of ['runner','jet']){
  const htmlFile=path.join(output,'games',game,'index.html');
  let html=fs.readFileSync(htmlFile,'utf8');
  html=replaceRequired(html,'<link rel="stylesheet" href="../leaderboard.css"><script src="../leaderboard.js"></script>','','disabled shared leaderboard');
  fs.writeFileSync(htmlFile,html);
  const jsFile=path.join(output,'games',game,'app.js');
  let bundle=fs.readFileSync(jsFile,'utf8');
  if(/fetch\(["'`]\/api\/(?:leaderboard|runs\/)/.test(bundle))throw new Error('Unexpected leaderboard API request in '+game+' bundle.');
  fs.writeFileSync(jsFile,bundle);
}
for(const file of ['leaderboard.js','leaderboard.css']){
  const target=path.join(output,'games',file);
  if(fs.existsSync(target))fs.unlinkSync(target);
}

if(fs.readdirSync(output,{recursive:true}).some(name=>String(name).startsWith('server/')))throw new Error('Pages output must be static-only.');
console.log('Built static GitHub Pages edition in dist-pages/; online leaderboard scripts and API calls are disabled.');
