(() => {
  // The parent owns the record and can finish the upload even after the game closes.
  if (parent === window || window.arcadeTest || window.arcadeStory) return;
  let run = null;
  let resultLink;
  const notify = (action, details) => parent.postMessage(
    {type:'pfap-arcade-run', action, ...details}, location.origin === 'null' ? '*' : location.origin);
  window.arcadeRun = {
    complete(game) {
      notify('complete', {game});
    },
    trophies(...ids) {
      if(run)notify('trophies',{id:run.id,ids});
    },
    cleared(stage) {
      if(run)notify('cleared',{id:run.id,stage});
    },
    start(game, board, difficulty = 'standard') {
      resultLink?.remove();
      run = {game, board, difficulty, id:crypto.randomUUID(), at:performance.now()};
      notify('start', {game, board, difficulty, id:run.id});
    },
    finish(score, duration, distance = 0) {
      if (!run) return;
      const {id, at} = run;
      run = null;
      const elapsed = duration ?? (performance.now() - at) / 1000;
      notify('finish', {id, score:Math.max(0, Math.floor(score)), distance, duration:elapsed});
      resultLink?.remove();
      resultLink = document.createElement('button');
      resultLink.type = 'button';
      resultLink.textContent = '查看成績／排行榜';
      resultLink.style.cssText = 'position:fixed;inset:auto auto 12px 12px;z-index:2147483000;min-height:44px;padding:8px 14px;border-radius:8px;border:1px solid #fee1a8;background:#204d3c;color:#fff8e8;font:inherit;cursor:pointer';
      resultLink.addEventListener('click',()=>notify('scores',{id}));
      document.body.append(resultLink);
    },
  };
})();
