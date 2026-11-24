export function stickVector(dx, dy, radius) {
  const distance = Math.hypot(dx, dy);
  if (!distance) return {x: 0, y: 0, right: 0, forward: 0};
  const strength = Math.max(0, (Math.min(1, distance / radius) - .12) / .88);
  const travel = Math.min(distance, radius);
  return {x: dx / distance * travel, y: dy / distance * travel,
    right: dx / distance * strength, forward: -dy / distance * strength};
}

export function bindMatchPointer({on, canvas, active, look, fire, clearInput, walk, stickRadius}) {
  let drag = null;
  let lookTouch = null;
  let moveTouch = null;
  function clear() {
    const fingers = [lookTouch, moveTouch];
    drag = lookTouch = moveTouch = null;
    for (const finger of fingers) {
      if (finger && canvas.hasPointerCapture?.(finger.id)) canvas.releasePointerCapture(finger.id);
    }
    walk?.(0, 0);
    clearInput();
  }

  on(canvas, 'contextmenu', event => event.preventDefault());
  on(canvas, 'mousedown', event => {
    if (!active() || (event.button !== 0 && event.button !== 2)) return;
    event.preventDefault();
    canvas.focus({preventScroll:true});
    if (event.button === 0) fire(true);
    else drag = {x:event.clientX, y:event.clientY};
  });
  on(window, 'mousemove', event => {
    if (!active() || !drag) return;
    if (!(event.buttons & 2)) { drag = null; return; }
    look(event.clientX-drag.x, event.clientY-drag.y);
    drag.x = event.clientX;
    drag.y = event.clientY;
  });
  on(window, 'mouseup', event => {
    if (event.button === 0) fire(false);
    if (event.button === 2) drag = null;
  });
  on(canvas, 'pointerdown', event => {
    if (!active() || event.pointerType === 'mouse') return;
    const rect = canvas.getBoundingClientRect();
    const moving = !!walk && event.clientX < rect.left + rect.width / 2;
    if (moving ? moveTouch : lookTouch) return;
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    const finger = {id:event.pointerId, x:event.clientX, y:event.clientY};
    if (moving) {
      moveTouch = finger;
      walk(0, 0, {x: 0, y: 0}, finger);
    } else lookTouch = finger;
  });
  on(window, 'pointermove', event => {
    if (!active()) return;
    if (moveTouch?.id === event.pointerId) {
      const knob = stickVector(event.clientX-moveTouch.x, event.clientY-moveTouch.y, stickRadius());
      walk(knob.right, knob.forward, knob, moveTouch);
    } else if (lookTouch?.id === event.pointerId) {
      look((event.clientX-lookTouch.x)*2.2, (event.clientY-lookTouch.y)*2.2);
      lookTouch.x = event.clientX;
      lookTouch.y = event.clientY;
    }
  });
  for (const type of ['pointerup','pointercancel','lostpointercapture']) {
    on(canvas, type, event => {
      if (moveTouch?.id === event.pointerId) {
        moveTouch = null;
        walk(0, 0);
      }
      if (lookTouch?.id === event.pointerId) lookTouch = null;
    });
  }
  return {clear};
}
