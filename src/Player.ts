/// <reference path="../src/Helpers/KeyboardHelper.ts"/>

class Player {
    src : string;
    private canvas : Canvas;
    private keyboardListener : KeyboardHelper;
    private speed : number;
    private health : number;
    private hunger : number;
    private energy : number;
    private mood : number;
<<<<<<< HEAD
    private coins : number;
    private xPos : number;
    private yPos : number;
=======
    private xPos : number;
    private yPos : number;
    private width : number;
    private height : number;
    private location : string;
>>>>>>> dd1dbf4f2fddbd3c586cfd6a4f5634c2d3aeecfd

    public constructor (src : string,
                        canvas : Canvas,
                        speed : number,
                        health : number,
                        hunger : number,
                        energy : number,
                        mood : number,
<<<<<<< HEAD
                        coins :number,
                        xPos : number,
                        yPos : number) {
        this.keyboardListener = new KeyboardHelper(false,
                                                   false,
                                                   false,
                                                   false);

        window.addEventListener("keydown", this.keyboardListener.keyDownHandler);
        window.addEventListener("keyup", this.keyboardListener.keyUpHandler);

=======
                        xPos : number,
                        yPos : number,
                        width : number,
                        height : number,
                        location : string) {
        this.keyboardListener = new KeyboardHelper(false,
                                                    false,
                                                    false,
                                                    false);
        window.addEventListener("keydown", (event) => this.keyboardListener.keyDownHandler(event));
        window.addEventListener("keyup", (event) => this.keyboardListener.keyUpHandler(event));
        this.src = src;
        this.canvas = canvas;
>>>>>>> dd1dbf4f2fddbd3c586cfd6a4f5634c2d3aeecfd
        this.speed = speed;
        this.health = health;
        this.hunger = hunger;
        this.energy = energy;
        this.mood = mood;
<<<<<<< HEAD
        this.coins = coins;
        
=======
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.location = location;
>>>>>>> dd1dbf4f2fddbd3c586cfd6a4f5634c2d3aeecfd
    };

    protected updateCoins () {
        // Change current value of coins
        //if worked in store --> ++
        //if spend in store --> --
    }

    public move () {
<<<<<<< HEAD
        if (this.keyboardListener.leftPressed || 
            this.keyboardListener.rightPressed || 
            this.keyboardListener.rightPressed || 
            this.keyboardListener.downPressed)
            {
            if (this.keyboardListener.leftPressed)
                this.xPos -= this.speed;
            else if (this.keyboardListener.rightPressed)
                this.yPos += this.speed;

            if (this.keyboardListener.upPressed)
                this.yPos -= this.speed;
            else if (this.keyboardListener.downPressed)
                this.yPos += this.speed;
        }
=======
        if (this.keyboardListener.leftPressed ||
            this.keyboardListener.rightPressed ||
            this.keyboardListener.upPressed ||
            this.keyboardListener.downPressed)
            {
                if (this.keyboardListener.leftPressed)
                    this.xPos -= this.speed;
                else if (this.keyboardListener.rightPressed)
                    this.xPos += this.speed;
                else if (this.keyboardListener.upPressed)
                    this.yPos -= this.speed;
                else if (this.keyboardListener.downPressed)
                    this.yPos += this.speed;
                //Left
                if (this.xPos < 0) {
                    this.xPos = 0
                }
                //Right
                if (this.xPos + this.width > this.canvas.getWidth()) {
                    this.xPos = this.canvas.getWidth() - this.width;
                }
                //Down
                if (this.yPos + this.height > this.canvas.getHeight()) {
                    this.yPos = this.canvas.getHeight() - this.height;
                }
                //Up
                if (this.yPos < 0) {
                    this.yPos = 0
                }
            }
>>>>>>> dd1dbf4f2fddbd3c586cfd6a4f5634c2d3aeecfd
    };

    public isColliding () {

    };

    /**
     * @access public
     * Method for returning health
     */
    public getHealth () : number {
        return this.health;
    };

    /**
     * @access public
     * Method for returning hunger
     */
    public getHunger () : number {
        return this.hunger;
    };

    /**
     * @access public
     * Method for returning energy
     */
    public getEnergy () : number {
        return this.energy;
    };

    /**
     * @access public
     * Method for returning mood
     */
    public getMood () : number {
        return this.mood;
    };

    public getX () : number {
        return this.xPos
    }

    public getY () : number {
        return this.yPos
    }

    public getWidth () : number {
        return this.width;
    }

    public getHeight () : number {
        return this.height;
    }

    public getLocation () : string {
        return this.location;
    }
};