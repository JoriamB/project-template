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

    public drawTextToCanvas () {

    };

    public drawImageToCanvas () {

    };

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