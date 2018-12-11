class Progress {
    private progress: number;
    private bar = document.querySelectorAll('#prog-bar> .progress-bar')[0];
    public stats: number;

    constructor (progress: number) {
        this.progress = progress;
        this.update();
    }
    private update() {
        this.bar.style.width = this.progress + '%';
    }
    getStats(){
        this.stats = 50;
        return this.stats;
    }
    countUp(){
        if(this.progress < 100) {
            this.stats += this.progress;
            this.update();
        }
    }
    countDown(){
        if(0 < this.progress) {
            this.stats -= this.progress;
            this.update();
        }
    }
}

let progress = new Progress(0);

