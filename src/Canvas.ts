class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private mouseListener : MouseHelper;

    public constructor(canvas: HTMLCanvasElement,
                        mouseListener : MouseHelper) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.mouseListener = mouseListener;
    };

    /**
     * @param alignment
     * @param fontsize
     * @param fontFamily
     * @param color 
     * @param text 
     * @param x 
     * @param y 
     * @access public
     * @method
     * method for writing text to canvas
     */
    public drawTextToCanvas(alignment : CanvasTextAlign,
                            fontsize: number,
                            fontFamily : string,
                            color: string,
                            text: string,
                            x: number,
                            y: number
                            ): void {
        this.ctx.textAlign = alignment;
        this.ctx.font = `${fontsize}px ${fontFamily}`;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    };

    /**
     * @param src 
     * @param x 
     * @param y 
     * @param width 
     * @param height
     * @access public
     * @method
     * method for drawing an image to canvas
     */
    public drawImageToCanvas(src: string,
                            x: number,
                            y: number,
                            width: number,
                            height: number
                            ): void {
        let image = new Image();
        image.src = src
        this.ctx.drawImage(image, x, y, width, height);
    };

    /**
     * @param src 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param callback
     * @access public
     * @method
     * method for drawing a button to cnavas
     */
    public drawButtonToCanvas(  src: string,
                                x: number,
                                y: number,
                                width: number,
                                height: number,
                                callback: () => void) {
        this.drawImageToCanvas(src, x, y, width, height);
        if (this.mouseListener.getMouseStatus() == true &&
            this.mouseListener.getHasBeenClicked() != true &&
            this.mouseListener.getEventX() > x &&
            this.mouseListener.getEventX() < x + width &&
            this.mouseListener.getEventY() > y &&
            this.mouseListener.getEventY() < y + height) {
                callback()
        };
    };

    /**
     * @param color
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param callback
     * @access public
     * @method
     * method for drawing a button to cnavas
     */
    public drawRectButtonToCanvas(  color: string,
                                    x: number,
                                    y: number,
                                    width: number,
                                    height: number,
                                    callback: () => void) {
        this.drawRectangle(color, x, y, width, height);
        if (this.mouseListener.getMouseStatus() == true &&
            this.mouseListener.getHasBeenClicked() != true &&
            this.mouseListener.getEventX() > x &&
            this.mouseListener.getEventX() < x + width &&
            this.mouseListener.getEventY() > y &&
            this.mouseListener.getEventY() < y + height) {
            callback()
        };
    };

    /**
     * @param alignment
     * @param src
     * @param text
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param callback
     * @access public
     * @method
     * method for drawing a button to cnavas
     */
    public drawTextButtonToCanvas(  src: string,
                                    text : string,
                                    x: number,
                                    y: number,
                                    width: number,
                                    height: number,
                                    callback: () => void) {
        this.drawImageToCanvas(src, x, y, width, height);
        if (this.mouseListener.getMouseStatus() == true &&
            this.mouseListener.getHasBeenClicked() != true &&
            this.mouseListener.getEventX() > x &&
            this.mouseListener.getEventX() < x + width &&
            this.mouseListener.getEventY() > y &&
            this.mouseListener.getEventY() < y + height) {
                callback()
            };
        this.drawTextToCanvas(  "center",
                                25,
                                "KenneyPixel",
                                "white",
                                text,
                                x + (width * 0.5),
                                y + (height * 0.65));
    };

    /**
     * @param X 
     * @param Y 
     * @param amount 
     * @access public
     * @method
     * method for drawing the coin image and value to canvas
     */
    public drawCoinToCanvas (   X : number,
                                Y : number,
                                amount : number
                                ) : void {
        this.drawImageToCanvas( "./Assets/Icons/ButtonsFREE/Coin.png",
                                X,
                                Y,
                                this.getWidth() * 0.025,
                                this.getHeight() * 0.05);
        this.drawTextToCanvas(  "left",
                                20,
                                "Minecraft",
                                "black",
                                `: ${amount}`,
                                X + this.getWidth() * 0.03,
                                Y + this.getHeight() * 0.03);
    };

    /**
     * 
     * @param X 
     * @param Y 
     * @param maxWidth 
     * @param minWidth 
     * @param height
     * @param textColor 
     * @param text
     * @param fontSize 
     * @access public
     * @method
     * method for drawing a bar to canvas
     */
    public drawBarToCanvas( X: number,
                            Y: number,
                            maxWidth: number,
                            minWidth: number,
                            height: number,
                            textColor: string,
                            text: string,
                            fontSize: number
                            ) : void {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(  X,
                            Y,
                            maxWidth,
                            height)
        if (minWidth/maxWidth > 0.75) {
            this.ctx.fillStyle = "green";
        }
        else if (minWidth/maxWidth > 0.25) {
            this.ctx.fillStyle = "orange";
        }
        else {
            this.ctx.fillStyle = "red";
        };
        this.ctx.fillRect(  X,
                            Y,
                            minWidth,
                            height)
        this.drawTextToCanvas(  "center",
                                fontSize,
                                "KenneyPixel",
                                textColor,
                                text,
                                X + maxWidth * 0.5,
                                Y - this.getHeight() * 0.008)
    };

    /**
     * @param X
     * @param Y
     * @param currentHunger
     * @param currentEnergy
     * @param currentMood
     * @param currentHealth
     * @access public
     * @method
     * Method for drawing all the bars to canvas
     */
    public drawBarstoCanvas (   X : number,
                                Y : number,
                                currentHunger : number,
                                currentEnergy : number,
                                currentMood : number,
                                currentHealth : number
                                ) : void {
        this.drawBarToCanvas(   X,
                                Y,
                                this.getWidth() * 0.05,
                                (this.getWidth() * 0.05/100) * currentHunger,
                                this.getHeight() * 0.02,
                                "black",
                                "Honger:",
                                20);
        this.drawBarToCanvas(   X,
                                Y + this.getHeight() * 0.05,
                                this.getWidth() * 0.05,
                                (this.getWidth() * 0.05/100) * currentEnergy,
                                this.getHeight() * 0.02,
                                "black",
                                "Energie:",
                                20);
        this.drawBarToCanvas(   X,
                                Y + this.getHeight() * 0.1,
                                this.getWidth() * 0.05,
                                (this.getWidth() * 0.05/100) * currentMood,
                                this.getHeight() * 0.02,
                                "black",
                                "Stemming:",
                                20);
        this.drawBarToCanvas(   X,
                                Y + this.getHeight() * 0.15,
                                this.getWidth() * 0.05,
                                (this.getWidth() * 0.05/100) * currentHealth,
                                this.getHeight() * 0.02,
                                "black",
                                "Gezondheid:",
                                20);
    };

    /**
     * @access public
     * @method
     * @param color 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * Method for drawing a rectangle to the canvas
     */
    public drawRectangle (  color : string,
                            x : number,
                            y : number,
                            width : number,
                            height : number
                            ) : void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(  x,
                            y,
                            width,
                            height);
    };

    /**
     * @access public
     * @method
     * method for returning the center of the canvas
     */
    public getCenter() : { X : number, Y : number } {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };

    };

    /**
     * @access public
     * @method
     * Method for returning height
     */
    public getHeight() : number {
        return this.canvas.height;
    };

    /**
     * @access public
     * @method
     * Method for returning width
     */
    public getWidth() : number {
        return this.canvas.width;
    };

    /**
     * @access public
     * @method
     * Method for clearing the canvas
     */
    public clear() : void {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    };

    /**
     * @access public
     * @method
     * Method to update the size of the canvas
     */
    public updateScreenSize () : void {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    };
};

