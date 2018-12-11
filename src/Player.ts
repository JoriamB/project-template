class Player {
    private keyboardListener : KeyboardHelper;
    private speed : number;
    private health : number;
    private hunger : number;
    private energy : number;
    private mood : number;

    public constructor (speed : number,
                        health : number,
                        hunger : number,
                        energy : number,
                        mood : number) {
        this.keyboardListener = new KeyboardHelper(false,
                                                    false,
                                                    false,
                                                    false);
        this.speed = speed;
        this.health = health;
        this.hunger = hunger;
        this.energy = energy;
        this.mood = mood;
    };

    public move () {

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