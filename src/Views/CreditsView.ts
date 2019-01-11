class CreditsView extends BaseView {

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
        this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/ReturnHome.png",
                                        this.canvas.getWidth()*0.075,
                                        this.canvas.getHeight()*0.075,
                                        50,
                                        50,
                                        () => {
                                            this.player.setLocation("StartView");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawImageToCanvas(  "./Assets/images/Credits.jpg",
                                        this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.4)/2,
                                        this.canvas.getHeight() * 0.2,
                                        this.canvas.getWidth() * 0.4,
                                        this.canvas.getHeight() * 0.5);
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        "Teamleden:",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.75);
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        "Anissa Fatima Zohra Boufrahi",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.8);
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        "Joriam Bruggeman",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.85);
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        "Julien Kenneth Pleijte",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.9);
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        "Anissa Sarah Thieleman",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.95);
    
    };
};