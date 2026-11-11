export default class LoadScene extends Phaser.Scene {

        constructor() {
                super("LoadScene");
        }

        preload() {

                this.load.path = "assets/";

                // Player
                this.load.spritesheet("test_player", "images/knight.png", {frameWidth: 16, frameHeight: 16});

                // Tilemap
                this.load.image("test_tileset", "images/tilemap.png");
                this.load.tilemapTiledJSON("test_room", "maps/test_room.json");

                this.load.on("complete", () => {
                        this.scene.start("TestScene");
                });
        }
}