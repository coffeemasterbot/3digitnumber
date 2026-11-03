// Resolved matches collapse by column and may create a new chain, as in drag-match games.
const storyGuideBeforeArcade=window.guideHelp;
window.guideHelp=function(){if(!game)return storyGuideBeforeArcade();if(!game.paused)window.arcadePause();let guide=$('arcade-local-help');if(!guide){guide=document.createElement('aside');guide.id='arcade-local-help';guide.className='inline-guide';$('arcade-guide').after(guide)}guide.textContent=game.v.goal+' '+game.v.control+' 準備好就按「繼續」，亦可以隨時完成並回顧。';};
window.websiteResolveDrag=function(values,index,moved){
 if(!game||game.v.kind!=='match'||game.paused)return;const names=['飯錢','交通','月供','儲備','休閒'];game.board=values.map(v=>names.indexOf(v));if(game.board.some(v=>v<0))return;game.selected=-1;let chains=0,total=0;
 if(moved){game.moves++;let found=matches(game.board);while(found.length&&chains<12){chains++;total+=found.length;const removed=new Set(found);for(let col=0;col<6;col++){const kept=[];for(let row=4;row>=0;row--){const i=row*6+col;if(!removed.has(i))kept.push(game.board[i])}for(let row=4;row>=0;row--)game.board[row*6+col]=kept[4-row]??Math.floor(Math.random()*5)}found=matches(game.board)}game.matched+=total;deMatch();$('arcade-guide').textContent=total?`${chains} 連鎖 · 整理咗 ${total} 格。分類完成，下一步計清月供。`:'今次未連成三格。下一次先望清路線，再開始拖。'}
 drawBoard();update();if(total){$('arcade-board').classList.add('arcade-combo');setTimeout(()=>$('arcade-board')?.classList.remove('arcade-combo'),450)}if(!hasMove(game.board))window.arcadeShuffle();if(game.moves>=8)window.finishArcade();
};
