import { addGridDrop } from "../modules/dragDrop.js";

export class BoardView {
	/**
	 * Creates a new instance of BoardView.
	 */
	constructor() {
		this.boardDiv = document.getElementById("gameBoard");
	}
	/**
	 * Renders the game board on the page.
	 * @param {array} grid - Array of game board values.
	 */
	renderBoard(grid) {
		for (const [y, row] of grid.entries()) {
			for (const [x, item] of row.entries()) {
				const gridItem = document.createElement("div");
				gridItem.classList.add("gridItem");
				gridItem.setAttribute("coords", JSON.stringify([x, y]));

				// Add different background and textcontent for score tiles
				switch (item) {
					case "9":
						gridItem.classList.add("tripleWord");
						break;
					case "8":
						gridItem.classList.add("doubleWord");
						break;
					case "3":
						gridItem.classList.add("tripleLetter");
						break;
					case "2":
						gridItem.classList.add("doubleLetter");
						break;
					case "XC":
						gridItem.classList.add("star");
						break;
					default:
						break;
				}

				// Add Drag Events.
				addGridDrop(gridItem);

				// Append Each item to grid.
				this.boardDiv.appendChild(gridItem);
			}
		}
	}

	/**
	 * Add class of intitialMove to tiles on the board.
	 */
	setInitialMove() {
		const playedTiles = Array.from(document.querySelectorAll(".gridItem > .initialMove"));
		return playedTiles;
	}

	/**
	 * Get all the words on the board.
	 */
	getWordGrid() {
		const grid = Array.from(document.querySelectorAll(".gridItem"));
		const tempGrid = grid.map((item) => {
			let char = " ";
			if (item.childNodes.length > 0) {
				char = item.childNodes[0].childNodes[0].textContent;
			}
			return char;
		});
		return tempGrid;
	}

	/**
	 * Update the score.
	 * @param {number} score
	 */
	updateScore(score) {
		document.getElementById("currentScore").textContent = score;
	}

	/**
	 * Removes initialmove class and adds played.
	 * Prevents tiles from being draggable.
	 */
	setToPlayed() {
		const initialMove = Array.from(document.querySelectorAll(".gridItem > .initialMove"));
		initialMove.forEach((node) => {
			node.classList.replace("initialMove", "played");
			node.style.pointerEvents = "none";
			node.setAttribute("draggable", "false");
		});
	}
}
