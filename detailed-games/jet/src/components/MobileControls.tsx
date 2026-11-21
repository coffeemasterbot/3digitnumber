'use client';

import { useRef, type PointerEvent } from 'react';

export default function MobileControls({ onThrustChange }: { onThrustChange: (value: boolean) => void }) {
  const activePointer = useRef<number | null>(null);
  const end = (event: PointerEvent<HTMLDivElement>) => {
    if (activePointer.current !== event.pointerId) return;
    activePointer.current = null;
    onThrustChange(false);
  };

  return <div
    aria-hidden="true"
    className="absolute inset-0 z-5 select-none touch-none"
    onPointerDown={event => {
      if (event.button !== 0 || activePointer.current !== null) return;
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      activePointer.current = event.pointerId;
      onThrustChange(true);
    }}
    onPointerUp={end}
    onPointerCancel={end}
    onLostPointerCapture={end}
  />;
}
