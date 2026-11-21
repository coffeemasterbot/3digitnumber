'use client';

import SoundButton from './SoundButton';
import VehicleIcon from './VehicleIcon';
import type { UIState, PowerUpType } from '@/types/game';

interface Props {
  score: number;
  highScore: number;
  distance: number;
  coins: number;
  lives: number;
  maxLives: number;
  activePowerUp: PowerUpType;
  powerUpTimeLeft: number; // 0-1
  soundEnabled: boolean;
  onSoundToggle: () => void;
  onPause: () => void;
  course?: UIState['course'];
}

const POWERUP_CONFIG: Record<PowerUpType, { icon: string; color: string; label: string }> = {
  shield: { icon: '🛡', color: '#97e6fa', label: '護盾 · 可擋一次' },
  magnet: { icon: '🧲', color: '#f4c7f0', label: '磁鐵 · 吸近金幣' },
  boost:  { icon: '⚡', color: '#a9f2c0', label: '疾衝 · 短暫免傷' },
  mecha:{icon:'🤖',color:'#f3b948',label:'儲備機甲 · 自動擋擊'},
  glider:{icon:'🛩',color:'#efd6aa',label:'計劃滑翔翼 · 點按拍翼'},
  drill:{icon:'⚙',color:'#de8057',label:'界線鑽頭 · 著地點按跳躍'},
  gravity:{icon:"↕",color:"#abe6e3",label:"重力裝置 · 點按翻轉"},
  blink:{icon:"◇",color:"#f4c7f0",label:"瞬移裝置 · 點按轉移"},
  dragon:{icon:"翼",color:"#ef9165",label:"龍型載具 · 按住下降"},
  none:   { icon: '',   color: 'transparent', label: ''    },
};

function Heart({ filled }: { filled: boolean }) {
  return (
    <span className={`text-base transition-all ${filled ? 'opacity-100' : 'opacity-20'}`}>
      ❤️
    </span>
  );
}

export default function HUD({
  score, highScore, distance, coins, lives, maxLives,
  activePowerUp, powerUpTimeLeft, soundEnabled, onSoundToggle, onPause, course,
}: Props) {
  const pwCfg = POWERUP_CONFIG[activePowerUp];

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Top bar */}
      <div className="flex items-start justify-between px-3 pt-2 gap-2">
        {/* Score + distance */}
        <div className="flex flex-col gap-0.5 min-w-[110px]">
          <div
            className="font-black font-mono text-2xl text-amber-100 leading-none tabular-nums"
            aria-label={`飛行距離 ${distance} 米`}
          >
            {distance.toLocaleString()} <span className="text-sm">m</span>
          </div>
          <div className="font-mono text-xs text-amber-100 leading-none mt-1">分數 {score.toLocaleString()}</div>
        </div>

        {/* Best score (centre) */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="font-mono text-xs text-amber-100 leading-none">{course?.title??'本機最高分'}</div>
          <div className="font-mono font-bold text-base text-yellow-400 leading-none tabular-nums"
            style={{ textShadow: '0 0 8px rgba(255,215,0,0.5)' }}>
            {course?course.remaining+' 秒'+(course.target?' · 金幣 '+Math.min(coins,course.target)+' / '+course.target:''):highScore.toLocaleString()}
          </div>
        </div>

        {/* Right: coins + buttons */}
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <span className="font-mono text-xs text-yellow-500 font-bold">{coins}</span>
            <span className="text-sm">🪙</span>
            {/* Sound */}
            <SoundButton enabled={soundEnabled} onToggle={onSoundToggle}/>
            {/* Pause */}
            <button
              type="button"
              aria-label="暫停"
              title="暫停（P）"
              onClick={onPause}
              className="pointer-events-auto w-11 h-11 rounded-lg border border-amber-200 bg-black/70 text-sm flex items-center justify-center font-mono font-bold text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200"
            >
              II
            </button>
          </div>

          {/* Lives */}
          <div className="flex gap-0.5">
            {Array.from({ length: maxLives }).map((_, i) => (
              <Heart key={i} filled={i < lives} />
            ))}
          </div>
        </div>
      </div>

      {/* Active power-up bar (bottom-left) */}
      {activePowerUp !== 'none' && (
        <div
          className="absolute bottom-12 left-3 flex items-center gap-2 rounded-lg bg-black/70 px-2 py-1.5"
        >
          {['mecha','glider','drill'].includes(activePowerUp)?<VehicleIcon type={activePowerUp}/>:<span className="text-xl">{pwCfg.icon}</span>}
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-xs font-bold uppercase leading-none" style={{ color: pwCfg.color }}>
              {pwCfg.label}
            </span>
            {!['mecha','glider','drill','gravity','blink','dragon'].includes(activePowerUp) && (
            <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ backgroundColor: pwCfg.color, width: `${powerUpTimeLeft * 100}%`, boxShadow: `0 0 6px ${pwCfg.color}` }}
              />
            </div>)}
          </div>
        </div>
      )}
    </div>
  );
}
