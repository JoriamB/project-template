class SoccerView extends BaseView{
    
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
        console.log(this.src)
        this.canvas.drawImageToCanvas(  this.src,
                                        0,
                                        0,
                                        this.canvas.getWidth(),
                                        this.canvas.getHeight());
        this.canvas.drawButtonToCanvas( "./assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.05,
                                        50,
                                        50,
                                        () => {
                                            this.player.setEnergy(this.player.getEnergy()-15),
                                            this.player.setHunger(this.player.getHunger()-30)
                                            this.player.setLocation("Park");
                                            this.mouseListener.setHasBeenClicked()});
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth())
        this.canvas.drawImageToCanvas(  "./assets/FootballGame/goalkeeper.png",
                                        this.canvas.getWidth()*0.5-75,
                                        this.canvas.getHeight()*0.6 -75,
                                        150,
                                        150)
        if (this.mouseListener.getEventY() < this.canvas.getHeight() * 0.2) {
            this.canvas.drawImageToCanvas(  "./assets/FootballGame/football.png",
                                            this.mouseListener.getEventX()-15,
                                            this.mouseListener.getEventY()-15,
                                            30,
                                            30);
        }
        else if (this.mouseListener.getEventY() < this.canvas.getHeight() * 0.4) {
            this.canvas.drawImageToCanvas(  "./assets/FootballGame/football.png",
                                            this.mouseListener.getEventX()-20,
                                            this.mouseListener.getEventY()-20,
                                            40,
                                            40);
        }
        else if (this.mouseListener.getEventY() < this.canvas.getHeight() * 0.4) {
            this.canvas.drawImageToCanvas(  "./assets/FootballGame/football.png",
                                            this.mouseListener.getEventX()-25,
                                            this.mouseListener.getEventY()-25,
                                            50,
                                            50);
        }
        else if (this.mouseListener.getEventY() < this.canvas.getHeight() * 0.5) {
            this.canvas.drawImageToCanvas(  "./assets/FootballGame/football.png",
                                            this.mouseListener.getEventX()-30,
                                            this.mouseListener.getEventY()-30,
                                            60,
                                            60);
        }
        else if (this.mouseListener.getEventY() < this.canvas.getHeight() * 0.6) {
            this.canvas.drawImageToCanvas(  "./assets/FootballGame/football.png",
                                            this.mouseListener.getEventX()-35,
                                            this.mouseListener.getEventY()-35,
                                            70,
                                            70);
        }
        else if (this.mouseListener.getEventY() < this.canvas.getHeight() * 0.7) {
            this.canvas.drawImageToCanvas(  "./assets/FootballGame/football.png",
                                            this.mouseListener.getEventX()-40,
                                            this.mouseListener.getEventY()-40,
                                            80,
                                            80);
        }
        else if (this.mouseListener.getEventY() < this.canvas.getHeight() * 0.8) {
            this.canvas.drawImageToCanvas(  "./assets/FootballGame/football.png",
                                            this.mouseListener.getEventX()-45,
                                            this.mouseListener.getEventY()-45,
                                            90,
                                            90);
        }
        else {
            this.canvas.drawImageToCanvas(  "./assets/FootballGame/football.png",
                                            this.mouseListener.getEventX()-50,
                                            this.mouseListener.getEventY()-50,
                                            100,
                                            100);
        };
    };
};