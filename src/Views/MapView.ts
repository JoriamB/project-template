class MapView extends BaseView {

    private tasklist : Tasklist;

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper,
                        tasklist : Tasklist) {
        super(src, canvas, player, mouseListener);
        this.tasklist = tasklist;
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
        if (!this.tasklist.getIsHidden()) {
            this.canvas.drawButtonToCanvas( "./Assets/Map/park.png",
                                            this.tasklist.getWidth(),
                                            0,
                                            this.canvas.getWidth()*0.3 - this.tasklist.getWidth(),
                                            this.canvas.getHeight()*0.328,
                                            () => {
                                                if (this.mouseListener.getEventX() < this.tasklist.getX()||
                                                    this.mouseListener.getEventX() > this.tasklist.getX() + this.tasklist.getWidth()||
                                                    this.mouseListener.getEventY() < this.tasklist.getY()||
                                                    this.mouseListener.getEventY() > this.tasklist.getY() + this.tasklist.getHeight()) {
                                                    this.player.setLocation("Park");
                                                };
                                                this.mouseListener.setHasBeenClicked()
                                            });
        }
        else {
            this.canvas.drawButtonToCanvas( "./Assets/Map/park.png",
                                            this.canvas.getWidth() * 0.02,
                                            0,
                                            this.canvas.getWidth()*0.28,
                                            this.canvas.getHeight()*0.328,
                                            () => {
                                                this.player.setLocation("Park");
                                                this.mouseListener.setHasBeenClicked()
                                            });
        };
        this.canvas.drawButtonToCanvas( "./Assets/Map/winkel.png",
                                        this.canvas.getWidth() *0.715,
                                        this.canvas.getHeight() * 0.48,
                                        this.canvas.getWidth()*0.1,
                                        this.canvas.getHeight()*0.16,
                                        () => {
                                            this.player.setLocation("Store");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./Assets/Map/school.png",
                                        this.canvas.getWidth() *0.673,
                                        this.canvas.getHeight() * 0.263,
                                        this.canvas.getWidth()*0.14,
                                        this.canvas.getHeight()*0.16,
                                        () => {
                                            this.player.setLocation("School");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./Assets/Map/ziekenuus.png",
                                        this.canvas.getWidth() *0.36,
                                        this.canvas.getHeight() * 0.0,
                                        this.canvas.getWidth()*0.16,
                                        this.canvas.getHeight()*0.215,
                                        () => {
                                            this.player.setLocation("Hospital");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./Assets/Map/restaurant.png",
                                        this.canvas.getWidth() * 0.475,
                                        this.canvas.getHeight() * 0.685,
                                        this.canvas.getWidth() * 0.056,
                                        this.canvas.getHeight() * 0.095,
                                        () => {
                                            this.player.setLocation("Restaurant");
                                            this.mouseListener.setHasBeenClicked()
                                        });
       this.canvas.drawButtonToCanvas( "./Assets/Map/house.png",
                                        this.canvas.getWidth() *0.151,
                                        this.canvas.getHeight() * 0.765,
                                        this.canvas.getWidth()*0.043,
                                        this.canvas.getHeight()*0.093,
                                        () => {
                                            this.player.setLocation("House");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./Assets/Map/strand.png",
                                        this.canvas.getWidth() *0.9,
                                        this.canvas.getHeight() * 0.0,
                                        this.canvas.getWidth()* 0.1,
                                        this.canvas.getHeight(),
                                        () => {
                                            this.player.setLocation("Beach");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()*0.2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.canvas.getWidth()*0.9,
                                        this.canvas.getHeight()*0.05,
                                        this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth())
        this.player.move();
        this.canvas.drawImageToCanvas(  this.player.getSrc(),
                                        this.player.getX(),
                                        this.player.getY(),
                                        this.player.getWidth(),
                                        this.player.getHeight());                        
    };
};