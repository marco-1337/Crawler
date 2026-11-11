import UserComponent from "../user-component.js";
import MoveComponent from "./move/move-component.js";

export default class PlayerControllerComponent extends UserComponent {

        /** @type {MoveComponent} */
        moveComponent;

        /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
        cursor;

        /**
         * @param {Phaser.GameObjects.GameObject} gameObject
         * @param {MoveComponent} moveComponent
         */
        constructor(gameObject, moveComponent) {

                super(gameObject);

                this.moveComponent = moveComponent;

                if (!gameObject.scene.input.keyboard) throw new Error(this.constructor.name + " needs a valid input keyboard plugin"); 
                
                this.cursor = gameObject.scene.input.keyboard.createCursorKeys();
        }

        /** @type {Phaser.Math.Vector2} */
        #dirBuffer = new Phaser.Math.Vector2();

        update() {

                if (
                        (Phaser.Input.Keyboard.JustUp(this.cursor.left) && this.#dirBuffer.x == -1) ||
                        (Phaser.Input.Keyboard.JustUp(this.cursor.right) && this.#dirBuffer.x == 1)
                ) {
                        this.#dirBuffer.x = 0;
                }
                else if (
                        (Phaser.Input.Keyboard.JustUp(this.cursor.up) && this.#dirBuffer.y == -1) ||
                        (Phaser.Input.Keyboard.JustUp(this.cursor.down) && this.#dirBuffer.y == 1)
                ) {
                        this.#dirBuffer.y = 0;
                }

                // LEFT
                if (Phaser.Input.Keyboard.JustDown(this.cursor.left)) {
                        this.#dirBuffer.x = -1;
                        this.#dirBuffer.y = 0;
                }
                // RIGHT
                else if (Phaser.Input.Keyboard.JustDown(this.cursor.right)) {
                        this.#dirBuffer.x = 1;
                        this.#dirBuffer.y = 0;
                }
                // UP
                else if (Phaser.Input.Keyboard.JustDown(this.cursor.up)) {
                        this.#dirBuffer.x = 0;
                        this.#dirBuffer.y = -1;
                }
                // DOWN
                else if (Phaser.Input.Keyboard.JustDown(this.cursor.down)) {
                        this.#dirBuffer.x = 0;
                        this.#dirBuffer.y = 1;
                }

                this.moveComponent.setDirection(this.#dirBuffer.x, this.#dirBuffer.y);
        }
}