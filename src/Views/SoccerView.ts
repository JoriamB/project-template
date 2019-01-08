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
                                            this.player.setLocation("Park");
                                            this.mouseListener.setHasBeenClicked()});
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.canvas.getWidth()*0.9,
                                        this.canvas.getHeight()*0.05,
                                        this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth());
        this.canvas.drawButtonToCanvas( "./Assets/FootballGame/goal.jpg",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.21)/2,
                                        this.canvas.getHeight()*0.51 - (this.canvas.getHeight() * 0.2)/2,
                                        this.canvas.getWidth() * 0.21,
                                        this.canvas.getHeight() * 0.2,
                                        () => {
                                            if (this.mouseListener.getEventX() > (this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.21)/2) + (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2&&
                                                this.mouseListener.getEventX() < (this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.21)/2) + (this.canvas.getWidth() * 0.21) - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2&&
                                                this.mouseListener.getEventY() > (this.canvas.getHeight()*0.51 - (this.canvas.getHeight() * 0.2)/2) + (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2&&
                                                this.mouseListener.getEventY() < (this.canvas.getHeight()*0.51 - (this.canvas.getHeight() * 0.2)/2) + (this.canvas.getHeight() * 0.21) - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2) {
                                                console.log("Goal!")
                                                this.mouseListener.setHasBeenClicked()
                                            }
                                        });
        this.canvas.drawImageToCanvas(  "./Assets/FootballGame/goalkeeper.png",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.15)/2,
                                        this.canvas.getHeight()*0.55 - (this.canvas.getHeight() * 0.2)/2,
                                        this.canvas.getWidth() * 0.15,
                                        this.canvas.getHeight() * 0.2);
        this.canvas.drawImageToCanvas(  "./Assets/FootballGame/football.png",
                                        this.mouseListener.getEventX() - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2,
                                        this.mouseListener.getEventY() - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2,
                                        this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()),
                                        this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()));
    };
};