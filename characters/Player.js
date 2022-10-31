export class Player extends Phaser.GameObjects.Rectangle {
    jumpStrength = 400;
    jumps = 0;
    maxJumps = 2;

    constructor(scene, x, y) {
        super(scene, x, y, 20, 20, 0x999999);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setBounce(0.1);

        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    preUpdate(time, delta) {
        // reset double jump
        if (this.body.onFloor()) this.jumps = 0;

        // left and right movement
        if (this.cursors.left.isDown) {
            this.body.setVelocityX(-200);
        } else if (this.cursors.right.isDown) {
            this.body.setVelocityX(200);
        } else {
            this.body.setVelocityX(0);
        }

        console.log({jumps: this.jumps, maxJumps: this.maxJumps})

        if (this.cursors.space.isDown) {
            if (this.jumps < this.maxJumps && !this.jumpPressed) {
                this.jumpPressed = true;
                this.body.setVelocityY(-this.jumpStrength);
                this.jumps++;
            }
        } else {
            this.jumpPressed = false;
        }
    }
}