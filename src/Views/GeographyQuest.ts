class GeographyQuest extends BaseView {

    private currentQuestion : currentQuestion;
    private score : number;

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper,
                        soundcontroller : SoundController,
                        score : number) {
        super(src, canvas, player, mouseListener, soundcontroller);
        this.currentQuestion = this.GeoArray[0];
        this.score = score;
    }
    public draw = () => {
        this.canvas.drawImageToCanvas(  this.src,
                                        0,
                                        0,
                                        this.canvas.getWidth(),
                                        this.canvas.getHeight());
        this.canvas.drawButtonToCanvas( "./Assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.05,
                                        this.canvas.getWidth() * 0.025,
                                        this.canvas.getHeight() * 0.05,
                                        () => {
                                            this.player.setEnergy(this.player.getEnergy()-15),
                                            this.player.setHunger(this.player.getHunger()-30)
                                            this.score = 0;
                                            this.player.setLocation("School");
                                            this.mouseListener.setHasBeenClicked()});
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.canvas.getWidth()*0.9,
                                        this.canvas.getHeight()*0.05,
                                        this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth())
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        `Score: ${this.score}`,
                                        this.canvas.getWidth() * 0.3,
                                        this.canvas.getHeight() * 0.08);
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "White",
                                        this.getCurrentQuestion().Question,
                                        this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.2);
        if (this.getCurrentQuestion().ImgSrc != "") {
        this.canvas.drawImageToCanvas(  this.getCurrentQuestion().ImgSrc,
                                        this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.2)/2,
                                        this.canvas.getHeight() * 0.4 - (this.canvas.getHeight() * 0.15)/2,
                                        this.canvas.getWidth() * 0.2,
                                        this.canvas.getHeight() * 0.15)
        };
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer,
                                            this.canvas.getWidth()*0.25 - (this.canvas.getWidth() * 0.35)/2,
                                            this.canvas.getHeight()*0.6 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.35,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                                                    this.player.setQuestionsAnswered(this.player.getQuestionsAnswered() + 1);
                                                    this.score += 1;
                                                }
                                                else {
                                                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                                                };
                                                this.mouseListener.setHasBeenClicked()});
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer1,
                                            this.canvas.getWidth()*0.75 - (this.canvas.getWidth() * 0.35)/2,
                                            this.canvas.getHeight()*0.6- (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.35,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer1 == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                                                    this.player.setQuestionsAnswered(this.player.getQuestionsAnswered() + 1);
                                                    this.score += 1;
                                                }
                                                else {
                                                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                                                };
                                                this.mouseListener.setHasBeenClicked()});
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer2,
                                            this.canvas.getWidth()*0.25 - (this.canvas.getWidth() * 0.35)/2,
                                            this.canvas.getHeight()*0.75 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.35,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer2 == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                                                    this.player.setQuestionsAnswered(this.player.getQuestionsAnswered() + 1);
                                                    this.score += 1;
                                                }
                                                else {
                                                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                                                };
                                                this.mouseListener.setHasBeenClicked()});
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer3,
                                            this.canvas.getWidth()*0.75 - (this.canvas.getWidth() * 0.35)/2,
                                            this.canvas.getHeight()*0.75 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.35,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer3 == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                                                    this.player.setQuestionsAnswered(this.player.getQuestionsAnswered() + 1);
                                                    this.score += 1;
                                                }
                                                else {
                                                    this.setCurrentQuestion(this.GeoArray[MathHelper.randomNumber(0, this.GeoArray.length - 1)]);
                                                };
                                                this.mouseListener.setHasBeenClicked()});
    };

    GeoArray = [{
        ImgSrc: "",
        Question: "Hoeveel inwoners heeft Europa?",
        Question1:"",
        Answer: "741.1 miljoen",
        Answer1: "1 miljard",
        Answer2: " 884.6miljoen",
        Answer3: "1,3 miljard",
        RightAnswer: "741.1 miljoen"
    },
    {
        ImgSrc: "",
        Question: "Hoe ontstaat een Tsunami?",
        Question1:"",
        Answer: "Een scheet van een walvis",
        Answer1: "Aardbeving in de zee",
        Answer2: " Vulkaan die onder water uitbarst",
        Answer3: "Het vrijkomen van Oergassen",
        RightAnswer: "Aardbeving in de zee"
    },
   {
        ImgSrc: "",
        Question: "De hoofdstad van Noorwegen is:",
        Question1:"",
        Answer: "Reykjavik",
        Answer1: "Helsinki",
        Answer2: "Stockholm",
        Answer3: "Oslo",
        RightAnswer: "Oslo"
    },
    {
        ImgSrc: "",
        Question: "De hoofdstad van IJsland is:",
        Question1:"",
        Answer: "Reykjavik",
        Answer1: "Helsinki",
        Answer2: "Stockholm",
        Answer3: "Oslo",
        RightAnswer: "Reykjavik"
    },
    {
        ImgSrc: "",
        Question: "Hoe heet het vloeistof wat in een vulkaan zit als hij nog niet uitgebarsten is?:",
        Question1:"",
        Answer: "Lava",
        Answer1: "Magma",
        Answer2: "MM3O",
        Answer3: "Kwik",
        RightAnswer: "Magma"
    },
    {
        ImgSrc: "",
        Question: "Hoeveel provincies heeft Nederland",
        Question1:"",
        Answer:"12",
        Answer1: "9",
        Answer2: "11",
        Answer3: "8",
        RightAnswer: "12"
    },
    {
        ImgSrc: "",
        Question: "Hoeveel buurlanden heeft Duitsland?",
        Question1:"",
        Answer: "9",
        Answer1: "8",
        Answer2: "13",
        Answer3: "5",
        RightAnswer: "9"
    },
    {
        ImgSrc: "",
        Question: "Waaruit bestaat Magma?",
        Question1:"",
        Answer: "Geëxplodeerde brokstukken",
        Answer1: "Verhit modder",
        Answer2: "Vuur",
        Answer3: "Gesmolten gesteente",
        RightAnswer: "Gesmolten gesteente"
    },
    {
        ImgSrc: "",
        Question: "Hoe hoog vliegt een vliegtuig gemiddeld?",
        Question1:"",
        Answer: "32km",
        Answer1: "16km",
        Answer2: "25km",
        Answer3: "10km",
        RightAnswer: "10km"
    },
    {
        ImgSrc: "",
        Question: "Welk land is het grootst?",
        Question1:"",
        Answer: "Denemarken",
        Answer1: "Luxemburg",
        Answer2: "België",
        Answer3: "Nederland",
        RightAnswer: "Nederland"
    },
    {
        ImgSrc: "",
        Question: "Waar kun je het Ruhrgebied vinden?",
        Question1:"",
        Answer: "De Alpen",
        Answer1: "Zwitserland",
        Answer2: "Duitsland",
        Answer3: "Veluwe",
        RightAnswer: "Duitsland"
    },
    {
        ImgSrc: "",
        Question: "Waarvan is Warschau de hoofdstad",
        Question1:"",
        Answer: "Letland",
        Answer1: "Polen",
        Answer2: "Slovenië",
        Answer3: "Moldavië",
        RightAnswer: "Polen"
    },
    {
        ImgSrc: "",
        Question: "De hoofdstad van Kroatië is?",
        Question1:"",
        Answer: "Zadar",
        Answer1: "Zagreb",
        Answer2: "Sofia",
        Answer3: "Triëst",
        RightAnswer: "Zagreb"
    },
    {
        ImgSrc: "",
        Question: "Welke rivier stroomt niet door Frankrijk?",
        Question1:"",
        Answer: "Rhone",
        Answer1: "Loire",
        Answer2: "Reine",
        Answer3: "Seine",
        RightAnswer: "Reine"
    },
    {
        ImgSrc: "",
        Question: "Waar kun je de straat van Gibraltar vinden?",
        Question1:"",
        Answer: "Tussen Spanje en Marokko.",
        Answer1: "Tussen Griekenland en Italië.",
        Answer2: "Tussen Griekenland en Turkije.",
        Answer3: "Tussen Frankrijk en Engeland.",
        RightAnswer: "Tussen Spanje en Marokko."
    },
    {
        ImgSrc: "",
        Question: "Wat betekend de term vergrijzing?",
        Question1:"",
        Answer: "Jonge mensen die snel grijs worden",
        Answer1: "Het donker worden van de lucht",
        Answer2: "Dat er straks meer ouderen dan jongeren zijn",
        Answer3: "Het verslechteren van een stuk grond",
        RightAnswer: "Dat er straks meer ouderen dan jongeren zijn"
    },
    {
        ImgSrc: "",
        Question: "Wat is het bekendste exportproduct van Frankrijk?",
        Question1:"",
        Answer: "Croissant",
        Answer1: "Wijn",
        Answer2: "Kurk",
        Answer3: "Kaas",
        RightAnswer: "Wijn"
    },
    {
        ImgSrc: "./Assets/QuestionAK/France.jpg",
        Question: "Van welk land is deze vlag?",
        Question1:"",
        Answer: "Frankrijk",
        Answer1: "Duitsland",
        Answer2: "Servië",
        Answer3: "Nederland",
        RightAnswer: "Frankrijk"
    },
    {
        ImgSrc:"./Assets/QuestionAK/Italy.jpg",
        Question: "Welk land is hier te zien?",
        Question1:"",
        Answer: "Griekenland",
        Answer1: "Bulgarije",
        Answer2: "Malta",
        Answer3: "Italië",
        RightAnswer: "Italië"
    },
    {
        ImgSrc: "",
        Question: "In welk jaargetijde zal er het meeste water in een berg rivier zitten?",
        Question1:"",
        Answer: "In het voorjaar omdat de sneeuw op de bergen smelt.",
        Answer1: "In de winter omdat er dan heel veel sneeuw valt.",
        Answer2: "In de winter want dan regent het heel veel",
        Answer3: "In de herfst want dan worden de koeien weer op stal gezet.",
        RightAnswer: "In het voorjaar omdat de sneeuw op de bergen smelt."
    },
    {
        ImgSrc: "",
        Question: "Bij welk land hoort het eiland Corsica?",
        Question1:"",
        Answer: "Griekenland",
        Answer1: "Spanje",
        Answer2: "Frankrijk",
        Answer3: "Italië",
        RightAnswer: "Frankrijk"
    },
    {
        ImgSrc:"./Assets/QuestionAK/Croatia.png",
        Question: "Bij welk land hoort deze vlag?",
        Answer: "Letland",
        Answer1: "Kroatië",
        Answer2: "Oekraïne",
        Answer3: "Moldavië",
        RightAnswer: "Kroatië"
    },
    {
        ImgSrc:"./Assets/QuestionAK/Fin.jpg",
        Question: "Bij welk land hoort deze vlag?",
        Question1:"",
        Answer: "Finland",
        Answer1: "Polen",
        Answer2: "Zweden",
        Answer3: "IJsland",
        RightAnswer: "Finland"
    },
    {
        ImgSrc:"./Assets/QuestionAK/Rusland.png",
        Question: "Bij welk land hoort deze vlag?",
        Question1:"",
        Answer: "Letland",
        Answer1: "Rusland",
        Answer2: "Wit-Rusland",
        Answer3: "Oekraïne",
        RightAnswer: "Rusland"
    },
    {
        ImgSrc:"./Assets/QuestionAK/Sweden.png",
        Question: "Bij welk land hoort deze vlag?",
        Question1:"",
        Answer: "Letland",
        Answer1: "Denemarken",
        Answer2: "Finland",
        Answer3: "Zweden",
        RightAnswer: "Zweden"
    },
    {
        ImgSrc:"./Assets/QuestionAK/WitRusland.png",
        Question: "Bij welk land hoort deze vlag?",
        Question1:"",
        Answer: "Letland",
        Answer1: "Estland",
        Answer2: "Wit-Rusland",
        Answer3: "Oekraïne",
        RightAnswer: "Wit-Rusland"
    },
    {
        ImgSrc:"./Assets/QuestionAK/Zwitserland.png",
        Question: "Bij welk land hoort deze vlag?",
        Question1:"",
        Answer: "Zwitserland",
        Answer1: "Polen",
        Answer2: "Oostenrijk",
        Answer3: "Roemenië",
        RightAnswer: "Zwitserland"
    }];

    public printQuestions(){
        let i = MathHelper.randomNumber(0, this.GeoArray.length - 1)
        console.log(this.GeoArray[i].Question,
                    this.GeoArray[i].Answer)
    };

    /**
     * @param currentQuestion
     * @access public
     * @method
     * Method fot setting the current question object
     */
    public setCurrentQuestion (currentQuestion : currentQuestion) : void {
        this.currentQuestion = currentQuestion;
    };

    /**
     * @access public
     * @method
     * Method for returning the current question object
     */
    public getCurrentQuestion () : currentQuestion {
        return this.currentQuestion;
    };
};

interface currentQuestion {
    Question: string,
    Question1?: string,
    Answer: string,
    Answer1: string,
    Answer2: string,
    Answer3: string,
    RightAnswer: String,
    ImgSrc?: string
};