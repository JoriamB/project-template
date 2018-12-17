class Game {
    private canvas : Canvas;
    private player : Player;
    private park : ParkView;
    private hospital : HospitalView;
    private house : HouseView;
    private school : SchoolView;
    private store : StoreView;
    private restaurant : RestaurantView;
    private map : MapView;

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
                                    50,
                                    50,
                                    "Store",
                                    420);
        this.park = new ParkView("./assets/Backgrounds/park.jpg",
                                this.canvas,
                                this.player);
        this.hospital = new HospitalView("./assets/Backgrounds/hospital.jpg",
                                        this.canvas,
                                        this.player);
        this.house = new HouseView("./assets/Backgrounds/House.png",
                                    this.canvas,
                                    this.player);
        this.school = new SchoolView("./assets/Backgrounds/classroom.jpg",
                                    this.canvas,
                                    this.player);
        this.store = new StoreView("./assets/Backgrounds/Store.jpg",
                                    this.canvas,
                                    this.player);
        this.restaurant = new RestaurantView("./assets/Backgrounds/Restaurant.jpg",
                                            this.canvas,
                                            this.player);
        this.map = new MapView("./assets/Backgrounds/map.png",
                                this.canvas,
                                this.player);
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
    const LudosMundi = new Game(new Canvas(<HTMLCanvasElement>document.getElementById("canvas")));                                                            
    window.requestAnimationFrame(LudosMundi.draw);
}
