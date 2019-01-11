abstract class BaseView {
    protected src : string;
    protected canvas : Canvas;
    protected player : Player;
    protected mouseListener : MouseHelper;
    protected soundcontroller : SoundController;

    public constructor (src: string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper,
                        soundcontroller : SoundController) {
        this.src = src;
        this.canvas = canvas;
        this.player = player;
        this.mouseListener = mouseListener;
        this.soundcontroller = soundcontroller;
    };

    /**
     * @access public
     * @method
     * Required method to draw canvas
     */
    protected abstract draw () : void;
};