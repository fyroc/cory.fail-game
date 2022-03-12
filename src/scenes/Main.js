import Phaser from "phaser";
import background from "../assets/background.png";
import Background from "../sprites/background";

export default class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }

    preload() {
        this.load.image("background", background);
    }

    create() {
        this.background = new Background(
            this,
            this.cameras.main.width / 2,
            this.cameras.main.height / 2
        );
    }

    update() {}
}
