class MathQuest extends BaseView{

    private currentQuestion : currentQuestion;

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper) {
        super(src, canvas, player, mouseListener);
        this.currentQuestion = this.MathArray[0];
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
                                                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
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
                                                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
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
                                                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
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
                                                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                                                    console.log("Goed Gedaan!");
                                                }
                                                else {
                                                    console.log("Probeer het opnieuw.");
                                                };
                                                this.mouseListener.setHasBeenClicked()});                       
    };

    MathArray = [{
        ImgSrc: "",
        Question:"0,4 miljoen kun je ook schrijven als?",
        Answer:"400.00",
        Answer1:"4 duizend",
        Answer2:"40 duizend",
        Answer3:"400.000",
        RightAnswer:"400.000"
    },
    {
        ImgSrc: "",
        Question:"8,3 miljard is 8 miljard en ...?",
        Answer:"30.000",
        Answer1:"300.000",
        Answer2:"300.000.000",
        Answer3:"300.000.000.000",
        RightAnswer:"300.000.000"
    },
    {
        ImgSrc: "",
        Question:"Hoeveel is een half miljoen?",
        Answer:"50.000",
        Answer1:"500.000",
        Answer2:"5000.000",
        Answer3:"5000",
        RightAnswer:"500.000"
    },
    {
        ImgSrc: "",
        Question:"Hoeveel is 0,8 miljoen?",
        Answer:"80.000",
        Answer1:"800.000",
        Answer2:"8.000.000",
        Answer3:"8000",
        RightAnswer:"800.000"
    },
    {
        ImgSrc: "",
        Question:"Hoeveel is honderdduizend?",
        Answer:"10.000",
        Answer1:"100.000",
        Answer2:"1000.000",
        Answer3:"1000.00",
        RightAnswer:"100.000"
    },
    {
        ImgSrc: "",
        Question:"2,8 miljoen kun je ook schrijven als...?",
        Answer:"50.000",
        Answer1:"500.000",
        Answer2:"5000.000",
        Answer3:"5000",
        RightAnswer:"500.00"
    },
    {
        ImgSrc: "",
        Question:"Hoeveel is een half miljoen?",
        Answer:"50.000",
        Answer1:"500.000",
        Answer2:"5000.000",
        Answer3:"5000",
        RightAnswer:"500.00"}];

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
}