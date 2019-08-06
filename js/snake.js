class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.length = 0;
        this.direction = '';
        this.tail = [];
    }

    move() {
        if (this.length === this.tail.length) {
            this.tail.map((t, index) => {
                this.tail[index] = this.tail[index + 1];
            })
        }
        this.tail[this.length - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    checkDeath() {
        this.tail.map((t) => {
            let d = dist(this.x, this.y, t.x, t.y);
            if (d < 1) {
                this.length = 0;
                this.tail = [];
                noLoop();
            }
        })
    }

    show() {
        fill(255);
        for (let i = 0; i < this.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }

    eat(food) {
        let d = dist(this.x, this.y, food.food.x, food.food.y);
        if (d < 1) {
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    changeDirection(dir) {
        if (!dir) dir = this.direction
        switch (dir) {
            case 'up':
                if (this.direction != 'down') {
                    this.xspeed = 0;
                    this.yspeed = -1;
                }
                break;
            case 'down':
                if (this.direction != 'up') {
                    this.xspeed = 0;
                    this.yspeed = 1;
                }
                break;
            case 'right':
                if (this.direction != 'left') {
                    this.xspeed = 1;
                    this.yspeed = 0;
                }
                break;
            case 'left':
                if (this.direction != 'right') {
                    this.xspeed = -1;
                    this.yspeed = 0;
                }
                break;
        }
        this.direction = dir;
    }
}