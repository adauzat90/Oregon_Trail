const paceTypes = {
			grueling: {name: "grueling", speed: 1, health:-0.1, food: 1.2},
			strenuous: {name: "strenuous", speed: 0.75, health: 0, food: 1},
			steady: {name: "steady", speed: 0.5, health:0.1, food: 0.8}
};
		
const rationTypes = {
			filling: {name: "filling", pounds: 3, health: 0.1},
			meager: {name: "meager", pounds: 2, health: 0},
			bareBones: {name: "bare bones", pounds: 1, health: -0.1}
};

const noFoodChange = -0.6;

const healthStates = ["dying","very poor", "poor", "fair", "good"]

const diseases = {
	typhoid: {id: 0, name: "typhoid fever", onContract: 0, perDay: -0.2, onCure: 1},
	flu: {id: 1, name: "the flu", onContract: 0, perDay: -0.1, onCure: 0.5},
	brokenBone: {id: 2, name: "a broken bone", onContract: 0, perDay: -0.05, onCure: .2},
	cholera: {id: 3, name: "cholera", onContract: 0, perDay: -0.1, onCure: 1.2},
	measles: {id: 4, name: "the measles", onContract:0, perDay: -0.15, onCure: 1},
	dysentery: {id: 5, name: "dysentery", onContract: 0, perDay: -0.05, onCure: 0.2},
	fever: {id: 6, name: "a fever", onContract: 0, perDay: -0.1, onCure: 2}
};

const wagonPartDescriptions = [
	"wheel",
	"axle",
	"tongue"
]