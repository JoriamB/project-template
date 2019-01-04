class Canvas {
    constructor(canvas, mouseListener) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.mouseListener = mouseListener;
    }
    ;
    drawTextToCanvas(alignment, fontsize, fontFamily, color, text, x, y) {
        this.ctx.textAlign = alignment;
        this.ctx.font = `${fontsize}px ${fontFamily}`;
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
    drawButtonToCanvas(src, x, y, width, height, callback) {
        this.drawImageToCanvas(src, x, y, width, height);
        if (this.mouseListener.getMouseStatus() == true &&
            this.mouseListener.getHasBeenClicked() != true &&
            this.mouseListener.getEventX() > x &&
            this.mouseListener.getEventX() < x + width &&
            this.mouseListener.getEventY() > y &&
            this.mouseListener.getEventY() < y + height) {
            callback();
        }
        ;
    }
    ;
    drawTextButtonToCanvas(src, text, x, y, width, height, callback) {
        this.drawImageToCanvas(src, x, y, width, height);
        if (this.mouseListener.getMouseStatus() == true &&
            this.mouseListener.getHasBeenClicked() != true &&
            this.mouseListener.getEventX() > x &&
            this.mouseListener.getEventX() < x + width &&
            this.mouseListener.getEventY() > y &&
            this.mouseListener.getEventY() < y + height) {
            callback();
        }
        ;
        this.drawTextToCanvas("center", 25, "Minecraft", "white", text, x + (width * 0.5), y + (height * 0.65));
    }
    ;
    drawCoinToCanvas(X, Y, amount) {
        this.drawImageToCanvas("./Assets/Icons/ButtonsFREE/Coin.png", X, Y, this.getWidth() * 0.025, this.getHeight() * 0.05);
        this.drawTextToCanvas("left", 20, "Minecraft", "black", `: ${amount}`, X + this.getWidth() * 0.03, Y + this.getHeight() * 0.03);
    }
    ;
    drawBarToCanvas(X, Y, maxWidth, minWidth, height, textColor, text, fontSize) {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(X, Y, maxWidth, height);
        if (minWidth / maxWidth > 0.75) {
            this.ctx.fillStyle = "green";
        }
        else if (minWidth / maxWidth > 0.25) {
            this.ctx.fillStyle = "orange";
        }
        else {
            this.ctx.fillStyle = "red";
        }
        ;
        this.ctx.fillRect(X, Y, minWidth, height);
        this.drawTextToCanvas("center", fontSize, "Minecraft", textColor, text, X + maxWidth * 0.5, Y - this.getHeight() * 0.008);
    }
    ;
    drawBarstoCanvas(X, Y, currentHunger, currentEnergy, currentMood, currentHealth) {
        this.drawBarToCanvas(X, Y, this.getWidth() * 0.05, (this.getWidth() * 0.05 / 100) * currentHunger, this.getHeight() * 0.02, "black", "Hunger:", 20);
        this.drawBarToCanvas(X, Y + this.getHeight() * 0.05, this.getWidth() * 0.05, (this.getWidth() * 0.05 / 100) * currentEnergy, this.getHeight() * 0.02, "black", "Energy:", 20);
        this.drawBarToCanvas(X, Y + this.getHeight() * 0.1, this.getWidth() * 0.05, (this.getWidth() * 0.05 / 100) * currentMood, this.getHeight() * 0.02, "black", "Mood:", 20);
        this.drawBarToCanvas(X, Y + this.getHeight() * 0.15, this.getWidth() * 0.05, (this.getWidth() * 0.05 / 100) * currentHealth, this.getHeight() * 0.02, "black", "Health:", 20);
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
    updateScreenSize() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }
    ;
}
;
class Game {
    constructor() {
        this.draw = () => {
            this.canvas.clear();
            this.player.updatePlayer();
            this.canvas.updateScreenSize();
            switch (this.player.getLocation()) {
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
                case "Soccer":
                    this.soccer.draw();
                    break;
                case "Beach":
                    this.beach.draw();
                    break;
                case "Fishing":
                    this.fishing.draw();
                    break;
                case "Question":
                    this.question.draw();
                    break;
                default:
                    this.map.draw();
                    break;
            }
            window.requestAnimationFrame(this.draw);
        };
        this.mouseListener = new MouseHelper(false, false);
        this.canvas = new Canvas(document.getElementById("canvas"), this.mouseListener);
        this.player = new Player("./Assets/Female/Poses/female_slide.png", this.canvas, 5, 20, 80, 100, 60, this.canvas.getCenter().X, this.canvas.getCenter().Y, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, "School", 10000);
        this.park = new ParkView("./assets/Backgrounds/park.jpg", this.canvas, this.player, this.mouseListener);
        this.hospital = new HospitalView("./assets/Backgrounds/hospital.jpg", this.canvas, this.player, this.mouseListener);
        this.house = new HouseView("./assets/Backgrounds/House.png", this.canvas, this.player, this.mouseListener);
        this.school = new SchoolView("./assets/Backgrounds/classroom2.jpg", this.canvas, this.player, this.mouseListener);
        this.store = new StoreView("./assets/Backgrounds/Store.jpg", this.canvas, this.player, this.mouseListener);
        this.restaurant = new RestaurantView("./assets/Backgrounds/Restaurant2.jpg", this.canvas, this.player, this.mouseListener);
        this.map = new MapView("./assets/map/mapleeg.png", this.canvas, this.player, this.mouseListener);
        this.soccer = new SoccerView("./assets/FootballGame/background.jpg", this.canvas, this.player, this.mouseListener);
        this.beach = new BeachView("./assets/Backgrounds/beach.jpg", this.canvas, this.player, this.mouseListener);
        this.fishing = new FishingView("./assets/FishingGame/background1.jpg", this.canvas, this.player, this.mouseListener);
        this.question = new QuestionView("./assets/Backgrounds/Question.png", this.canvas, this.player, this.mouseListener);
    }
    ;
}
;
window.addEventListener("load", init);
function init() {
    const LudosMundi = new Game();
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
            if (this.keyboardListener.leftPressed) {
                this.xPos -= this.speed;
            }
            else if (this.keyboardListener.rightPressed) {
                this.xPos += this.speed;
            }
            else if (this.keyboardListener.upPressed) {
                this.yPos -= this.speed;
            }
            else if (this.keyboardListener.downPressed) {
                this.yPos += this.speed;
            }
            if (this.xPos < 0) {
                this.xPos = 0;
            }
            ;
            if (this.xPos + this.width > this.canvas.getWidth()) {
                this.xPos = this.canvas.getWidth() - this.width;
            }
            ;
            if (this.yPos + this.height > this.canvas.getHeight()) {
                this.yPos = this.canvas.getHeight() - this.height;
            }
            ;
            if (this.yPos < 0) {
                this.yPos = 0;
            }
            ;
        }
        ;
    }
    ;
    updatePlayer() {
        this.width = this.canvas.getWidth() * 0.025;
        this.height = this.canvas.getHeight() * 0.05;
    }
    ;
    getHealth() {
        return this.health;
    }
    ;
    setHealth(amount) {
        this.health = amount;
    }
    ;
    getHunger() {
        return this.hunger;
    }
    ;
    setHunger(amount) {
        this.hunger = amount;
    }
    ;
    getEnergy() {
        return this.energy;
    }
    ;
    setEnergy(amount) {
        this.energy = amount;
    }
    ;
    getMood() {
        return this.mood;
    }
    ;
    setMood(amount) {
        this.mood = amount;
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
    setLocation(location) {
        this.location = location;
    }
    getCoin() {
        return this.coin;
    }
    ;
    setCoin(coin) {
        this.coin = coin;
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
    constructor(mousePressed, hasBeenClicked) {
        this.mousePressed = mousePressed;
        this.hasBeenClicked = hasBeenClicked;
        window.addEventListener("mousedown", (event) => this.keyDownHandler(event));
        window.addEventListener("mouseup", (event) => this.keyUpHandler(event));
        window.addEventListener("mousemove", (event) => this.updatePosition(event));
    }
    ;
    keyDownHandler(event) {
        this.mousePressed = true;
    }
    ;
    keyUpHandler(event) {
        this.mousePressed = false;
        this.hasBeenClicked = false;
    }
    ;
    setHasBeenClicked() {
        this.hasBeenClicked = true;
    }
    ;
    getHasBeenClicked() {
        return this.hasBeenClicked;
    }
    getMouseStatus() {
        return this.mousePressed;
    }
    ;
    updatePosition(event) {
        this.x = event.x;
        this.y = event.y;
    }
    ;
    getEventX() {
        return this.x;
    }
    ;
    getEventY() {
        return this.y;
    }
    ;
}
;
class BaseView {
    constructor(src, canvas, player, mouseListener) {
        this.src = src;
        this.canvas = canvas;
        this.player = player;
        this.mouseListener = mouseListener;
    }
    ;
}
;
class BeachView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFree/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./assets/FishingGame/boat.png", this.canvas.getWidth() * 0.339, this.canvas.getHeight() * 0.2555, this.canvas.getWidth() * 0.24, this.canvas.getHeight() * 0.32, () => {
                if (this.player.getEnergy() >= 10 &&
                    this.player.getMood() < 100) {
                    this.player.setLocation("Fishing");
                }
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
        };
    }
    ;
}
;
class FishingView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                if (this.player.getMood() < 70) {
                    this.player.setEnergy(this.player.getEnergy() - 10);
                    this.player.setMood(this.player.getMood() + 30);
                }
                else {
                    this.player.setEnergy(this.player.getEnergy() - 10);
                    this.player.setMood(100);
                }
                ;
                this.player.setLocation("Beach");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawImageToCanvas("./assets/FishingGame/fishblue1.png", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.15) / 2, this.canvas.getHeight() * 0.55 - (this.canvas.getHeight() * 0.2) / 2, this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1);
            this.canvas.drawImageToCanvas("./assets/FishingGame/hengel.png", this.mouseListener.getEventX() - (this.canvas.getWidth() * 0.05) / 2, this.mouseListener.getEventY() - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1);
        };
    }
    ;
}
;
class HospitalView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.02, this.player.getCoin());
            this.canvas.drawTextButtonToCanvas("./assets/Icons/ButtonsFREE/PlayBlank.png", "Visit Doctor", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.9 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.1, () => {
                if (this.player.getCoin() >= 15 &&
                    this.player.getHealth() < 80) {
                    this.player.setCoin(this.player.getCoin() - 15);
                    this.player.setHealth(this.player.getHealth() + 20);
                }
                else if (this.player.getCoin() >= 15 &&
                    this.player.getHealth() < 100) {
                    this.player.setCoin(this.player.getCoin() - 15);
                    this.player.setHealth(100);
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
        };
    }
    ;
}
;
class HouseView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
        };
    }
    ;
}
;
class MapView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/map/park.png", 0, 0, this.canvas.getWidth() * 0.3, this.canvas.getHeight() * 0.328, () => {
                this.player.setLocation("Park");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./assets/map/winkel.png", this.canvas.getWidth() * 0.715, this.canvas.getHeight() * 0.48, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.16, () => {
                this.player.setLocation("Store");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./assets/map/school.png", this.canvas.getWidth() * 0.673, this.canvas.getHeight() * 0.263, this.canvas.getWidth() * 0.14, this.canvas.getHeight() * 0.16, () => {
                this.player.setLocation("School");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./assets/map/ziekenuus.png", this.canvas.getWidth() * 0.36, this.canvas.getHeight() * 0.0, this.canvas.getWidth() * 0.16, this.canvas.getHeight() * 0.215, () => {
                this.player.setLocation("Hospital");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./assets/map/restaurant.png", this.canvas.getWidth() * 0.475, this.canvas.getHeight() * 0.685, this.canvas.getWidth() * 0.056, this.canvas.getHeight() * 0.095, () => {
                this.player.setLocation("Restaurant");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./assets/map/house.png", this.canvas.getWidth() * 0.151, this.canvas.getHeight() * 0.765, this.canvas.getWidth() * 0.043, this.canvas.getHeight() * 0.093, () => {
                this.player.setLocation("House");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./assets/map/strand.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.0, this.canvas.getWidth() * 0.1, this.canvas.getHeight(), () => {
                this.player.setLocation("Beach");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() * 0.09, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.player.move();
            this.canvas.drawImageToCanvas("./Assets/Player/Female/Poses/female_walk1.png", this.player.getX(), this.player.getY(), this.player.getWidth(), this.player.getHeight());
        };
    }
    ;
}
;
class ParkView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFree/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./assets/FootballGame/goal1.png", this.canvas.getWidth() * 0.739, this.canvas.getHeight() * 0.2555, this.canvas.getWidth() * 0.24, this.canvas.getHeight() * 0.32, () => {
                if (this.player.getEnergy() >= 15 &&
                    this.player.getHunger() >= 30) {
                    this.player.setLocation("Soccer");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
        };
    }
    ;
}
;
class QuestionView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setEnergy(this.player.getEnergy() - 15),
                    this.player.setHunger(this.player.getHunger() - 30);
                this.player.setLocation("School");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
        };
    }
    ;
}
class RestaurantView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
        };
    }
    ;
}
;
class SchoolView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./assets/Icons/ButtonsFREE/PlayBlank.png", "Play", this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.46 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.075, () => {
                this.player.setLocation("Question");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
        };
    }
    ;
}
;
class SoccerView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setEnergy(this.player.getEnergy() - 15),
                    this.player.setHunger(this.player.getHunger() - 30);
                this.player.setLocation("Park");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawImageToCanvas("./assets/FootballGame/goalkeeper.png", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.15) / 2, this.canvas.getHeight() * 0.55 - (this.canvas.getHeight() * 0.2) / 2, this.canvas.getWidth() * 0.15, this.canvas.getHeight() * 0.2);
            this.canvas.drawImageToCanvas("./assets/FootballGame/football.png", this.mouseListener.getEventX() - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY() / this.canvas.getHeight())) / 2, this.mouseListener.getEventY() - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY() / this.canvas.getHeight())) / 2, this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY() / this.canvas.getHeight()), this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY() / this.canvas.getHeight()));
        };
    }
    ;
}
;
class StoreView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawTextButtonToCanvas("./assets/Icons/ButtonsFREE/PlayBlank.png", "Work", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.9 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.1, () => {
                if (this.player.getEnergy() >= 5) {
                    this.player.setCoin(this.player.getCoin() + 5);
                    this.player.setEnergy(this.player.getEnergy() - 5);
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
        };
    }
    ;
}
;
//# sourceMappingURL=app.js.map