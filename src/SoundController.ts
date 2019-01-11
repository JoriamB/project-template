class SoundController {

    private background : HTMLAudioElement;
    private store : HTMLAudioElement;
    private hospital : HTMLAudioElement;
    private eat : HTMLAudioElement;
    private sleep : HTMLAudioElement;
    private score : HTMLAudioElement;

    public constructor (background : HTMLAudioElement,
                        store : HTMLAudioElement,
                        hospital : HTMLAudioElement,
                        eat : HTMLAudioElement,
                        sleep : HTMLAudioElement,
                        score : HTMLAudioElement) {
        this.background = background;
        this.store = store;
        this.hospital = hospital;
        this.eat = eat;
        this.sleep = sleep;
        this.score = score;
    };

    public pauseMusic () {
        this.background.pause();
        this.store.pause();
        this.hospital.pause();
        this.eat.pause();
        this.sleep.pause();
    };

    public playBackgroundMusic () {
        this.pauseMusic();
        this.background.loop = true;
        this.background.play();
    };

    public playStore () {
        this.pauseMusic();
        this.store.loop = true;
        this.store.play();
    };

    public playHospital () {
        this.pauseMusic();
        this.hospital.loop = true;
        this.hospital.play();
    };

    public playEatEffect () {
        this.eat.play();
    };

    public playSleepEffect () {
        this.sleep.play();
    };

    public playScoreEffect () {
        this.score.play()
    };
};