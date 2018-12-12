class Game {
    private canvas : Canvas;
    private player : Player;
    private park : Park;

    public constructor (canvas : Canvas,
                        player : Player) {
        this.canvas = canvas;
        this.player = player;
        this.park = new Park("./assets/Backgrounds/park.jpg",
                            this.canvas,
                            this.player);
    };

    public draw = () => {
        this.canvas.clear()
        this.park.draw()
        window.requestAnimationFrame(this.draw)
    };
};


window.addEventListener("load", init);
function init () : void {
    const LudosMundi = new Game(new Canvas(<HTMLCanvasElement>document.getElementById("canvas")),
                                new Player( 5,
                                            100,
                                            100,
                                            100,
                                            100));
                                
    window.requestAnimationFrame(LudosMundi.draw)
}
