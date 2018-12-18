abstract class BaseView {
    protected src : string;
    protected canvas : Canvas;
    protected player : Player;

    public constructor (src: string,
                        canvas : Canvas,
                        player : Player) {
        this.src = src;
        this.canvas = canvas;
        this.player = player;
    };

    /**
     * @access public
     * @method
     * Required method to draw canvas
     */
    protected abstract draw () : void;
};