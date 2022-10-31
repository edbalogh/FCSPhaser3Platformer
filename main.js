import { StartMenu } from './scenes/StartMenu.js';
import { MainLevel } from './scenes/MainLevel.js';
import { GameOver } from './scenes/GameOver.js';

let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1024,
    height: 640,
    input: {
        gamepad: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            fps: 60,
            gravity: { y: 1000 }
        }
    },
    scene: [ 
      StartMenu, GameOver, MainLevel
    ]
};

let game = new Phaser.Game(config);