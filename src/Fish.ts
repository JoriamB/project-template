class Fish {

    private xPos : number;
    private yPos : number;
    private src : string;
    private width : number;
    private height : number;
    private canvas : Canvas;
    private speed : number;
    private movingRight : boolean;
    private mouseListener : MouseHelper;
    private player : Player;
    private fishArray : Array<Fish>;
    private index : number;

    public constructor (xPos : number,
                        yPos : number,
                        src : string,
                        width : number,
                        height : number,
                        canvas : Canvas,
                        speed : number,
                        mouseListener : MouseHelper,
                        player : Player,
                        fishArray : Array<Fish>,
                        index : number) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.src = src;
        this.width = width;
        this.height = height;
        this.canvas = canvas
        this.speed = speed;
        this.movingRight = true;
        this.mouseListener = mouseListener;
        this.player = player;
        this.fishArray = fishArray;
        this.index = index
    };

    public move () {
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
    };

    public draw () {
        this.move()
        if (this.movingRight) {
            this.canvas.drawButtonToCanvas( this.src + "Right.png",
                                            this.xPos,
                                            this.yPos,
                                            this.width,
                                            this.height,
                                            () => {
                                                this.fishArray.splice(this.getIndex(), 1);
                                                for (let i = 0; i < this.fishArray.length; i++) {
                                                    this.index = i;
                                                };
                                                this.mouseListener.setHasBeenClicked()
                                            });
        }
        else {
            this.canvas.drawButtonToCanvas( this.src + "Left.png",
                                            this.xPos,
                                            this.yPos,
                                            this.width,
                                            this.height,
                                            () => {
                                                this.fishArray.splice(this.getIndex(), 1);
                                                for (let i = 0; i < this.fishArray.length; i++) {
                                                    this.index = i;
                                                };
                                                this.mouseListener.setHasBeenClicked()
                                            });
        };
    };

    public getIndex () : number {
        return this.index;
    }
};
function createFish (   min : number,
                        max : number,
                        canvas : Canvas,
                        fishArray : Array<Fish>,
                        mouseListener : MouseHelper,
                        player : Player,
                        srcArray : Array<string>) {
    for (let i = min - 1; i < max; i++) {
        let fish = new Fish(MathHelper.randomNumber(0, canvas.getWidth() - 50),
                            MathHelper.randomNumber(0, canvas.getHeight() - 50),
                            srcArray[MathHelper.randomNumber(0, srcArray.length - 1)],
                            50,
                            50,
                            canvas,
                            2,
                            mouseListener,
                            player,
                            fishArray,
                            i);
        fishArray.push(fish);
    };
};

function getSrcArray () : Array<string> {
    return srcArray;
};

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
