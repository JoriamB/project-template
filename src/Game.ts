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
    private soccer: SoccerView;
    private beach: BeachView;
    private fishing: FishingView;
    private question: QuestionView;
    private geographyquest: GeographyQuest;
    private mathquest: MathQuest;
    private historyquest: HistoryQuest;
    private clock: Timer;

    public constructor () {
        this.clock = new Timer();
        this.mouseListener = new MouseHelper(false, false);
        this.canvas = new Canvas(   <HTMLCanvasElement>document.getElementById("canvas"),
                                    this.mouseListener)
        this.player = new Player(   "./Assets/Female/Poses/female_slide.png",
                                    this.canvas,
                                    5,
                                    20,
                                    80,
                                    100,
                                    60,
                                    this.canvas.getCenter().X,
                                    this.canvas.getCenter().Y,
                                    this.canvas.getWidth() * 0.025,
                                    this.canvas.getHeight() * 0.05,
                                    "Question",
                                    10000);
        this.park = new ParkView(   "./Assets/Backgrounds/park.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener);
        this.hospital = new HospitalView(   "./Assets/Backgrounds/hospital.jpg",
                                            this.canvas,
                                            this.player,
                                            this.mouseListener);
        this.house = new HouseView( "./Assets/Backgrounds/House.png",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener);
        this.school = new SchoolView(   "./Assets/Backgrounds/classroom2.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener);
        this.store = new StoreView( "./Assets/Backgrounds/Store.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener);
        this.restaurant = new RestaurantView(   "./Assets/Backgrounds/Restaurant3.jpg",
                                                this.canvas,
                                                this.player,
                                                this.mouseListener);
        this.map = new MapView( "./Assets/map/mapleeg.png",
                                this.canvas,
                                this.player,
                                this.mouseListener);
        this.soccer = new SoccerView(   "./Assets/FootballGame/background.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.clock);          
        this.beach = new BeachView( "./Assets/Backgrounds/beach.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener);            
        this.fishing = new FishingView( "./Assets/FishingGame/background1.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener);
        this.geographyquest = new GeographyQuest( "./Assets/Backgrounds/Question.png",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener)  
        this.mathquest = new MathQuest( "./Assets/Backgrounds/Question.png",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener);
        this.historyquest = new HistoryQuest( "./Assets/Backgrounds/Question.png",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener)                                                                    
        this.question = new QuestionView("./Assets/Backgrounds/Question.png",
                                          this.canvas,
                                          this.player,
                                          this.mouseListener,
                                          this.geographyquest,
                                          this.mathquest,
                                          this.historyquest);
    };

    /**
     * @access public
     * @method
     * main draw method for the game
     */
    public draw = () => {
        this.canvas.clear();
        this.player.updatePlayer();
        this.canvas.updateScreenSize();
        switch (this.player.getLocation()) {
            case "Park":
                this.park.draw();
                break;
            case "Hospital":
                this.hospital.draw();
                break;
            case "House":
                this.house.draw();
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
            case "Beach":
                this.beach.draw();
                break;
            case "Fishing":
                this.fishing.draw();
                break;
            case "Question":
            this.question.draw();
            break; 
            case "Geography":
            this.geographyquest.draw();
            break;
            case "Math":
            this.mathquest.draw();
            break;
            case "History":
            this.historyquest.draw();
            break;          
            default:
                this.map.draw();
                break;
        }
        window.requestAnimationFrame(this.draw);
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

function createFish (   min : number,
                        max : number,
                        canvas : Canvas) {
    for (let i = min; i < max; i++) {
        console.log(i);
        let fish = new Fish(MathHelper.randomNumber(   0, 
                                                        canvas.getWidth() - 50),
                            MathHelper.randomNumber(   0,
                                                        canvas.getHeight() - 50),
                            100,
                            100,
                            "./assets/FishingGame/fish.png",
                            canvas);
    }
}