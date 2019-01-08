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
            //this.src = this.src + "Right.png";
        }
        else if (this.xPos > 0) {
            this.xPos -= this.speed;
            this.movingRight = false;
            //this.src = this.src + "Left.png";
        }
        else if (this.xPos <= 0) {
            this.movingRight = true;
        }
    };

    public draw () {
        this.move()
        this.canvas.drawButtonToCanvas( this.src,
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
    "fishBlue1",
    "fishBlue2",
    "fishGreen1",
    "fishGreen2",
    "fishPink1",
    "fishPink2",
    "fishRed1",
    "fishRed2",
    "fishYellow1",
    "fishYellow2"
];