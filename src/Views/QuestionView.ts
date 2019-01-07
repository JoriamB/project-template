class  QuestionView extends BaseView{

    private geography : Geography
    private mathquest: MathQuest
    private historyquest: HistoryQuest
    
    public constructor (src : string,
        canvas : Canvas,
        player : Player,
        mouseListener : MouseHelper,
        geography : Geography,
        mathquest: MathQuest,
        historyquest:HistoryQuest,) {
super(src, canvas, player, mouseListener);
this.geography = geography;
this.mathquest = mathquest;
this.historyquest = historyquest
};

/**
* @access public
* @method
* Required method to draw canvas
*/
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
    this.canvas.drawTextButtonToCanvas( "./assets/Icons/ButtonsFREE/PlayBlank.png",
                                        "Math",
                                        this.canvas.getWidth()*0.25 - (this.canvas.getWidth() * 0.1)/2,
                                        this.canvas.getHeight()*0.49 - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.075, () => {
                                            this.player.setLocation("Math");
                                            this.mouseListener.setHasBeenClicked()})

    this.canvas.drawTextButtonToCanvas( "./assets/Icons/ButtonsFREE/PlayBlank.png",
                                                "History",
                                                this.canvas.getWidth()*0.65 - (this.canvas.getWidth() * 0.1)/2,
                                                this.canvas.getHeight()*0.49 - (this.canvas.getHeight() * 0.1)/2,
                                                this.canvas.getWidth() * 0.1,
                                                this.canvas.getHeight() * 0.075, () => {
                                                    this.player.setLocation("History");
                                                    this.mouseListener.setHasBeenClicked()})
    this.canvas.drawTextButtonToCanvas( "./assets/Icons/ButtonsFREE/PlayBlank.png",
                                   "Geography",
                                 this.canvas.getWidth()*0.45 - (this.canvas.getWidth() * 0.1)/2,
                                 this.canvas.getHeight()*0.49 - (this.canvas.getHeight() * 0.1)/2,
                                 this.canvas.getWidth() * 0.1,
                                 this.canvas.getHeight() * 0.075, () => {
                                 this.geography.printQuestions()
                                 this.player.setCurrentQuestion(this.geography.QuestArray[MathHelper.randomNumber(0, this.geography.QuestArray.length)])
                                 this.player.setLocation("Geography");
                                 this.mouseListener.setHasBeenClicked()})

     
};

}