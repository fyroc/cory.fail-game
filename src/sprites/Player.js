import Phaser from "phaser";

const texture = "player-ship";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, texture, frame);

        this.scene = scene;

        scene.physics.add.existing(this);
        scene.sys.displayList.add(this);
        scene.sys.updateList.add(this);

        //this.animations();

        this.body.setCollideWorldBounds(true);
    }

    update() {
        if (this.scene.cursors.left.isDown) {
            this.body.setVelocityX(-230);
            //this.play("left", true);
        } else if (this.scene.cursors.right.isDown) {
            this.body.setVelocityX(230);
            //this.play("right", true);
        } else {
            this.body.setVelocityX(0);
            //this.play("turn");
        }

        if (this.scene.cursors.up.isDown) {
            this.body.setVelocityY(-230);
            //this.play("right", true);
        } else if (this.scene.cursors.down.isDown) {
            this.body.setVelocityY(230);
            //this.play("right", true);
        } else {
            this.body.setVelocityY(0);
            //this.play("turn");
        }
    }

    animations() {
        this.scene.anims.create({
            key: "turn",
            frames: [{ key: this.texture, frame: 4 }],
            frameRate: 20,
        });
        this.scene.anims.create({
            key: "right",
            frames: this.scene.anims.generateFrameNumbers(this.texture, {
                start: 5,
                end: 8,
            }),
            frameRate: 10,
            repeat: -1,
        });
        this.scene.anims.create({
            key: "left",
            frames: this.scene.anims.generateFrameNumbers(this.texture, {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1,
        });
    }
}
