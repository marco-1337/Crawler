import MovePhysicalComponent from "./move-physical-component.js";

export default class MovePhysicalComponentFixed extends MovePhysicalComponent {

        /** @type {number} */
        speed;

        /**
         * @param {Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody} gameObject
         */
        constructor(gameObject, speed = 0) {
                super(gameObject);
                this.speed = speed;
        }

        _applyDirection() {
                this.body.setVelocity(this._dir.x * this.speed, this._dir.y * this.speed);
        }
};