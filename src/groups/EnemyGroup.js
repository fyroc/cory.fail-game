import Phaser from "phaser";
import Enemy from "../sprites/Enemy";

export default class EnemyGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 30,
            key: "enemy1_red",
            active: false,
            visible: false,
            classType: Enemy,
        });

        this.spawn();
    }

    spawn() {
        for (var y = -10; y < -8; y++) {
            for (var x = 0; x < 10; x++) {
                let enemy = this.create(100 + x * 48, y * 50, "enemy1_red");
                enemy.name = "enemy1_red" + x.toString() + y.toString();
                enemy.body.velocity.y = 50 + Math.random() * 200;
            }
        }
    }

    update() {
        const enemies = this.getChildren();

        for (let enemy in enemies) {
            if (enemies[enemy].y > 800) {
                this.enemyOut(enemies[enemy]);
            }
        }

        if (this.countActive() === 0) {
            this.spawn();
        }
    }

    enemyOut(enemy) {
        enemy.y = 0;
        enemy.body.velocity.y = 50 + Math.random() * 200;
    }
}
