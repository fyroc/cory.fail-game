import Phaser from "phaser";
import Main from "./scenes/Main";

const config = {
    type: Phaser.AUTO,
    parent: "cory.fail-game",
    scale: {
        parent: "cory.fail-game",
        width: 600,
        height: 800,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: [Main],
};

const game = new Phaser.Game(config);
