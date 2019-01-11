class Fish {
    private x:number
    private y:number
    private width : number
    private height : number
    private canvas: Canvas;
    private src : string;

    constructor(x: number,
                y: number,
                width : number,
                height : number,
                src : string,
                canvas : Canvas) 
    
        {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
        this.canvas = canvas;
        }

        public draw () {
            this.canvas.drawImageToCanvas(  this.src,
                                            this.x,
                                            this.y,
                                            this.width,
                                            this.height)
        }
}