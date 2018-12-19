class MouseHelper {
    private mousePressed : boolean;
    private hasBeenClicked : boolean;
    private x : number;
    private y: number;

    public constructor(mousePressed : boolean, hasBeenClicked : boolean) {
        this.mousePressed = mousePressed;
        this.hasBeenClicked = hasBeenClicked;
        window.addEventListener("mousedown", (event) => this.keyDownHandler(event));
        window.addEventListener("mouseup", (event) => this.keyUpHandler(event));
        window.addEventListener("mousemove", (event) => this.updatePosition(event));
    };

    /**
     * @param event
     * @access public
     * @method
     * Method to handle the mouse key down event
     */
    public keyDownHandler (event : MouseEvent) : void {
        this.mousePressed = true;
    };

    /**
     * @param event
     * @access public
     * @method
     * Method to handle the mouse key up event
     */
    public keyUpHandler (event : MouseEvent) {
        this.mousePressed = false;
        this.hasBeenClicked = false;
    };

    /**
     * @access public
     * @method
     * Method for setting the value of hasBeenClicked
     */
    public setHasBeenClicked () {
        this.hasBeenClicked = true;
    };

    /**
     * @access public
     * @method
     * Method for returning the value of hasBeenClicked
     */
    public getHasBeenClicked () {
        return this.hasBeenClicked;
    }

    /**
     * @access public
     * @method
     * Method for returning wheter the left mouse butten has been clicked
     */
    public getMouseStatus () {
        return this.mousePressed;
    };

    /**
     * @param event
     * @access public
     * @method
     * Method for updating the current coordinates of the mouse cursor
     */
    public updatePosition (event : MouseEvent) {
        this.x = event.x
        this.y = event.y
    };

    /**
     * @access public
     * @method
     * Method for returning the current x position of the mouse cursor
     */
    public getEventX () : number {
        return this.x
    };

    /**
     * @access public
     * @method
     * Method for returning the current y position of the mouse cursor
     */
    public getEventY () : number {
        return this.y
    };
};