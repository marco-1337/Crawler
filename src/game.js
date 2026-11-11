
import LoadScene from "./scenes/load-scene.js";
import TestScene from "./scenes/test-scene.js";

/**
* @type {Phaser.Types.Core.GameConfig}
*/
const config = {
        type: Phaser.AUTO,
	parent: "gameContainer",
	backgroundColor: "#3c7d30",
	pixelArt: true,
	scale: {
		// Adapts to screen game
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
		width: 320,
		height: 240,
		zoom: 1
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