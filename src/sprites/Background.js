import Phaser from "phaser";

const texture = "background";

export default class Background extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, texture, frame);

        let scaleX = this.scene.cameras.main.width / this.width;
        let scaleY = this.scene.cameras.main.height / this.height;
        let scale = Math.max(scaleX, scaleY);
        this.setScale(scale).setScrollFactor(0);

        scene.sys.displayList.add(this);
        scene.sys.updateList.add(this);
    }
}
