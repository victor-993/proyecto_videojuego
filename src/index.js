import { Game } from './scenes/game';
import { levelAndrea } from './scenes/levelAndrea';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [levelAndrea],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false
    }
  }
}

var game = new Phaser.Game(config);