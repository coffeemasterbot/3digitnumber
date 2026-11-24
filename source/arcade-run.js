(() => {
  // The parent owns the record and can finish the upload even after the game closes.
  if (parent === window || window.arcadeTest || window.arcadeStory) return;
  let run = null;
  const notify = (action, details) => parent.postMessage(
    {type:'pfap-arcade-run', action, ...details}, location.origin === 'null' ? '*' : location.origin);
  window.arcadeRun = {
    complete(game) {
      notify('complete', {game});
    },
    start(game, board, difficulty = 'standard') {
      run = {game, board, difficulty, id:crypto.randomUUID(), at:performance.now()};
      notify('start', {game, board, difficulty, id:run.id});
    },
    finish(score, duration, distance = 0) {
      if (!run) return;
      const {id, at} = run;
      run = null;
      const elapsed = duration ?? (performance.now() - at) / 1000;
      notify('finish', {id, score:Math.max(0, Math.floor(score)), distance, duration:elapsed});
    },
  };
})();
