
import LoadScene from "./scenes/load-scene.js";
import TestScene from "./scenes/test-scene.js";

/**
* @type {Phaser.Types.Core.GameConfig}
*/
const config = {
        type: Phaser.AUTO,
	parent: "gameContainer",
	backgroundColor: "#000000",
	pixelArt: true,
	scale: {
		width: 320,
		height: 240,
		// Adapts to screen game
		mode: Phaser.Scale.ScaleModes.FIT,
		autoCenter: Phaser.Scale.Center.CENTER_BOTH,
	},
	scene: [LoadScene, TestScene],
	physics: { 
		default: "arcade", 
		arcade: { 
			//gravity: { y: 200 }, 
			debug: true,
			
			checkCollision: {
				up: true,
				down: true,
				left: true,
				right: true
			}
		},
	},
	title: "Testing",
	version: "0.0.0",
	transparent: false
}; 

new Phaser.Game(config);