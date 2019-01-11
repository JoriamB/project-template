class HistoryQuest extends BaseView {

    private currentQuestion : currentQuestion;
    private score : number;

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper,
                        soundcontroller : SoundController,
                        score : number) {
        super(src, canvas, player, mouseListener, soundcontroller);
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
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        `Score: ${this.score}`,
                                        this.canvas.getWidth() * 0.3,
                                        this.canvas.getHeight() * 0.08);
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer,
                                            this.canvas.getWidth()*0.25 - (this.canvas.getWidth() * 0.35)/2,
                                            this.canvas.getHeight()*0.6 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.35,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                    this.score += 1;
                                                }
                                                else {
                                                console.log("Probeer het opnieuw.");
                                                this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                };
                                                this.mouseListener.setHasBeenClicked()});
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                            this.getCurrentQuestion().Answer1,
                                            this.canvas.getWidth()*0.75 - (this.canvas.getWidth() * 0.35)/2,
                                            this.canvas.getHeight()*0.6 - (this.canvas.getHeight() * 0.075)/2,
                                            this.canvas.getWidth() * 0.35,
                                            this.canvas.getHeight() * 0.075,
                                            () => {
                                                if (this.getCurrentQuestion().Answer1 == this.getCurrentQuestion().RightAnswer) {
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                    this.score += 1;
                                                }
                                                else {
                                                    console.log("Probeer het opnieuw.");
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
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
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                    this.score += 1;
                                                }
                                                else {
                                                    console.log("Probeer het opnieuw.");
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
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
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                    this.score += 1;
                                                }
                                                else {
                                                    console.log("Probeer het opnieuw.");
                                                    this.setCurrentQuestion(this.HistoryArray[MathHelper.randomNumber(0, this.HistoryArray.length - 1)]);
                                                };
                                                this.mouseListener.setHasBeenClicked()});
    };

    HistoryArray = [{
        ImgSrc: "",
        Question: "Hoe wordt de tijd tussen 1500 en 1600 genoemd?",
        Question1:"",
        Answer: "De Heksentijd",
        Answer1: "De Middeleeuwen",
        Answer2: "De Renaissance",
        Answer3: "De Gouden Eeuw",
        RightAnswer: "De Renaissance"
    },{
        ImgSrc: "",
        Question: "Wanneer was de Gouden Eeuw?",
        Question1:"",
        Answer: "De zeventiende eeuw",
        Answer1: "De vijftiende eeuw",
        Answer2: "De achttiende eeuw",
        Answer3: "De zestiende eeuw",
        RightAnswer: "De zeventiende eeuw"
    },{
        ImgSrc: "",
        Question: "Wie of wat is/was Max Havelaar?",
        Question1:"",
        Answer: "Een bedrijf",
        Answer1: "Een BN’er",
        Answer2: "Een boek",
        Answer3: "Een politicus",
        RightAnswer: "Een boek"
    },{
        ImgSrc: "",
        Question: "In welke tijd leefde Napoleon?",
        Question1:"",
        Answer: "1624 - 1676",
        Answer1: "1812 - 1864",
        Answer2: "1769 - 1821 ",
        Answer3: "1534 - 1586",
        RightAnswer: "1769 - 1821"
    },{
        ImgSrc: "",
        Question: "Van welk land was Napoleon keizer?",
        Question1:"",
        Answer: "Oostenrijk",
        Answer1: "Frankrijk",
        Answer2: "Duitsland ",
        Answer3: "Spanje",
        RightAnswer: "Frankrijk"
    },{
        ImgSrc: "",
        Question: "Welke strijd heeft Napoleon verloren?",
        Question1:"",
        Answer: "Hiroshima",
        Answer1: "Waterloo",
        Answer2: "Gettysburg",
        Answer3: "De Franse Revolutie",
        RightAnswer: "Waterloo"
    },{
        ImgSrc: "",
        Question: "Wie schilderde de Nachtwacht?",
        Question1:"",
        Answer: "Rembrandt van Rijn",
        Answer1: "Vincent van Gogh",
        Answer2: "Pablo Picasso",
        Answer3: "Johannes Vermeer",
        RightAnswer: "Rembrandt van Rijn"
    },{
        ImgSrc: "",
        Question: "Wie heeft de Mona Lisa geschilderd?",
        Question1:"",
        Answer: "Pablo Picasso",
        Answer1: "Leonardo da Vinci",
        Answer2: "Salvador Dali ",
        Answer3: "Vincent van Gogh",
        RightAnswer: "Leonardo da Vinci"
    },{
        ImgSrc: "",
        Question: "Welke schilder sneed in 1888 een stuk van zijn oor af?",
        Question1:"",
        Answer: "Leonardo da Vinci",
        Answer1: "Pablo Picasso",
        Answer2: "Johannes Vermeer",
        Answer3: "Vincent van Gogh",
        RightAnswer: "Vincent van Gogh"
    },{
        ImgSrc: "",
        Question: "Welk politiek leider hield de bekende toespraak “I have a dream”?",
        Question1:"",
        Answer: "Geert Wilders",
        Answer1: "Martin Luther King",
        Answer2: "Nelson Mandela",
        Answer3: "Barack Obama",
        RightAnswer: "Martin Luther King"
    },{
        ImgSrc: "",
        Question: " Ter ere van welke Grieks god werden de vroegere Olympische spelen in Griekenland gehouden?",
        Question1:"",
        Answer: "Apollo",
        Answer1: "Zeus",
        Answer2: "Athena ",
        Answer3: "Poseidon",
        RightAnswer: "Zeus"
    },{
        ImgSrc: "",
        Question: "In welk werelddeel vond de eerste wereldoorlog plaats?",
        Question1:"",
        Answer: "Azie",
        Answer1: "Noord-Amerika",
        Answer2: "Afrika ",
        Answer3: "Europa",
        RightAnswer: "Europa"
    },{
        ImgSrc: "",
        Question: "Wanneer eindigde de eerste wereldoorlog?",
        Question1:"",
        Answer: "1923",
        Answer1: "1889",
        Answer2: "1945 ",
        Answer3: "1918",
        RightAnswer: "1918"
    },{
        ImgSrc: "",
        Question: "Waar kwam Michiel de Ruyter vandaan?",
        Question1:"",
        Answer: "Hoek van Holland",
        Answer1: "Vlissingen",
        Answer2: "Rotterdam ",
        Answer3: "Breskens",
        RightAnswer: "Vlissingen"
    },{
        ImgSrc: "",
        Question: "Hoe ging Adolf Hitler dood?",
        Question1:"",
        Answer: "Hij werd geraakt door een bom",
        Answer1: "Hij werd neergeschoten",
        Answer2: "Hij werd opgehangen ",
        Answer3: "Hij pleegde zelfmoord",
        RightAnswer: "Hij pleegde zelfmoord"
    },{
        ImgSrc: "",
        Question: "Waar is Anne Frank geboren?",
        Question1:"",
        Answer: "Nederland",
        Answer1: "Duitsland",
        Answer2: "Frankrijk",
        Answer3: "Luxemburg",
        RightAnswer: "Duitsland"
    },{
        ImgSrc: "",
        Question: "Hoe heette het boek dat is gebasseerd op het dagboek van Anne Frank?",
        Question1:"",
        Answer: "Het achterhuis",
        Answer1: "Het voorhuis",
        Answer2: "Het warenhuis ",
        Answer3: "Verstopt",
        RightAnswer: "Het achterhuis"
    },{
        ImgSrc: "",
        Question: "Op 5 september 1944 denken veel Nederlanders dat de oorlog is afgelopen.",
        Question1:"Hoe noemen we die dag?",
        Answer: "D-Day",
        Answer1: "Bevrijding",
        Answer2: "Dolle Dinsdag ",
        Answer3: "Slag om Arnhem",
        RightAnswer: "Dolle Dinsdag"
    },{
        ImgSrc: "",
        Question: "De winter van 1944-1945 was een strenge winter. In het westen was een groot tekort aan voedsel.",
        Question1:"Duizenden mensen stierven. Hoe noemen we deze winter?",
        Answer: "De Schaarse winter",
        Answer1: "De Strenge winter",
        Answer2: "De Koude winter",
        Answer3: "De Hongerwinter",
        RightAnswer: "De Hongerwinter"
    },{
        ImgSrc: "",
        Question: "In de Tweede Wereldoorlog moesten 's avonds alle ramen verduisterd zijn. Waarom is dat zo?",
        Question1:"",
        Answer: "De Duitsers kunnen Joden oppakken.",
        Answer1: "Engelse piloten kunnen dan niet zien waar ze zijn",
        Answer2: "Dan viel het meteen op als er iemand van het verzet buiten liep.",
        Answer3: "Iedereen moest zuinig zijn, ook met verlichting.",
        RightAnswer: "Engelse piloten kunnen dan niet zien waar ze zijn"
    },{
        ImgSrc: "",
        Question: "Welke koning wordt in 1814 de baas van Nederland?",
        Question1:"",
        Answer: "Philip II",
        Answer1: "Willem I",
        Answer2: "Willem II ",
        Answer3: "Willem V",
        RightAnswer: "Willem I"
    },{
        ImgSrc: "",
        Question: "Wanneer werd de kolonie Suriname onafhankelijk van Nederland?",
        Question1:"",
        Answer: "1945",
        Answer1: "1963",
        Answer2: "1975 ",
        Answer3: "1954",
        RightAnswer: "1975"
    },{
        ImgSrc: "",
        Question: "In Nederland is een actiegroep die gelijke rechten wil voor mannen en vrouwen.",
        Question1:"Hoe heet die actiegroep?",
        Answer: "The Beatles",
        Answer1: "The Rolling Stones",
        Answer2: "Man en Vrouw ",
        Answer3: "Dolle Mina",
        RightAnswer: "Dolle Mina"
    },{
        ImgSrc: "",
        Question: "Na de Tweede Wereldoorlog vertrouwen Rusland en Amerika elkaar niet meer.",
        Question1:"De Russen bouwen een hek tussen Oost- en West-Europa. Hoe noemen we dit hek?",
        Answer: "Het IJzeren Gordijn",
        Answer1: "Het IJzeren Hek",
        Answer2: "De IJzeren Muur ",
        Answer3: "De IJzeren Balustrade",
        RightAnswer: "Het IJzeren Gordijn"
    },{
        ImgSrc: "",
        Question: "De mensen die in de prehistorie van plek naar plek trokken noemen we…",
        Question1:"",
        Answer: "Zwervers",
        Answer1: "Boeren",
        Answer2: "Nomaden ",
        Answer3: "Jager-verzamelaars",
        RightAnswer: "Jager-verzamelaars"
    },{
        ImgSrc: "",
        Question: "Met de 'prehistorie' bedoelen we…",
        Question1:"",
        Answer: "De periode waarin er nog geen mensen bestonden.",
        Answer1: "De periode na de Romeinse tijd.",
        Answer2: "De periode waaruit geen geschreven bronnen bekend zijn.",
        Answer3: "De periode voor de computers.",
        RightAnswer: "De periode waaruit geen geschreven bronnen bekend zijn."
    },{
        ImgSrc: "",
        Question: "Zo’n 7000 jaar geleden bleven de mensen voor langere tijd op één plek wonen. We noemen deze mensen…",
        Question1:"",
        Answer: "Boeren",
        Answer1: "Stedenbouwers",
        Answer2: "Eskimos",
        Answer3: "Jager-verzamelaars",
        RightAnswer: "Boeren"
    },{
        ImgSrc: "",
        Question: "Wie zei dat alle mensen christen moesten worden?",
        Question1:"",
        Answer: "De boeren die in Drenthe woonden.",
        Answer1: " De Romeinse Keizer.",
        Answer2: "De mensen die in Jezus Christus geloofden. ",
        Answer3: "De leider van de Germanen.",
        RightAnswer: " De Romeinse Keizer."
    },{
        ImgSrc: "",
        Question: "Wat was de belangrijkste reden om op ontdekkingsreis te gaan?",
        Question1:"",
        Answer: "Het Katholieke geloof verspreiden",
        Answer1: "Ontdekken hoe de wereld eruit ziet",
        Answer2: "Een snellere en veilige weg naar India en China vinden ",
        Answer3: "Europa was overbevolkt",
        RightAnswer: "Een snellere en veilige weg naar India en China vinden"
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