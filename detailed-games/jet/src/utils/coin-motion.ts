import type { Coin, Player } from '@/types/game';
import { COIN_SIZE, MAGNET_RADIUS } from './constants';

export function advanceCoins(coins: Coin[], speed: number, player: Player) {
  let visible = 0;
  for (const coin of coins) {
    if (!coin.active) continue;
    coin.x -= speed;
    if (coin.collected) {
      if (--coin.collectedTimer > 0) coins[visible++] = coin;
      continue;
    }

    if ((player.magnetFrames || 0) > 0) {
      const dx = player.x + player.width / 2 - (coin.x + COIN_SIZE / 2);
      const dy = player.y + player.height / 2 - (coin.y + COIN_SIZE / 2);
      const squaredDistance = dx * dx + dy * dy;
      if (squaredDistance > 0 && squaredDistance <= MAGNET_RADIUS * MAGNET_RADIUS) {
        const pull = Math.min(1, 6 / Math.sqrt(squaredDistance));
        coin.x += dx * pull;
        coin.y += dy * pull;
      }
    }
    if (coin.x + COIN_SIZE > -20) coins[visible++] = coin;
  }
  coins.length = visible;
}
