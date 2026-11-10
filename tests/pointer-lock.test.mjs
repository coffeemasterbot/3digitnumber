import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canRequestPointerLock, createPointerLockState } from '../source/fps/pointer-lock.mjs';

test('an already-owned canvas lock and missing intent are idempotent no-ops', () => {
  const state = createPointerLockState();
  const canvas = {};
  let requests = 0;
  const request = () => { requests++; };

  assert.equal(canRequestPointerLock({ canvas, owner: canvas, intent: null, eligible: true, pending: false }), false);
  assert.equal(canRequestPointerLock({ canvas, owner: null, intent: null, eligible: true, pending: false }), false);
  assert.equal(state.beginRequest(), null);
  if (canRequestPointerLock({ canvas, owner: canvas, intent: state.intent, eligible: true, pending: state.pending })) request();
  assert.equal(requests, 0);
  assert.equal(state.intent, null);
});

test('promise and legacy void APIs settle on canvas acquisition, and each retry gets a new generation', () => {
  const state = createPointerLockState();
  const canvas = {};

  assert.equal(state.setIntent('start'), true);
  const rejectedAttempt = state.beginRequest();
  assert.equal(state.pending, true);
  assert.equal(state.settle(rejectedAttempt, 'failure'), true);
  assert.equal(state.pending, false);
  assert.equal(state.failed, true);
  assert.equal(state.intent, 'start');

  const retryAttempt = state.beginRequest();
  assert.ok(retryAttempt > rejectedAttempt);
  assert.equal(state.settle(rejectedAttempt, 'failure'), false);
  assert.equal(state.pending, true);
  assert.equal(state.acquire(null, canvas), null);
  assert.equal(state.pending, true);
  assert.equal(state.acquire(canvas, canvas), 'start');
  assert.equal(state.pending, false);
  assert.equal(state.failed, false);
  assert.equal(state.intent, null);
  assert.equal(state.settle(retryAttempt, 'failure'), false);

  state.setIntent('resume');
  const legacyVoidAttempt = state.beginRequest();
  assert.equal(state.pending, true);
  assert.equal(state.acquire(canvas, canvas), 'resume');
  assert.equal(state.pending, false);
  assert.equal(state.settle(legacyVoidAttempt, 'failure'), false);
});

test('cancellation invalidates late promise completions and stale lock results', () => {
  const state = createPointerLockState();
  const canvas = {};
  state.setIntent('resume');
  const oldAttempt = state.beginRequest();

  state.cancel(); // settings, exit, retry, or an interrupted transition
  assert.equal(state.intent, null);
  assert.equal(state.pending, false);
  assert.equal(state.settle(oldAttempt, 'failure'), false);
  assert.equal(state.acquire(canvas, canvas), null, 'an unrequested late lock cannot consume a cancelled intent');
  assert.equal(state.acquire(null, canvas), null);

  state.setIntent('start');
  const currentAttempt = state.beginRequest();
  assert.ok(currentAttempt > oldAttempt);
  assert.equal(state.settle(oldAttempt, 'success'), false);
  assert.equal(state.pending, true);
  assert.equal(state.intent, 'start');
});

test('only explicit start or resume transitions may request a lock', () => {
  const state = createPointerLockState();
  assert.equal(state.setIntent('menu'), false);
  assert.equal(state.intent, null);
  assert.equal(state.setIntent('resume'), true);
  assert.equal(state.intent, 'resume');
});

test('repeated same-intent clicks do not supersede an in-flight request', () => {
  const state = createPointerLockState();
  state.setIntent('resume');
  const request = state.beginRequest();
  assert.equal(state.setIntent('resume'), true);
  assert.equal(state.pending, true);
  assert.equal(state.isCurrent(request), true);
  assert.equal(state.beginRequest(), null);
});
