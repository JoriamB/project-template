class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public constructor(canvas: HTMLCanvasElement) {
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
     * @method
     * method for writing text to canvas
     */
    public drawTextToCanvas(fontsize: number,
                            color: string,
                            text: string,
                            x: number,
                            y: number
    ): void {
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
                                callback: (event: MouseEvent) => void = null) {
        this.drawImageToCanvas(src, x, y, width, height);
        if (!callback) return;
            let _listener = (event : MouseEvent) => {
                if (event.x > x &&
                    event.x < x + width &&
                    event.y > y &&
                    event.y < y + height) {
                        callback(event);
                        window.removeEventListener("click", _listener); 
                };
            };
            console.log('klikkerdeklik')
        window.addEventListener("click", _listener)
    };

    /**
     * @param X 
     * @param Y 
     * @param amount 
     * @access public
     * @method
     * method for drawing the coin image and value to canvas
     */
    public drawCoinToCanvas (X : number,
                            Y : number,
                            amount : number
                            ) : void {
        this.drawImageToCanvas("./Assets/Icons/ButtonsFREE/Coin.png",
                                X,
                                Y,
                                40,
                                40)
        this.drawTextToCanvas(20,
                            "black",`: ${amount}`,
                            X + 45,
                            Y + 25);
    };

    /**
     * 
     * @param X 
     * @param Y 
     * @param maxWidth 
     * @param minWidth 
     * @param height 
     * @param maxColor 
     * @param minColor 
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
                            maxColor: string,
                            minColor: string,
                            textColor: string,
                            text: string,
                            fontSize: number
                            ) : void {
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
        this.ctx.fillStyle = textColor
        this.ctx.font = `${fontSize}px Arial`;
        this.ctx.fillText(text, X + maxWidth * 0.15, Y - 5)
    };

    /**
     * @access public
     * @method
     * method for returning the center of the canvas
     */
    public getCenter(): { X: number, Y: number } {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };

    };

    /**
     * @access public
     * @method
     * Method for returning height
     */
    public getHeight(): number {
        return this.canvas.height;
    };

    /**
     * @access public
     * @method
     * Method for returning width
     */
    public getWidth(): number {
        return this.canvas.width;
    };

    /**
     * @access public
     * @method
     * Method for clearing the canvas
     */
    public clear(): void {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    };
};