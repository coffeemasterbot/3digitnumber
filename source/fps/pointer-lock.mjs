export function canRequestPointerLock({canvas, owner, intent, eligible, pending}) {
  return Boolean(canvas && owner !== canvas && intent && eligible && !pending);
}

export function createPointerLockState() {
  let generation = 0;
  let intent = null;
  let pending = false;
  let failed = false;

  return {
    get generation() { return generation; },
    get intent() { return intent; },
    get pending() { return pending; },
    get failed() { return failed; },
    setIntent(next) {
      if (next !== 'start' && next !== 'resume') return false;
      if (intent === next) return true;
      generation++;
      intent = next;
      pending = false;
      failed = false;
      return true;
    },
    beginRequest() {
      if (!intent || pending) return null;
      pending = true;
      failed = false;
      return ++generation;
    },
    settle(requestGeneration, outcome = 'success') {
      if (!pending || requestGeneration !== generation) return false;
      pending = false;
      failed = outcome === 'failure';
      return true;
    },
    acquire(owner, canvas) {
      if (!canvas || owner !== canvas) return null;
      const acquiredIntent = intent;
      generation++;
      intent = null;
      pending = false;
      failed = false;
      return acquiredIntent;
    },
    cancel() {
      generation++;
      intent = null;
      pending = false;
      failed = false;
    },
    isCurrent(requestGeneration) {
      return pending && requestGeneration === generation;
    }
  };
}
