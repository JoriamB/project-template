class Tasklist {

    private src : string;
    private canvas : Canvas;
    private x : number;
    private y : number;
    private width : number;
    private height : number;
    private fontSize : number;
    private isHidden : boolean;
    private mouseListener : MouseHelper;
    private player : Player
    private taskArray : Array<Task>;

    public constructor (    src: string,
                            canvas : Canvas,
                            x : number,
                            y : number,
                            width : number,
                            heigth : number,
                            fontSize : number,
                            isHidden : boolean,
                            mouseListener : MouseHelper,
                            player : Player
                            ) {
        this.src = src;
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = heigth;
        this.fontSize = fontSize;
        this.isHidden = isHidden;
        this.mouseListener = mouseListener;
        this.player = player;
        this.taskArray = [{
            id: 0,
            task: `Ga 5 keer naar school.`,
        },
        {
            id: 1,
            task: "Vul jouw gezondheid aan."
        },
        {
            id: 2,
            task: "Beantwoord 5 quiz vragen."
        },
        {
            id: 3,
            task: "Ga naar het werk."
        },
        {
            id: 4,
            task: "Speel een minigame."
        },{
            id: 5,
            task: "Ga naar huis om te slapen."
        },
        {
            id: 6,
            task: "Eet minstens 3 keer per dag."
        },];
    };

    public draw () : void {
        this.updateTasks();
        if (!this.isHidden) {
        this.canvas.drawRectangle(  "white",
                                    this.x,
                                    this.y,
                                    this.width,
                                    this.height);
        };
        this.canvas.drawButtonToCanvas( "./Assets/images/takenlijstIcon.jpg",
                                        this.x,
                                        this.y,
                                        this.canvas.getWidth() * 0.02,
                                        this.canvas.getHeight() * 0.03,
                                        () => {
                                           if (this.isHidden == false) {
                                                this.isHidden = true;
                                            }
                                            else {
                                                this.isHidden = false;
                                            };
                                            this.mouseListener.setHasBeenClicked();
                                        });
        if (!this.isHidden) {
            this.canvas.drawTextToCanvas(   "center",
                                            2 * this.fontSize,
                                            "Minecraft",
                                            "black",
                                            "Takenlijst",
                                            this.x + this.width/2,
                                            this.y + this.canvas.getHeight() * 0.05);
            for (let i = 0; i < this.taskArray.length; i++) {
                this.canvas.drawTextToCanvas(   "center",
                                                this.fontSize,
                                                "Minecraft",
                                                "black",
                                                this.taskArray[i].task,
                                                this.x + this.width/2,
                                                this.y + (this.canvas.getHeight() * 0.1) + (this.canvas.getHeight() * 0.04) * i)
            };
        };
    };

    /**
     * @access public
     * @method
     * Method to update the size of the tasklist
     */
    public updateSize () : void {
        this.width = this.canvas.getWidth() * 0.15;
        this.height = this.canvas.getHeight() * 0.4;
        this.fontSize = this.canvas.getWidth() * 0.01;
    };

    public updateTasks () {
        let index : number = -1;
        if (this.player.getHealth() == 100) {
            for (let i = 0; i < this.taskArray.length; i++) {
                if (this.taskArray[i].task == "Vul jouw gezondheid aan.") {
                    index = i
                    this.taskArray.splice(index, 1);
                };
            };
            index = -1;
            this.updateIds();
        };
        if (this.player.getSchoolVisits() >= 5) {
            for (let i = 0; i < this.taskArray.length; i++) {
                if (this.taskArray[i].task == `Ga 5 keer naar school.`) {
                    index = i
                    this.taskArray.splice(index, 1);
                };
            };
            index = -1;
            this.updateIds();
        };
    };

    /**
     * Method to update the ids of taskArray
     */
    public updateIds () : void {
        for (let i = 0; i < this.taskArray.length; i++) {
            this.taskArray[i].id = i;
        };
    };

    /**
     * Method to return x
     */
    public getX () : number {
        return this.x;
    };

    /**
     * Method to return y
     */
    public getY () : number {
        return this.y;
    };

    /**
     * Method to return height
     */
    public getWidth () : number {
        return this.width;
    };

    /**
     * Method to return height
     */
    public getHeight () : number {
        return this.height;
    };

    /**
     * Method to return whether tasklist is hidden
     */
    public getIsHidden () : boolean {
        return this.isHidden;
    };
};

interface Task {
    id: number,
    task: string
};