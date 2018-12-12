class Canvas {
    private canvas : HTMLCanvasElement;
    private src : string;
    private ctx : CanvasRenderingContext2D;
    private height : number;
    private width : number;

    public constructor (canvas : HTMLCanvasElement,
                        src : string) {
        this.canvas = canvas;
        this.src = src;
        this.ctx = this.canvas.getContext("2d");
        this.height = window.innerHeight;
        this.width = window.innerWidth;
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
        this.ctx.font = `Arial ${fontsize}px`
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
    public drawImageToCanvas (  src : string,
                                x : number,
                                y : number,
                                width : number,
                                height : number
                            ) : void {
        let image = new Image();
        image.src = src
        this.ctx.drawImage(image, x, y, width, height);
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
        return this.height;
    };

    /**
     * @access public
     * Method for returning width
     */
    public getWidth () : number {
        return this.width;
    };

    /**
     * @access public
     * Method for clearing the canvas
     */
    public clear () : void {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    };
};