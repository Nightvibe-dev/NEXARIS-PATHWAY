const NexarisPathway = require("./core/NexarisPathway");
const profiles = require("./data/profiles.json");


const nexaris = new NexarisPathway(profiles);


console.log(nexaris.greet());


const answers = [
    "creativo",
    "creativo",
    "tecnologico"
];


const result = nexaris.processAnswers(answers);


console.log(result);
