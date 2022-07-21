import { GameController } from "./controller/gameController.js";
import {} from "./modules/date.js";
const game = new GameController();
game.setup();

// Add rules event listener
const rules = document.getElementById("rules");
rules.addEventListener("click", () => {
	const ruleTxt = `
Rules of Solo Scrabble: 
First play must cross center tile. 
All plays must be contiguous(one after another)
Words can be played vertically or horizontally.`;
	confirm(ruleTxt);
});
