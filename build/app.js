class BaseView {
    constructor() {
    }
    ;
}
;
class Canvas {
    constructor(canvas, src) {
        this.canvas = canvas;
        this.src = src;
        this.ctx = this.canvas.getContext("2d");
        this.height = window.innerHeight;
        this.width = window.innerWidth;
    }
    ;
    drawTextToCanvas(fontsize, color, text, x, y) {
        this.ctx.font = `Arial ${fontsize}px`;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }
    ;
    drawImageToCanvas(src, x, y, width, height) {
        this.ctx.drawImage(src, x, y, width, height);
    }
    ;
    getCenter() {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };
    }
    ;
    getHeight() {
        return this.height;
    }
    ;
    getWidth() {
        return this.width;
    }
    ;
    clear() {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    ;
}
;
class Game {
    constructor() {
        this.canvas = new Canvas(document.getElementById("canvas"), "./assets/images/background.png");
        this.player = new Player(5, 100, 100, 100, 100);
    }
    ;
    draw() {
    }
    ;
}
;
class Player {
    constructor(speed, health, hunger, energy, mood) {
        this.keyboardListener = new KeyboardHelper(false, false, false, false);
        this.speed = speed;
        this.health = health;
        this.hunger = hunger;
        this.energy = energy;
        this.mood = mood;
    }
    ;
    move() {
    }
    ;
    isColliding() {
    }
    ;
    getHealth() {
        return this.health;
    }
    ;
    getHunger() {
        return this.hunger;
    }
    ;
    getEnergy() {
        return this.energy;
    }
    ;
    getMood() {
        return this.mood;
    }
    ;
}
;
class Progress {
    constructor(current, increment) {
        this.bar = document.querySelectorAll('#prog-bar > .progress-bar')[0];
        this.current = current;
        this.increment = increment;
    }
    update() {
        this.bar.style.width = this.current + '%';
    }
    countUp() {
        if ((this.current + this.increment) < 100) {
            this.current += this.increment;
        }
        else {
            this.current = 100;
            this.update();
        }
        ;
    }
    countDown() {
        if (0 < (this.current - this.increment)) {
            this.current -= this.increment;
            this.update();
        }
        else {
            this.current = 0;
            this.update();
        }
    }
}
let progress = new Progress(0, 10);
class KeyboardHelper {
    constructor(leftPressed, rightPressed, upPressed, downPressed) {
        this.leftPressed = leftPressed;
        this.rightPressed = rightPressed;
        this.upPressed = upPressed;
        this.downPressed = downPressed;
    }
    ;
    keydownHandler(event) {
        switch (event.keyCode) {
            case 37:
            case 65:
            case 74:
                this.leftPressed = true;
                break;
            case 38:
            case 87:
            case 73:
                this.upPressed = true;
                break;
            case 40:
            case 83:
            case 75:
                this.downPressed = true;
                break;
            case 39:
            case 68:
            case 76:
                this.rightPressed = true;
                break;
        }
        ;
    }
    ;
    keyUpHandler(event) {
        switch (event.keyCode) {
            case 37:
            case 65:
            case 74:
                this.leftPressed = false;
                break;
            case 38:
            case 87:
            case 73:
                this.upPressed = false;
                break;
            case 40:
            case 83:
            case 75:
                this.downPressed = false;
                break;
            case 39:
            case 68:
            case 76:
                this.rightPressed = false;
                break;
        }
        ;
    }
    ;
}
;
class MathHelper {
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    ;
}
;
class MouseHelper {
    constructor() {
    }
    ;
}
;
//# sourceMappingURL=app.js.map