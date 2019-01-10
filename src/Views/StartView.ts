class StartView extends BaseView {

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
        this.canvas.drawTextToCanvas(   "center",
                                        100,
                                        "Minecraft",
                                        "orange",
                                        "Ludos Mundi",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.25);
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                        "Uitleg",
                                        this.canvas.getWidth()*0.4 - (this.canvas.getWidth() * 0.1)/2,
                                        this.canvas.getHeight()*0.5 - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.1,
                                        () => {
                                            this.player.setLocation("SelectPlayer")
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                        "Speel",
                                        this.canvas.getWidth()*0.6 - (this.canvas.getWidth() * 0.1)/2,
                                        this.canvas.getHeight()*0.5 - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.1,
                                        () => {
                                            this.player.setLocation("SelectPlayer")
                                            this.mouseListener.setHasBeenClicked()
                                        });

    };
};