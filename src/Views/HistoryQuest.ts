class HistoryQuest extends BaseView {

    private currentQuestion : currentQuestion;

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper) {
        super(src, canvas, player, mouseListener);
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
                                            this.canvas.getWidth()*0.35 - (this.canvas.getWidth() * 0.2)/2,
                                            this.canvas.getHeight()*0.6 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.2,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                }
                                                else {
                                                console.log("Probeer het opnieuw.");
                                                };
                                                this.mouseListener.setHasBeenClicked()});
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer1,
                                            this.canvas.getWidth()*0.65 - (this.canvas.getWidth() * 0.2)/2,
                                            this.canvas.getHeight()*0.6 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.2,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer1 == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                }
                                                else {
                                                    console.log("Probeer het opnieuw.");
                                                };
                                                this.mouseListener.setHasBeenClicked()});
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer2,
                                            this.canvas.getWidth()*0.35 - (this.canvas.getWidth() * 0.2)/2,
                                            this.canvas.getHeight()*0.75 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.2,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer2 == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                }
                                                else {
                                                    console.log("Probeer het opnieuw.");
                                                };
                                                this.mouseListener.setHasBeenClicked()});
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer3,
                                            this.canvas.getWidth()*0.65 - (this.canvas.getWidth() * 0.2)/2,
                                            this.canvas.getHeight()*0.75 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.2,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer3 == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                }
                                                else {
                                                    console.log("Probeer het opnieuw.");
                                                };
                                                this.mouseListener.setHasBeenClicked()});
    };

    HistoryArray = [{
        ImgSrc: "",
        Question: "Hoe wordt de tijd tussen 1500 en 1600 genoemd?",
        Answer: "De Heksentijd",
        Answer1: "De Middeleeuwen",
        Answer2: "De Renaissance",
        Answer3: "De Gouden Eeuw",
        RightAnswer: "De Renaissance"
    },{
        ImgSrc: "",
        Question: "Wanneer was de Gouden Eeuw?",
        Answer: "De zeventiende eeuw",
        Answer1: "De vijftiende eeuw",
        Answer2: "De achttiende eeuw",
        Answer3: "De zestiende eeuw",
        RightAnswer: "De zeventiende eeuw"
    },{
        ImgSrc: "",
        Question: "Wie of wat is/was Max Havelaar?",
        Answer: "Een bedrijf",
        Answer1: "Een BN’er",
        Answer2: "Een boek",
        Answer3: "Een politicus",
        RightAnswer: "Een boek"
    },{
        ImgSrc: "",
        Question: "In welke tijd leefde Napoleon?",
        Answer: "1624 - 1676",
        Answer1: "1812 - 1864",
        Answer2: "1769 - 1821 ",
        Answer3: "1534 - 1586",
        RightAnswer: "1769 - 1821"
    },{
        ImgSrc: "",
        Question: "Van welk land was Napoleon keizer?",
        Answer: "Oostenrijk",
        Answer1: "Frankrijk",
        Answer2: "Duitsland ",
        Answer3: "Spanje",
        RightAnswer: "Frankrijk"
    },{
        ImgSrc: "",
        Question: "Welke strijd heeft Napoleon verloren?",
        Answer: "Hiroshima",
        Answer1: "Waterloo",
        Answer2: "Gettysburg",
        Answer3: "De Franse Revolutie",
        RightAnswer: "Waterloo"
    },{
        ImgSrc: "",
        Question: "Wie schilderde de Nachtwacht?",
        Answer: "Rembrandt van Rijn",
        Answer1: "Vincent van Gogh",
        Answer2: "Pablo Picasso",
        Answer3: "Johannes Vermeer",
        RightAnswer: "Rembrandt van Rijn"
    },{
        ImgSrc: "",
        Question: "Wie heeft de Mona Lisa geschilderd?",
        Answer: "Pablo Picasso",
        Answer1: "Leonardo da Vinci",
        Answer2: "Salvador Dali ",
        Answer3: "Vincent van Gogh",
        RightAnswer: "Leonardo da Vinci"
    },{
        ImgSrc: "",
        Question: "Welke schilder sneed in 1888 een stuk van zijn oor af?",
        Answer: "Leonardo da Vinci",
        Answer1: "Pablo Picasso",
        Answer2: "Johannes Vermeer",
        Answer3: "Vincent van Gogh",
        RightAnswer: "Vincent van Gogh"
    },{
        ImgSrc: "",
        Question: "Welk politiek leider hield de bekende toespraak “I have a dream”?",
        Answer: "Geert Wilders",
        Answer1: "Martin Luther King",
        Answer2: "Nelson Mandela",
        Answer3: "Barack Obama",
        RightAnswer: "Martin Luther King"
    },{
        ImgSrc: "",
        Question: " Ter ere van welke Grieks god werden de vroegere Olympische spelen in Griekenland gehouden?",
        Answer: "Apollo",
        Answer1: "Zeus",
        Answer2: "Athena ",
        Answer3: "Poseidon",
        RightAnswer: "Zeus"
    },{
        ImgSrc: "",
        Question: "In welk werelddeel vond de eerste wereldoorlog plaats?",
        Answer: "Azie",
        Answer1: "Noord-Amerika",
        Answer2: "Afrika ",
        Answer3: "Europa",
        RightAnswer: "Europa"
    },{
        ImgSrc: "",
        Question: "Wanneer eindigde de eerste wereldoorlog?",
        Answer: "1923",
        Answer1: "1889",
        Answer2: "1945 ",
        Answer3: "1918",
        RightAnswer: "1918"
    },{
        ImgSrc: "",
        Question: "Waar kwam Michiel de Ruyter vandaan?",
        Answer: "Hoek van Holland",
        Answer1: "Vlissingen",
        Answer2: "Rotterdam ",
        Answer3: "Breskens",
        RightAnswer: "Vlissingen"
    },{
        ImgSrc: "",
        Question: "Hoe ging Adolf Hitler dood?",
        Answer: "Hij werd geraakt door een bom",
        Answer1: "Hij werd neergeschoten",
        Answer2: "Hij werd opgehangen ",
        Answer3: "Hij pleegde zelfmoord",
        RightAnswer: "Hij pleegde zelfmoord"
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },{
        ImgSrc: "",
        Question: "",
        Answer: "",
        Answer1: "",
        Answer2: " ",
        Answer3: "",
        RightAnswer: ""
    },];

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