import Phaser from "phaser";
import Laser from "../sprites/Laser";

export default class LaserGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 30,
            key: "laser",
            active: false,
            visible: false,
            classType: Laser,
        });
    }

    fireBullet(x, y) {
        const laser = this.getFirstDead(true);

        if (laser) {
            laser.fire(x, y);
        }
    }

    update() {
        const laser = this.getFirst(true);

        if (laser && laser.y < 0) {
            laser.destroy();
        }
    }
}
