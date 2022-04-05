// TODO: Create a variable options and pass it to ROT.display(options_go_here)

class Character {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    update() {}
}

class Player extends Character {
}


class Enemy extends Character {
    // TODO: overwrite update to always move pos right
}


// Game Manager
var Game = {
    /**
     * Display:
     *  draw(x, y, character)
     *  clear()
     */
    display: null,
    characters: [], // Maybe this?
    init: function () {
        let DisplayOptions = {
            background: "white",
            foreground: "yellow",
            height: 20,
            width: 20,
            forceSquareRatio: true,
            fontSize: 15,
        };

        this.display = new ROT.Display(DisplayOptions);
        document.body.appendChild(this.display.getContainer());
    },
    draw: function () {
        this.display.clear();
        this.display.draw(Player.x, Player.y, "@");
        this.display.draw(Enemy.x, Enemy.y, "#");
    },

};

document.addEventListener("DOMContentLoaded", function () {
    // Setup rot.js stuff
    Game.init();
    Game.draw();
    // Do something whenever we press a key
    document.addEventListener("keydown", function (event) {
        console.log(event);
        switch (event.key) {
            case "ArrowLeft":
                Player.x -= 1;
                break;
            case "ArrowRight":
                Player.x += 1;
                break;
            case "ArrowUp":
                Player.y -= 1;
                break;
            case "ArrowDown":
                Player.y += 1;
                break;

            // TODO other directions
        }
        Game.draw();
        // Draw game
    });
    // TODO: if the key is an arrow key or WASD, move the player variables and draw
});