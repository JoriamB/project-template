class KeyboardHelper {
    public leftPressed: boolean;
    public rightPressed: boolean;
    public upPressed: boolean;
    public downPressed: boolean;

    public constructor (leftPressed: boolean,
                        rightPressed: boolean,
                        upPressed: boolean,
                        downPressed: boolean) {
        this.leftPressed = leftPressed;
        this.rightPressed = rightPressed;
        this.upPressed = upPressed;
        this.downPressed = downPressed;
    };

    /**
     * @param event
     * @access public
     * @method
     * Method to handle the keydown event
     */
    public keyDownHandler (event: KeyboardEvent) : void {
        switch (event.keyCode) {
            // Left arrow
            case 37:
            // A
            case 65:
            // J
            case 74:
                this.leftPressed = true;
            break;
            // Up arrow
            case 38:
            // W
            case 87:
            // I
            case 73:
                this.upPressed = true;
            break;
            // Down arrow
            case 40:
            // S
            case 83:
            // K
            case 75:
                this.downPressed = true;
            break;
            // Right arrow
            case 39:
            // D
            case 68:
            // L
            case 76:
                this.rightPressed = true;
            break;
        };
    };
    /**
     * @param event 
     * @access public
     * @method
     * Method to handle the key up event
     */
    public keyUpHandler (event: KeyboardEvent) : void {
        switch (event.keyCode) {
            // Left arrow
            case 37:
            // A
            case 65:
            // J
            case 74:
                this.leftPressed = false;
            break;
            // Up arrow
            case 38:
            // W
            case 87:
            // I
            case 73:
                this.upPressed = false;
            break;
            // Down arrow
            case 40:
            // S
            case 83:
            // K
            case 75:
                this.downPressed = false;
            break;
            // Right arrow
            case 39:
            // D
            case 68:
            // L
            case 76:
                this.rightPressed = false;
            break;
        };
    };
};