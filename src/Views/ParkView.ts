class ParkView extends BaseView {

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper,
                        soundcontroller : SoundController) {
        super(src, canvas, player, mouseListener, soundcontroller);
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
        this.canvas.drawButtonToCanvas(  "./Assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.05,
                                        this.canvas.getWidth() * 0.025,
                                        this.canvas.getHeight() * 0.05, 
                                        () => {
                                            this.player.setPlayedMiniGame(true);
                                            this.soundcontroller.playBackgroundMusic();
                                            this.player.setLocation("Map");
                                            this.mouseListener.setHasBeenClicked()});
        this.canvas.drawButtonToCanvas(  "./Assets/FootballGame/parkGoal.png",
                                        this.canvas.getWidth() * 0.739,
                                        this.canvas.getHeight() * 0.2555,
                                        this.canvas.getWidth()*0.24,
                                        this.canvas.getHeight()*0.32, 
                                        () => {
                                            if (this.player.getMood() < 100) {
                                            this.player.setLocation("Soccer");
                                            };
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
    };
};