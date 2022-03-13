import Phaser from "phaser";

const texture = "explosion-sprite";

export default class Explosion extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, texture);

        this.scene = scene;
        this.texture = texture;

        this.scene.physics.add.existing(this);
        this.scene.sys.displayList.add(this);
        this.scene.sys.updateList.add(this);

        this.animations();
    }
    animations() {
        this.scene.anims.create({
            key: "default",
            frames: this.scene.anims.generateFrameNumbers(this.texture, {
                start: 0,
                end: 8,
            }),
            frameRate: 20,
            repeat: 0,
        });
    }
}
