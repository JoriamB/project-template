class RestaurantView extends BaseView {

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
                                            this.soundcontroller.playBackgroundMusic();
                                            this.player.setLocation("Map");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.canvas.getWidth()*0.9,
                                        this.canvas.getHeight()*0.05,
                                        this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth());
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                        "Eten",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.1)/2,
                                        this.canvas.getHeight()*0.9 - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.1,
                                        () => {
                                            if (this.player.getHunger() < 80 ) {
                                                this.player.setEaten(this.player.getEaten() + 1);
                                                this.soundcontroller.playEatEffect();
                                                this.player.setCoin(this.player.getCoin() - 15)
                                                this.player.setHunger(this.player.getHunger() + 20)
                                            }
                                            else if (   this.player.getHunger()< 100) {
                                                        this.player.setEaten(this.player.getEaten() + 1);
                                                        this.soundcontroller.playEatEffect();
                                                        this.player.setCoin(this.player.getCoin() - 15)
                                                        this.player.setHunger(100)
                                            };
                                            this.mouseListener.setHasBeenClicked()
                                        });
    };
};