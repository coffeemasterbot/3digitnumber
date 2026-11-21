import React from 'react';
import { COURSES, normalizeSeed, TOOL_OPTIONS, type Tool } from '@/utils/courses';
import SoundButton from './SoundButton';

interface Props {
  mode: string; vehicle: string; mission: number; seed: string; tools: Tool[]; completed: string[];
  setMode: (value: string) => void; setVehicle: (value: string) => void;
  setMission: (value: number) => void; setSeed: (value: string) => void; setTools: (value: Tool[]) => void;
  onStart: () => void; highScore: number; soundEnabled: boolean; onSoundToggle: () => void;
}
const vehicles = {mecha:'儲備機甲',drill:'界線鑽車',glider:'計劃滑翔翼',gravity:'重力裝置',blink:'瞬移裝置',dragon:'龍型載具'};

export default function StartScreen(p: Props) {
  const course = COURSES[p.mission] ?? COURSES[0];
  function canChoose(index: number) {
    return index === 0 || p.completed.includes(COURSES[index - 1].id) || p.completed.includes(COURSES[index].id);
  }
  function chooseTool(id: Tool) {
    if (p.tools.includes(id)) p.setTools(p.tools.filter(tool => tool !== id));
    else if (p.tools.length < 2) p.setTools([...p.tools, id]);
  }
  return <div className="jet-guide">
    <section>
      <h1>優惠氣流</h1>
      <p className="jet-guide-lead">按住空白鍵、W、↑ 或觸控上升，放開下降。見到邊緣預警，提早換高度。</p>
      <div className="jet-launch-fields">
        <label>飛行模式 <select value={p.mode} onChange={e => p.setMode(e.target.value)}>
          <option value="endless">無盡飛行</option><option value="mission">八關任務</option>
          <option value="seed">固定種子挑戰</option><option value="practice">90 秒練習</option>
          <option value="trial">載具試駕</option>
        </select></label>
        {p.mode === 'mission' && <label>航線 <select value={p.mission} onChange={e => p.setMission(Number(e.target.value))}>
          {COURSES.map(({id,title},i) => <option key={id} value={i} disabled={!canChoose(i)}>{i+1} · {title}{p.completed.includes(id)?'（已完成）':''}</option>)}
        </select></label>}
        {p.mode === 'seed' && <label>航線代碼 <input value={p.seed} onChange={e => p.setSeed(e.target.value)} maxLength={24} autoComplete="off" /></label>}
        {p.mode === 'trial' && <label>試駕載具 <select value={p.vehicle} onChange={e => p.setVehicle(e.target.value)}>
          {Object.entries(vehicles).map(([id,label]) => <option key={id} value={id}>{label}</option>)}
        </select></label>}
      </div>
      {p.mode === 'mission' && <p className="jet-mission-copy">{course.hint} · {p.completed.length} / 8 已完成</p>}
      {p.mode === 'seed' && <p className="jet-mission-copy">代碼 {normalizeSeed(p.seed)} · 同一代碼可以重玩相同航線。</p>}
      <details className="jet-garage">
        <summary>裝備車庫 · {p.tools.length * 3} / 6 準備點</summary>
        <div>{TOOL_OPTIONS.map(({id,label,wins}) => {
          const selected=p.tools.includes(id),locked=p.completed.length<wins;
          return <label key={id}><input type="checkbox" checked={selected} disabled={locked||(!selected&&p.tools.length>=2)} onChange={()=>chooseTool(id)}/>
            {' '+label+' · 3 點'+(locked?'（完成 '+wins+' 關解鎖）':'')}</label>;
        })}</div>
      </details>
      <div className="jet-guide-actions">
        <button onClick={p.onStart}>開始飛行</button><SoundButton enabled={p.soundEnabled} onToggle={p.onSoundToggle}/>
      </div>
      <p className="jet-guide-note">P / Esc 暫停 · {p.mode==='practice'?'每局成績可見於共同排行榜':'成績保存於本機'}{p.highScore>0?' · 本機最佳 '+p.highScore:''}</p>
    </section>
  </div>;
}
