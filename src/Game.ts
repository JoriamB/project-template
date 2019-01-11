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
    private fishArray : Array<Fish>
    private selectplayer: SelectPlayer;
    private tasklist : Tasklist;
    private startview: StartView;
    private tutorialview: TutorialView;
    private gameover : GameOverView;
    private credits : CreditsView;
    private soundcontroller : SoundController;

    public constructor () {
        this.soundcontroller = new SoundController( <HTMLAudioElement>document.getElementById("BackgroundMusic"),
                                                    <HTMLAudioElement>document.getElementById("Store"),
                                                    <HTMLAudioElement>document.getElementById("Hospital"),
                                                    <HTMLAudioElement>document.getElementById("EatEffect"),
                                                    <HTMLAudioElement>document.getElementById("SleepEffect"),
                                                    <HTMLAudioElement>document.getElementById("ScoreEffect"),
                                                    <HTMLAudioElement>document.getElementById("Beach"),
                                                    <HTMLAudioElement>document.getElementById("Park"),
                                                    <HTMLAudioElement>document.getElementById("Fishing"));
        this.fishArray = [];
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
                                    "StartView",
                                    50,
                                    0);
        this.tasklist = new Tasklist(   "./Assets/images/takenlijst.jpg",
                                        this.canvas,
                                        this.canvas.getWidth() * 0,
                                        this.canvas.getHeight() * 0,
                                        this.canvas.getWidth() * 0.15,
                                        this.canvas.getHeight() * 0.4,
                                        this.canvas.getWidth() * 0.01,
                                        false,
                                        this.mouseListener,
                                        this.player
                                        );
        this.park = new ParkView(   "./Assets/Backgrounds/park.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener,
                                    this.soundcontroller);
        this.hospital = new HospitalView(   "./Assets/Backgrounds/hospital.jpg",
                                            this.canvas,
                                            this.player,
                                            this.mouseListener,
                                            this.soundcontroller);
        this.house = new HouseView( "./Assets/Backgrounds/House1.png",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener,
                                    this.soundcontroller);
        this.school = new SchoolView(   "./Assets/Backgrounds/classroom2.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.soundcontroller);
        this.store = new StoreView( "./Assets/Backgrounds/Store.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener,
                                    this.soundcontroller);
        this.restaurant = new RestaurantView(   "./Assets/Backgrounds/Restaurant3.jpg",
                                                this.canvas,
                                                this.player,
                                                this.mouseListener,
                                                this.soundcontroller);
        this.map = new MapView( "./Assets/Map/mapleeg.png",
                                this.canvas,
                                this.player,
                                this.mouseListener,
                                this.tasklist,
                                this.soundcontroller);
        this.soccer = new SoccerView(   "./Assets/FootballGame/background.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.soundcontroller,
                                        this.clock,
                                        0);          
        this.beach = new BeachView( "./Assets/Backgrounds/beach.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener,
                                    this.soundcontroller,
                                    this.fishArray,
                                    this.fishing,);            
        this.fishing = new FishingView( "./Assets/FishingGame/background1.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.soundcontroller,
                                        this.fishArray,
                                        this.clock,
                                        0);       
        this.beach = new BeachView( "./Assets/Backgrounds/beach.jpg",
                                    this.canvas,
                                    this.player,
                                    this.mouseListener,
                                    this.soundcontroller,
                                    this.fishArray,
                                    this.fishing);
        this.geographyquest = new GeographyQuest( "./Assets/Backgrounds/Question.png",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.soundcontroller,
                                        0)  
        this.mathquest = new MathQuest( "./Assets/Backgrounds/Question.png",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.soundcontroller,
                                        0);
        this.historyquest = new HistoryQuest( "./Assets/Backgrounds/Question.png",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.soundcontroller,
                                        0)                                                                    
        this.question = new QuestionView("./Assets/Backgrounds/Question.png",
                                          this.canvas,
                                          this.player,
                                          this.mouseListener,
                                          this.soundcontroller,
                                          this.geographyquest,
                                          this.mathquest,
                                          this.historyquest);
        this.selectplayer = new SelectPlayer(   "./Assets/Backgrounds/SelectPlayer.jpg",
                                                this.canvas,
                                                this.player,
                                                this.mouseListener,
                                                this.soundcontroller);
        this.startview = new StartView( "./Assets/Backgrounds/SelectPlayer.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.soundcontroller);
        this.tutorialview = new TutorialView(   "./Assets/Backgrounds/SelectPlayer.jpg",
                                                this.canvas,
                                                this.player,
                                                this.mouseListener,
                                                this.soundcontroller);
        this.gameover = new GameOverView(   "./Assets/Backgrounds/SelectPlayer.jpg",
                                            this.canvas,
                                            this.player,
                                            this.mouseListener,
                                            this.soundcontroller);
        this.credits = new CreditsView( "./Assets/Backgrounds/SelectPlayer.jpg",
                                        this.canvas,
                                        this.player,
                                        this.mouseListener,
                                        this.soundcontroller);
        this.soundcontroller.playBackgroundMusic();
    };

    /**
     * @access public
     * @method
     * main draw method for the game
     */
    public draw = () => {
        this.canvas.clear();
        this.player.checkForFailStates();
        this.player.updatePlayer();
        this.canvas.updateScreenSize();
        this.tasklist.updateSize();
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
            case "SelectPlayer":
                this.selectplayer.draw();
                break;        
            case "StartView":
                this.startview.draw();
                break;
            case "Tutorial":
                this.tutorialview.draw();
                break;
            case "GameOver":
                this.gameover.draw();
                break;
            case "Credits":
                this.credits.draw();
                break;
            default:
                this.map.draw();
                this.tasklist.draw();
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