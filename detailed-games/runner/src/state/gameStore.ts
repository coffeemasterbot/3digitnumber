import{travelPoints as scoreTravel}from'../../../../source/runner-rules.mjs';
import { create } from 'zustand';
import type { GameState } from '../utils/types';
import { INITIAL_SPEED } from '../utils/constants';
import { runnerLaunch } from '../../../../source/runner-campaign.mjs';

export type RunnerMode = 'practice' | 'mission' | 'endless' | 'seeded';
export type RunnerLaunch = {mode:RunnerMode; mission:number; seed:string};

interface GameStore {
  // Game state
  gameState: GameState;
  score: number;
  distance: number;
  travelPoints:number;
  coins: number;
  speed: number;
  runNumber: number;
  launch: RunnerLaunch;
  completed: boolean;
  boardCharges: number;
  
  // Actions
  startGame: (launch?: RunnerLaunch) => void;
  pauseGame: () => void;
  resumeGame: () => void;
  endGame: (completed?: boolean) => void;
  resetGame: () => void;
  
  // Updates
  addScore: (amount: number) => void;
  addDistance: (amount: number,multiplier?:number) => void;
  addCoin: () => void;
  setSpeed: (speed: number) => void;
  syncProgress: (progress: Pick<GameStore, 'score' | 'distance' | 'travelPoints' | 'coins' | 'speed'>) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  gameState: 'menu',
  score: 0,
  distance: 0,travelPoints:0,
  coins: 0,
  speed: INITIAL_SPEED,
  runNumber: 0,
  launch: runnerLaunch() as RunnerLaunch,
  completed: false,
  boardCharges: 2,

  startGame: (launch) => set((state) => ({
    gameState: 'playing',
    runNumber: state.runNumber + 1,
    launch: launch ?? state.launch,
    completed: false,
    boardCharges: 2,
    score: 0,
    distance: 0,travelPoints:0,
    coins: 0,
    speed: INITIAL_SPEED,
  })),

  pauseGame: () => set({ gameState: 'paused' }),
  
  resumeGame: () => set({ gameState: 'playing' }),
  
  endGame: (completed = false) => set({ gameState: 'gameOver', completed }),
  
  resetGame: () => set({
    gameState: 'menu',
    score: 0,
    distance: 0,travelPoints:0,
    coins: 0,
    speed: INITIAL_SPEED,
  }),

  addScore: (amount) => set((state) => ({ 
    score: state.score + amount 
  })),
  
  addDistance: (amount,multiplier=1) => set((state) => ({ 
    distance: state.distance + amount,
    travelPoints:state.travelPoints+scoreTravel(amount,multiplier),score: state.coins*10 + Math.floor(state.travelPoints+scoreTravel(amount,multiplier)),
  })),
  
  addCoin: () => set((state) => ({ 
    coins: state.coins + 1,
    score: Math.floor(state.travelPoints)+(state.coins+1)*10,
  })),
  
  setSpeed: (speed) => set({ speed }),
  syncProgress: (progress) => set(progress),
}));
