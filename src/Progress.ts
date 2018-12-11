class Progress {
    private value: number;
    private bar = <HTMLElement>document.querySelectorAll('#prog-bar > .progress-bar')[0];
    public stats: number;

    constructor (progress: number) {
        this.value = progress;
        this.update();
    }
    private update() {
        this.bar.style.width = this.stats + '%';
    }
    getStats(){
        this.stats = 50;
        return this.stats;
    }
    countUp(){
<<<<<<< HEAD
        console.log('test');
        if(this.progress < 100) {
            this.stats += this.progress;
=======
        if(this.value < 100) {
            this.stats += this.value;
>>>>>>> 528adbbe6ff87aaec03527343e2cde955f2af83c
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

