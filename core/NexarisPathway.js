const Analyzer = require("./analyzer");
const Recommender = require("./recommender");


class NexarisPathway {

    constructor(profiles){

        this.name = "NEXARIS PATHWAY";
        this.version = "1.0";
        this.role = "Orientadora vocacional";

        this.analyzer = new Analyzer();
        this.recommender = new Recommender(profiles);

    }


    processAnswers(answers){

        answers.forEach(answer => {
            this.analyzer.addProfile(answer);
        });


        const result = this.analyzer.getResult();


        return this.recommender.recommend(
            result.profile
        );

    }


    greet(){

        return "Hola, soy NEXARIS PATHWAY. Te acompañaré a descubrir tus intereses y posibles caminos profesionales.";

    }

}


module.exports = NexarisPathway;
