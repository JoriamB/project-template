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
    private fishingView : FishingView;

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
                        index : number,
                        fishingView : FishingView) {
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
        this.fishingView = fishingView;
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
                                                updateIndex(this.fishArray);
                                                this.fishingView.setScore(this.fishingView.getScore() + 1);
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
                                                updateIndex(this.fishArray);
                                                this.fishingView.setScore(this.fishingView.getScore() + 1);
                                                this.mouseListener.setHasBeenClicked()
                                            });
        };
    };

    /**
     * @access public
     * @method
     * Method to return the index
     */
    public getIndex () : number {
        return this.index;
    }

    /**
     * @access public
     * @method
     * @param index 
     * Method to set the index
     */
    public setIndex (index : number) {
        this.index = index;
    }
};
/**
 * @access public
 * @function
 * Function to update the indexes of the fishArray
 */
function updateIndex (fishArray : Array<Fish>) {
    for (let i = 0; i < fishArray.length; i++) {
        fishArray[i].setIndex(i);
    };
};

/**
 * @access public
 * @function
 * @param min 
 * @param max 
 * @param canvas 
 * @param fishArray 
 * @param mouseListener 
 * @param player 
 * @param srcArray 
 * @param fishingView
 * Function to create fish objects
 */
function createFish (   min : number,
                        max : number,
                        canvas : Canvas,
                        fishArray : Array<Fish>,
                        mouseListener : MouseHelper,
                        player : Player,
                        srcArray : Array<string>,
                        fishingView : FishingView) {
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
                            i,
                            fishingView);
        fishArray.push(fish);
    };
};

/**
 * @access public
 * @function
 * Function to return the array of sources
 */
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
