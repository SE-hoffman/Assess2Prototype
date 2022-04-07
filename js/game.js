// class blocks {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         blocklocations = [
//             []
//         ]
//     }
// }


var blocks = [
    [7, 6],
    [8, 6],
    [9, 6],
    [9, 7],
    [8, 7],
    [7, 7],
    [7, 8],
    [8, 8],
    [9, 8],
]

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
        document.getElementById("game").appendChild(this.display.getContainer());

        // Player stuff
        this.player = new Player(10, 10);
        this.enemy = new Enemy(0, 0);
    },
    draw: function () {
        this.display.clear();
        this.display.draw(this.player.x, this.player.y, "@");
        this.display.draw(this.enemy.x, this.enemy.y, "%");
        for (const block of blocks) {
            console.log(block);
            this.display.draw(block[0],block[1],"#");
        }
        //this.display.draw

    },
    update: function () {
        this.moveCounter++;
    }

};

// Basically linear search
function collision(position) {
    // If the position is in the blocks array, return false

    // Loop through the array
    for(const block of blocks) {
        // If current block is our position, return false
        if (block[0] == position[0] && block[1] == position[1]) {
            return false;
        }
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    // Setup rot.js stuff
    Game.init();
    Game.draw();
    // Do something whenever we press a key
    document.addEventListener("keydown", function (event) {
        // Player movement
        switch (event.key) {
            case "ArrowLeft":
                if (Game.player.x > 0 && collision([Game.player.x-1, Game.player.y])) {
                    Game.player.x -= 1;
                }
                break;
            case "ArrowRight":
                if (Game.player.x < 19 && collision([Game.player.x+1, Game.player.y])) {
                    Game.player.x += 1;
                }
                break;
            case "ArrowUp":
                if (Game.player.y > 0 && collision([Game.player.x, Game.player.y-1])) {
                    Game.player.y -= 1;
                }
                break;
            case "ArrowDown":
                if (Game.player.y < 19 && collision([Game.player.x, Game.player.y+1])) {
                    Game.player.y += 1;
                }
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
        console.log(Game.player);
    });
    // TODO: if the key is an arrow key or WASD, move the player variables and draw
});