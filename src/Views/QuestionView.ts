class  QuestionView extends BaseView{
    
    public constructor (src : string,
        canvas : Canvas,
        player : Player,
        mouseListener : MouseHelper) {
super(src, canvas, player, mouseListener);
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
     
};

}