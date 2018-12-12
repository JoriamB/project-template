class Game {
    private canvas : Canvas;
    private player : Player;

    public constructor (canvas : Canvas, player : Player) {
        this.canvas = canvas;
        this.player = player;
    };

    public draw = () => {
        this.canvas.clear()
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.05,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.1,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.15,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.2,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        window.requestAnimationFrame(this.draw)
    };
};

window.addEventListener("load", init);
function init () : void {
    const LudosMundi = new Game(new Canvas(<HTMLCanvasElement>document.getElementById("canvas"),
                                            "./assets/images/background.png"),
                                new Player( 5,
                                            100,
                                            100,
                                            100,
                                            100));
    window.requestAnimationFrame(LudosMundi.draw)
}