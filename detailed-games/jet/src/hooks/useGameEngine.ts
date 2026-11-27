// ─────────────────────────────────────────────
//  Main game engine hook
// ─────────────────────────────────────────────

'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import {
  Player, Missile, Coin, PowerUpItem, Particle,
  GameState, PowerUpType, UIState, Difficulty,
} from '@/types/game';
import {
  CANVAS_WIDTH, CANVAS_HEIGHT, GRAVITY, THRUST, MAX_FALL_SPEED, MAX_RISE_SPEED,
  PLAYER_X, PLAYER_WIDTH, PLAYER_HEIGHT, GROUND_Y, CEILING_Y,
  BASE_SPEED, MAX_SPEED, SPEED_RAMP,
  MISSILE_SPAWN_BASE, COIN_SPAWN_BASE, POWERUP_SPAWN_INTERVAL,
  COIN_SCORE, DISTANCE_SCORE_RATE,
  SHIELD_DURATION, MAGNET_DURATION, BOOST_DURATION, MAGNET_RADIUS,
  MAX_LIVES, INVINCIBLE_FRAMES, POWERUP_SIZE,
} from '@/utils/constants';
import { rectIntersects } from '@/utils/collision';
import { advanceCoins } from '@/utils/coin-motion';
import { spawnMissile, spawnCoinPattern, spawnPowerUp } from '@/utils/spawner';
import { COURSES, completedCourses, courseCoinLine, courseHazardHits, courseMotion, courseObstacle, coursePassed, normalizeSeed, seededCourse, type Course, type Tool } from '@/utils/courses';
import {
  drawBackground, drawParticles, drawPlayer, drawVehicleExit,
  drawMissile, drawCoin, drawPowerUp, drawCoinPop,
} from '@/utils/renderer';
import {getTeleportPreview,nextTeleportHeight,TELEPORT_PREVIEW_TICKS} from '@/utils/teleport';
import { useSound, audio } from './useSound';

const thrustKeys = ['Space', 'ArrowUp', 'KeyW'];
function updateParticles(particles: Particle[], steps = 1) {
  let live = 0;
  for (const particle of particles) {
    particle.x += particle.vx * steps;
    particle.y += particle.vy * steps;
    particle.life -= steps;
    if (particle.life > 0) particles[live++] = particle;
  }
  particles.length = live;
}

const vehicles: PowerUpType[]=['mecha','glider','drill','gravity','blink','dragon'];
export function useGameEngine(difficulty: Difficulty,mode:string,vehicle:string,mission:number,seed:string,tools:readonly Tool[]) {
  const canvasRef  = useRef<HTMLCanvasElement | null>(null);
  const rafRef     = useRef<number>(0);
  const frameRef   = useRef(0);
  const trophy = useRef({hits:0,vehicles:0,dodged:0,bestDodge:0,clean800:false,passed:new WeakSet<object>()});
  const countdown = useRef(0);
  const warned = useRef(new WeakSet<Missile>());

  const lastDraw = useRef<GameState | null>(null);
  const frameCallback = useRef<FrameRequestCallback | null>(null);
  const keyboardThrust = useRef(new Set<string>());
  const pointerThrust = useRef(false);
  const finishedAt = useRef(-Infinity);

  // ── Game objects ─────────────────────────────
  const playerRef   = useRef<Player>(createPlayer());
  const missilesRef = useRef<Missile[]>([]);
  const coinsRef    = useRef<Coin[]>([]);
  const powerUpsRef = useRef<PowerUpItem[]>([]);

  // ── Game state (ref = perf, state = UI sync) ─
  const gameStateRef  = useRef<GameState>('start');
  const scoreRef      = useRef(0);
  const distanceRef   = useRef(0);
  const coinsCountRef = useRef(0);
  const livesRef      = useRef(MAX_LIVES);
  const speedRef      = useRef(BASE_SPEED[difficulty]);
  const scrollRef     = useRef(0);
  const tappedRef=useRef(false);
  const thrustingRef  = useRef(false);

  // ── Spawn timers ─────────────────────────────
  const missileTimerRef = useRef(MISSILE_SPAWN_BASE);
  const hazardCount = useRef(0);
  const coinTimerRef    = useRef(20);
  const motif = useRef(0);
  const teleport = useRef<{y:number,due:number}|null>(null);
  const powerUpTimerRef = useRef(90);
  const spent=useRef(0);
  const vehicleCycle=useRef(0);const blastRef=useRef(0);
  const route=useRef<Course|null>(null), passed=useRef(false), encounter=useRef(0), deposit=useRef(0);
  const equipped=useRef<Set<Tool>>(new Set());
  const bestKey=mode==='practice'?'jj_highscore':mode==='mission'?'jet-best-mission-'+(COURSES[mission]?.id??COURSES[0].id):mode==='seed'?'jet-best-seed-'+normalizeSeed(seed):'jet-best-'+mode;

  // ── High score (localStorage) ─────────────────
  const highScoreRef = useRef<number>(0);

  // ── React UI state ───────────────────────────
  const [uiState, setUIState] = useState<UIState>({
    gameState: 'start',
    score: 0,
    highScore: 0,
    distance: 0,
    coins: 0,
    activePowerUp: 'none',
    powerUpTimeLeft: 0,
    lives: MAX_LIVES,
    difficulty,

  });

  const { play, stopBGM } = useSound();

  // ── Sync high score from localStorage ────────
  useEffect(() => {
    let stored = 0;
    try {
      const parsed = Number(localStorage.getItem(bestKey));
      if (Number.isSafeInteger(parsed) && parsed >= 0) stored = parsed;
    } catch {}
    highScoreRef.current = stored;
    setUIState(prev => ({ ...prev, highScore: stored }));
  }, [bestKey]);

  // ── Player factory ────────────────────────────
  function createPlayer(): Player {
    return {
      x: PLAYER_X,
      y: CANVAS_HEIGHT / 2 - PLAYER_HEIGHT / 2,
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      velocity: 0,
      isThrusting: false,
      frame: 0,
      frameTimer: 0,
      powerUp: 'none',
      powerUpTimer: 0,
      invincible: false,
      invincibleTimer: 0,
      particles: [],
    };
  }

  // ── Reset everything for a new run ────────────
  const resetGame = useCallback(() => {
    playerRef.current   = createPlayer();
    missilesRef.current  = [];
    coinsRef.current     = [];
    powerUpsRef.current  = [];
    scoreRef.current     = 0;
    distanceRef.current  = 0;
    coinsCountRef.current = 0;
    livesRef.current     = MAX_LIVES;
    speedRef.current     = BASE_SPEED[difficulty] ?? 5;
    scrollRef.current    = 0;
    frameRef.current     = 0;
    trophy.current={hits:0,vehicles:0,dodged:0,bestDodge:0,clean800:false,passed:new WeakSet<object>()};
    missileTimerRef.current = MISSILE_SPAWN_BASE;
    hazardCount.current = 0;
    coinTimerRef.current    = 20;
    motif.current=0;
    teleport.current=null;
    spent.current=0;powerUpTimerRef.current = 180;vehicleCycle.current=0;blastRef.current=0;
    passed.current=false;encounter.current=0;deposit.current=0;
    tappedRef.current=false;thrustingRef.current=false;
    keyboardThrust.current.clear();
    pointerThrust.current = false;
    lastClock.current = 0;
    fixedAcc.current = 0;
  }, [difficulty]);

  // ── Start / restart game ──────────────────────
  const startGame = useCallback(() => {
    if (['playing','countdown'].includes(gameStateRef.current) || performance.now() - finishedAt.current < 400) return;
    resetGame();
    route.current=mode==='mission'?(COURSES[mission]??COURSES[0]):mode==='seed'?seededCourse(seed):null;
    equipped.current=new Set(tools.slice(0,2));
    const prepared=route.current?.vehicle;
    if(prepared)playerRef.current.powerUp=prepared;
    if(equipped.current.has('magnet'))playerRef.current.magnetFrames=MAGNET_DURATION;
    if(equipped.current.has('shield'))playerRef.current.shieldFrames=5400;
    if(mode==="trial"&&vehicles.includes(vehicle as PowerUpType)){playerRef.current.powerUp=vehicle as PowerUpType;playerRef.current.powerUpTimer=0}
    gameStateRef.current = 'countdown';
    countdown.current = 1.5;
    const board = mode === 'mission' ? 'mission-' + route.current?.id
      : mode === 'seed' ? 'seed-' + route.current?.id : mode;
    (window as any).arcadeRun?.start('jet', board, difficulty);
    play('start');
    syncUI();
  }, [resetGame, play,mode,vehicle,mission,seed,tools,difficulty]);

  function releaseThrust() {
    keyboardThrust.current.clear();
    pointerThrust.current = false;
    tappedRef.current = false;
    thrustingRef.current = false;
    playerRef.current.isThrusting = false;
    audio()?.stopEffects();
  }

  // ── Pause / resume ────────────────────────────
  const pauseGame = useCallback(() => {
    if (gameStateRef.current !== 'playing') return;
      gameStateRef.current = 'paused';
      releaseThrust();
      stopBGM();
      syncUI();
  }, [stopBGM, difficulty, mode]);

  const togglePause = useCallback(() => {
    if (gameStateRef.current === 'playing') pauseGame();
    else if (gameStateRef.current === 'paused') {
      lastClock.current = 0;
      fixedAcc.current = 0;
      gameStateRef.current = 'playing';
      play('bgm');
      syncUI();
    }
  }, [play, pauseGame, difficulty, mode]);

  function showStart() {
    releaseThrust();
    stopBGM();
    gameStateRef.current = 'start';
    scrollRef.current = 0;
    syncUI();
  }

  // ── Thrust (press/hold) ───────────────────────
  const updateThrust = useCallback(() => {
    const value = gameStateRef.current === 'playing' && (pointerThrust.current || keyboardThrust.current.size > 0);
    if(value&&!thrustingRef.current&&gameStateRef.current==='playing')tappedRef.current=true;
    thrustingRef.current = value;
    playerRef.current.isThrusting = value;
    audio()?.setThrust(value);
  }, []);

  const setThrusting = useCallback((value: boolean) => {
    pointerThrust.current = value && gameStateRef.current === 'playing';
    updateThrust();
  }, [updateThrust]);

  // ── Die ───────────────────────────────────────
  function die() {
    const p = playerRef.current;
    // Spawn death particles
    for (let i = 0; i < 20; i++) {
      p.particles.push({
        x: p.x + p.width / 2,
        y: p.y + p.height / 2,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        life: 40, maxLife: 40,
        size: Math.random() * 5 + 2,
        color: ['#ff4400', '#ff8800', '#ffcc00'][Math.floor(Math.random() * 3)],
      });
    }
    livesRef.current--;
    play('hit');
    if (livesRef.current <= 0) {
      releaseThrust();
      play('death');
      stopBGM();
      gameStateRef.current = 'dying';
      deathFrames.current=0;
      syncUI();
    } else {
      // Flash invincible and respawn to center so the player doesn't keep touching
      // the floor/ceiling and re-trigger die() once invincibility expires
      p.invincible = true;
      p.invincibleTimer = INVINCIBLE_FRAMES;
      p.powerUp = 'none';
      p.powerUpTimer = 0;
      p.y = CEILING_Y + (GROUND_Y - CEILING_Y) / 2 - p.height / 2;
      p.velocity = 0;
    }
  }

  // ── Sync React UI from refs ───────────────────
  // Uses refs throughout so it's safe to call from any callback without stale-closure issues
  function settle(){
    if(!['dying','revive'].includes(gameStateRef.current))return;
    finishRun();
  }
  function summarize() {
    return {mode, state: gameStateRef.current, score: Math.floor(scoreRef.current), seconds: frameRef.current / 60,completed:passed.current,course:route.current?.id};
  }
  function finishRun() {
    gameStateRef.current = 'gameover';
    finishedAt.current = performance.now();
    const run=(window as any).arcadeRun;
    const count=trophy.current,distance=distanceRef.current;
    if(distance>=1000){run?.trophies('jet_1000m');run?.cleared()}
    else if(passed.current)run?.cleared();
    if(distance>=2000&&count.vehicles>=2)run?.trophies('jet_ace');
    if(count.bestDodge>=10)run?.trophies('jet_dodge_10');
    if(count.clean800)run?.trophies('jet_monk_800');
    run?.finish(scoreRef.current, frameRef.current / 60, distance);
    const hs = Math.max(highScoreRef.current, Math.floor(scoreRef.current));
    highScoreRef.current = hs;
    try{
      localStorage.setItem(bestKey,String(hs));
      if(mode==='mission'&&passed.current&&route.current){
        const wins=completedCourses(localStorage);
        if(!wins.includes(route.current.id))localStorage.setItem('jet-courses-v2',JSON.stringify([...wins,route.current.id]));
      }
    }catch{}
    stopBGM();
    syncUI();
    window.dispatchEvent(new CustomEvent('arcade-game-state', { detail: summarize() }));
  }
  function revive(){
    if(gameStateRef.current!=='revive'||spent.current||coinsCountRef.current<100)return;
    spent.current=100;livesRef.current=1;const p=playerRef.current;p.invincible=true;p.invincibleTimer=120;p.velocity=0;p.y=(GROUND_Y+CEILING_Y-p.height)/2;
    gameStateRef.current='playing';lastClock.current=performance.now();fixedAcc.current=0;play('bgm');syncUI();
  }
  function syncUI() {
    const p = playerRef.current;
    scheduleFrame();
    const activePowerUp = p.powerUp !== 'none' ? p.powerUp : (p.shieldFrames || 0) > 0 ? 'shield' : (p.magnetFrames || 0) > 0 ? 'magnet' : 'none';
    const effectFrames = activePowerUp === 'shield' ? p.shieldFrames : activePowerUp === 'magnet' ? p.magnetFrames : p.powerUpTimer;
    setUIState({
      gameState: gameStateRef.current,
      countdown: Math.ceil(countdown.current * 2),
      score: Math.floor(scoreRef.current),
      highScore: highScoreRef.current, // ← ref, always current
      distance: Math.floor(distanceRef.current),
      coins: coinsCountRef.current-spent.current,
      activePowerUp,
      powerUpTimeLeft: Math.min(1, (effectFrames || 0) / getPowerUpDuration(activePowerUp)),
      lives: livesRef.current,
      difficulty,

      course:route.current?{title:route.current.title,remaining:Math.max(0,Math.ceil(route.current.seconds-frameRef.current/60)),target:route.current.coins,passed:passed.current,seed:mode==='seed'?route.current.id:undefined}:undefined,
    });
  }

  function getPowerUpDuration(t: PowerUpType) {
    if (t === 'shield') return SHIELD_DURATION;
    if (t === 'magnet') return MAGNET_DURATION;
    if (t === 'boost')  return BOOST_DURATION;
    if(vehicles.includes(t))return 1200;
    return 1;
  }

  const deathFrames=useRef(0),lastClock=useRef(0),fixedAcc=useRef(0);
  (window as any).orientationPause=togglePause;
  (window as any).detailedGameSummary=summarize;
  (window as any).detailedGameSnapshot=()=>({...summarize(),dashFrames:playerRef.current.dashFrames||0,collected:coinsCountRef.current,spent:spent.current,available:coinsCountRef.current-spent.current,lives:livesRef.current,distance:distanceRef.current,player:{x:playerRef.current.x,y:playerRef.current.y,power:playerRef.current.powerUp,timer:playerRef.current.powerUpTimer,magnet:playerRef.current.magnetFrames,shield:playerRef.current.shieldFrames,teleportPreview:playerRef.current.teleportPreview,vehicleVisualState:playerRef.current.vehicleVisualState,expired:playerRef.current.expiredType,expiredTimer:playerRef.current.expiredTimer,expiredReason:playerRef.current.expiredReason},missiles:missilesRef.current.map(m=>({x:m.x,y:m.y,type:m.type,hazard:m.hazard})),coins:coinsCountRef.current});
  function endVehicle(p:Player,reason:string){p.expiredType=p.powerUp;p.expiredTimer=100;p.expiredReason=reason;for(let i=0;i<(matchMedia('(prefers-reduced-motion:reduce)').matches?0:16);i++){const a=i*Math.PI/8;p.particles.push({x:p.x+p.width/2,y:p.y+p.height/2,vx:Math.cos(a)*3,vy:Math.sin(a)*3,life:40,maxLife:40,size:4,color:'#e9bc66'})}play('powerup')}
  // ── Main game loop ────────────────────────────
  function scheduleFrame() {
    if (!rafRef.current && frameCallback.current && !document.hidden) {
      rafRef.current = requestAnimationFrame(frameCallback.current);
    }
  }

  const gameLoop = useCallback((ctx: CanvasRenderingContext2D, clockNow: number) => {
    const gs = gameStateRef.current;
    const sceneChanged = gs !== lastDraw.current;
    lastDraw.current = gs;
    const delta = lastClock.current ? Math.min(.05, Math.max(0, (clockNow - lastClock.current) / 1000)) : 0;
    lastClock.current = clockNow;
    if (gs === 'countdown') {
      const previous = Math.ceil(countdown.current * 2);
      if (!document.hidden) countdown.current = Math.max(0, countdown.current - delta);
      if (countdown.current === 0) {
        gameStateRef.current = 'playing';
        play('bgm');
      }
      if (previous !== Math.ceil(countdown.current * 2)) syncUI();
      renderFrame(ctx);
      return;
    }
    if (gs === 'dying') {
      deathFrames.current += delta * 60;
      const player=playerRef.current;
      player.y=Math.min(GROUND_Y-player.height,player.y+deathFrames.current*.28*delta*60);
      updateParticles(player.particles, delta * 60);
      renderFrame(ctx);
      if (deathFrames.current > 65) {
        if (spent.current||route.current?.keepReserve) settle();
        else {
          gameStateRef.current='revive';
          syncUI();
        }
      }
      return;
    }
    if (gs === 'start' || gs === 'gameover') {
      // Still draw background on start/gameover for visual richness
      if (sceneChanged) drawBackground(ctx, scrollRef.current);
      return;
    }
    if (gs === 'paused'||gs==='revive') {
      // Don't advance, just re-render current state
      if (sceneChanged) renderFrame(ctx);
      return;
    }

    fixedAcc.current+=delta;let steps=0;
    while(fixedAcc.current+1e-9>=1/60&&steps++<3&&gameStateRef.current==='playing'){
    fixedAcc.current=Math.max(0,fixedAcc.current-1/60);
    frameRef.current++;
    const frame = frameRef.current;
    const warmup = 0.7 + 0.3 * Math.min(1, frame / 1800);
    const speed = speedRef.current * warmup * ((playerRef.current.dashFrames || 0) > 0 ? 1.65 : 1);

    // Ramp up speed
    speedRef.current = Math.min(MAX_SPEED, speedRef.current + SPEED_RAMP);
    scrollRef.current += speed;
    distanceRef.current += speed;
    scoreRef.current += DISTANCE_SCORE_RATE * speed;

    // Player physics
    const p = playerRef.current;
    const tapped=tappedRef.current;tappedRef.current=false;
    if(p.powerUp==='drill'||p.powerUp==='glider'){
      const canJump=p.powerUp==='glider'||p.y+p.height>=GROUND_Y-1;
      p.velocity=tapped&&canJump?(p.powerUp==='drill'?-9.2:-8):Math.min(MAX_FALL_SPEED,p.velocity+GRAVITY);
    }else if(p.powerUp==='gravity'){
      if(tapped)p.invertedGravity=!p.invertedGravity;
      p.velocity=Math.max(-7,Math.min(7,p.velocity+(p.invertedGravity?-GRAVITY:GRAVITY)));
    }else if(p.powerUp==='blink'){
      p.velocity=0;
      if(tapped&&p.teleportPreview){
        p.y=p.teleportPreview.y;
        p.teleportPreview=undefined;
        teleport.current=null;
      }
      if(!teleport.current||frame>=teleport.current.due){
        teleport.current={y:nextTeleportHeight(p,teleport.current?.y),due:frame+TELEPORT_PREVIEW_TICKS};
      }
    }else if (p.powerUp==='dragon'?!thrustingRef.current:thrustingRef.current) {
      p.velocity = Math.max(p.velocity + THRUST*(p.powerUp==='mecha'?.65:warmup), MAX_RISE_SPEED);
      // Jetpack flame particles
      if (frame % 2 === 0) {
        p.particles.push({
          x: p.x + p.width - 4,
          y: p.y + p.height - 20,
          vx: 2 + Math.random() * 2,
          vy: (Math.random() - 0.5) * 3,
          life: 15, maxLife: 15,
          size: Math.random() * 5 + 2,
          color: ['#ff6600', '#ff9900', '#ffdd00', '#fff0aa'][Math.floor(Math.random() * 4)],
        });
      }
    } else {
      p.velocity = Math.min(p.velocity + GRAVITY, MAX_FALL_SPEED);
    }

    if(p.powerUp==='mecha'&&frame%24===0){const target=missilesRef.current.find(m=>m.active&&m.x>p.x&&m.x<p.x+450&&Math.abs(m.y-p.y)<90);if(target){target.active=false;blastRef.current=8;scoreRef.current+=5;play('powerup')}}
    blastRef.current=Math.max(0,blastRef.current-1);
    if (p.powerUp === 'boost') {
      p.velocity = Math.min(p.velocity, MAX_FALL_SPEED * 0.5);
    }

    p.y += p.velocity;

    // Clamp to play area
    if (p.y + p.height >= GROUND_Y) {
      p.y = GROUND_Y - p.height;
      p.velocity = 0;
      // Safe boundary; missiles are dangerous.
    }
    if (p.y <= CEILING_Y) {
      p.y = CEILING_Y;
      p.velocity = 0;
      // Safe boundary; missiles are dangerous.
    }

    // Invincible timer
    if (p.invincible) {
      p.invincibleTimer--;
      if (p.invincibleTimer <= 0) p.invincible = false;
    }

    p.magnetFrames=Math.max(0,(p.magnetFrames||0)-1);
    p.shieldFrames=Math.max(0,(p.shieldFrames||0)-1);
    p.expiredTimer=Math.max(0,(p.expiredTimer||0)-1);
    // Power-up timer
    if (p.powerUp !== 'none'&&!vehicles.includes(p.powerUp)) {
      p.powerUpTimer--;
      if (p.powerUpTimer <= 0) {

        p.powerUp = 'none';
        p.powerUpTimer = 0;
      }
    }

    // Update particles
    updateParticles(p.particles);

    // ── Spawn objects ───────────────────────────
    const course=route.current;
    if(course){
      const next=course.encounters[encounter.current];
      if(next&&frame>=Math.round(next[0]*60)){
        missilesRef.current.push(courseObstacle(next[1],next[2],speed,equipped.current.has('forecast')?96:72));
        encounter.current++;
      }
      const coins=course.deposits[deposit.current];
      if(coins&&frame>=Math.round(coins[0]*60)){
        coinsRef.current.push(...courseCoinLine(coins[1],deposit.current,mode==='seed'?course.id:''));
        deposit.current++;
      }
    }else{
    missileTimerRef.current--;
    if (missileTimerRef.current <= 0) {
      const difficultyFactor = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 0.7 : 0.5;
      const scoreBonus = Math.max(0, 1 - scoreRef.current / 3000);
      const barrier = spawnMissile(speed, scoreRef.current);
      barrier.warningFrames = equipped.current.has('forecast') ? 96 : 72;
      barrier.warningAlpha = barrier.warningFrames;
      barrier.hazard = hazardCount.current++ % 3 !== 2 ? 'zapper' : 'missile';
      if (barrier.hazard === 'zapper') {
        barrier.width = 28;
        barrier.height = 95;
        barrier.y = Math.min(barrier.y, GROUND_Y - barrier.height);
      }
      missilesRef.current.push(barrier);
      missileTimerRef.current = Math.max(40, MISSILE_SPAWN_BASE * difficultyFactor * (0.5 + scoreBonus) / warmup);
    }

    coinTimerRef.current--;
    if (coinTimerRef.current <= 0) {
      coinsRef.current.push(...spawnCoinPattern(motif.current++,missilesRef.current));
      coinTimerRef.current = COIN_SPAWN_BASE;
    }

    powerUpTimerRef.current--;
    if (powerUpTimerRef.current <= 0) {
      const pickup=spawnPowerUp();pickup.type=([...vehicles,'shield','magnet','boost'] as PowerUpType[])[Math.floor(Math.random()*9)];pickup.x=CANVAS_WIDTH-POWERUP_SIZE;pickup.y=Math.max(CEILING_Y+15,Math.min(GROUND_Y-50,p.y));powerUpsRef.current.push(pickup);
      powerUpTimerRef.current = POWERUP_SPAWN_INTERVAL;
    }
    }

    // ── Move missiles ───────────────────────────
    missilesRef.current = missilesRef.current.filter(m => {
        if (!m.active) return false;
        if (m.warningFrames && m.warningFrames > 0) {
          m.x = CANVAS_WIDTH - m.width;
          if (!warned.current.has(m)) {
            warned.current.add(m);
            play(m.hazard === 'missile' ? 'missile_warning' : 'warning_beep');
          }
          m.warningFrames--;
          if (m.hazard === 'missile' && m.warningFrames === 0) play('missile_launch');
          return true;
        }
        if (m.hazard && m.hazard !== 'missile') {
          m.x -= speed;
          courseMotion(m);
          return m.x + m.width > -50;
        }
        let vx = m.velocityX;
        let vy = m.velocityY;
        // Homing: steer toward player
        if (m.type === 'homing') {
          const dx = p.x - m.x;
          const dy = (p.y + p.height / 2) - (m.y + m.height / 2);
          const dist = Math.hypot(dx, dy);
          if (dist > 1) {
            const steering = 0.04;
            vx += (dx / dist) * steering * Math.abs(vx);
            vy += (dy / dist) * steering * 2;
          }
        }
        m.x += vx;
        m.y += vy;
        m.velocityX = vx;
        m.velocityY = vy;
        return m.x + m.width > -50 && m.y > -200 && m.y < CANVAS_HEIGHT + 200;
      });

    // ── Move coins ──────────────────────────────
    advanceCoins(coinsRef.current, speed, p);

    // ── Move power-ups ──────────────────────────
    powerUpsRef.current = powerUpsRef.current.filter(pu => {
      if (!pu.active) return false;
      pu.x -= speed;
      pu.angle += .04;
      return pu.x + POWERUP_SIZE > -20;
    });

    const flightTrophy=trophy.current;
    for(const hazard of missilesRef.current){
      if(hazard.active && !hazard.warningFrames && hazard.x+hazard.width<p.x && !flightTrophy.passed.has(hazard)){
        flightTrophy.passed.add(hazard);
        flightTrophy.bestDodge=Math.max(flightTrophy.bestDodge,++flightTrophy.dodged);
      }
    }
    // ── Collision: player ↔ missiles ────────────
    if (!p.invincible&&!(p.dashFrames||0)) {
      for (const m of missilesRef.current) {
        if (!m.active || (m.warningFrames || 0) > 0) continue;
        if (courseHazardHits(p, m)) {
          if (p.powerUp==='drill' && m.hazard && m.hazard!=='missile' && m.x+m.width*.5>=p.x+p.width*.55) {
            m.active=false;
            play('hit');
            continue;
          }
          flightTrophy.hits++;
          flightTrophy.dodged=0;
          if ((p.shieldFrames||0)>0||vehicles.includes(p.powerUp)) {
            // Shield absorbs hit
            if(!vehicles.includes(p.powerUp)){p.shieldFrames=0;m.active=false;p.invincible=true;p.invincibleTimer=60;break}
            endVehicle(p,'擋擊後解除');
            p.powerUp = 'none';
            p.powerUpTimer = 0;
            p.invincible = true;
            p.invincibleTimer = equipped.current.has('eject')?90:48;
            m.active = false;
            play('hit');break;
          } else {
            m.active = false;
            die();
            break;
          }
        }
      }
    }

    if (!flightTrophy.hits&&distanceRef.current>=800)flightTrophy.clean800=true;
    if (gameStateRef.current !== 'playing') break;

    // ── Collision: player ↔ coins ─────────────
    for (const c of coinsRef.current) {
      if (!c.active || c.collected) continue;
      if (rectIntersects(p, c, 0.1, 0.1)) {
        c.collected = true;
        c.collectedTimer = 20;
        coinsCountRef.current++;
        scoreRef.current += COIN_SCORE;
        play('coin');
      }
    }

    if(p.dashFrames)p.dashFrames--;
    // ── Collision: player ↔ power-ups ────────
    for (const pu of powerUpsRef.current) {
      if (!pu.active) continue;
      if (rectIntersects(p, pu, 0.1, 0.1)) {
        pu.active = false;
        if(pu.type==='boost'){p.dashFrames=45;play('powerup');continue}
        if(pu.type==='magnet'||pu.type==='shield'){if(pu.type==='magnet')p.magnetFrames=MAGNET_DURATION;else p.shieldFrames=SHIELD_DURATION;play('powerup');continue}
        if(vehicles.includes(pu.type))flightTrophy.vehicles++;
        p.powerUp = pu.type;p.invertedGravity=false;
        p.powerUpTimer =
          vehicles.includes(pu.type)?0:pu.type === 'shield' ? SHIELD_DURATION :
          pu.type === 'magnet' ? MAGNET_DURATION :
          BOOST_DURATION;
        play('vehicle_chord');
      }
    }


    // Sync UI every 10 frames
    if (frame % 10 === 0) syncUI();

    if (mode === 'practice' && frameRef.current >= 5400 && gameStateRef.current === 'playing') finishRun();
    if(course&&frame>=course.seconds*60){
      passed.current=coursePassed(course,frame,coinsCountRef.current-spent.current,spent.current);
      finishRun();
    }
    }
    // ── Draw ────────────────────────────────────
    if (steps || sceneChanged) renderFrame(ctx);
  }, [difficulty, play, stopBGM, mode, bestKey]);

  function renderFrame(ctx: CanvasRenderingContext2D) {
    const frame = frameRef.current;
    const p = playerRef.current;

    drawBackground(ctx, scrollRef.current);

    // Coins
    for (const c of coinsRef.current) {
      drawCoin(ctx, c, frame);
      drawCoinPop(ctx, c);
    }

    // Power-ups
    for (const pu of powerUpsRef.current) {
      drawPowerUp(ctx, pu, frame);
    }

    // Missiles
    for (const m of missilesRef.current) {
      drawMissile(ctx, m);
    }

    // Player particles (behind player)
    drawParticles(ctx, p.particles);

    // Player
    if(p.powerUp!=='blink')teleport.current=null;
    p.teleportPreview=p.powerUp==='blink'&&teleport.current?getTeleportPreview(p,missilesRef.current,teleport.current.y):undefined;
    p.vehicleVisualState={active:p.powerUp,gravity:p.invertedGravity?'up':'down',airborne:p.y>CEILING_Y+1&&p.y+p.height<GROUND_Y-1,velocityY:p.velocity};
    drawPlayer(ctx, p, frame);if(blastRef.current>0){ctx.strokeStyle='#fff0b2';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(p.x+p.width,p.y+22);ctx.lineTo(p.x+420,p.y+22);ctx.stroke()}

    drawVehicleExit(ctx,p);
    // Magnet field hint
    if ((p.magnetFrames||0)>0) {
      ctx.save();
      ctx.globalAlpha = 0.12 + Math.sin(frame * 0.1) * 0.06;
      ctx.strokeStyle = '#ff44ff';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.arc(p.x + p.width / 2, p.y + p.height / 2, MAGNET_RADIUS, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }
  }

  // ── Start / stop rAF ─────────────────────────
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d', { alpha: false });
    if (!ctx) return;
    lastClock.current = 0;
    frameCallback.current = clock => {
      rafRef.current = 0;
      if (document.hidden) return;
      gameLoop(ctx, clock);
      if (['countdown','playing','dying'].includes(gameStateRef.current)) scheduleFrame();
    };
    scheduleFrame();
    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      frameCallback.current = null;
    };
  }, [gameLoop, stopBGM]);

  // ── Keyboard input ────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof Element && e.target.closest('input, select, textarea')) return;
      if (thrustKeys.includes(e.code)) {
        if (e.code === 'Space' && e.target instanceof Element && e.target.closest('button, a')) return;
        e.preventDefault();
        if (gameStateRef.current === 'start' || gameStateRef.current === 'gameover') {
          if (!e.repeat) startGame();
        } else if (!e.repeat && gameStateRef.current === 'playing') {
          keyboardThrust.current.add(e.code);
          updateThrust();
        }
      }
      if (e.code === 'Escape' || e.code === 'KeyP') {
        if (!e.repeat && (gameStateRef.current === 'playing' || gameStateRef.current === 'paused')) {
          togglePause();
        }
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (keyboardThrust.current.delete(e.code)) updateThrust();
    };
    const onVisibility = () => {
      if (document.hidden) { pauseGame(); lastClock.current = 0; }
      else scheduleFrame();
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', pauseGame);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', pauseGame);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [startGame, updateThrust, togglePause, pauseGame]);

  return {
    canvasRef,
    uiState,
    startGame, showStart, revive, settle,
    togglePause,
    setThrusting,
  };
}
