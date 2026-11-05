import{travelPoints as scoreTravel}from'../../../../source/runner-rules.mjs';
import { create } from 'zustand';
import type { GameState } from '../utils/types';
import { INITIAL_SPEED } from '../utils/constants';

interface GameStore {
  // Game state
  gameState: GameState;
  score: number;
  distance: number;
  travelPoints:number;
  coins: number;
  speed: number;
  
  // Actions
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  endGame: () => void;
  resetGame: () => void;
  
  // Updates
  addScore: (amount: number) => void;
  addDistance: (amount: number,multiplier?:number) => void;
  addCoin: () => void;
  setSpeed: (speed: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  gameState: 'menu',
  score: 0,
  distance: 0,travelPoints:0,
  coins: 0,
  speed: INITIAL_SPEED,

  startGame: () => set({
    gameState: 'playing',
    score: 0,
    distance: 0,travelPoints:0,
    coins: 0,
    speed: INITIAL_SPEED,
  }),

  pauseGame: () => set({ gameState: 'paused' }),
  
  resumeGame: () => set({ gameState: 'playing' }),
  
  endGame: () => set({ gameState: 'gameOver' }),
  
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
}));
