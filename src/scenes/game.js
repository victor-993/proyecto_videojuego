export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
  
    preload() {
      this.load.image('background', 'assets/images/background.png');
    }
  
    create() {
      this.add.image(410, 250, 'background');
    }
  
  }