class MapView extends BaseView {

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
        this.canvas.drawButtonToCanvas( "./assets/map/park.png",
                                        0,
                                        0,
                                        this.canvas.getWidth()*0.3,
                                        this.canvas.getHeight()*0.328,
                                        () => {
                                            this.player.setLocation("Park");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./assets/map/winkel.png",
                                        this.canvas.getWidth() *0.715,
                                        this.canvas.getHeight() * 0.48,
                                        this.canvas.getWidth()*0.1,
                                        this.canvas.getHeight()*0.16,
                                        () => {
                                            this.player.setLocation("Store");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./assets/map/school.png",
                                        this.canvas.getWidth() *0.673,
                                        this.canvas.getHeight() * 0.263,
                                        this.canvas.getWidth()*0.14,
                                        this.canvas.getHeight()*0.16,
                                        () => {
                                            this.player.setLocation("School");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./assets/map/ziekenuus.png",
                                        this.canvas.getWidth() *0.36,
                                        this.canvas.getHeight() * 0.0,
                                        this.canvas.getWidth()*0.16,
                                        this.canvas.getHeight()*0.215,
                                        () => {
                                            this.player.setLocation("Hospital");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./assets/map/restaurant.png",
                                        this.canvas.getWidth() * 0.475,
                                        this.canvas.getHeight() * 0.685,
                                        this.canvas.getWidth() * 0.056,
                                        this.canvas.getHeight() * 0.095,
                                        () => {
                                            this.player.setLocation("Restaurant");
                                            this.mouseListener.setHasBeenClicked()
                                        });
       this.canvas.drawButtonToCanvas( "./assets/map/house.png",
                                        this.canvas.getWidth() *0.151,
                                        this.canvas.getHeight() * 0.765,
                                        this.canvas.getWidth()*0.043,
                                        this.canvas.getHeight()*0.093,
                                        () => {
                                            this.player.setLocation("House");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawButtonToCanvas( "./assets/map/strand.png",
                                        this.canvas.getWidth() *0.9,
                                        this.canvas.getHeight() * 0.0,
                                        this.canvas.getWidth()* 0.1,
                                        this.canvas.getHeight(),
                                        () => {
                                            this.player.setLocation("Beach");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()*0.09,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.canvas.getWidth()*0.9,
                                        this.canvas.getHeight()*0.05,
                                        this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth())
        this.player.move();
        this.canvas.drawImageToCanvas(  "./Assets/Player/Female/Poses/female_walk1.png",
                                        this.player.getX(),
                                        this.player.getY(),
                                        this.player.getWidth(),
                                        this.player.getHeight());                        
    };
};