import Phaser from "phaser";
import Explosion from "./Explosion";

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "enemy1_red");
    }

    explode() {
        const explosion = new Explosion(this.scene, this.x, this.y);

        explosion.play("default");

        this.destroy();

        explosion.on("animationcomplete", () => {
            explosion.destroy();
        });
    }
}
