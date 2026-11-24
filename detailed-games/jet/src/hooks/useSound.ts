import { useCallback, useEffect } from 'react';

type SoundName = 'coin' | 'powerup' | 'hit' | 'death' | 'start' | 'bgm' | 'warning_beep' | 'missile_warning' | 'missile_launch' | 'vehicle_chord';
export const audio = () => (window as any).PFAPAudio;

const cues = {
  coin: 'coin_pickup', powerup: 'buy_equip', hit: 'hit_thud', death: 'shield_break',
  start: 'jump', warning_beep: 'warning_beep', missile_warning: 'missile_warning',
  missile_launch: 'missile_launch', vehicle_chord: 'vehicle_chord',
};

export function useSound() {
  const stopBGM = useCallback(() => (window as any).gameAudio?.pause(), []);
  const play = useCallback((name: SoundName) => {
    if (name === 'bgm') {
      (window as any).gameAudio?.track('jet');
      (window as any).gameAudio?.resume();
    } else audio()?.play(cues[name]);
  }, []);
  useEffect(() => () => { stopBGM(); audio()?.stopEffects(); }, [stopBGM]);
  return { play, stopBGM };
}
