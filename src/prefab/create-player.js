import MovePhysicalComponentFixed from "../components/move/move-physical-component-fixed.js";
import PlayerControllerComponent from "../components/player-controller-component.js";
/**
 * @param {Phaser.Scene} scene
 * @param {number} x
 * @param {number} y
 * @returns {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody}
 */
export default function CreatePlayer(scene, x, y) {
   
        const playerPrefab = scene.physics.add.sprite(
                x,
                y,
                "test_player"
        );

        const playerMoveCmp = new MovePhysicalComponentFixed(playerPrefab, 100);
        new PlayerControllerComponent(playerPrefab, playerMoveCmp);
        
        return playerPrefab;
}