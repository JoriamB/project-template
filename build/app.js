class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }
    ;
    drawTextToCanvas(fontsize, color, text, x, y) {
        this.ctx.font = `${fontsize}px Arial`;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }
    ;
    drawImageToCanvas(src, x, y, width, height) {
        let image = new Image();
        image.src = src;
        this.ctx.drawImage(image, x, y, width, height);
    }
    ;
    drawBarToCanvas(X, Y, maxWidth, minWidth, height, maxColor, minColor) {
        this.ctx.fillStyle = maxColor;
        this.ctx.fillRect(X, Y, maxWidth, height);
        this.ctx.fillStyle = minColor;
        this.ctx.fillRect(X, Y, minWidth, height);
    }
    ;
    getCenter() {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };
    }
    ;
    getHeight() {
        return this.canvas.height;
    }
    ;
    getWidth() {
        return this.canvas.width;
    }
    ;
    clear() {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    ;
}
;
class Game {
    constructor(canvas, player) {
        this.draw = () => {
            this.canvas.clear();
            this.park.draw();
            window.requestAnimationFrame(this.draw);
        };
        this.canvas = canvas;
        this.player = player;
        this.park = new Park("./assets/Backgrounds/park.jpg", this.canvas, this.player);
        this.hospital = new Hospital("./assets/Backgrounds/hospital.jpg", this.canvas, this.player);
        this.house = new House("./assets/Backgrounds/house.jpg", this.canvas, this.player);
        this.school = new School("./assets/Backgrounds/school.jpg", this.canvas, this.player);
        this.store = new Store("./assets/Backgrounds/store.jpg", this.canvas, this.player);
        this.restaurant = new Restaurant("./assets/Backgrounds/restaurant.jpg", this.canvas, this.player);
    }
    ;
}
;
window.addEventListener("load", init);
function init() {
    const LudosMundi = new Game(new Canvas(document.getElementById("canvas")), new Player(5, 100, 100, 100, 100));
    window.requestAnimationFrame(LudosMundi.draw);
}
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
        if (this.keyboardListener.leftPressed ||
            this.keyboardListener.rightPressed ||
            this.keyboardListener.upPressed ||
            this.keyboardListener.downPressed) {
            if (this.keyboardListener.leftPressed)
                this.xPos -= this.speed;
            else if (this.keyboardListener.rightPressed)
                this.xPos += this.speed;
            else if (this.keyboardListener.upPressed)
                this.yPos -= this.speed;
            else if (this.keyboardListener.downPressed)
                this.yPos += this.speed;
        }
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
class BaseView {
    constructor(src, canvas, player) {
        this.src = src;
        this.canvas = canvas;
        this.player = player;
    }
    ;
}
;
class Hospital extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red");
        };
    }
    ;
}
;
class House extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red");
        };
    }
    ;
}
;
class Park extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red");
        };
    }
    ;
}
;
class Restaurant extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red");
        };
    }
    ;
}
;
class School extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red");
        };
    }
    ;
}
;
class Store extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red");
        };
    }
    ;
}
;
//# sourceMappingURL=app.js.map