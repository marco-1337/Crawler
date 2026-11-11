import MoveComponent from "./move-component.js";

export default class MovePhysicalComponent extends MoveComponent {

        /** @type {Phaser.Physics.Arcade.Body} */
        body;

        /**
         * @param {Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody} gameObject
         */
        constructor(gameObject) {
                super(gameObject);

                this.body = gameObject.body;
        }
};