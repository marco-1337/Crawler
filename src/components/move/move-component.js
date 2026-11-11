import UserComponent from "../../user-component.js";

export default class MoveComponent extends UserComponent {

        _dir = new Phaser.Math.Vector2();

        /** 
         * @param {Phaser.GameObjects.GameObject} gameObject
        */
        constructor(gameObject) {
                super(gameObject);
        }

        _applyDirection() {}

        /**
         * 
         * @param {number} x 
         * @param {number} y 
         */
        setDirection(x, y) {

                if (x !== this._dir.x || y !== this._dir.y) {
                        this._dir.x = x;
                        this._dir.y = y;
                        this._dir.normalize();
                        this._applyDirection();
                }
        }
}