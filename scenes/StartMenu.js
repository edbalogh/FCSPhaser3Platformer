export class StartMenu extends Phaser.Scene {
  constructor() {
    super({ key: "start-menu", active: true });
  }

  preload() {
    console.log("loading StartMenu");
    this.load.image('ball', '../assets/ball.png')
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.nextBallTime = 0;
    this.welcome = this.add.text(150, 150, "Welcome to My Game!");
    this.ballGroup = this.physics.add.group({
      bounceX: 0.97,
      bounceY: 0.97,
      collideWorldBounds: true
    });
    this.physics.add.collider(this.ballGroup, this.ballGroup);
  }

  update(time, delta) {
    this.nextBallTime -= delta;
    // console.log(`nextBallTime: ${this.nextBallTime}`)

    // comment in for controller/gamepad support (A Bittpm tp Start)
    if (this.input.gamepad.total > 0) {
      const pad = this.input.gamepad.getPad(0);
      if (pad.A) {
        this.scene.start("main-level");
      }
    }

    if(this.cursors.space.isDown) {
      this.scene.start('main-level')
    }


    if (this.nextBallTime <= 0 && this.ballGroup.getLength() < 33) {
      this.nextBallTime = 100;
      this.ballGroup.create(Math.random() * 1024, -100, 'ball').setCircle(15).setMass(Math.random()*9+0.5);
    }
  }
  
}
