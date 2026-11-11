import CreatePlayer from "../prefab/create-player.js";

export default class TestScene extends Phaser.Scene {

        constructor() {
                super("TestScene");
        }

        create() {

                const map = this.make.tilemap({
                        key: "test_room"
                });

                const tileset = map.addTilesetImage("tilemap", "test_tileset");

                if (!tileset) throw new Error("tileset could not be added to test_room");

                const ground = map.createLayer("Background", tileset);

                const walls = map.createLayer("Walls", tileset);
                walls.setCollision(2);

                // Debugging colliders because debug = true in game config does not work
                const debugGraphics = this.add.graphics();
                walls.renderDebug(debugGraphics, {
                        tileColor: null,
                        collidingTileColor: new Phaser.Display.Color(255, 0, 0, 180),
                        faceColor: new Phaser.Display.Color(0, 255, 0, 255)
                });
                // !Debugging colliders

                const spawn = map.findObject("spawn", obj => obj.name === "spawnpoint");

                if (!spawn || !spawn.x || !spawn.y) throw new Error("spawnpoint data is incomplete");

                const player = CreatePlayer(this, spawn.x, spawn.y);
                this.colis = this.physics.add.collider(player, walls);

                // Adjust camera to set map in the bottom of the screen
                this.cameras.main.setScroll(
                        0,
                        map.heightInPixels - this.cameras.main.height
                );
        }
        update() {

        }
}