class MapView extends BaseView {

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
                                        this.canvas.getWidth() *0.05,
                                        this.canvas.getHeight() * 0.04,
                                        50,
                                        50,
                                        () => {
                                            this.player.setLocation("Store");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth() / 2,
                                        this.canvas.getHeight() * 0.02,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth())
        this.player.move();
        this.canvas.drawImageToCanvas(  "./Assets/Player/Female/Poses/female_walk1.png",
                                        this.player.getX(),
                                        this.player.getY(),
                                        this.player.getWidth(),
                                        this.player.getHeight());                        
    };
};