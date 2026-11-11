export default class UserComponent {

        /**
         * @param {Phaser.GameObjects.GameObject} gameObject
         */
        constructor(gameObject) {

                const scene = gameObject.scene;

                const listenStart =
                        this.start !== UserComponent.prototype.start;
                const listenUpdate =
                        this.update !== UserComponent.prototype.update;
                const listenDestroy =
                        this.destroy !== UserComponent.prototype.destroy;

                if (listenStart) {

                        scene.events.once(
                        Phaser.Scenes.Events.UPDATE, this.start, this);
                }

                if (listenUpdate) {

                        scene.events.on(
                        Phaser.Scenes.Events.UPDATE, this.update, this);
                }

                if (listenStart || listenUpdate || listenDestroy) {

                        gameObject.on(Phaser.GameObjects.Events.DESTROY, () => {

                        scene.events.off(
                                Phaser.Scenes.Events.UPDATE, this.start, this);
                        scene.events.off(
                                Phaser.Scenes.Events.UPDATE, this.update, this);

                        if (listenDestroy) {

                                this.destroy();
                        }
                        });
                }
        }

        start() { }

        /**
         * @param {number} time
         * @param {number} dt
         */
        update(time, dt) { }

        destroy() { }
}