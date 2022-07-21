/**
 * Main Game Board for Scrabble.
 */
export class BoardModel {
	constructor() {
		this._grid = [
			["9", " ", " ", "2", " ", " ", " ", "9", " ", " ", " ", "2", " ", " ", "9"],
			[" ", "8", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "8", " "],
			[" ", " ", "8", " ", " ", " ", "2", " ", "2", " ", " ", " ", "8", " ", " "],
			["2", " ", " ", "8", " ", " ", " ", "2", " ", " ", " ", "8", " ", " ", "2"],
			[" ", " ", " ", " ", "8", " ", " ", " ", " ", " ", "8", " ", " ", " ", " "],
			[" ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " "],
			[" ", " ", "2", " ", " ", " ", "2", " ", "2", " ", " ", " ", "2", " ", " "],
			["9", " ", " ", "2", " ", " ", " ", " ", " ", " ", " ", "2", " ", " ", "9"],
			[" ", " ", "2", " ", " ", " ", "2", " ", "2", " ", " ", " ", "2", " ", " "],
			[" ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " "],
			[" ", " ", " ", " ", "8", " ", " ", " ", " ", " ", "8", " ", " ", " ", " "],
			["2", " ", " ", "8", " ", " ", " ", "2", " ", " ", " ", "8", " ", " ", "2"],
			[" ", " ", "8", " ", " ", " ", "2", " ", "2", " ", " ", " ", "8", " ", " "],
			[" ", "8", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "8", " "],
			["9", " ", " ", "2", " ", " ", " ", "9", " ", " ", " ", "2", " ", " ", "9"],
		];

		this._coordsPlayed = [];
		this._pointsLookup = new Map(
			Object.entries({
				E: 1,
				A: 1,
				I: 1,
				O: 1,
				N: 1,
				R: 1,
				T: 1,
				L: 1,
				S: 1,
				U: 1,
				D: 2,
				G: 2,
				B: 3,
				C: 3,
				M: 3,
				P: 3,
				F: 4,
				H: 4,
				V: 4,
				W: 4,
				Y: 4,
				K: 5,
				J: 8,
				X: 8,
				Q: 10,
				Z: 10,
			})
		);
		this._score = 0;
	}

	get grid() {
		return this._grid;
	}

	get coordsPlayed() {
		return this._coordsPlayed;
	}

	set coordsPlayed(coord) {
		this._coordsPlayed.push(coord);
	}
	/**
	 * Checks if the current play is contiguous
	 * vertically and horizontally.
	 */
	isPlayContiguous(coordsArray) {
		// Check if they all share the same x coordinate (i.e., vertical)
		if (coordsArray.every((coord) => coordsArray[0][0] == coord[0])) {
			// Get starting coordinate.
			let [x, y] = coordsArray[0];
			for (let i = 1; i < coordsArray.length; i++) {
				// Check if the next coordinate is in the coords array.
				y++;
				if (y == coordsArray[i][1]) {
					continue;
				}
				// Search the coordsPlayed array for a match.
				else {
					const match = this.coordsPlayed.some((coord) => coord[0] == x && coord[1] == y);
					if (!match) {
						return false;
					}
				}
			}
			return true;
		}
		// Check if they all share the same y coordinate (i.e., horizontal)
		else if (coordsArray.every((coord) => coordsArray[0][1] == coord[1])) {
			// Get starting coordinate
			let [x, y] = coordsArray[0];
			for (let i = 1; i < coordsArray.length; i++) {
				// Check if the next coordinate is in the coords array.
				x++;
				if (x == coordsArray[i][0]) {
					continue;
				} else {
					// Search the coordsPlayed array for a match.
					const match = this.coordsPlayed.some((coord) => coord[0] == x && coord[1] == y);
					if (!match) {
						return false;
					}
				}
			}
			return true;
		}
		// Coords are not on same path.
		return false;
	}

	/**
	 * Get the coords of the played tiles.
	 * @param {HTMLElement[]} playedTiles
	 */
	getCoords(playedTiles) {
		const coords = playedTiles.map((tile) => {
			return JSON.parse(tile.parentNode.getAttribute("coords"));
		});
		return coords;
	}

	/**
	 * Checks if the play is the first move.
	 * @param {[][]} coordsArray
	 */
	isValidFirstMove(coordsArray) {
		// Ensure that at least one of the tiles crosses the center grid.
		const result = coordsArray.some((coord) => coord[0] == 7 && coord[1] == 7);
		return result;
	}

	/**
	 * Updates the score.
	 * @param {object[]} wordsCoords
	 */
	updateScore(wordsCoords) {
		// Loop through each word object.
		for (let word of wordsCoords) {
			let wordPoints = 0;
			let multipliers = [];

			// Look up the value of the grid using the coordinates of each character.
			for (let [i, coords] of word.coords.entries()) {
				// Get the value of grid[y][x]
				const cell = this._grid[coords[1]][coords[0]];
				// Get the associated character string.
				let char = word.chars[i];

				// Calculate the points based upon the value of each grid cell.
				switch (cell) {
					// Double letter score.
					case "2":
						wordPoints += this._pointsLookup.get(char) * 2;
						this._grid[coords[1]][coords[0]] = char;
						break;

					// Triple letter score.
					case "3":
						wordPoints += this._pointsLookup.get(char) * 3;
						this._grid[coords[1]][coords[0]] = char;
						break;

					// Double word score.
					case "8":
						wordPoints += this._pointsLookup.get(char);
						this._grid[coords[1]][coords[0]] = char;
						multipliers.push(2);
						break;

					// Triple word score.
					case "9":
						wordPoints += this._pointsLookup.get(char);
						this._grid[coords[1]][coords[0]] = char;
						multipliers.push(3);
						break;

					// Empty Cell.
					case " ":
						wordPoints += this._pointsLookup.get(char);
						this._grid[coords[1]][coords[0]] = char;
						break;

					// Already contains a value
					default:
						wordPoints += this._pointsLookup.get(char);
						break;
				}
			}
			// Multiply word by multipliers.
			wordPoints *= multipliers.reduce((a, b) => a * b, 1);
			// Update overall score.
			this._score += wordPoints;
		}
		return this._score;
	}

	/**
	 * Filter out the words that are already on the board.
	 * @param {object[]} wordsCoords
	 */
	getNewWords(wordsCoords) {
		return wordsCoords.filter((word) => {
			return !word.chars.every((char, index) => {
				let x = word.coords[index][0];
				let y = word.coords[index][1];
				return this._grid[y][x] == char;
			});
		});
	}
}
