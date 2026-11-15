import React, { useEffect, useRef } from 'react';

export function ReviveCard({ available, onRevive, onFinish }: {
  available: number;
  onRevive: () => void;
  onFinish: () => void;
}) {
  const end = useRef<HTMLButtonElement>(null);
  const balance = Math.max(0, Math.floor(available));
  useEffect(() => { end.current?.focus(); }, []);
  return <div className="jet-revive" role="dialog" aria-modal="true" aria-labelledby="revive-title">
    <section>
      <h2 id="revive-title">再飛一次？</h2>
      <p>本局可用金幣 <strong>{balance}</strong></p>
      <p>復活可使用一次，恢復一條生命。</p>
      <button className="jet-revive-primary" disabled={balance < 100} onClick={onRevive}>花100金幣復活</button>
      {balance < 100 && <p role="status">還差 {100 - balance} 金幣</p>}
      <button ref={end} onClick={onFinish}>結束本局</button>
    </section>
  </div>;
}
