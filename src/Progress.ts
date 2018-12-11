class Progress {
    private value: number;
    private bar = <HTMLElement>document.querySelectorAll('#prog-bar > .progress-bar')[0];
    public stats: number;

    constructor (progress: number) {
        this.value = progress;
        this.update();
    }
    private update() {
        console.log(this.value);
        this.bar.style.width = this.stats + '%';
    }
    getStats(){
        this.stats = 50;
        return this.stats;
    }
    countUp(){
        if(this.value < 100) {
            this.stats += this.value;
            this.update();
        }
    }
    countDown(){
        if(0 < this.value) {
            this.stats -= this.value;
            this.update();
        }
    }
}

let progress = new Progress(0);

progress.getStats();
progress.countUp();

