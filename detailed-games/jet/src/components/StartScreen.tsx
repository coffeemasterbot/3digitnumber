import React from 'react';
import SoundButton from './SoundButton';

interface Props {
  onStart: () => void; highScore: number;
}

export default function StartScreen(p: Props) {
  return <div className="jet-guide">
    <section>
      <h1>優惠氣流</h1>
      <p className="jet-guide-lead">按住空白鍵、W、↑ 或觸控上升，放開下降。見到邊緣預警，提早換高度。</p>
      <div className="jet-guide-actions">
        <button onClick={p.onStart}>開始飛行</button><SoundButton/>
      </div>
      <p className="jet-guide-note">P / Esc 暫停 · 無盡飛行{p.highScore>0?' · 本機最佳 '+p.highScore:''}</p>
    </section>
  </div>;
}
