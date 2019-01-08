class MathQuest extends BaseView {

    private currentQuestion: currentQuestion;

    public constructor(src: string,
        canvas: Canvas,
        player: Player,
        mouseListener: MouseHelper) {
        super(src, canvas, player, mouseListener);
        this.currentQuestion = this.MathArray[0];
    }
    public draw = () => {
        this.canvas.drawImageToCanvas(this.src,
            0,
            0,
            this.canvas.getWidth(),
            this.canvas.getHeight());
        this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/Home.png",
            this.canvas.getWidth() * 0.05,
            this.canvas.getHeight() * 0.05,
            this.canvas.getWidth() * 0.025,
            this.canvas.getHeight() * 0.05,
            () => {
                this.player.setEnergy(this.player.getEnergy() - 15),
                    this.player.setHunger(this.player.getHunger() - 30)
                this.player.setLocation("School");
                this.mouseListener.setHasBeenClicked()
            });
        this.canvas.drawCoinToCanvas(this.canvas.getWidth() / 2,
            this.canvas.getHeight() * 0.04,
            this.player.getCoin());
        this.canvas.drawBarstoCanvas(this.canvas.getWidth() * 0.9,
            this.canvas.getHeight() * 0.05,
            this.player.getHunger(),
            this.player.getEnergy(),
            this.player.getMood(),
            this.player.getHealth())
        this.canvas.drawTextToCanvas("center",
            20,
            "Minecraft",
            "White",
            this.getCurrentQuestion().Question,
            this.canvas.getWidth() / 2,
            this.canvas.getHeight() * 0.2);
        if (this.getCurrentQuestion().ImgSrc != "") {
            this.canvas.drawImageToCanvas(this.getCurrentQuestion().ImgSrc,
                this.canvas.getWidth() * 0.5 - (this.canvas.getWidth() * 0.2) / 2,
                this.canvas.getHeight() * 0.4 - (this.canvas.getHeight() * 0.15) / 2,
                this.canvas.getWidth() * 0.2,
                this.canvas.getHeight() * 0.15)
        };
        this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png",
            this.getCurrentQuestion().Answer,
            this.canvas.getWidth() * 0.35 - (this.canvas.getWidth() * 0.2) / 2,
            this.canvas.getHeight() * 0.6 - (this.canvas.getHeight() * 0.075) / 2,
            this.canvas.getWidth() * 0.2,
            this.canvas.getHeight() * 0.075,
            () => {
                if (this.getCurrentQuestion().Answer == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                };
                this.mouseListener.setHasBeenClicked()
            });
        this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png",
            this.getCurrentQuestion().Answer1,
            this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.2) / 2,
            this.canvas.getHeight() * 0.6 - (this.canvas.getHeight() * 0.075) / 2,
            this.canvas.getWidth() * 0.2,
            this.canvas.getHeight() * 0.075,
            () => {
                if (this.getCurrentQuestion().Answer1 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                };
                this.mouseListener.setHasBeenClicked()
            });
        this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png",
            this.getCurrentQuestion().Answer2,
            this.canvas.getWidth() * 0.35 - (this.canvas.getWidth() * 0.2) / 2,
            this.canvas.getHeight() * 0.75 - (this.canvas.getHeight() * 0.075) / 2,
            this.canvas.getWidth() * 0.2,
            this.canvas.getHeight() * 0.075,
            () => {
                if (this.getCurrentQuestion().Answer2 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                };
                this.mouseListener.setHasBeenClicked()
            });
        this.canvas.drawTextButtonToCanvas("./Assets/Icons/ButtonsFREE/PlayBlank.png",
            this.getCurrentQuestion().Answer3,
            this.canvas.getWidth() * 0.65 - (this.canvas.getWidth() * 0.2) / 2,
            this.canvas.getHeight() * 0.75 - (this.canvas.getHeight() * 0.075) / 2,
            this.canvas.getWidth() * 0.2,
            this.canvas.getHeight() * 0.075,
            () => {
                if (this.getCurrentQuestion().Answer3 == this.getCurrentQuestion().RightAnswer) {
                    this.setCurrentQuestion(this.MathArray[MathHelper.randomNumber(0, this.MathArray.length - 1)]);
                    console.log("Goed Gedaan!");
                }
                else {
                    console.log("Probeer het opnieuw.");
                };
                this.mouseListener.setHasBeenClicked()
            });
    };

    MathArray = [{
        ImgSrc: "",
        Question: "0,4 miljoen kun je ook schrijven als?",
        Answer: "400.00",
        Answer1: "4 duizend",
        Answer2: "40 duizend",
        Answer3: "400.000",
        RightAnswer: "400.000"
    },
    {
        ImgSrc: "",
        Question: "8,3 miljard is 8 miljard en ...?",
        Answer: "30.000",
        Answer1: "300.000",
        Answer2: "300.000.000",
        Answer3: "300.000.000.000",
        RightAnswer: "300.000.000"
    },
    {
        ImgSrc: "",
        Question: "Hoeveel is een half miljoen?",
        Answer: "50.000",
        Answer1: "500.000",
        Answer2: "5000.000",
        Answer3: "5000",
        RightAnswer: "500.000"
    },
    {
        ImgSrc: "",
        Question: "Hoeveel is 0,8 miljoen?",
        Answer: "80.000",
        Answer1: "800.000",
        Answer2: "8.000.000",
        Answer3: "8000",
        RightAnswer: "800.000"
    },
    {
        ImgSrc: "",
        Question: "Hoeveel is honderdduizend?",
        Answer: "10.000",
        Answer1: "100.000",
        Answer2: "1000.000",
        Answer3: "1000.00",
        RightAnswer: "100.000"
    },
    {
        ImgSrc: "",
        Question: "2,8 miljoen kun je ook schrijven als...?",
        Answer: "28.000.000",
        Answer1: "280.000",
        Answer2: "2000800",
        Answer3: "2.800.000",
        RightAnswer: "2.800.000"
    },
    {
        ImgSrc: "",
        Question: "Floor en Daan gaan samen uit. Floor betaalt het drinken: € 5,- Daan betaalt het eten: € 15,-Ze willen de kosten samen delen. Hoeveel moet Floor aan Daan betalen?",
        Answer: "5",
        Answer1: "7.50",
        Answer2: "10",
        Answer3: "12.50",
        RightAnswer: "5"
    },
    {
        ImgSrc: "",
        Question: "Hoeveel is een kwart miljoen?",
        Answer: "400.000",
        Answer1: "250.000",
        Answer2: "25.000",
        Answer3: "2500",
        RightAnswer: "250.000"
    },
    {
        ImgSrc: "",
        Question: "Julia koopt vis op de markt. De vis weegt ongeveer anderhalve kilo. Ze moet € 12,05 betalen.Hoeveel kost de vis dan ongeveer per kilo?",
        Answer: "4",
        Answer1: "8",
        Answer2: "10",
        Answer3: "9.50",
        RightAnswer: "8"
    },
    {
        ImgSrc: "",
        Question: "Suzanne en Eva plukken 50 kg bramen.Ze doen de bramen in bakjes van 250 gram.Hoeveel bakjes van 250 gram kunnen ze in totaal vullen?",
        Answer: "50",
        Answer1: "20",
        Answer2: "200",
        Answer3: "150",
        RightAnswer: "200"
    },
    {
        ImgSrc: "",
        Question:"Vijf en een kwart miljoen tv-kijkers bij de finale schansspringen op de Olympische Spelen.Hoe schrijf je vijf en een kwart miljoen in cijfers? ",
        Answer: "5.025.000",
        Answer1: "5.000.250",
        Answer2: "5.250.000",
        Answer3: "5.000.025",
        RightAnswer: "5.250.000"
    },
    {
        ImgSrc: "",
        Question:"Gijs heeft dit jaar 40.152 km gereden. Vorig jaar reed hij 38.758 km.Hoeveel heeft Gijs dit jaar meer gereden?",
        Answer: "1.394 km",
        Answer1: "1.306 km",
        Answer2: "1.406 km",
        Answer3: "1.494 km",
        RightAnswer: "1.394 km"
    },{
        ImgSrc: "",
        Question:"Rond 587,216 af op een honderdste. ",
        Answer: "587,2",
        Answer1: "600",
        Answer2: "587,22",
        Answer3: "587,21",
        RightAnswer: "587,22"
    },{
        ImgSrc: "",
        Question:"Sarah wisselt 10 briefjes van € 20, - om in munten van 50 eurocent. Hoeveel munten krijgt ze?",
        Answer: "500",
        Answer1: "100",
        Answer2: "200",
        Answer3: "400",
        RightAnswer: "400"
    },{
        ImgSrc: "",
        Question:"In een kopje zit 180 ml water. Dex vult dit aan met limonadesiroop totdat er in totaal 200 ml in het kopje zit. Uit hoeveel % limonadesiroop bestaat zijn drankje?",
        Answer: "1/10%",
        Answer1: "10%",
        Answer2: "25%",
        Answer3: "90%",
        RightAnswer: "10%"
    },{
        ImgSrc: "",
        Question:"De breuk 102/124 is ongeveer gelijk aan:",
        Answer: "0,12",
        Answer1: "1,0",
        Answer2: "0,6",
        Answer3: "0,8",
        RightAnswer: "0,8"
    },{
        ImgSrc: "",
        Question:"Een zwembad voor in de tuin is 15 meter lang, 8 meter en 1 meter hoog. Mees vult het bad voor 90% met water. Hoeveel m3 water laat Mees in het zwembad lopen?",
        Answer: "108 m3",
        Answer1: "210 m3",
        Answer2: "120 m3",
        Answer3: "12m3",
        RightAnswer: "108 m3"
    },
    {
        ImgSrc: "",
        Question:"82 000 - 370 =",
        Answer: "81 630",
        Answer1: "82 370",
        Answer2: "82 670",
        Answer3: "81 730",
        RightAnswer: "81 630"
    },{
        ImgSrc: "",
        Question:"50 is ... % van 250",
        Answer: "125",
        Answer1: "1/5",
        Answer2: "20",
        Answer3: "5",
        RightAnswer: "20"
    },{
        ImgSrc: "",
        Question:"4,5 x 2,5 =",
        Answer: "9,5",
        Answer1: "11,25",
        Answer2: "9,25",
        Answer3: "10,50",
        RightAnswer: "11,25"
    },{
        ImgSrc: "",
        Question:"Eline fietst op haar elektrische fiets met een snelheid van 45 km per uur. Hoeveel meter legt ze af in 20 minuten?",
        Answer: "35km",
        Answer1: "135km",
        Answer2: "15 000m",
        Answer3: "13 500 m",
        RightAnswer: "15 000m"
    },{
        ImgSrc: "",
        Question:"5,1 decameter is ...",
        Answer: "510m",
        Answer1: "51m",
        Answer2: "0,51m",
        Answer3: "5100m",
        RightAnswer: "51m"
    },{
        ImgSrc: "",
        Question:"Om 15.40 uur zet Anissa een taart in de oven. De baktijd is 50 minuten. Hoe laat moet ze de taart uit de oven halen?",
        Answer: "5 over 4",
        Answer1: "5 over half 4",
        Answer2: "half 4",
        Answer3: "half 5",
        RightAnswer: "half 5"
    },{
        ImgSrc: "",
        Question:"Rond het getal 4 629,405 af op tientallen.",
        Answer: "4 630",
        Answer1: "4 629,41",
        Answer2: "4 600",
        Answer3: "4 629,40",
        RightAnswer: "4 630"
    },{
        ImgSrc: "",
        Question:"40% van alle juffen op school is ziek. Je kunt ook zeggen:",
        Answer: "4 op de 100 juffen is ziek.",
        Answer1: "40 juffen zijn ziek.",
        Answer2: "2 op de 5 juffen is ziek.",
        Answer3: "4 op de 5 juffen is ziek.",
        RightAnswer: "2 op de 5 juffen is ziek."
    },
    {
        ImgSrc: "",
        Question:"Een modelvliegtuigje is 15 cm lang. Het echte vliegtuig is 30 m lang. Welke schaal staat op de doos van het modelvliegtuigje?",
        Answer: "1:2",
        Answer1: "1:200",
        Answer2: "1:2 000",
        Answer3: "1:20",
        RightAnswer: "1:200"
    },
    {
        ImgSrc: "",
        Question:"2/3 deel is uit een zak zand van 15 kg weggelopen. Hoeveel kg zand zit er nog in de zak?",
        Answer: "3 kg",
        Answer1: "5 kg",
        Answer2: "10 kg",
        Answer3: "6 kg",
        RightAnswer: "5 kg"
    },
    {
        ImgSrc: "",
        Question:"Welk getal is 1/100 groter dan het getal 483,027?",
        Answer: "583,027",
        Answer1: "483,127",
        Answer2: "483,037",
        Answer3: "483,028",
        RightAnswer: "483,037"
    },
    {
        ImgSrc: "",
        Question:"0,627 + 1,05 =",
        Answer: "1,632",
        Answer1: "2,127",
        Answer2: "1,677",
        Answer3: "1,172",
        RightAnswer: "1,677"
    },
    {
        ImgSrc: "",
        Question:"Een papiercontainer is 10 meter lang, 5 meter breed en 4 meter hoog. Wat is de inhoud van de container?",
        Answer: "200 m3",
        Answer1: "19 m3",
        Answer2: "1 900 m3",
        Answer3: "2 000 m3",
        RightAnswer: "200 m3"
    },
    {
        ImgSrc: "",
        Question:"In een jaar tijd zijn 600.000 folders verspreid. Hoeveel zijn dat er ongeveer gemiddeld per week?",
        Answer: "5.000",
        Answer1: "14.000",
        Answer2: "12.000",
        Answer3: "50.000",
        RightAnswer: "12.000"
    },
    {
        ImgSrc: "",
        Question:"Mandy heeft een model van de Euromast.Het model is 9,25 cm hoog, terwijl de echte Euromast 185 m hoog is. Wat is de schaal van het model?",
        Answer: "1 : 20",
        Answer1: "1 : 2 000",
        Answer2: "1 : 2",
        Answer3: "1 : 200",
        RightAnswer: "1 : 2 000"
    },
    {
        ImgSrc: "",
        Question:"3/5 deel van de 800 kinderen op onze school zit op sport. Hoeveel kinderen op onze school zitten er op sport?",
        Answer: "600",
        Answer1: "560",
        Answer2: "160",
        Answer3: "480",
        RightAnswer: "480"
    },
    {
        ImgSrc: "",
        Question:"150% van 200 =",
        Answer: "300",
        Answer1: "250",
        Answer2: "225",
        Answer3: "275",
        RightAnswer: "300"
    },
    {
        ImgSrc: "",
        Question:"Robin koopt 2 zakjes drop voor € 3,90.Myrthe wil 3 zakjes drop kopen. Hoeveel moet zij betalen?",
        Answer: "€ 5,90",
        Answer1: "€ 4,90",
        Answer2: "€ 4,85",
        Answer3: "€ 5,85",
        RightAnswer: "€ 5,85"
    },
    {
        ImgSrc: "",
        Question:"Vorig jaar belde 95% van de mensen een verkeerd nummer. Welke verhouding past hierbij?",
        Answer: "1 op de 95 mensen belde een verkeerd nummer.",
        Answer1: "19 op de 20 mensen belde een verkeerd nummer.",
        Answer2: "5 op de 95 mensen belde een verkeerd nummer.",
        Answer3: "1 op de 20 mensen belde een verkeerd nummer.",
        RightAnswer: "19 op de 20 mensen belde een verkeerd nummer."
    },
    {
        ImgSrc: "",
        Question:"Jax rent rondjes om het winkelcentrum heen. Hij rent 7 rondjes van elk 230 m. Hoeveel meter rent hij in totaal?",
        Answer: "1 421 m",
        Answer1: "1 621 m",
        Answer2: "1 610 m",
        Answer3: "1 430 m",
        RightAnswer: "1 610 m"
    },
    {
        ImgSrc: "",
        Question:"32 : 1/4 =",
        Answer: "128",
        Answer1: "1 208",
        Answer2: "812",
        Answer3: "8",
        RightAnswer: "128"
    }
    ,
    {
        ImgSrc: "",
        Question:"In 2016 verkocht een grote internetwinkel 1 881 jassen. In 2017 verkocht het bedrijf 2 018 jassen. Hoeveel jassen zijn er in 2017 meer verkocht?",
        Answer: "1 277",
        Answer1: "1 208",
        Answer2: "137",
        Answer3: "139",
        RightAnswer: "137"
    },
    {
        ImgSrc: "",
        Question:"Uit de machine komt 0,25 liter ijs per minuut. Hoe lang duurt het om de emmer van 10 liter te vullen? ",
        Answer: "40 minuten",
        Answer1: "400 minuten",
        Answer2: "50 minuten",
        Answer3: "30 minuten",
        RightAnswer: "40 minuten"
    }
   ];

    /**
     * @param currentQuestion
     * @access public
     * @method
     * Method fot setting the current question object
     */
    public setCurrentQuestion(currentQuestion: currentQuestion): void {
        this.currentQuestion = currentQuestion;
    };

    /**
     * @access public
     * @method
     * Method for returning the current question object
     */
    public getCurrentQuestion(): currentQuestion {
        return this.currentQuestion;
    };
}