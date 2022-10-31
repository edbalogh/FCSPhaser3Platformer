import { Player } from "../characters/Player.js"
import { Floor } from "../objects/Floor.js";

export class MainLevel extends Phaser.Scene {
  constructor() {
    super({ key: "main-level" });
  }

  preload() {
    console.log("loading MainLevel");
  }

  create() {
    this.floor = [];
    // this runs once when the scene is created
    // initialize variables and create object here

    // set the world boundaries for physics
    this.physics.world.bounds.width = 6400
    this.physics.world.bounds.height = 640;
    // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, 6400, 640);

    // create the player
    this.player = new Player(this, 100, 50);

    // create the floor and some random blocks
    for (let i=0; i<100; i++){
      this.floor.push(new Floor(this, i*64, 608));
      if(Math.random() > 0.9) this.floor.push(new Floor(this, i*64, 544))
    }
    
    // make the camera follow the player
    this.cameras.main.startFollow(this.player);
    
    // set background color, so the sky is not black    
    this.cameras.main.setBackgroundColor('#ccccff'); 

    // create colliders after all objects exist
    this.createColliders();
  }

  update(timestamp, delta) {
    // this runs every frame
    // delta can be used to determine the number of milliseconds since the last update
  }

  
  createColliders() {
    // one per colliding pair
    // this.physics.add.collider(
    //   this.group1,
    //   this.group2,
    //   this.functionToHandleCollision,  // expects item from group1 and group2 that collided
    //   null,
    //   this
    // );

    this.physics.add.collider(this.player, this.floor);
  }
}
