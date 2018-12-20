class StoreView extends BaseView {

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper) {
        super(  src,
                canvas,
                player,
                mouseListener);
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
        this.canvas.drawButtonToCanvas(  "./assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.03,
                                        this.canvas.getHeight() * 0.02,
                                        50,
                                        50,
                                        () => {
                                            this.player.setLocation("Map");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth())
        this.canvas.drawButtonToCanvas( "./assets/Icons/ButtonsFREE/Play.png",
                                        this.canvas.getWidth()*0.5 - 100,
                                        this.canvas.getHeight()*0.9 - 50,
                                        200,
                                        100,
                                        () => {
                                            if (this.player.getEnergy() >= 5) {
                                                this.player.setCoin(this.player.getCoin() + 5)
                                                this.player.setEnergy(this.player.getEnergy() - 5)
                                            };
                                            this.mouseListener.setHasBeenClicked()
                                        });
        };
    };