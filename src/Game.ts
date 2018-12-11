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

    public draw () {

    };
};