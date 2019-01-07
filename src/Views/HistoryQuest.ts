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
        this.canvas.drawButtonToCanvas( "./assets/Icons/ButtonsFREE/Home.png",
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
        this.canvas.drawTextButtonToCanvas( "./assets/Icons/ButtonsFREE/PlayBlank.png",
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
        this.canvas.drawTextButtonToCanvas( "./assets/Icons/ButtonsFREE/PlayBlank.png",
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
        this.canvas.drawTextButtonToCanvas( "./assets/Icons/ButtonsFREE/PlayBlank.png",
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
        this.canvas.drawTextButtonToCanvas( "./assets/Icons/ButtonsFREE/PlayBlank.png",
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
        Question: "Hoeveel inwoners heeft Europa?",
        Answer: " 741.1 miljoen",
        Answer1: "1 miljard",
        Answer2: " 884.6miljoen",
        Answer3: "1,3 miljard",
        RightAnswer: "741.1 miljoen"
    }];

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