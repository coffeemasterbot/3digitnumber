import React from 'react';
import type { UIState } from '@/types/game';
import SoundButton from './SoundButton';

interface Props {
  score: number; highScore: number; distance: number; coins: number;
  isNewHighScore: boolean; soundEnabled: boolean; practice: boolean; course?: UIState['course'];
  onRestart: () => void; onMenu: () => void; onSoundToggle: () => void;
}
export default function GameOverScreen(p: Props) {
  const results = [
    ['本次分數', p.score.toLocaleString()],
    ['飛行距離', Math.floor(p.distance)+' m'],
    ['收集金幣', p.coins.toLocaleString()],
    ['本機最佳', p.highScore.toLocaleString()],
  ];
  return <div className="jet-review"><section>
    <header><p>{p.course?.title??'本次航程結束'}</p><SoundButton enabled={p.soundEnabled} onToggle={p.onSoundToggle}/></header>
    <h2>{p.course?.passed?'任務完成':p.course?'任務未完成':'落地，再準備下一程。'}</h2>
    <p className="jet-review-copy">{p.course?.passed?'保留緩衝，順利到達終點。':p.course?.target?'到達終點前，至少收集 '+p.course.target+' 枚金幣。':'留一點緩衝，下一次飛得更從容。'}</p>
    {p.isNewHighScore&&<div className="jet-review-best">個人最佳紀錄更新</div>}
    <div className="jet-review-stats">{results.map(([label,value])=><div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
    <div className="jet-review-actions"><button onClick={p.onRestart}>立即重玩</button><button onClick={p.onMenu}>返回準備畫面</button></div>
    <p className="jet-review-note">{p.practice?'共同排行榜會記錄每一局。選擇另一條路線，再試一次。':'本機保存此模式嘅最佳紀錄。'}</p>
  </section></div>;
}
