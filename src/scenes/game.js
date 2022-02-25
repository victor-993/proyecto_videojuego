export class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }

  preload() {
    this.load.image("background", "assets/images/background.png");
    this.load.spritesheet("luis", "assets/images/luis/baile luis 65x99.png", {
      frameWidth: 65,
      frameHeight: 99,
    });
  }

  create() {
    this.add.image(410, 250, "background");

    this.player = this.add.sprite(300, 50, "luis");
    this.anims.create({
      key: "baile",
      frames: this.anims.generateFrameNumbers("luis", { start: 0, end: 11 }),
      frameRate: 6,
      repeat: -1,
    });
    this.player.anims.play("baile")
    
  }

  update ()
{
  
}
}
