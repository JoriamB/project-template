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
    drawButtonToCanvas() {
        let buttonElement = document.createElement("img");
        buttonElement.src = "./assets/Icons/ButtonsFREE/Home.png";
        buttonElement.addEventListener("load", () => {
            this.drawImageToCanvas(buttonElement.src, this.getWidth() / 2 - 111, this.getHeight() / 2 + 219, 100, 50);
            console.log();
        });
    }
    ;
    drawCoinToCanvas(X, Y, amount) {
        this.drawImageToCanvas("./Assets/Icons/ButtonsFREE/Coin.png", X, Y, 40, 40);
        this.drawTextToCanvas(20, "black", `: ${amount}`, X + 45, Y + 25);
    }
    drawBarToCanvas(X, Y, maxWidth, minWidth, height, maxColor, minColor, textColor, text, fontSize) {
        this.ctx.fillStyle = maxColor;
        this.ctx.fillRect(X, Y, maxWidth, height);
        this.ctx.fillStyle = minColor;
        this.ctx.fillRect(X, Y, minWidth, height);
        this.ctx.fillStyle = textColor;
        this.ctx.font = `${fontSize}px Arial`;
        this.ctx.fillText(text, X + maxWidth * 0.15, Y - 5);
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
    constructor(canvas) {
        this.draw = () => {
            this.canvas.clear();
            switch (this.player.getLocation()) {
                case "Park":
                    this.park.draw();
                    break;
                case "Park":
                    this.park.draw();
                    break;
                case "Hospital":
                    this.hospital.draw();
                    break;
                case "House":
                    this.house.draw();
                    break;
                case "School":
                    this.school.draw();
                    break;
                case "Store":
                    this.store.draw();
                    break;
                case "Restaurant":
                    this.restaurant.draw();
                    break;
                default:
                    this.map.draw();
                    break;
            }
            window.requestAnimationFrame(this.draw);
        };
        this.canvas = canvas;
        this.player = new Player("./Assets/Female/Poses/female_slide.png", this.canvas, 5, 100, 100, 100, 100, this.canvas.getCenter().X, this.canvas.getCenter().Y, 50, 50, "Map", 420);
        this.park = new ParkView("./assets/Backgrounds/park.jpg", this.canvas, this.player);
        this.hospital = new HospitalView("./assets/Backgrounds/hospital.jpg", this.canvas, this.player);
        this.house = new HouseView("./assets/Backgrounds/House.png", this.canvas, this.player);
        this.school = new SchoolView("./assets/Backgrounds/classroom.jpg", this.canvas, this.player);
        this.store = new StoreView("./assets/Backgrounds/Store.jpg", this.canvas, this.player);
        this.restaurant = new RestaurantView("./assets/Backgrounds/Restaurant.jpg", this.canvas, this.player);
        this.map = new MapView("./assets/Backgrounds/map.png", this.canvas, this.player);
    }
    ;
}
;
window.addEventListener("load", init);
function init() {
    const LudosMundi = new Game(new Canvas(document.getElementById("canvas")));
    window.requestAnimationFrame(LudosMundi.draw);
}
class Player {
    constructor(src, canvas, speed, health, hunger, energy, mood, xPos, yPos, width, height, location, coin) {
        this.keyboardListener = new KeyboardHelper(false, false, false, false);
        window.addEventListener("keydown", (event) => this.keyboardListener.keyDownHandler(event));
        window.addEventListener("keyup", (event) => this.keyboardListener.keyUpHandler(event));
        this.src = src;
        this.canvas = canvas;
        this.speed = speed;
        this.health = health;
        this.hunger = hunger;
        this.energy = energy;
        this.mood = mood;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.location = location;
        this.coin = coin;
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
            if (this.xPos < 0) {
                this.xPos = 0;
            }
            if (this.xPos + this.width > this.canvas.getWidth()) {
                this.xPos = this.canvas.getWidth() - this.width;
            }
            if (this.yPos + this.height > this.canvas.getHeight()) {
                this.yPos = this.canvas.getHeight() - this.height;
            }
            if (this.yPos < 0) {
                this.yPos = 0;
            }
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
    getX() {
        return this.xPos;
    }
    getY() {
        return this.yPos;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getLocation() {
        return this.location;
    }
    getCoin() {
        return this.coin;
    }
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
    keyDownHandler(event) {
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
class HospitalView extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHunger(), 20, "black", "green", "black", "Hunger:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getEnergy(), 20, "black", "red", "black", "Energy:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getMood(), 20, "black", "orange", "black", "Mood:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red", "black", "Health:", 20);
        };
    }
    ;
}
;
class HouseView extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHunger(), 20, "black", "green", "black", "Hunger:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getEnergy(), 20, "black", "red", "black", "Energy:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getMood(), 20, "black", "orange", "black", "Mood:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red", "black", "Health:", 20);
            this.player.move();
            this.canvas.drawImageToCanvas("./Assets/Female/Poses/female_walk1.png", this.player.getX(), this.player.getY(), this.player.getWidth(), this.player.getHeight());
        };
    }
    ;
}
;
class MapView extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.04, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 100, this.player.getHunger(), 20, "black", "green", "black", "Hunger:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.1, 100, this.player.getEnergy(), 20, "black", "red", "black", "Energy:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.15, 100, this.player.getMood(), 20, "black", "orange", "black", "Mood:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red", "black", "Health:", 20);
            this.player.move();
            this.canvas.drawImageToCanvas("./Assets/Female/Poses/female_walk1.png", this.player.getX(), this.player.getY(), this.player.getWidth(), this.player.getHeight());
        };
    }
    ;
}
;
class ParkView extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHunger(), 20, "black", "green", "black", "Hunger:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getEnergy(), 20, "black", "red", "black", "Energy:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getMood(), 20, "black", "orange", "black", "Mood:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red", "black", "Health:", 20);
        };
    }
    ;
}
;
class RestaurantView extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHunger(), 20, "black", "green", "black", "Hunger:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getEnergy(), 20, "black", "red", "black", "Energy:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getMood(), 20, "black", "orange", "black", "Mood:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red", "black", "Health:", 20);
        };
    }
    ;
}
;
class SchoolView extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHunger(), 20, "black", "green", "black", "Hunger:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getEnergy(), 20, "black", "red", "black", "Energy:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getMood(), 20, "black", "orange", "black", "Mood:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red", "black", "Health:", 20);
        };
    }
    ;
}
;
class StoreView extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawImageToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, 50, 50);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHunger(), 20, "black", "green", "black", "Hunger:", 20);
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.02, this.player.getCoin());
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getEnergy(), 20, "black", "red", "black", "Energy:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getMood(), 20, "black", "orange", "black", "Mood:", 20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red", "black", "Health:", 20);
        };
    }
    ;
}
;
//# sourceMappingURL=app.js.map