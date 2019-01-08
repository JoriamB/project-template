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
        this.drawTextToCanvas("center", 25, "KenneyPixel", "white", text, x + (width * 0.5), y + (height * 0.65));
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
        this.drawTextToCanvas("center", fontSize, "KenneyPixel", textColor, text, X + maxWidth * 0.5, Y - this.getHeight() * 0.008);
    }
    ;
    drawBarstoCanvas(X, Y, currentHunger, currentEnergy, currentMood, currentHealth) {
        this.drawBarToCanvas(X, Y, this.getWidth() * 0.05, (this.getWidth() * 0.05 / 100) * currentHunger, this.getHeight() * 0.02, "black", "Honger:", 20);
        this.drawBarToCanvas(X, Y + this.getHeight() * 0.05, this.getWidth() * 0.05, (this.getWidth() * 0.05 / 100) * currentEnergy, this.getHeight() * 0.02, "black", "Energie:", 20);
        this.drawBarToCanvas(X, Y + this.getHeight() * 0.1, this.getWidth() * 0.05, (this.getWidth() * 0.05 / 100) * currentMood, this.getHeight() * 0.02, "black", "Stemming:", 20);
        this.drawBarToCanvas(X, Y + this.getHeight() * 0.15, this.getWidth() * 0.05, (this.getWidth() * 0.05 / 100) * currentHealth, this.getHeight() * 0.02, "black", "Gezondheid:", 20);
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
class Fish {
    constructor(xPos, yPos, src, width, height, canvas, speed, mouseListener, player, fishArray, index) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.src = src;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.speed = speed;
        this.movingRight = true;
        this.mouseListener = mouseListener;
        this.player = player;
        this.fishArray = fishArray;
        this.index = index;
    }
    ;
    move() {
        if (this.xPos < this.canvas.getWidth() - this.width &&
            this.movingRight) {
            this.xPos += this.speed;
        }
        else if (this.xPos > 0) {
            this.xPos -= this.speed;
            this.movingRight = false;
        }
        else if (this.xPos <= 0) {
            this.movingRight = true;
        }
    }
    ;
    draw() {
        this.move();
        if (this.movingRight) {
            this.canvas.drawButtonToCanvas(this.src + "Right.png", this.xPos, this.yPos, this.width, this.height, () => {
                this.fishArray.splice(this.getIndex(), 1);
                for (let i = 0; i < this.fishArray.length; i++) {
                    this.index = i;
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
        }
        else {
            this.canvas.drawButtonToCanvas(this.src + "Left.png", this.xPos, this.yPos, this.width, this.height, () => {
                this.fishArray.splice(this.getIndex(), 1);
                for (let i = 0; i < this.fishArray.length; i++) {
                    this.index = i;
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
        }
        ;
    }
    ;
    getIndex() {
        return this.index;
    }
}
;
function createFish(min, max, canvas, fishArray, mouseListener, player, srcArray) {
    for (let i = min - 1; i < max; i++) {
        let fish = new Fish(MathHelper.randomNumber(0, canvas.getWidth() - 50), MathHelper.randomNumber(0, canvas.getHeight() - 50), srcArray[MathHelper.randomNumber(0, srcArray.length - 1)], 50, 50, canvas, 2, mouseListener, player, fishArray, i);
        fishArray.push(fish);
    }
    ;
}
;
function getSrcArray() {
    return srcArray;
}
;
let srcArray = [
    "./Assets/FishingGame/fishBlue1",
    "./Assets/FishingGame/fishBlue2",
    "./Assets/FishingGame/fishGreen1",
    "./Assets/FishingGame/fishGreen2",
    "./Assets/FishingGame/fishPink1",
    "./Assets/FishingGame/fishPink2",
    "./Assets/FishingGame/fishRed1",
    "./Assets/FishingGame/fishRed2",
    "./Assets/FishingGame/fishYellow1",
    "./Assets/FishingGame/fishYellow2"
];
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
                case "Geography":
                    this.geographyquest.draw();
                    break;
                case "Math":
                    this.mathquest.draw();
                    break;
                case "History":
                    this.historyquest.draw();
                    break;
                case "SelectPlayer":
                    this.selectplayer.draw();
                    break;
                default:
                    this.map.draw();
                    break;
            }
            window.requestAnimationFrame(this.draw);
        };
        this.fishArray = [];
        this.mouseListener = new MouseHelper(false, false);
        this.canvas = new Canvas(document.getElementById("canvas"), this.mouseListener);
        this.player = new Player("./Assets/Female/Poses/female_slide.png", this.canvas, 5, 20, 80, 100, 60, this.canvas.getCenter().X, this.canvas.getCenter().Y, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, "SelectPlayer", 10000);
        this.park = new ParkView("./Assets/Backgrounds/park.jpg", this.canvas, this.player, this.mouseListener);
        this.hospital = new HospitalView("./Assets/Backgrounds/hospital.jpg", this.canvas, this.player, this.mouseListener);
        this.house = new HouseView("./Assets/Backgrounds/House.png", this.canvas, this.player, this.mouseListener);
        this.school = new SchoolView("./Assets/Backgrounds/classroom2.jpg", this.canvas, this.player, this.mouseListener);
        this.store = new StoreView("./Assets/Backgrounds/Store.jpg", this.canvas, this.player, this.mouseListener);
        this.restaurant = new RestaurantView("./Assets/Backgrounds/Restaurant3.jpg", this.canvas, this.player, this.mouseListener);
        this.map = new MapView("./Assets/Map/mapleeg.png", this.canvas, this.player, this.mouseListener);
        this.soccer = new SoccerView("./Assets/FootballGame/background.jpg", this.canvas, this.player, this.mouseListener);
        this.beach = new BeachView("./Assets/Backgrounds/beach.jpg", this.canvas, this.player, this.mouseListener, this.fishArray);
        this.fishing = new FishingView("./Assets/FishingGame/background1.jpg", this.canvas, this.player, this.mouseListener, this.fishArray);
        this.geographyquest = new GeographyQuest("./Assets/Backgrounds/Question.png", this.canvas, this.player, this.mouseListener);
        this.mathquest = new MathQuest("./Assets/Backgrounds/Question.png", this.canvas, this.player, this.mouseListener);
        this.historyquest = new HistoryQuest("./Assets/Backgrounds/Question.png", this.canvas, this.player, this.mouseListener);
        this.question = new QuestionView("./Assets/Backgrounds/Question.png", this.canvas, this.player, this.mouseListener, this.geographyquest, this.mathquest, this.historyquest);
        this.selectplayer = new SelectPlayer("./Assets/Backgrounds/SelectPlayer.jpg", this.canvas, this.player, this.mouseListener);
    }
    ;
}
;
window.addEventListener("load", init);
function init() {
    const LudosMundi = new Game();
    window.requestAnimationFrame(LudosMundi.draw);
}
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
                this.leftPressed = true;
                break;
            case 38:
            case 87:
                this.upPressed = true;
                break;
            case 40:
            case 83:
                this.downPressed = true;
                break;
            case 39:
            case 68:
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
                this.leftPressed = false;
                break;
            case 38:
            case 87:
                this.upPressed = false;
                break;
            case 40:
            case 83:
                this.downPressed = false;
                break;
            case 39:
            case 68:
                this.rightPressed = false;
                break;
        }
        ;
    }
    ;
}
;
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
    updateCoins() {
    }
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
    getSrc() {
        return this.src;
    }
    ;
    setSrc(src) {
        this.src = src;
    }
    ;
}
;
class Voetbal {
    constructor(score, xPos, Ypos) {
    }
    scoredGoal() {
        this.score++;
    }
}
class MathHelper {
    static randomNumber(min, max) {
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
    constructor(src, canvas, player, mouseListener, fishArray) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/FishingGame/boat.png", this.canvas.getWidth() * 0.339, this.canvas.getHeight() * 0.2555, this.canvas.getWidth() * 0.24, this.canvas.getHeight() * 0.32, () => {
                if (this.player.getEnergy() >= 10 &&
                    this.player.getMood() < 100) {
                    createFish(1, 5, this.canvas, this.fishArray, this.mouseListener, this.player, getSrcArray());
                    this.player.setLocation("Fishing");
                }
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
        };
        this.fishArray = fishArray;
    }
    ;
}
;
class FishingView extends BaseView {
    constructor(src, canvas, player, mouseListener, fishArray) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
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
            for (let i = 0; i < this.fishArray.length; i++) {
                this.fishArray[i].draw();
            }
            this.canvas.drawImageToCanvas("./Assets/FishingGame/hengel.png", this.mouseListener.getEventX() - (this.canvas.getWidth() * 0.05) / 2, this.mouseListener.getEventY() - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1);
        };
        this.fishArray = fishArray;
    }
    ;
}
;
class GeographyQuest extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setEnergy(this.player.getEnergy() - 15),
                    this.player.setHunger(this.player.getHunger() - 30);
                this.player.setLocation("School");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawTextToCanvas("center", 20, "Minecraft", "White", this.getCurrentQuestion().Question, this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.2);
            if (this.getCurrentQuestion().ImgSrc != "") {
                this.canvas.drawImageToCanvas(this.getCurrentQuestion().ImgSrc, this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.25) / 2, this.canvas.getHeight() * 0.4 - (this.canvas.getHeight() * 0.15) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.15);
            }
            ;
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer, this.canvas.getWidth() * 0.35 - (this.canvas.getWidth() * 0.25) / 2, this.canvas.getHeight() * 0.6 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.25, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer1, this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.25) / 2, this.canvas.getHeight() * 0.6 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.25, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer1 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer2, this.canvas.getWidth() * 0.35 - (this.canvas.getWidth() * 0.25) / 2, this.canvas.getHeight() * 0.75 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.25, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer2 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer3, this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.25) / 2, this.canvas.getHeight() * 0.75 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.25, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer3 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
        };
        this.GeoArray = [{
                ImgSrc: "",
                Question: "Hoeveel inwoners heeft Europa?",
                Answer: "741.1 miljoen",
                Answer1: "1 miljard",
                Answer2: " 884.6miljoen",
                Answer3: "1,3 miljard",
                RightAnswer: "741.1 miljoen"
            },
            {
                ImgSrc: "",
                Question: "Hoe ontstaat een Tsunami?",
                Answer: "Een scheet van een walvis",
                Answer1: "Aardbeving in de zee",
                Answer2: " Vulkaan die onder water uitbarst",
                Answer3: "Het vrijkomen van Oergassen",
                RightAnswer: "Aardbeving in de zee"
            },
            {
                ImgSrc: "",
                Question: "De hoofdstad van Noorwegen is:",
                Answer: "Reykjavik",
                Answer1: "Helsinki",
                Answer2: "Stockholm",
                Answer3: "Oslo",
                RightAnswer: "Oslo"
            },
            {
                ImgSrc: "",
                Question: "De hoofdstad van IJsland is:",
                Answer: "Reykjavik",
                Answer1: "Helsinki",
                Answer2: "Stockholm",
                Answer3: "Oslo",
                RightAnswer: "Reykjavik"
            },
            {
                ImgSrc: "",
                Question: "Hoe heet het vloeistof wat in een vulkaan zit als hij nog niet uitgebarsten is?:",
                Answer: "Lava",
                Answer1: "Magma",
                Answer2: "MM3O",
                Answer3: "Kwik",
                RightAnswer: "Magma"
            },
            {
                ImgSrc: "",
                Question: "Hoeveel provincies heeft Nederland",
                Answer: "12",
                Answer1: "9",
                Answer2: "11",
                Answer3: "8",
                RightAnswer: "12"
            },
            {
                ImgSrc: "",
                Question: "Hoeveel buurlanden heeft Duitsland?",
                Answer: "9",
                Answer1: "8",
                Answer2: "13",
                Answer3: "5",
                RightAnswer: "9"
            },
            {
                ImgSrc: "",
                Question: "Waaruit bestaat Magma?",
                Answer: "Geëxplodeerde brokstukken",
                Answer1: "Verhit modder",
                Answer2: "Vuur",
                Answer3: "Gesmolten gesteente",
                RightAnswer: "Gesmolten gesteente"
            },
            {
                ImgSrc: "",
                Question: "Hoe hoog vliegt een vliegtuig gemiddeld?",
                Answer: "32km",
                Answer1: "16km",
                Answer2: "25km",
                Answer3: "10km",
                RightAnswer: "10km"
            },
            {
                ImgSrc: "",
                Question: "Welk land is het grootst?",
                Answer: "Denemarken",
                Answer1: "Luxemburg",
                Answer2: "België",
                Answer3: "Nederland",
                RightAnswer: "Nederland"
            },
            {
                ImgSrc: "",
                Question: "Waar kun je het Ruhrgebied vinden?",
                Answer: "De Alpen",
                Answer1: "Zwitserland",
                Answer2: "Duitsland",
                Answer3: "Veluwe",
                RightAnswer: "Duitsland"
            },
            {
                ImgSrc: "",
                Question: "Waarvan is Warschau de hoofdstad",
                Answer: "Letland",
                Answer1: "Polen",
                Answer2: "Slovenië",
                Answer3: "Moldavië",
                RightAnswer: "Polen"
            },
            {
                ImgSrc: "",
                Question: "De hoofdstad van Kroatië is?",
                Answer: "Zadar",
                Answer1: "Zagreb",
                Answer2: "Sofia",
                Answer3: "Triëst",
                RightAnswer: "Zagreb"
            },
            {
                ImgSrc: "",
                Question: "Welke rivier stroomt niet door Frankrijk?",
                Answer: "Rhone",
                Answer1: "Loire",
                Answer2: "Reine",
                Answer3: "Seine",
                RightAnswer: "Reine"
            },
            {
                ImgSrc: "",
                Question: "Waar kun je de straat van Gibraltar vinden?",
                Answer: "Tussen Spanje en Marokko.",
                Answer1: "Tussen Griekenland en Italië.",
                Answer2: "Tussen Griekenland en Turkije.",
                Answer3: "Tussen Frankrijk en Engeland.",
                RightAnswer: "Tussen Spanje en Marokko."
            },
            {
                ImgSrc: "",
                Question: "Wat betekend de term vergrijzing?",
                Answer: "Jonge mensen die snel grijs worden",
                Answer1: "Het donker worden van de lucht",
                Answer2: "Dat er straks meer ouderen dan jongeren zijn",
                Answer3: "Het verslechteren van een stuk grond",
                RightAnswer: "Dat er straks meer ouderen dan jongeren zijn"
            },
            {
                ImgSrc: "",
                Question: "Wat is het bekendste exportproduct van Frankrijk?",
                Answer: "Croissant",
                Answer1: "Wijn",
                Answer2: "Kurk",
                Answer3: "Kaas",
                RightAnswer: "Wijn"
            },
            {
                ImgSrc: "./Assets/QuestionAK/France.jpg",
                Question: "Van welk land is deze vlag?",
                Answer: "Frankrijk",
                Answer1: "Duitsland",
                Answer2: "Servië",
                Answer3: "Nederland",
                RightAnswer: "Frankrijk"
            },
            {
                ImgSrc: "./Assets/QuestionAK/Italy.jpg",
                Question: "Welk land is hier te zien?",
                Answer: "Griekenland",
                Answer1: "Bulgarije",
                Answer2: "Malta",
                Answer3: "Italië",
                RightAnswer: "Italië"
            },
            {
                ImgSrc: "",
                Question: "In welk jaargetijde zal er het meeste water in een berg rivier zitten?",
                Answer: "In het voorjaar omdat de sneeuw op de bergen smelt.",
                Answer1: "In de winter omdat er dan heel veel sneeuw valt.",
                Answer2: "In de winter want dan regent het heel veel",
                Answer3: "In de herfst want dan worden de koeien weer op stal gezet.",
                RightAnswer: "In het voorjaar omdat de sneeuw op de bergen smelt."
            },
            {
                ImgSrc: "",
                Question: "Bij welk land hoort het eiland Corsica?",
                Answer: "Griekenland",
                Answer1: "Spanje",
                Answer2: "Frankrijk",
                Answer3: "Italië",
                RightAnswer: "Frankrijk"
            },
            {
                ImgSrc: "./Assets/QuestionAK/Croatia.png",
                Question: "Bij welk land hoort deze vlag?",
                Answer: "Letland",
                Answer1: "Kroatië",
                Answer2: "Oekraïne",
                Answer3: "Moldavië",
                RightAnswer: "Kroatië"
            },
            {
                ImgSrc: "./Assets/QuestionAK/Fin.jpg",
                Question: "Bij welk land hoort deze vlag?",
                Answer: "Finland",
                Answer1: "Polen",
                Answer2: "Zweden",
                Answer3: "IJsland",
                RightAnswer: "Finland"
            },
            {
                ImgSrc: "./Assets/QuestionAK/Rusland.png",
                Question: "Bij welk land hoort deze vlag?",
                Answer: "Letland",
                Answer1: "Rusland",
                Answer2: "Wit-Rusland",
                Answer3: "Oekraïne",
                RightAnswer: "Rusland"
            },
            {
                ImgSrc: "./Assets/QuestionAK/Sweden.png",
                Question: "Bij welk land hoort deze vlag?",
                Answer: "Letland",
                Answer1: "Denemarken",
                Answer2: "Finland",
                Answer3: "Zweden",
                RightAnswer: "Zweden"
            },
            {
                ImgSrc: "./Assets/QuestionAK/WitRusland.png",
                Question: "Bij welk land hoort deze vlag?",
                Answer: "Letland",
                Answer1: "Estland",
                Answer2: "Wit-Rusland",
                Answer3: "Oekraïne",
                RightAnswer: "Wit-Rusland"
            },
            {
                ImgSrc: "./Assets/QuestionAK/Zwitserland.png",
                Question: "Bij welk land hoort deze vlag?",
                Answer: "Zwitserland",
                Answer1: "Polen",
                Answer2: "Oostenrijk",
                Answer3: "Roemenië",
                RightAnswer: "Zwitserland"
            }];
        this.currentQuestion = this.GeoArray[0];
    }
    printQuestions() {
        let i = MathHelper.randomNumber(0, this.GeoArray.length - 1);
        console.log(this.GeoArray[i].Question, this.GeoArray[i].Answer);
    }
    ;
    setCurrentQuestion(currentQuestion) {
        this.currentQuestion = currentQuestion;
    }
    ;
    getCurrentQuestion() {
        return this.currentQuestion;
    }
    ;
}
;
;
class HistoryQuest extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setEnergy(this.player.getEnergy() - 15),
                    this.player.setHunger(this.player.getHunger() - 30);
                this.player.setLocation("School");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawTextToCanvas("center", 20, "Minecraft", "White", this.getCurrentQuestion().Question, this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.2);
            if (this.getCurrentQuestion().ImgSrc != "") {
                this.canvas.drawImageToCanvas(this.getCurrentQuestion().ImgSrc, this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.4 - (this.canvas.getHeight() * 0.15) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.15);
            }
            ;
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer, this.canvas.getWidth() * 0.35 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.6 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer1, this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.6 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer1 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer2, this.canvas.getWidth() * 0.35 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.75 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer2 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer3, this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.75 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer3 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
        };
        this.HistoryArray = [{
                ImgSrc: "",
                Question: "Hoe wordt de tijd tussen 1500 en 1600 genoemd?",
                Answer: "De Heksentijd",
                Answer1: "De Middeleeuwen",
                Answer2: "De Renaissance",
                Answer3: "De Gouden Eeuw",
                RightAnswer: "De Renaissance"
            }, {
                ImgSrc: "",
                Question: "Wanneer was de Gouden Eeuw?",
                Answer: "De zeventiende eeuw",
                Answer1: "De vijftiende eeuw",
                Answer2: "De achttiende eeuw",
                Answer3: "De zestiende eeuw",
                RightAnswer: "De zeventiende eeuw"
            }, {
                ImgSrc: "",
                Question: "Wie of wat is/was Max Havelaar?",
                Answer: "Een bedrijf",
                Answer1: "Een BN’er",
                Answer2: "Een boek",
                Answer3: "Een politicus",
                RightAnswer: "Een boek"
            }, {
                ImgSrc: "",
                Question: "In welke tijd leefde Napoleon?",
                Answer: "1624 - 1676",
                Answer1: "1812 - 1864",
                Answer2: "1769 - 1821 ",
                Answer3: "1534 - 1586",
                RightAnswer: "1769 - 1821"
            }, {
                ImgSrc: "",
                Question: "Van welk land was Napoleon keizer?",
                Answer: "Oostenrijk",
                Answer1: "Frankrijk",
                Answer2: "Duitsland ",
                Answer3: "Spanje",
                RightAnswer: "Frankrijk"
            }, {
                ImgSrc: "",
                Question: "Welke strijd heeft Napoleon verloren?",
                Answer: "Hiroshima",
                Answer1: "Waterloo",
                Answer2: "Gettysburg",
                Answer3: "De Franse Revolutie",
                RightAnswer: "Waterloo"
            }, {
                ImgSrc: "",
                Question: "Wie schilderde de Nachtwacht?",
                Answer: "Rembrandt van Rijn",
                Answer1: "Vincent van Gogh",
                Answer2: "Pablo Picasso",
                Answer3: "Johannes Vermeer",
                RightAnswer: "Rembrandt van Rijn"
            }, {
                ImgSrc: "",
                Question: "Wie heeft de Mona Lisa geschilderd?",
                Answer: "Pablo Picasso",
                Answer1: "Leonardo da Vinci",
                Answer2: "Salvador Dali ",
                Answer3: "Vincent van Gogh",
                RightAnswer: "Leonardo da Vinci"
            }, {
                ImgSrc: "",
                Question: "Welke schilder sneed in 1888 een stuk van zijn oor af?",
                Answer: "Leonardo da Vinci",
                Answer1: "Pablo Picasso",
                Answer2: "Johannes Vermeer",
                Answer3: "Vincent van Gogh",
                RightAnswer: "Vincent van Gogh"
            }, {
                ImgSrc: "",
                Question: "Welk politiek leider hield de bekende toespraak “I have a dream”?",
                Answer: "Geert Wilders",
                Answer1: "Martin Luther King",
                Answer2: "Nelson Mandela",
                Answer3: "Barack Obama",
                RightAnswer: "Martin Luther King"
            }, {
                ImgSrc: "",
                Question: " Ter ere van welke Grieks god werden de vroegere Olympische spelen in Griekenland gehouden?",
                Answer: "Apollo",
                Answer1: "Zeus",
                Answer2: "Athena ",
                Answer3: "Poseidon",
                RightAnswer: "Zeus"
            }, {
                ImgSrc: "",
                Question: "In welk werelddeel vond de eerste wereldoorlog plaats?",
                Answer: "Azie",
                Answer1: "Noord-Amerika",
                Answer2: "Afrika ",
                Answer3: "Europa",
                RightAnswer: "Europa"
            }, {
                ImgSrc: "",
                Question: "Wanneer eindigde de eerste wereldoorlog?",
                Answer: "1923",
                Answer1: "1889",
                Answer2: "1945 ",
                Answer3: "1918",
                RightAnswer: "1918"
            }, {
                ImgSrc: "",
                Question: "Waar kwam Michiel de Ruyter vandaan?",
                Answer: "Hoek van Holland",
                Answer1: "Vlissingen",
                Answer2: "Rotterdam ",
                Answer3: "Breskens",
                RightAnswer: "Vlissingen"
            }, {
                ImgSrc: "",
                Question: "Hoe ging Adolf Hitler dood?",
                Answer: "Hij werd geraakt door een bom",
                Answer1: "Hij werd neergeschoten",
                Answer2: "Hij werd opgehangen ",
                Answer3: "Hij pleegde zelfmoord",
                RightAnswer: "Hij pleegde zelfmoord"
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            }, {
                ImgSrc: "",
                Question: "",
                Answer: "",
                Answer1: "",
                Answer2: " ",
                Answer3: "",
                RightAnswer: ""
            },];
    }
    setCurrentQuestion(currentQuestion) {
        this.currentQuestion = currentQuestion;
    }
    ;
    getCurrentQuestion() {
        return this.currentQuestion;
    }
    ;
}
;
class HospitalView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.02, this.player.getCoin());
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", "Visit Doctor", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.9 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.1, () => {
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
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", "Sleep", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.9 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.1, () => {
                if (this.player.getHunger() >= 15 &&
                    this.player.getEnergy() < 80) {
                    this.player.setHunger(this.player.getHunger() - 3);
                    this.player.setEnergy(this.player.getEnergy() + 20);
                }
                else if (this.player.getHunger() >= 15 &&
                    this.player.getEnergy() < 100) {
                    this.player.setHunger(this.player.getHunger() - 3);
                    this.player.setEnergy(100);
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
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
            this.canvas.drawButtonToCanvas("./Assets/Map/park.png", 0, 0, this.canvas.getWidth() * 0.3, this.canvas.getHeight() * 0.328, () => {
                this.player.setLocation("Park");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/Map/winkel.png", this.canvas.getWidth() * 0.715, this.canvas.getHeight() * 0.48, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.16, () => {
                this.player.setLocation("Store");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/Map/school.png", this.canvas.getWidth() * 0.673, this.canvas.getHeight() * 0.263, this.canvas.getWidth() * 0.14, this.canvas.getHeight() * 0.16, () => {
                this.player.setLocation("School");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/Map/ziekenuus.png", this.canvas.getWidth() * 0.36, this.canvas.getHeight() * 0.0, this.canvas.getWidth() * 0.16, this.canvas.getHeight() * 0.215, () => {
                this.player.setLocation("Hospital");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/Map/restaurant.png", this.canvas.getWidth() * 0.475, this.canvas.getHeight() * 0.685, this.canvas.getWidth() * 0.056, this.canvas.getHeight() * 0.095, () => {
                this.player.setLocation("Restaurant");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/Map/house.png", this.canvas.getWidth() * 0.151, this.canvas.getHeight() * 0.765, this.canvas.getWidth() * 0.043, this.canvas.getHeight() * 0.093, () => {
                this.player.setLocation("House");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/Map/strand.png", this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.0, this.canvas.getWidth() * 0.1, this.canvas.getHeight(), () => {
                this.player.setLocation("Beach");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() * 0.09, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.player.move();
            this.canvas.drawImageToCanvas(this.player.getSrc(), this.player.getX(), this.player.getY(), this.player.getWidth(), this.player.getHeight());
        };
    }
    ;
}
;
class MathQuest extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setEnergy(this.player.getEnergy() - 15),
                    this.player.setHunger(this.player.getHunger() - 30);
                this.player.setLocation("School");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawTextToCanvas("center", 20, "Minecraft", "White", this.getCurrentQuestion().Question, this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.2);
            if (this.getCurrentQuestion().ImgSrc != "") {
                this.canvas.drawImageToCanvas(this.getCurrentQuestion().ImgSrc, this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.4 - (this.canvas.getHeight() * 0.15) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.15);
            }
            ;
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer, this.canvas.getWidth() * 0.35 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.6 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer1, this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.6 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer1 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer2, this.canvas.getWidth() * 0.35 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.75 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer2 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", this.getCurrentQuestion().Answer3, this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.2) / 2, this.canvas.getHeight() * 0.75 - (this.canvas.getHeight() * 0.075) / 2, this.canvas.getWidth() * 0.2, this.canvas.getHeight() * 0.075, () => {
                if (this.getCurrentQuestion().Answer3 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
        };
        this.MathArray = [{
                ImgSrc: "",
                Question: "0,4 miljoen kun je ook schrijven als?",
                Answer: "400.00",
                Answer1: "4 duizend",
                Answer2: "40 duizend",
                Answer3: "400.000",
                RightAnswer: "400.000"
            },
            {
                ImgSrc: "",
                Question: "8,3 miljard is 8 miljard en ...?",
                Answer: "30.000",
                Answer1: "300.000",
                Answer2: "300.000.000",
                Answer3: "300.000.000.000",
                RightAnswer: "300.000.000"
            },
            {
                ImgSrc: "",
                Question: "Hoeveel is een half miljoen?",
                Answer: "50.000",
                Answer1: "500.000",
                Answer2: "5000.000",
                Answer3: "5000",
                RightAnswer: "500.000"
            },
            {
                ImgSrc: "",
                Question: "Hoeveel is 0,8 miljoen?",
                Answer: "80.000",
                Answer1: "800.000",
                Answer2: "8.000.000",
                Answer3: "8000",
                RightAnswer: "800.000"
            },
            {
                ImgSrc: "",
                Question: "Hoeveel is honderdduizend?",
                Answer: "10.000",
                Answer1: "100.000",
                Answer2: "1000.000",
                Answer3: "1000.00",
                RightAnswer: "100.000"
            },
            {
                ImgSrc: "",
                Question: "2,8 miljoen kun je ook schrijven als...?",
                Answer: "28.000.000",
                Answer1: "280.000",
                Answer2: "2000800",
                Answer3: "2.800.000",
                RightAnswer: "2.800.000"
            },
            {
                ImgSrc: "",
                Question: "Floor en Daan gaan samen uit. Floor betaalt het drinken: € 5,- Daan betaalt het eten: € 15,-Ze willen de kosten samen delen. Hoeveel moet Floor aan Daan betalen?",
                Answer: "5",
                Answer1: "7.50",
                Answer2: "10",
                Answer3: "12.50",
                RightAnswer: "5"
            },
            {
                ImgSrc: "",
                Question: "Hoeveel is een kwart miljoen?",
                Answer: "400.000",
                Answer1: "250.000",
                Answer2: "25.000",
                Answer3: "2500",
                RightAnswer: "250.000"
            },
            {
                ImgSrc: "",
                Question: "Julia koopt vis op de markt. De vis weegt ongeveer anderhalve kilo. Ze moet € 12,05 betalen.Hoeveel kost de vis dan ongeveer per kilo?",
                Answer: "4",
                Answer1: "8",
                Answer2: "10",
                Answer3: "9.50",
                RightAnswer: "8"
            },
            {
                ImgSrc: "",
                Question: "Suzanne en Eva plukken 50 kg bramen.Ze doen de bramen in bakjes van 250 gram.Hoeveel bakjes van 250 gram kunnen ze in totaal vullen?",
                Answer: "50",
                Answer1: "20",
                Answer2: "200",
                Answer3: "150",
                RightAnswer: "200"
            },
            {
                ImgSrc: "",
                Question: "Vijf en een kwart miljoen tv-kijkers bij de finale schansspringen op de Olympische Spelen.Hoe schrijf je vijf en een kwart miljoen in cijfers? ",
                Answer: "5.025.000",
                Answer1: "5.000.250",
                Answer2: "5.250.000",
                Answer3: "5.000.025",
                RightAnswer: "5.250.000"
            },
            {
                ImgSrc: "",
                Question: "Gijs heeft dit jaar 40.152 km gereden. Vorig jaar reed hij 38.758 km.Hoeveel heeft Gijs dit jaar meer gereden?",
                Answer: "1.394 km",
                Answer1: "1.306 km",
                Answer2: "1.406 km",
                Answer3: "1.494 km",
                RightAnswer: "1.394 km"
            }, {
                ImgSrc: "",
                Question: "Rond 587,216 af op een honderdste. ",
                Answer: "587,2",
                Answer1: "600",
                Answer2: "587,22",
                Answer3: "587,21",
                RightAnswer: "587,22"
            }, {
                ImgSrc: "",
                Question: "Sarah wisselt 10 briefjes van € 20, - om in munten van 50 eurocent. Hoeveel munten krijgt ze?",
                Answer: "500",
                Answer1: "100",
                Answer2: "200",
                Answer3: "400",
                RightAnswer: "400"
            }, {
                ImgSrc: "",
                Question: "In een kopje zit 180 ml water. Dex vult dit aan met limonadesiroop totdat er in totaal 200 ml in het kopje zit. Uit hoeveel % limonadesiroop bestaat zijn drankje?",
                Answer: "1/10%",
                Answer1: "10%",
                Answer2: "25%",
                Answer3: "90%",
                RightAnswer: "10%"
            }, {
                ImgSrc: "",
                Question: "De breuk 102/124 is ongeveer gelijk aan:",
                Answer: "0,12",
                Answer1: "1,0",
                Answer2: "0,6",
                Answer3: "0,8",
                RightAnswer: "0,8"
            }, {
                ImgSrc: "",
                Question: "Een zwembad voor in de tuin is 15 meter lang, 8 meter en 1 meter hoog. Mees vult het bad voor 90% met water. Hoeveel m3 water laat Mees in het zwembad lopen?",
                Answer: "108 m3",
                Answer1: "210 m3",
                Answer2: "120 m3",
                Answer3: "12m3",
                RightAnswer: "108 m3"
            },
            {
                ImgSrc: "",
                Question: "82 000 - 370 =",
                Answer: "81 630",
                Answer1: "82 370",
                Answer2: "82 670",
                Answer3: "81 730",
                RightAnswer: "81 630"
            }, {
                ImgSrc: "",
                Question: "50 is ... % van 250",
                Answer: "125",
                Answer1: "1/5",
                Answer2: "20",
                Answer3: "5",
                RightAnswer: "20"
            }, {
                ImgSrc: "",
                Question: "4,5 x 2,5 =",
                Answer: "9,5",
                Answer1: "11,25",
                Answer2: "9,25",
                Answer3: "10,50",
                RightAnswer: "11,25"
            }, {
                ImgSrc: "",
                Question: "Eline fietst op haar elektrische fiets met een snelheid van 45 km per uur. Hoeveel meter legt ze af in 20 minuten?",
                Answer: "35km",
                Answer1: "135km",
                Answer2: "15 000m",
                Answer3: "13 500 m",
                RightAnswer: "15 000m"
            }, {
                ImgSrc: "",
                Question: "5,1 decameter is ...",
                Answer: "510m",
                Answer1: "51m",
                Answer2: "0,51m",
                Answer3: "5100m",
                RightAnswer: "51m"
            }, {
                ImgSrc: "",
                Question: "Om 15.40 uur zet Anissa een taart in de oven. De baktijd is 50 minuten. Hoe laat moet ze de taart uit de oven halen?",
                Answer: "5 over 4",
                Answer1: "5 over half 4",
                Answer2: "half 4",
                Answer3: "half 5",
                RightAnswer: "half 5"
            }, {
                ImgSrc: "",
                Question: "Rond het getal 4 629,405 af op tientallen.",
                Answer: "4 630",
                Answer1: "4 629,41",
                Answer2: "4 600",
                Answer3: "4 629,40",
                RightAnswer: "4 630"
            }, {
                ImgSrc: "",
                Question: "40% van alle juffen op school is ziek. Je kunt ook zeggen:",
                Answer: "4 op de 100 juffen is ziek.",
                Answer1: "40 juffen zijn ziek.",
                Answer2: "2 op de 5 juffen is ziek.",
                Answer3: "4 op de 5 juffen is ziek.",
                RightAnswer: "2 op de 5 juffen is ziek."
            },
            {
                ImgSrc: "",
                Question: "Een modelvliegtuigje is 15 cm lang. Het echte vliegtuig is 30 m lang. Welke schaal staat op de doos van het modelvliegtuigje?",
                Answer: "1:2",
                Answer1: "1:200",
                Answer2: "1:2 000",
                Answer3: "1:20",
                RightAnswer: "1:200"
            },
            {
                ImgSrc: "",
                Question: "2/3 deel is uit een zak zand van 15 kg weggelopen. Hoeveel kg zand zit er nog in de zak?",
                Answer: "3 kg",
                Answer1: "5 kg",
                Answer2: "10 kg",
                Answer3: "6 kg",
                RightAnswer: "5 kg"
            },
            {
                ImgSrc: "",
                Question: "Welk getal is 1/100 groter dan het getal 483,027?",
                Answer: "583,027",
                Answer1: "483,127",
                Answer2: "483,037",
                Answer3: "483,028",
                RightAnswer: "483,037"
            },
            {
                ImgSrc: "",
                Question: "0,627 + 1,05 =",
                Answer: "1,632",
                Answer1: "2,127",
                Answer2: "1,677",
                Answer3: "1,172",
                RightAnswer: "1,677"
            },
            {
                ImgSrc: "",
                Question: "Een papiercontainer is 10 meter lang, 5 meter breed en 4 meter hoog. Wat is de inhoud van de container?",
                Answer: "200 m3",
                Answer1: "19 m3",
                Answer2: "1 900 m3",
                Answer3: "2 000 m3",
                RightAnswer: "200 m3"
            },
            {
                ImgSrc: "",
                Question: "In een jaar tijd zijn 600.000 folders verspreid. Hoeveel zijn dat er ongeveer gemiddeld per week?",
                Answer: "5.000",
                Answer1: "14.000",
                Answer2: "12.000",
                Answer3: "50.000",
                RightAnswer: "12.000"
            },
            {
                ImgSrc: "",
                Question: "Mandy heeft een model van de Euromast.Het model is 9,25 cm hoog, terwijl de echte Euromast 185 m hoog is. Wat is de schaal van het model?",
                Answer: "1 : 20",
                Answer1: "1 : 2 000",
                Answer2: "1 : 2",
                Answer3: "1 : 200",
                RightAnswer: "1 : 2 000"
            },
            {
                ImgSrc: "",
                Question: "3/5 deel van de 800 kinderen op onze school zit op sport. Hoeveel kinderen op onze school zitten er op sport?",
                Answer: "600",
                Answer1: "560",
                Answer2: "160",
                Answer3: "480",
                RightAnswer: "480"
            },
            {
                ImgSrc: "",
                Question: "150% van 200 =",
                Answer: "300",
                Answer1: "250",
                Answer2: "225",
                Answer3: "275",
                RightAnswer: "300"
            },
            {
                ImgSrc: "",
                Question: "Robin koopt 2 zakjes drop voor € 3,90.Myrthe wil 3 zakjes drop kopen. Hoeveel moet zij betalen?",
                Answer: "€ 5,90",
                Answer1: "€ 4,90",
                Answer2: "€ 4,85",
                Answer3: "€ 5,85",
                RightAnswer: "€ 5,85"
            },
            {
                ImgSrc: "",
                Question: "Vorig jaar belde 95% van de mensen een verkeerd nummer. Welke verhouding past hierbij?",
                Answer: "1 op de 95 mensen belde een verkeerd nummer.",
                Answer1: "19 op de 20 mensen belde een verkeerd nummer.",
                Answer2: "5 op de 95 mensen belde een verkeerd nummer.",
                Answer3: "1 op de 20 mensen belde een verkeerd nummer.",
                RightAnswer: "19 op de 20 mensen belde een verkeerd nummer."
            },
            {
                ImgSrc: "",
                Question: "Jax rent rondjes om het winkelcentrum heen. Hij rent 7 rondjes van elk 230 m. Hoeveel meter rent hij in totaal?",
                Answer: "1 421 m",
                Answer1: "1 621 m",
                Answer2: "1 610 m",
                Answer3: "1 430 m",
                RightAnswer: "1 610 m"
            },
            {
                ImgSrc: "",
                Question: "32 : 1/4 =",
                Answer: "128",
                Answer1: "1 208",
                Answer2: "812",
                Answer3: "8",
                RightAnswer: "128"
            },
            {
                ImgSrc: "",
                Question: "In 2016 verkocht een grote internetwinkel 1 881 jassen. In 2017 verkocht het bedrijf 2 018 jassen. Hoeveel jassen zijn er in 2017 meer verkocht?",
                Answer: "1 277",
                Answer1: "1 208",
                Answer2: "137",
                Answer3: "139",
                RightAnswer: "137"
            },
            {
                ImgSrc: "",
                Question: "Uit de machine komt 0,25 liter ijs per minuut. Hoe lang duurt het om de emmer van 10 liter te vullen? ",
                Answer: "40 minuten",
                Answer1: "400 minuten",
                Answer2: "50 minuten",
                Answer3: "30 minuten",
                RightAnswer: "40 minuten"
            }
        ];
        this.currentQuestion = this.MathArray[0];
    }
    setCurrentQuestion(currentQuestion) {
        this.currentQuestion = currentQuestion;
    }
    ;
    getCurrentQuestion() {
        return this.currentQuestion;
    }
    ;
}
class ParkView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/FootballGame/goal1.png", this.canvas.getWidth() * 0.739, this.canvas.getHeight() * 0.2555, this.canvas.getWidth() * 0.24, this.canvas.getHeight() * 0.32, () => {
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
    constructor(src, canvas, player, mouseListener, geographyquest, mathquest, historyquest) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setEnergy(this.player.getEnergy() - 15),
                    this.player.setHunger(this.player.getHunger() - 30);
                this.player.setLocation("School");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", "Math", this.canvas.getWidth() * 0.25 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.49 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.075, () => {
                this.mathquest.setCurrentQuestion(this.mathquest.MathArray[MathHelper.randomNumber(0, this.mathquest.MathArray.length - 1)]);
                this.player.setLocation("Math");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", "History", this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.49 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.075, () => {
                this.historyquest.setCurrentQuestion(this.historyquest.HistoryArray[MathHelper.randomNumber(0, this.historyquest.HistoryArray.length - 1)]);
                this.player.setLocation("History");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", "Geography", this.canvas.getWidth() * 0.45 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.49 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.075, () => {
                this.geographyquest.setCurrentQuestion(this.geographyquest.GeoArray[MathHelper.randomNumber(0, this.geographyquest.GeoArray.length - 1)]);
                this.player.setLocation("Geography");
                this.mouseListener.setHasBeenClicked();
            });
        };
        this.geographyquest = geographyquest;
        this.mathquest = mathquest;
        this.historyquest = historyquest;
    }
    ;
}
class RestaurantView extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", "Eat", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.9 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.1, () => {
                if (this.player.getCoin() >= 15 &&
                    this.player.getHunger() < 80) {
                    this.player.setCoin(this.player.getCoin() - 15);
                    this.player.setHunger(this.player.getHunger() + 20);
                }
                else if (this.player.getCoin() >= 15 &&
                    this.player.getHunger() < 100) {
                    this.player.setCoin(this.player.getCoin() - 15);
                    this.player.setHunger(100);
                }
                ;
                this.mouseListener.setHasBeenClicked();
            });
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
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", "Play", this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.46 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.075, () => {
                if (this.player.getEnergy() >= 15 &&
                    this.player.getHunger() >= 30) {
                    this.player.setLocation("Question");
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
class SelectPlayer extends BaseView {
    constructor(src, canvas, player, mouseListener) {
        super(src, canvas, player, mouseListener);
        this.draw = () => {
            this.canvas.drawImageToCanvas(this.src, 0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.drawButtonToCanvas("./Assets/Player/Female/Poses/female_idle.png", this.canvas.getWidth() * 0.25, this.canvas.getHeight() * 0.5, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.2, () => {
                this.player.setSrc("./Assets/Player/Female/Poses/female_idle.png");
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawButtonToCanvas("./Assets/Player/Male/Poses/player_idle.png", this.canvas.getWidth() * 0.55, this.canvas.getHeight() * 0.5, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.2, () => {
                this.player.setSrc("./Assets/Player/Male/Poses/player_idle.png");
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
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
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setEnergy(this.player.getEnergy() - 15),
                    this.player.setHunger(this.player.getHunger() - 30);
                this.player.setLocation("Park");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawImageToCanvas("./Assets/FootballGame/goalkeeper.png", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.15) / 2, this.canvas.getHeight() * 0.55 - (this.canvas.getHeight() * 0.2) / 2, this.canvas.getWidth() * 0.15, this.canvas.getHeight() * 0.2);
            this.canvas.drawImageToCanvas("./Assets/FootballGame/football.png", this.mouseListener.getEventX() - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY() / this.canvas.getHeight())) / 2, this.mouseListener.getEventY() - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY() / this.canvas.getHeight())) / 2, this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY() / this.canvas.getHeight()), this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY() / this.canvas.getHeight()));
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
            this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png", this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, this.canvas.getWidth() * 0.025, this.canvas.getHeight() * 0.05, () => {
                this.player.setLocation("Map");
                this.mouseListener.setHasBeenClicked();
            });
            this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2, this.canvas.getHeight() * 0.04, this.player.getCoin());
            this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9, this.canvas.getHeight() * 0.05, this.player.getHunger(), this.player.getEnergy(), this.player.getMood(), this.player.getHealth());
            this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png", "Work", this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.1) / 2, this.canvas.getHeight() * 0.9 - (this.canvas.getHeight() * 0.1) / 2, this.canvas.getWidth() * 0.1, this.canvas.getHeight() * 0.1, () => {
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