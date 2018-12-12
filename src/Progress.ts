class Progress {
    private current: number;
    private bar : HTMLElement;//<HTMLElement>document.querySelectorAll('#prog-bar > .progress-bar')[0];
    private increment: number;

    constructor (current: number, increment : number) {
        this.current = current;
        this.increment = increment;
    }
    private update() {
        //this.bar.style.width = this.current + '%';
    }
    countUp(){
        if((this.current + this.increment) < 100) {
            this.current += this.increment;
        }
        else {
            this.current = 100;
            this.update();
        };
    }
    countDown(){
        if(0 < (this.current - this.increment)) {
            this.current -= this.increment;
            this.update();
        }
        else {
            this.current = 0;
            this.update();
        }
    }
}

let healthbar = new Progress(30, 10,);
let hungerbar = new Progress(30, 10);
let energybar = new Progress(30, 10);
let moodbar = new Progress(30, 10);

//progress.countDown();

