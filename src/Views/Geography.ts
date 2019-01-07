class Geography extends BaseView {

    public constructor (src : string,
        canvas : Canvas,
        player : Player,
        mouseListener : MouseHelper) {
            super(src, canvas, player, mouseListener)
       ;
    }
    public draw = () => {
        this.canvas.drawImageToCanvas(  this.src,
                                        0,
                                        0,
                                        this.canvas.getWidth(),
                                        this.canvas.getHeight());
        this.canvas.drawButtonToCanvas( "./assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.05,
                                        this.canvas.getWidth() * 0.025,
                                        this.canvas.getHeight() * 0.05,
                                        () => {
                                            this.player.setEnergy(this.player.getEnergy()-15),
                                            this.player.setHunger(this.player.getHunger()-30)
                                            this.player.setLocation("School");
                                            this.mouseListener.setHasBeenClicked()});
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.canvas.getWidth()*0.9,
                                        this.canvas.getHeight()*0.05,
                                        this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth())
        this.canvas.drawTextToCanvas(   "center",
                                        20,
                                        "Minecraft",
                                        "White",
                                        this.player.getCurrentQuestion(),
                                        this.canvas.getWidth()/2,
                                        this.canvas.getHeight()/2)
    }
    QuestArray = [{
        Question: "Hoeveel inwoners heeft Europa?",
        Answer: " 741.1 miljoen",
        Answer1: "1 miljard",
        Answer2: " 884.6miljoen",
        Answer3: "1,3 miljard",
        RightAnswer: "741.1 miljoen"
    },

    {
        Question: "Hoe ontstaat een Tsunami?",
        Answer: "Een scheet van een walvis",
        Answer1: "Aardbeving in de zee",
        Answer2: " Vulkaan die onder water uitbarst",
        Answer3: "Het vrijkomen van Oergassen",
        RightAnswer: "Aardbeving in de zee"
    },
    
   { Question: "De hoofdstad van Noorwegen is:",
    Answer: "Reykjavik",
    Answer1: "Helsinki",
    Answer2: "Stockholm",
    Answer3: "Oslo",
    RightAnswer: "Oslo"
},

{ Question: "De hoofdstad van Noorwegen is:",
Answer: "Reykjavik",
Answer1: "Helsinki",
Answer2: "Stockholm",
Answer3: "Oslo",
RightAnswer: "Oslo"
},

{ Question: "Hoe heet het vloeistof wat in een vulkaan zit als hij nog niet uitgebarsten is?:",
Answer: "Lava",
Answer1: "Magma",
Answer2: "MM3O",
Answer3: "Kwik",
RightAnswer: "Magma"
},

{ Question: "Hoeveel provincies heeft Nederland",
Answer:"12",
Answer1: "9",
Answer2: "11",
Answer3: "8",
RightAnswer: "12"
},
{ Question: "Hoeveel  buurlanden heeft Duitsland?",
Answer: "9",
Answer1: "8",
Answer2: "13",
Answer3: "5",
RightAnswer: "9"
},
{ Question: "Waaruit bestaat Magma?",
Answer: "Geëxplodeerde brokstukken",
Answer1: "Verhit modder",
Answer2: "Vuur",
Answer3: "Gesmolten gesteente",
RightAnswer: "Gesmolten gesteente"
},
{ Question: "Hoe hoog vliegt een vliegtuig gemiddeld?",
Answer: "32km",
Answer1: "16km",
Answer2: "25km",
Answer3: "10km",
RightAnswer: "10km"
},
{ Question: "Welk land is het grootst?",
Answer: "Denemarken",
Answer1: "Luxemburg",
Answer2: "België",
Answer3: "Nederland",
RightAnswer: "Nederland"
},
{ Question: "Waar kun je het Ruhrgebied vinden?",
Answer: "De Alpen",
Answer1: "Zwitserland",
Answer2: "Duitsland",
Answer3: "Veluwe",
RightAnswer: "Duitsland"
},
{ Question: "Waarvan is Warschau de hoofdstad",
Answer: "Letland",
Answer1: "Polen",
Answer2: "Slovenië",
Answer3: "Moldavië",
RightAnswer: "Polen"
},
{ Question: "De hoofdstad van Kroatië is?",
Answer: "Zadar",
Answer1: "Zagreb",
Answer2: "Sofia",
Answer3: "Triëst",
RightAnswer: "Zagreb"
},
{ Question: "Welke rivier stroomt niet door Frankrijk?",
Answer: "Rhone",
Answer1: "Loire",
Answer2: "Reine",
Answer3: "Seine",
RightAnswer: "Reine"
},
{ Question: "Waar kun je de straat van Gibraltar vinden? ",
Answer: " Tussen Spanje en Marokko",
Answer1: "Tussen Griekenland en Italië",
Answer2: " Tussen Griekenland en Turkije",
Answer3: "Tussen Frankrijk en Engeland.",
RightAnswer: " Tussen Spanje en Marokko"
},
{ Question: "Wat betekend de term vergrijzing?",
Answer: "Dat het in bepaalde culturen in de mode is om je haar grijs te verven",
Answer1: "Als er in een gebied veel bomen gekapt worden noemen ze dat vergrijzing",
Answer2: "Dat er straks meer oudere dan jongeren zijn",
Answer3: "Het verslechteren van een stuk grond",
RightAnswer: "Dat er straks meer oudere dan jongeren zijn"
},
{ Question: "Wat is het bekendste exportproduct van Frankrijk?",
Answer: "Croissant",
Answer1: "Wijn",
Answer2: "Kurk",
Answer3: "Kaas",
RightAnswer: "Wijn"
},
{ ImgSrc: "./Assets/QuestionAK/france.jpg",
Question: "Van welk land is deze vlag?",
Answer: "Frankrijk",
Answer1: "Duitsland",
Answer2: "Servië",
Answer3: "Nederland",
RightAnswer: "Frankrijk"
},
{ImgSrc:"./Assets/QuestionAK/italie.jpg",
Question: "Welk land is hier te zien?",
Answer: "Griekenland",
Answer1: "Bulgarije",
Answer2: "Malta",
Answer3: "Italië",
RightAnswer: "Italië"
},
{ Question: "In welk jaargetijde zal er het meeste water in een berg rivier zitten?",
Answer: "In het voorjaar omdat de sneeuw op de bergen smelt.",
Answer1: "In de winter omdat er dan heel veel sneeuw valt.",
Answer2: "In de winter want dan regent het heel veel",
Answer3: "In de herfst want dan worden de koeien weer op stal gezet.",
RightAnswer: "In het voorjaar omdat de sneeuw op de bergen smelt."
},
{ Question: "Bij welk land hoort het eiland Corsica?",
Answer: "Griekenland",
Answer1: "Spanje",
Answer2: "Frankrijk",
Answer3: "Italië",
RightAnswer: "Frankrijk"
},
{ ImgSrc:"./Assets/QuestionAK/Croatia.png",
Question: "Bij welk land hoort deze vlag?",
Answer: "Letland",
Answer1: "Kroatië",
Answer2: "Oekraïne",
Answer3: "Moldavië",
RightAnswer: "Kroatië"
},
{ImgSrc:"./Assets/QuestionAK/Finland.png",
 Question: "Bij welk land hoort deze vlag?",
Answer: "Finland",
Answer1: "Polen",
Answer2: "Zweden",
Answer3: "Ijsland",
RightAnswer: "Finland"
},
{ImgSrc:"./Assets/QuestionAK/Russia.png",
 Question: "Bij welk land hoort deze vlag?",
Answer: "Letland",
Answer1: "Rusland",
Answer2: "Wit-Rusland",
Answer3: "Oekraïne",
RightAnswer: "Rusland"
},
{ImgSrc:"./Assets/QuestionAK/Sweden.png",
 Question: "Bij welk land hoort deze vlag?",
Answer: "Letland",
Answer1: "Denemarken",
Answer2: "Finland",
Answer3: "Zweden",
RightAnswer: "Zweden"
},
{ImgSrc:"./Assets/QuestionAK/WitRusland.png",
 Question: "Bij welk land hoort deze vlag?",
Answer: "Letland",
Answer1: "Estland",
Answer2: "Wit-Rusland",
Answer3: "Oekraïne",
RightAnswer: "Wit-Rusland"
},
{ImgSrc:"./Assets/QuestionAK/Zwitserland.png",
 Question: "Bij welk land hoort deze vlag?",
Answer: "Zwitserland",
Answer1: "Polen",
Answer2: "Oostenrijk",
Answer3: "Roemenië",
RightAnswer: "Zwitserland"
}]
public printQuestions(){
    let i = MathHelper.randomNumber(0, this.QuestArray.length - 1)
        console.log(this.QuestArray[i].Question,
                    this.QuestArray[i].Answer)
}
}

