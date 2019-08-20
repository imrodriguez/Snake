class Game {
    constructor() {
        this.snake;
        this.food;

        createCanvas(600, 600);
        this.snake = new Snake();
        frameRate(10);
        this.food = new Food();
    }

    draw() {
        background(51);
        this.snake.checkDeath();
        this.snake.move();
        this.snake.show();
        if (this.snake.eat(this.food)) {
            this.food = new Food();
        }
        this.food.show();
    }

    keys() {
        switch (keyCode) {
            case UP_ARROW:
                this.snake.changeDirection('up');
                break;
            case DOWN_ARROW:
                this.snake.changeDirection('down');
                break;
            case RIGHT_ARROW:
                this.snake.changeDirection('right');
                break;
            case LEFT_ARROW:
                this.snake.changeDirection('left');
                break;
        }
    }
}