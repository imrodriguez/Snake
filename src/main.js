let game;
let scl = 40;

function setup() {
    game = new Game(40);
}

function draw() {
    game.draw();
}

function keyPressed() {
    game.keys();
}