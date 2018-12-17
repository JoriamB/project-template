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
     * method for drawing an image to canvass
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
    public writeButtonToCanvas() {
        const horizontalCenter = this.canvas.width / 2;
        const verticalCenter = this.canvas.height / 2;
        let buttonElement = document.createElement("img");
        buttonElement.src = "./Assets/Icons/ButtonsFREE/Home.png";
        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, horizontalCenter - 111, verticalCenter + 219);
           
        });
    }
    public drawButtonToCanvas(){
        let buttonElement = document.createElement("img");
        buttonElement.src = "./assets/Icons/ButtonsFREE/Home.png"

        buttonElement.addEventListener("load", () => {
            this.drawImageToCanvas(buttonElement.src,
                                    this.getWidth() / 2 - 111,
                                    this.getHeight() / 2 + 219,
                                    100,
                                    50)
                                    console.log()
    })};
    public drawCoinToCanvas (X : number,
                            Y : number,
                            amount : number) {
        this.drawImageToCanvas("./Assets/Icons/ButtonsFREE/Coin.png",
            X,
            Y,
            40,
            40)
        this.drawTextToCanvas(20,"black",`: ${amount}`, X + 45, Y + 25);
    }
    public drawBarToCanvas(X: number,
        Y: number,
        maxWidth: number,
        minWidth: number,
        height: number,
        maxColor: string,
        minColor: string,
        textColor: string,
        text: string,
        fontSize: number) {
        this.ctx.fillStyle = maxColor;
        this.ctx.fillRect(X,
            Y,
            maxWidth,
            height)
        this.ctx.fillStyle = minColor;
        this.ctx.fillRect(X,
            Y,
            minWidth,
            height)
        this.ctx.fillStyle = textColor
        this.ctx.font = `${fontSize}px Arial`;
        this.ctx.fillText(text, X + maxWidth * 0.15, Y - 5)
    };

    /**
     * method for returning the center of the canvas
     */
    public getCenter(): { X: number, Y: number } {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };

    };

    /**
     * @access public
     * Method for returning height
     */
    public getHeight(): number {
        return this.canvas.height;
    };

    /**
     * @access public
     * Method for returning width
     */
    public getWidth(): number {
        return this.canvas.width;
    };

    /**
     * @access public
     * Method for clearing the canvas
     */
    public clear(): void {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    };
};