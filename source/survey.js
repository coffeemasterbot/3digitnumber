(() => {
  'use strict';
  const opens = Date.parse('2026-11-20T00:00:00+08:00');
  const localKey = 'pfap-phase2-survey-v1';
  const id = value => document.getElementById(value);
  const banner = id('phase2-survey');
  const dialog = id('pfap-survey');
  const form = id('survey-form');
  const submit = id('survey-submit');
  const skip = id('survey-skip');
  const questions = id('survey-questions');
  const student = id('survey-student');
  const sid = id('survey-sid');
  const comparison = id('survey-comparison');
  const status = id('survey-status');
  const staticPage = document.body.hasAttribute('data-pfap-static');
  const pages = staticPage && location.origin === 'https://coffeemasterbot.github.io';
  const supported = !window.offlineMount && (!staticPage || pages) && /^https?:$/.test(location.protocol);
  const endpoint = (pages ? 'https://lost-found-money-journey.cottonpatch1.chatgpt.site' : '') + '/api/survey';
  const gameKeys = {coins: 'runner', shipping: 'jet', instalments: 'garden', pause: 'forest', defence: 'defence'};
  const available = () => supported && Date.now() >= opens;
  const automatic = () => available() && navigator.onLine !== false;
  const ratings = [1, 2, 3, 4, 5].map(value => [value, value]);
  const guides = {
    before: [
      ['attitude', '我清楚自己每月啲錢花喺邊，月底唔會慌', ratings],
      ['knowledge', '遇到湊免運／Min Pay，我識分辨真實代價', ratings],
      ['habit', '目前記帳習慣', [['none', '完全冇'], ['stopped', '寫幾日就停'], ['regular', '有持續記帳']]],
    ],
    after: [
      ['attitude', '體驗後，我有信心控制開支、唔做月光族', ratings],
      ['knowledge', '體驗後，我清楚點避開小額漏財、優惠陷阱同卡數', ratings],
      ['habit', '未來 14 日最想實行嘅微習慣', [['log', '每晚記低 1 筆支出'], ['wait', '買前停 10 秒'], ['cut', '減手搖飲或外賣'], ['reserve', '先儲起應急錢']]],
    ],
  };
  let state = {};
  try {
    const saved = JSON.parse(localStorage.getItem(localKey));
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
      state = saved;
      if (!state.terminalVersion) {
        delete state.completedActivity;
        delete state.afterOffered;
        delete state.pending?.after;
      }
    }
  } catch {}
  let current = null;
  let afterPending = false;
  function remember(fields) {
    Object.assign(state, fields);
    try { localStorage.setItem(localKey, JSON.stringify(state)); } catch {}
  }
  function updateBanner() {
    banner.hidden = !available();
  }
  updateBanner();
  window.addEventListener('pageshow', updateBanner);
  document.addEventListener('visibilitychange', updateBanner);

  function addQuestion([name, caption, options]) {
    const group = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = caption;
    group.append(legend);
    for (const [value, label] of options) {
      const option = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = name;
      input.value = value;
      input.required = true;
      if (input.value === String(state.pending?.[current.phase]?.[name])) input.checked = true;
      input.disabled = Boolean(state.pending?.[current.phase]);
      const pill = document.createElement('span');
      pill.textContent = label;
      option.append(input, pill);
      group.append(option);
    }
    questions.append(group);
  }
  function showComparison() {
    const values = id('survey-comparison-values');
    values.replaceChildren();
    if (state.before && state.after) {
      for (const [key, label] of [['attitude', '態度'], ['knowledge', '知識']]) {
        const title = document.createElement('dt');
        title.textContent = label;
        const ratings = document.createElement('dd');
        ratings.textContent = state.before[key] + ' → ' + state.after[key];
        values.append(title, ratings);
      }
    }
    comparison.hidden = !values.children.length;
  }
  function show(phase, game = '', resume = null) {
    if (!available() || dialog.open) return false;
    current = {phase, game, resume, saved: false};
    form.reset();
    student.hidden = sid.disabled = phase !== 'after';
    sid.required = phase === 'after';
    id('survey-title').textContent = phase === 'before' ? '理財前測' : phase === 'after' ? '理財後測' : '理財前後測';
    id('survey-intro').textContent = phase === 'complete'
      ? '多謝你參加理財前後測。'
      : '評分題：1 代表非常不同意，5 代表非常同意。';
    status.textContent = '';
    questions.replaceChildren();
    comparison.hidden = true;
    submit.hidden = phase === 'complete';
    id('survey-privacy').hidden = phase === 'complete';
    skip.textContent = resume ? '略過先玩' : '關閉';
    if (phase === 'complete') showComparison();
    else guides[phase].forEach(addQuestion);
    dialog.showModal();
    return true;
  }
  function close() {
    if (submit.disabled) return;
    const session = current;
    current = null;
    sid.value = '';
    if (session?.resume && !session.saved) remember({skipped: true});
    dialog.close();
    session?.resume?.();
  }
  function openPendingAfter() {
    if (!afterPending || !automatic() || document.fullscreenElement || dialog.open) return;
    if (show('after', state.completedActivity)) afterPending = false;
  }
  dialog.addEventListener('close', openPendingAfter);
  document.addEventListener('fullscreenchange', openPendingAfter);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  skip.addEventListener('click', close);
  id('phase2-link').addEventListener('click', () => {
    if (!available()) return updateBanner();
    window.trackEvent?.('phase2-survey-click');
    if (state.after) show('complete');
    else if (state.completedActivity !== undefined) show('after', state.completedActivity);
    else if (!state.before) show('before');
    else {
      if (show('complete')) {
        id('survey-title').textContent = '前測已收到';
        id('survey-intro').textContent = '完成整個故事或遊戲，再填寫後測。';
      }
    }
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!current || current.phase === 'complete' || current.saved || submit.disabled) return;
    const session = current;
    const fields = new FormData(form);
    submit.disabled = skip.disabled = true;
    status.textContent = '提交中…';
    try {
      const pair = state.pair || crypto.randomUUID();
      const payload = state.pending?.[session.phase] ?? {
        pair, phase: session.phase, game: session.game,
        attitude: Number(fields.get('attitude')), knowledge: Number(fields.get('knowledge')), habit: fields.get('habit'),
      };
      remember({pair, pending: {...state.pending, [session.phase]: payload}});
      for (const choice of questions.querySelectorAll('input')) choice.disabled = true;
      const response = await fetch(endpoint, {
        method: 'POST', headers: {'content-type': 'application/json'},
        credentials: 'omit', body: JSON.stringify(session.phase === 'after'
          ? {...payload, sid: String(fields.get('sid') ?? '').trim()} : payload), signal: AbortSignal.timeout(8000),
      });
      if (!response.ok || !(await response.json()).saved) throw new Error('Unconfirmed');
      const pending = {...state.pending};
      delete pending[session.phase];
      remember({[session.phase]: {attitude: payload.attitude, knowledge: payload.knowledge}, pending});
      session.saved = true;
      if(session.phase==='before')window.dispatchEvent(new Event('pfap-before-survey'));
      status.textContent = '多謝，已收到你嘅答案。';
      submit.hidden = true;
      student.hidden = sid.disabled = true;
      sid.value = '';
      skip.textContent = '關閉';
      questions.replaceChildren();
      if (session.phase === 'after') showComparison();
    } catch {
      status.textContent = '未能確認收到答案。你可以重試，或者關閉後繼續。';
    } finally {
      submit.disabled = skip.disabled = false;
      if (session.saved && session.resume) close();
    }
  });
  window.pfapSurvey = {
    beforeGame(game, resume) {
      return automatic() && !state.before && !state.skipped && state.completedActivity === undefined &&
        show('before', gameKeys[game] ?? 'trpg', resume);
    },
    finished(game) {
      if (!available() || state.after) return;
      if (state.completedActivity === undefined) remember({completedActivity: game, terminalVersion: 1});
      if (state.afterOffered || !automatic()) return;
      remember({afterOffered: true});
      afterPending = true;
      openPendingAfter();
    },
  };
  const attendee = id('trpg-event-survey');
  if (attendee) {
    const update = () => { attendee.hidden = !available(); };
    update();
    window.addEventListener('pageshow', update);
    document.addEventListener('visibilitychange', update);
    attendee.addEventListener('click', () => {
      if (!available()) return;
      if (state.after) show('complete');
      else {
        if (state.completedActivity === undefined) remember({completedActivity: 'trpg-live', terminalVersion: 1});
        show('after', state.completedActivity);
      }
    });
  }
})();
