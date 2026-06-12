class Recommender {

    constructor(profiles){
        this.profiles = profiles;
    }


    recommend(profileId){

        const profile = this.profiles.find(
            item => item.id === profileId
        );


        if(!profile){
            return {
                message: "No se encontró un perfil adecuado."
            };
        }


        return {
            profile: profile.name,
            description: profile.description,
            strengths: profile.strengths,
            careers: profile.careers
        };

    }

}


module.exports = Recommender;
