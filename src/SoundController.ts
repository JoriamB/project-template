class SoundController {

    private background : HTMLAudioElement;
    private store : HTMLAudioElement;
    private hospital : HTMLAudioElement;
    private eat : HTMLAudioElement;
    private sleep : HTMLAudioElement;
    private score : HTMLAudioElement;
    private beach : HTMLAudioElement;
    private park : HTMLAudioElement;
    private fishing : HTMLAudioElement;

    public constructor (background : HTMLAudioElement,
                        store : HTMLAudioElement,
                        hospital : HTMLAudioElement,
                        eat : HTMLAudioElement,
                        sleep : HTMLAudioElement,
                        score : HTMLAudioElement,
                        beach : HTMLAudioElement,
                        park : HTMLAudioElement,
                        fishing : HTMLAudioElement) {
        this.background = background;
        this.store = store;
        this.hospital = hospital;
        this.eat = eat;
        this.sleep = sleep;
        this.score = score;
        this.beach = beach;
        this.park = park;
        this.fishing = fishing;
    };

    public pauseMusic () {
        this.background.pause();
        this.store.pause();
        this.hospital.pause();
        this.eat.pause();
        this.sleep.pause();
        this.beach.pause();
        this.park.pause();
        this.fishing.pause();
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

    public playBeach () {
        this.pauseMusic();
        this.beach.loop = true;
        this.beach.play();
    };

    public playPark () {
        this.pauseMusic();
        this.park.loop = true;
        this.park.play();
    };

    public playFishing () {
        this.pauseMusic();
        this.fishing.loop = true;
        this.fishing.play();
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