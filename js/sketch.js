let snake;
let food;
let scl = 40;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    frameRate(10);
    food = new Food();
}

function draw() {
    background(51);
    snake.checkDeath();
    snake.move();
    snake.show();
    if(snake.eat(food)) {
        food = new Food();
    }
    food.show();
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            snake.changeDirection('up');
            break;
        case DOWN_ARROW:
            snake.changeDirection('down');
            break;
        case RIGHT_ARROW:
            snake.changeDirection('right');
            break;
        case LEFT_ARROW:
            snake.changeDirection('left');
            break;
    }
}