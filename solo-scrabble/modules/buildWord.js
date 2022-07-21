/**
 * Combines the board array vertically and horizontally.
 * @param {Array} charList - An array of characters.
 */
export function buildWords(charlist) {
	const board = chunk(charlist, 15);
	const vertWords = getVertWords(board);
	const horizWords = getHorizWords(board);

	const wordsCoords = vertWords.concat(horizWords);

	const words = wordsCoords.map((word) => {
		return word.chars.join("");
	});

	return [wordsCoords, words];
}

/**
 * Gets the horizontal words.
 * @param {[][]} board
 */
function getHorizWords(board) {
	let horizWords = [];
	for (const [y, row] of board.entries()) {
		let rowObject = { chars: [], coords: [] };
		for (const [x, col] of row.entries()) {
			// If the col is blank create a new object.
			if (col == " ") {
				rowObject = { chars: [], coords: [] };
				// Otherwise push the values to the object.
			} else {
				rowObject.chars.push(col);
				rowObject.coords.push([x, y]);
				// If the next col is blank push the object.
				if (x < row.length) {
					if (row[x + 1] == " ") {
						horizWords.push(rowObject);
					}
				}
				// Or if we have reached the end then push the object.
				else if (x == row.length) {
					horizWords.push(rowObject);
				}
			}
		}
	}
	// Filter out single letters.
	horizWords = horizWords.filter((word) => word.chars.length > 1);
	return horizWords;
}

/**
 * Gets the vertical words.
 * @param {[][]} board
 */
function getVertWords(board) {
	let vertWords = [];
	for (let x = 0; x < board.length; x++) {
		let rowObject = { chars: [], coords: [] };
		for (let [y, row] of board.entries()) {
			let col = row[x];
			// If the col is blank create a new object.
			if (col == " ") {
				rowObject = { chars: [], coords: [] };
				// Otherwise push the values to the object.
			} else {
				rowObject.chars.push(col);
				rowObject.coords.push([x, y]);
				// If the next row is blank push the object.
				if (y < x) {
					if (board[y + 1][x] == " ") {
						vertWords.push(rowObject);
					}
				}
				// Or if we have reached the end then push the object.
				else if (y == x) {
					vertWords.push(rowObject);
				}
			}
		}
	}
	// Filter out single letters.
	vertWords = vertWords.filter((word) => word.chars.length > 1);
	return vertWords;
}

/**
 * Subdivides an array into a multidimensional array.
 * @param {[]} array
 * @param {number} length
 * @returns {[][]}
 */
function chunk(array, length) {
	let result = [];
	for (let i = 0; i < array.length / length; i++) {
		result.push(array.slice(i * length, i * length + length));
	}
	return result;
}
