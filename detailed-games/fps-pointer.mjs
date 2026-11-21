export function bindMatchPointer({on, canvas, active, look, fire, clearInput}) {
  let drag = null;
  let touch = null;
  function clear() {
    drag = touch = null;
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
    if (!active() || event.pointerType === 'mouse' || touch) return;
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    touch = {id:event.pointerId, x:event.clientX, y:event.clientY};
  });
  on(window, 'pointermove', event => {
    if (!active() || touch?.id !== event.pointerId) return;
    look((event.clientX-touch.x)*2.2, (event.clientY-touch.y)*2.2);
    touch.x = event.clientX;
    touch.y = event.clientY;
  });
  for (const type of ['pointerup','pointercancel','lostpointercapture']) {
    on(canvas, type, event => { if (touch?.id === event.pointerId) touch = null; });
  }
  return {clear};
}
