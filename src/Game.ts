class Game {
    private canvas : Canvas;
    private player : Player;

    public constructor () {
        this.canvas = new Canvas(<HTMLCanvasElement>document.getElementById("canvas"), "./assets/images/background.png");
        this.player = new Player(5,
                                100,
                                100,
                                100,
                                100);
    };

    public draw = () => {
        this.canvas.drawImageToCanvas(  "./Assets/Icons/ButtonsFREE/Setting.png",
                                        this.canvas.getWidth()-10,
                                        this.canvas.getHeight()-10,
                                        10,10);
        window.requestAnimationFrame(this.draw)
    };
};
let game = new Game()
window.requestAnimationFrame(game.draw);