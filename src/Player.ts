/// <reference path="../src/Helpers/KeyboardHelper.ts"/>

class Player {
    private src : string;
    private canvas : Canvas;
    private keyboardListener : KeyboardHelper;
    private speed : number;
    private health : number;
    private hunger : number;
    private energy : number;
    private mood : number;
    private xPos : number;
    private yPos : number;
    private width : number;
    private height : number;
    private location : string;
    private coin : number;
    private currentQuestion: Object;

    public constructor (src : string,
                        canvas : Canvas,
                        speed : number,
                        health : number,
                        hunger : number,
                        energy : number,
                        mood : number,
                        xPos : number,
                        yPos : number,
                        width : number,
                        height : number,
                        location : string,
                        coin : number,
                        currentQuestion: Object) {
        this.keyboardListener = new KeyboardHelper(false,
                                                    false,
                                                    false,
                                                    false);
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
        this.currentQuestion = currentQuestion;
    };

    protected updateCoins () {
        // Change current value of coins
        //if worked in store --> ++
        //if spend in store --> --
    }

    /**
     * @access public
     * @method
     * method to change the player position
     */
    public move () {
        if (this.keyboardListener.leftPressed ||
            this.keyboardListener.rightPressed ||
            this.keyboardListener.upPressed ||
            this.keyboardListener.downPressed)
            {
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
                //Left
                if (this.xPos < 0) {
                    this.xPos = 0
                };
                //Right
                if (this.xPos + this.width > this.canvas.getWidth()) {
                    this.xPos = this.canvas.getWidth() - this.width;
                };
                //Down
                if (this.yPos + this.height > this.canvas.getHeight()) {
                    this.yPos = this.canvas.getHeight() - this.height;
                };
                //Up
                if (this.yPos < 0) {
                    this.yPos = 0
                };
            };
    };

    public updatePlayer () : void {
        this.width = this.canvas.getWidth() * 0.025;
        this.height = this.canvas.getHeight() * 0.05;
    };

    /**
     * @access public
     * @method
     * Method for returning health
     */
    public getHealth () : number {
        return this.health;
    };

    /**
     * @param amount
     * @access public
     * @method
     * Method for setting health
     */
    public setHealth (amount : number) : void {
        this.health = amount;
    };

    /**
     * @access public
     * @method
     * Method for returning hunger
     */
    public getHunger () : number {
        return this.hunger;
    };

    /**
     * @param amount
     * @access public
     * @method
     * Method for setting hunger
     */
    public setHunger (amount : number) : void {
        this.hunger = amount;
    };

    /**
     * @access public
     * @method
     * Method for returning energy
     */
    public getEnergy () : number {
        return this.energy;
    };

    /**
     * @param amount
     * @access public
     * @method
     * Method for setting energy
     */
    public setEnergy (amount : number) : void {
        this.energy = amount;
    };

    /**
     * @access public
     * @method
     * Method for returning mood
     */
    public getMood () : number {
        return this.mood;
    };

    /**
     * @param amount
     * @access public
     * @method
     * Method for setting mood
     */
    public setMood (amount : number) : void {
        this.mood = amount;
    };

    /**
     * @access public
     * @method
     * Method for returning x position
     */
    public getX () : number {
        return this.xPos
    }

    /**
     * @access public
     * @method
     * Method for returning y position
     */
    public getY () : number {
        return this.yPos
    }

    /**
     * @access public
     * @method
     * Method for returning width
     */
    public getWidth () : number {
        return this.width;
    }

    /**
     * @access public
     * @method
     * Method for returning height
     */
    public getHeight () : number {
        return this.height;
    }

    /**
     * @access public
     * @method
     * Method for returning location
     */
    public getLocation () : string {
        return this.location;
    }

    /**
     * @param amount
     * @access public
     * @method
     * Method for setting location
     */
    public setLocation (location : string) : void {
        this.location = location;
    }

    /**
     * @access public
     * @method
     * Method for returning coin amount
     */
    public getCoin () : number {
        return this.coin
    };

    /**
     * @param amount
     * @access public
     * @method
     * Method for setting coin amount
     */
    public setCoin (coin : number) : void {
        this.coin = coin;
    };

    public setCurrentQuestion(currentQuestion:Object){
        this.currentQuestion = currentQuestion;
    }

    public getCurrentQuestion() : Object {
        return this.currentQuestion;
    }
};