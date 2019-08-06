class Food {
    constructor() {
        this.cols = floor(width / scl);
        this.rows = floor(height / scl);
        this.food = createVector(floor(random(this.cols)), floor(random(this.rows)));
        this.food.mult(scl);
    }

    show() {
        fill(255, 0, 100);
        rect(this.food.x, this.food.y, scl, scl);
    }
}