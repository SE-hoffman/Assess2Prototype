// TODO: Create a variable options and pass it to ROT.display(options_go_here)

class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    update() { }
}

class Player extends Character {


}


class Enemy extends Character {
    patrolPath = [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 3],
        [2, 3],
        [1, 3],
        [0, 3],
        [0, 2],
        [0, 1],
    ];
}


// Game Manager
var Game = {
    /**
     * Display:
     *  draw(x, y, character)
     *  clear()
     */
    display: null,
    player: null,
    enemy: null,
    moveCounter: 0,
    init: function () {
        // Display stuff
        let DisplayOptions = {
            bg: "yellow",
            fg: "black",
            height: 20,
            width: 20,
            forceSquareRatio: true,
            fontSize: 15,
        };

        this.display = new ROT.Display(DisplayOptions);
        document.body.appendChild(this.display.getContainer());

        // Player stuff
        this.player = new Player(10, 10);
        this.enemy = new Enemy(18, 1);
    },
    draw: function () {
        this.display.clear();
        this.display.draw(this.player.x, this.player.y, "@");
        this.display.draw(this.enemy.x, this.enemy.y, "#");

    },
    update: function () {
        this.moveCounter++;
    }

};

document.addEventListener("DOMContentLoaded", function () {
    // Setup rot.js stuff
    Game.init();
    Game.draw();
    // Do something whenever we press a key
    document.addEventListener("keydown", function (event) {
        // Player movement
        //console.log(event);
        switch (event.key) {
            case "ArrowLeft":
                Game.player.x -= 1;
                break;
            case "ArrowRight":
                Game.player.x += 1;
                break;
            case "ArrowUp":
                Game.player.y -= 1;
                break;
            case "ArrowDown":
                Game.player.y += 1;
                break;
        }

        // Set the ememy on the patrol path
        // % is modulous math thing
        // console.log(Game.moveCounter % 4);

        // TODO: Get the patrol path for Game.enemy
        // console.log(Game.enemy.patrolPath[Game.moveCounter % 4]);

        // TODO: Set the x,y based on the current path position
        Game.enemy.x = Game.enemy.patrolPath[Game.moveCounter % Game.enemy.patrolPath.length][0];
        Game.enemy.y = Game.enemy.patrolPath[Game.moveCounter % Game.enemy.patrolPath.length][1];
        // Game things

        // Update the game
        Game.update();
        // Draw game
        Game.draw();
    });
    // TODO: if the key is an arrow key or WASD, move the player variables and draw
});