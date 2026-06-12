class Analyzer {

    constructor(){
        this.scores = {
            creativo: 0,
            tecnologico: 0,
            social: 0,
            cientifico: 0
        };
    }


    addProfile(profile){

        if(this.scores[profile] !== undefined){
            this.scores[profile]++;
        }

    }


    getResult(){

        let highest = "creativo";
        let max = 0;


        for(const profile in this.scores){

            if(this.scores[profile] > max){
                max = this.scores[profile];
                highest = profile;
            }

        }


        return {
            profile: highest,
            score: max
        };

    }


}


module.exports = Analyzer;
