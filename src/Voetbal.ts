class Voetbal{
    private score : number;
    private xPos : number;
    private yPos : number;

    private constructor (
                            score : number,
                            xPos : number,
                            Ypos : number){
        
    }

    scoredGoal () {
        //if collision
        this.score++;
    }
    
}