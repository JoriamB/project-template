class Canvas {
    private canvas : HTMLCanvasElement;
    private ctx : CanvasRenderingContext2D;

    public constructor (canvas : HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight
        this.canvas.width = window.innerWidth;
    };

    /**
     * @param fontsize 
     * @param color 
     * @param text 
     * @param x 
     * @param y 
     * @access public
     * method for writing text to canvas
     */
    public drawTextToCanvas (fontsize : number,
                            color : string,
                            text : string,
                            x : number,
                            y : number
                            ) : void {
        this.ctx.font = `${fontsize}px Arial`
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    };

    /**
     * @param src 
     * @param x 
     * @param y 
     * @param width 
     * @param height
     * method for drawing an image to canvass
     */
    public drawImageToCanvas (  src : CanvasImageSource,
                                x : number,
                                y : number,
                                width : number,
                                height : number
                            ) : void {
        this.ctx.drawImage(src, x, y, width, height);
    };

    public drawBarToCanvas (X : number,
                            Y : number,
                            maxWidth : number,
                            minWidth : number,
                            height : number,
                            maxColor : string,
                            minColor : string) {
        this.ctx.fillStyle = maxColor;
        this.ctx.fillRect(  X,
                            Y,
                            maxWidth,
                            height)
        this.ctx.fillStyle = minColor;
        this.ctx.fillRect(  X,
                            Y,
                            minWidth,
                            height)
    };

    /**
     * method for returning the center of the canvas
     */
    public getCenter () : { X: number, Y: number } {
        return {X: this.getWidth() / 2, Y: this.getHeight() / 2};

    };

    /**
     * @access public
     * Method for returning height
     */
    public getHeight () : number {
        return this.canvas.height;
    };

    /**
     * @access public
     * Method for returning width
     */
    public getWidth () : number {
        return this.canvas.width;
    };

    /**
     * @access public
     * Method for clearing the canvas
     */
    public clear () : void {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    };
};