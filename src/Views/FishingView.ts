class FishingView extends BaseView {
    
    private score : number;

    private fishArray : Array<Fish>
    
    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper,
                        fishArray : Array<Fish>,
                        score : number) {
        super(src, canvas, player, mouseListener);
        this.fishArray = fishArray;
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
        for (let i = 0; i < this.fishArray.length; i++) {
            this.fishArray[i].draw()
        };
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "white",
                                        `Score: ${this.score}`,
                                        this.canvas.getWidth() * 0.3,
                                        this.canvas.getHeight() * 0.08);
        this.canvas.drawButtonToCanvas( "./Assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.05,
                                        this.canvas.getWidth() * 0.025,
                                        this.canvas.getHeight() * 0.05,
                                        () => {
                                            if (this.player.getMood() < 70) {
                                                this.player.setEnergy(this.player.getEnergy() - 10);
                                                this.player.setMood(this.player.getMood() + 30);
                                            }
                                            else {
                                                this.player.setEnergy(this.player.getEnergy() - 10);
                                                this.player.setMood(100);
                                            };
                                            this.score = 0;
                                            this.player.setLocation("Beach");
                                            this.mouseListener.setHasBeenClicked()});
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.canvas.getWidth()*0.9,
                                        this.canvas.getHeight()*0.05,
                                        this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth())
        this.canvas.drawImageToCanvas(  "./Assets/FishingGame/fish.png",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.15)/2,
                                        this.canvas.getHeight()*0.55 - (this.canvas.getHeight() * 0.2)/2,
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.1)
        this.canvas.drawImageToCanvas(  "./Assets/FishingGame/hengel.png",
                                        this.mouseListener.getEventX() - (this.canvas.getWidth() * 0.05)/2,
                                        this.mouseListener.getEventY() - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.1);
    };

    public getScore () : number {
        return this.score
    };

    public setScore (score : number) {
        this.score = score;
    };
};