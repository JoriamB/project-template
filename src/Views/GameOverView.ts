class GameOverView extends BaseView {

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
        this.canvas.drawTextToCanvas(   "center",
                                        40,
                                        "Minecraft",
                                        "white",
                                        "Game Over!",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.5)
    };
};