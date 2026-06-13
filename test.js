const NexarisPathway = require("./core/NexarisPathway");
const profiles = require("./data/profiles.json");

const nexaris = new NexarisPathway(profiles);

console.log("🧠 NEXARIS PATHWAY ACTIVADA");

const answers = [
    "creativo",
    "creativo",
    "tecnologico"
];

const result = nexaris.processAnswers(answers);

console.log("📌 Resultado:");
console.log(result);