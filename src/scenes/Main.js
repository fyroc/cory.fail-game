import Phaser from "phaser";
import Background from "../sprites/Background";
import Player from "../sprites/Player";
import backgroundImage from "../assets/background.png";
import playerSprite from "../assets/player.png";

export default class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }

    preload() {
        this.load.image("background", backgroundImage);
        this.load.spritesheet("player-sprite", playerSprite, {
            frameWidth: 64,
            frameHeight: 64,
        });
    }

    create() {
        const background = new Background(
            this,
            this.cameras.main.width / 2,
            this.cameras.main.height / 2
        );

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = new Player(this, 100, 450);
    }

    update() {
        this.player.update();
    }
}
