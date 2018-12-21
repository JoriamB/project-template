class Game {
    private canvas : Canvas;
    private player : Player;
    private mouseListener : MouseHelper;
    private park : ParkView;
    private hospital : HospitalView;
    private house : HouseView;
    private school : SchoolView;
    private store : StoreView;
    private restaurant : RestaurantView;
    private map : MapView;
    private soccer:SoccerView;

    public constructor () {
        this.mouseListener = new MouseHelper(false, false);
        this.canvas = new Canvas(   <HTMLCanvasElement>document.getElementById("canvas"),
                                    this.mouseListener)
        this.player = new Player(   "./Assets/Female/Poses/female_slide.png",
                                    this.canvas,
                                    5,
                                    40,
                                    80,
                                    100,
                                    60,
                                    this.canvas.getCenter().X,
                                    this.canvas.getCenter().Y,
                                    50,
                                    50,
                                    "Soccer",
                                    10000);
        this.park = new ParkView("./assets/Backgrounds/park.jpg",
                                this.canvas,
                                this.player,
                                this.mouseListener);
        this.hospital = new HospitalView("./assets/Backgrounds/hospital.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener);
        this.house = new HouseView("./assets/Backgrounds/House.png",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener);
        this.school = new SchoolView("./assets/Backgrounds/classroom2.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener);
        this.store = new StoreView("./assets/Backgrounds/Store.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener);
        this.restaurant = new RestaurantView("./assets/Backgrounds/Restaurant2.jpg",
                            this.canvas,
                            this.player,
                            this.mouseListener);
        this.map = new MapView("./assets/map/map.png",
                            this.canvas,
                            this.player,
                            this.mouseListener);
        this.soccer = new SoccerView(   "./assets/FootballGame/background.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener);            
    };

    /**
     * @access public
     * @method
     * main draw method for the game
     */
    public draw = () => {
        this.canvas.clear()
        switch (this.player.getLocation()) {
            case "Park":
                this.park.draw();
                break;
            case "Hospital":
                this.hospital.draw();
                break;
            case "House":
                this.house.draw()
                break;
            case "School":
                this.school.draw();
                break;
            case "Store":
                this.store.draw();
                break;
            case "Restaurant":
                this.restaurant.draw();
                break;
            case "Soccer":
                this.soccer.draw();
                break;
            default:
                this.map.draw();
                break;
        }
        window.requestAnimationFrame(this.draw)
    };
};

window.addEventListener("load", init);

/**
 * @access public
 * @function
 * Function to initialise the game
 */
function init () : void {
    const LudosMundi = new Game();                                                            
    window.requestAnimationFrame(LudosMundi.draw);
}
