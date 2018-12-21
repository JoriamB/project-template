class SoccerView extends BaseView{
    
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
    console.log(this.src)
this.canvas.drawImageToCanvas(  this.src,
                        0,
                        0,
                        this.canvas.getWidth(),
                        this.canvas.getHeight());
this.canvas.drawButtonToCanvas(  "./assets/Icons/ButtonsFREE/Home.png",
                        this.canvas.getWidth() * 0.05,
                        this.canvas.getHeight() * 0.05,
                        50,
                        50,
                        () => {
                            this.player.setEnergy(this.player.getEnergy()-15),
                            this.player.setHunger(this.player.getHunger()-30)
                            this.player.setLocation("Park");
                            this.mouseListener.setHasBeenClicked()});
this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                        this.canvas.getHeight() * 0.04,
                        this.player.getCoin());
this.canvas.drawBarToCanvas(    this.canvas.getWidth()*0.9,
                        this.canvas.getHeight()*0.05,
                        100,
                        this.player.getHunger(),
                        20,
                        "black",
                        "green",
                        "black",
                        "Hunger:",
                        20);
this.canvas.drawBarToCanvas(    this.canvas.getWidth()*0.9,
                        this.canvas.getHeight()*0.1,
                        100,
                        this.player.getEnergy(),
                        20,
                        "black",
                        "red",
                        "black",
                        "Energy:",
                        20);
this.canvas.drawBarToCanvas(    this.canvas.getWidth()*0.9,
                        this.canvas.getHeight()*0.15,
                        100,
                        this.player.getMood(),
                        20,
                        "black",
                        "orange",
                        "black",
                        "Mood:",
                        20);
this.canvas.drawBarToCanvas(    this.canvas.getWidth()*0.9,
                        this.canvas.getHeight()*0.2,
                        100,
                        this.player.getHealth(),
                        20,
                        "black",
                        "red",
                        "black",
                        "Health:",
                        20);
 this.canvas.drawImageToCanvas("./assets/FootballGame/goalkeeper.png",
                            this.canvas.getWidth()*0.5-75,
                            this.canvas.getHeight()*0.6 -75,
                            150,
                            150,)
                            console.log(this.mouseListener.getEventX(),this.mouseListener.getEventY())
this.canvas.drawImageToCanvas( "./assets/FootballGame/football.png",
                                this.mouseListener.getEventX()-25,
                                this.mouseListener.getEventY()-25,
                                50,
                                50);
};
};