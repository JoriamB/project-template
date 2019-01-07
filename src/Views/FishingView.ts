class FishingView extends BaseView{
    
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
                                            if (this.player.getMood() < 70) {
                                                this.player.setEnergy(this.player.getEnergy() - 10);
                                                this.player.setMood(this.player.getMood() + 30);
                                            }
                                            else {
                                                this.player.setEnergy(this.player.getEnergy() - 10);
                                                this.player.setMood(100);
                                            };
                                            this.player.setLocation("Beach");
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
        this.canvas.drawImageToCanvas(  "./Assets/FishingGame/fishblue1.png",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.15)/2,
                                        this.canvas.getHeight()*0.55 - (this.canvas.getHeight() * 0.2)/2,
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.1)
        this.canvas.drawImageToCanvas(  "./Assets/FishingGame/hengel.png",
                                        this.mouseListener.getEventX() - (this.canvas.getWidth() * 0.05)/2,
                                        this.mouseListener.getEventY() - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.1);
    };
};