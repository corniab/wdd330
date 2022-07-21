import { addTileDrag, addGridDrop } from "../modules/dragDrop.js";

export class TilesView {
	/**
	 * Creates a new instance of TilesView.
	 */
	constructor() {}
	/**
	 * Wraps the tile information in HTML and displays it on screen.
	 * @param {Tile[]} tiles Array of tiles.
	 */
	renderTiles(tiles) {
		// Get div for storing available tiles.
		const tilesInPlay = document.getElementById("tilesInPlay");
		// Reset innerHTML.
		tilesInPlay.innerHTML = "";
		addGridDrop(tilesInPlay);

		// Create
		tiles.forEach((tile) => {
			// Create tile div.
			const tileDiv = document.createElement("div");
			tileDiv.classList.add("tileDiv");

			// Create span for tile character.
			const tileChar = document.createElement("span");
			tileChar.classList.add("tileChar");
			tileChar.textContent = tile.char;

			// Create span for tile points.
			const tilePoints = document.createElement("span");
			tilePoints.classList.add("tilePoints");
			tilePoints.textContent = tile.points;

			// Append character and points.
			tileDiv.appendChild(tileChar);
			tileDiv.appendChild(tilePoints);

			// Make tile draggable.
			tileDiv.setAttribute("draggable", true);

			// Create unique ID.
			tileDiv.setAttribute("id", tile.char + tile.count);

			// Add Drag Events to tile div.
			addTileDrag(tileDiv);

			// Append tile div to availableTiles.
			tilesInPlay.appendChild(tileDiv);
		});
	}

	getPlayed() {
		const played = Array.from(document.querySelectorAll(".gridItem > .initialMove"));
		const chars = played.map((tile) => {
			return tile.childNodes[0].textContent;
		});
		return chars;
	}

	updateCount(count = 0) {
		const tilesLeft = document.getElementById("tilesLeft");
		tilesLeft.textContent = count;
	}
}
