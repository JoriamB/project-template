/// <reference path="./../Game.ts"/>
class Park extends BaseView {

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player) {
        super(src, canvas, player);
    };

    public draw = () => {
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.05,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.1,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.15,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.2,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
    };
};