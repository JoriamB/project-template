class Player {
    src : string;
    private keyboardListener : KeyboardHelper;
    private speed : number;
    private health : number;
    private hunger : number;
    private energy : number;
    private mood : number;
    private xPos : number;
    private yPos : number;

    public constructor (src : string,
                        speed : number,
                        health : number,
                        hunger : number,
                        energy : number,
                        mood : number) {
        this.keyboardListener = new KeyboardHelper(false,
                                                    false,
                                                    false,
                                                    false);
        this.src = src;
        this.speed = speed;
        this.health = health;
        this.hunger = hunger;
        this.energy = energy;
        this.mood = mood;
    };

    public move () {
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
            }
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
};