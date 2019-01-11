class SoccerView extends BaseView{

    private clock : Timer;
    private score : number;
    
    public constructor (src : string,
        canvas : Canvas,
        player : Player,
        mouseListener : MouseHelper,
        soundcontroller : SoundController,
        clock : Timer,
        score : number) {
super(src, canvas, player, mouseListener, soundcontroller);
    this.clock = clock;
    this.score = score;
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
        this.canvas.drawButtonToCanvas( "./Assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.05,
                                        this.canvas.getWidth() * 0.025,
                                        this.canvas.getHeight() * 0.05,
                                        () => {
                                            this.player.setEnergy(this.player.getEnergy()-15);
                                            this.player.setHunger(this.player.getHunger()-30);
                                            if (this.player.getMood() <= 70) {
                                                this.player.setMood(this.player.getMood() + 30);
                                            }
                                            else {
                                                this.player.setMood(100);
                                            }
                                            this.score = 0;
                                            this.player.setLocation("Park");
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
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        `Score: ${this.score}`,
                                        this.canvas.getWidth() * 0.3,
                                        this.canvas.getHeight() * 0.08);
        this.canvas.drawButtonToCanvas( "./Assets/FootballGame/goal.jpg",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.21)/2,
                                        this.canvas.getHeight()*0.51 - (this.canvas.getHeight() * 0.2)/2,
                                        this.canvas.getWidth() * 0.21,
                                        this.canvas.getHeight() * 0.2,
                                        () => {
                                            if (this.mouseListener.getEventX() > (this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.21)/2) + (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2&&
                                                this.mouseListener.getEventX() < (this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.21)/2) + (this.canvas.getWidth() * 0.21) - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2&&
                                                this.mouseListener.getEventY() > (this.canvas.getHeight()*0.51 - (this.canvas.getHeight() * 0.2)/2) + (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2&&
                                                this.mouseListener.getEventY() < (this.canvas.getHeight()*0.51 - (this.canvas.getHeight() * 0.2)/2) + (this.canvas.getHeight() * 0.21) - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2) {
                                                this.soundcontroller.playScoreEffect();
                                                this.score += 1;
                                                this.mouseListener.setHasBeenClicked()
                                            }
                                        });
        this.canvas.drawImageToCanvas(  "./Assets/FootballGame/goalkeeper.png",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.15)/2,
                                        this.canvas.getHeight()*0.55 - (this.canvas.getHeight() * 0.2)/2,
                                        this.canvas.getWidth() * 0.15,
                                        this.canvas.getHeight() * 0.2);
        this.canvas.drawImageToCanvas(  "./Assets/FootballGame/football.png",
                                        this.mouseListener.getEventX() - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2,
                                        this.mouseListener.getEventY() - (this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))/2,
                                        this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()),
                                        this.canvas.getHeight() * (0.2 * this.mouseListener.getEventY()/this.canvas.getHeight()))
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        String(`Tijd: ${this.clock.getTime()}`),
                                        300,
                                        80)
    };
};