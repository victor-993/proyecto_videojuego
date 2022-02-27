export class levelAndrea extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }

  preload() {
    this.load.image("background", "assets/images/background.png");
    this.load.image(
      "plataforma",
      "assets/images/Plataformas/sueloarribax3.png"
    );
    this.load.spritesheet("andrea", "assets/images/andrea/andrea.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(410, 250, "background").setScale(2);
    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, "plataforma").setScale(20, 1).refreshBody();

    this.platforms.create(600, 400, "plataforma");
    this.platforms.create(50, 250, "plataforma");
    this.platforms.create(750, 220, "plataforma");

    this.player = this.physics.add.sprite(400, 250, "andrea").setScale(1.5);
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.anims.create({
      key: "derecha",
      frames: this.anims.generateFrameNumbers("andrea", { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "izquierda",
      frames: this.anims.generateFrameNumbers("andrea", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "frente",
      frames: this.anims.generateFrameNumbers("andrea", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "espalda",
      frames: this.anims.generateFrameNumbers("andrea", { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
            key: 'quieta',
            frames: [ { key: 'andrea', frame: 2 } ],
            frameRate: 20
        
      });

    // Controles
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.body.setGravityY(300);

    this.physics.add.collider(this.player, this.platforms);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("izquierda", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("derecha", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("quieta");
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-630);
    }
  }
}
