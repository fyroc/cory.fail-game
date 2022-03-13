import Phaser from "phaser";

const texture = "player-sprite";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, texture, frame);

        this.scene = scene;
        this.texture = texture;

        this.scene.physics.add.existing(this);
        this.scene.sys.displayList.add(this);
        this.scene.sys.updateList.add(this);

        this.animations();

        this.body.setCollideWorldBounds(true);
    }

    update() {
        if (this.scene.cursors.left.isDown) {
            this.body.setVelocityX(-230);
            this.play("left", false);
        } else if (this.scene.cursors.right.isDown) {
            this.body.setVelocityX(230);
            this.play("right", false);
        } else {
            this.body.setVelocityX(0);
            this.play("forward");
        }

        if (this.scene.cursors.up.isDown) {
            this.body.setVelocityY(-230);
        } else if (this.scene.cursors.down.isDown) {
            this.body.setVelocityY(230);
        } else {
            this.body.setVelocityY(0);
        }

        if (this.scene.cursors.space.isDown) {
            this.fireBullet();
        }
    }

    animations() {
        this.scene.anims.create({
            key: "forward",
            frames: [{ key: this.texture, frame: 2 }],
            frameRate: 20,
        });
        this.scene.anims.create({
            key: "right",
            frames: this.scene.anims.generateFrameNumbers(this.texture, {
                start: 3,
                end: 4,
            }),
            frameRate: 10,
            repeat: 0,
        });
        this.scene.anims.create({
            key: "left",
            frames: this.scene.anims.generateFrameNumbers(this.texture, {
                start: 1,
                end: 0,
            }),
            frameRate: 10,
            repeat: 0,
        });
    }

    fireBullet() {
        this.scene.laserGroup.fireBullet(this.body.x + 30, this.body.y - 20);
    }
}
