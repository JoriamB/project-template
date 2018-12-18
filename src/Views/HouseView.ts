class HouseView extends BaseView {

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player) {
        super(src, canvas, player);
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
                                        (event: MouseEvent) => {
                                            this.player.setLocation("Map");
                                        });
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                        this.canvas.getHeight()*0.05,
                                        100,
                                        this.player.getHunger(),
                                        20,
                                        "black",
                                        "green",
                                        "black",
                                        "Hunger:",
                                        20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                        this.canvas.getHeight()*0.1,
                                        100,
                                        this.player.getEnergy(),
                                        20,
                                        "black",
                                        "red",
                                        "black",
                                        "Energy:",
                                        20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                        this.canvas.getHeight()*0.15,
                                        100,
                                        this.player.getMood(),
                                        20,
                                        "black",
                                        "orange",
                                        "black",
                                        "Mood:",
                                        20);
            this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                        this.canvas.getHeight()*0.2,
                                        100,
                                        this.player.getHealth(),
                                        20,
                                        "black",
                                        "red",
                                        "black",
                                        "Health:",
                                        20);
        this.player.move();
        this.canvas.drawImageToCanvas("./Assets/Female/Poses/female_walk1.png",
                                        this.player.getX(),
                                        this.player.getY(),
                                        this.player.getWidth(),
                                        this.player.getHeight());
                                                                
    };
};