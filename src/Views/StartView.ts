class StartView extends BaseView {

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
                                        100,
                                        "Minecraft",
                                        "orange",
                                        "Ludos Mundi",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.25);
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                        "Uitleg",
                                        this.canvas.getWidth()*0.4 - (this.canvas.getWidth() * 0.1)/2,
                                        this.canvas.getHeight()*0.8 - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.1,
                                        () => {
                                            this.player.setLocation("Tutorial")
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                        "Speel",
                                        this.canvas.getWidth()*0.6 - (this.canvas.getWidth() * 0.1)/2,
                                        this.canvas.getHeight()*0.8 - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.1,
                                        () => {
                                            this.player.setLocation("SelectPlayer")
                                            this.mouseListener.setHasBeenClicked()
                                        });

        this.canvas.drawButtonToCanvas( "./Assets/Icons/ButtonsFREE/globe.png",
                                        this.canvas.getWidth() *0.45,
                                        this.canvas.getHeight() *0.4,
                                        this.canvas.getWidth()*0.1,
                                        this.canvas.getHeight()*0.2,
                                        () => {
                                            this.player.setLocation("Credits");
                                            this.mouseListener.setHasBeenClicked()
                                        });

    };
};