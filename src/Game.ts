class Game {
    private canvas : Canvas;
    private player : Player;
    private park : Park;
    private hospital : Hospital;
    private house : House;
    private school : School;
    private store : Store;
    private restaurant : Restaurant;

    public constructor (canvas : Canvas) {
        this.canvas = canvas;
        this.player = new Player(   "./Assets/Female/Poses/female_slide.png",
                                    this.canvas,
                                    5,
                                    100,
                                    100,
                                    100,
                                    100,
                                    this.canvas.getCenter().X,
                                    this.canvas.getCenter().Y,
                                    200,
                                    200);
        this.park = new Park("./assets/Backgrounds/park.jpg",
                            this.canvas,
                            this.player);
        this.hospital = new Hospital("./assets/Backgrounds/hospital.jpg",
                            this.canvas,
                            this.player);
        this.house = new House("./assets/Backgrounds/House.png",
                            this.canvas,
                            this.player);
        this.school = new School("./assets/Backgrounds/classroom.jpg",
                            this.canvas,
                            this.player);
        this.store = new Store("./assets/Backgrounds/Store.jpg",
                            this.canvas,
                            this.player);
        this.restaurant = new Restaurant("./assets/Backgrounds/Restaurant.jpg",
                            this.canvas,
                            this.player);
    };

    public draw = () => {
        this.canvas.clear()
        this.house.draw()
        window.requestAnimationFrame(this.draw)
    };
};


window.addEventListener("load", init);
function init () : void {
    const LudosMundi = new Game(new Canvas(<HTMLCanvasElement>document.getElementById("canvas")));                                                            
    window.requestAnimationFrame(LudosMundi.draw);
}
