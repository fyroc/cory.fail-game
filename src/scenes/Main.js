import Phaser from "phaser";
import Background from "../sprites/Background";
import Player from "../sprites/Player";
import LaserGroup from "../groups/LaserGroup";
import EnemyGroup from "../groups/EnemyGroup";
import backgroundImage from "../assets/background.png";
import bulletImage from "../assets/bullet.png";
import playerSprite from "../assets/player.png";
import enemyImage from "../assets/enemy1_red.png";
import explosionSprite from "../assets/explosion.png";

export default class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }

    preload() {
        this.load.image("background", backgroundImage);
        this.load.image("laser", bulletImage);
        this.load.image("enemy1_red", enemyImage);

        this.load.spritesheet("player-sprite", playerSprite, {
            frameWidth: 64,
            frameHeight: 64,
        });

        this.load.spritesheet("explosion-sprite", explosionSprite, {
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

        this.laserGroup = new LaserGroup(this);

        this.player = new Player(this, 100, 450);

        this.enemyGroup = new EnemyGroup(this);

        this.physics.add.collider(
            this.laserGroup,
            this.enemyGroup,
            function (laser, enemy) {
                enemy.explode();
                laser.destroy();
            }
        );
    }

    update() {
        this.player.update();
        this.laserGroup.update();
        this.enemyGroup.update();
    }
}
