class NexarisPathway {

    constructor() {
        this.name = "NEXARIS PATHWAY";
        this.version = "1.0";
        this.role = "Orientadora vocacional";
    }


    greet() {
        return "Hola, soy NEXARIS PATHWAY. Estoy aquí para ayudarte a descubrir tus intereses y posibles caminos profesionales.";
    }


    analyzeInterest(input) {

        const message = input.toLowerCase();

        if(message.includes("dibujar") || message.includes("arte")) {
            return "Tu perfil muestra afinidad con áreas creativas como Diseño, Animación o Arquitectura.";
        }

        if(message.includes("programar") || message.includes("tecnología")) {
            return "Tu perfil muestra afinidad con áreas tecnológicas como Desarrollo de Software o Ingeniería.";
        }

        return "Necesito conocer más sobre tus intereses para encontrar una ruta adecuada.";
    }

}


module.exports = NexarisPathway;
