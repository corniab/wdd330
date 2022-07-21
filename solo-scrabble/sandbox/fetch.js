const board = [
	//                   X - AXIS
	//0    1    2    3    4    5    6    7    8    9
	[" ", " ", " ", "F", " ", " ", " ", " ", " ", " "], // 0
	[" ", " ", " ", "A", " ", " ", " ", " ", " ", " "], // 1
	[" ", " ", "G", "R", "A", "P", "E", " ", " ", " "], // 2
	[" ", " ", "I", " ", "X", "I", " ", " ", " ", " "], // 3
	[" ", " ", "V", " ", "O", " ", " ", " ", " ", " "], // 4    Y - AXIS
	[" ", "P", "E", "E", "L", " ", " ", " ", " ", " "], // 5
	[" ", " ", "R", "I", "O", "T", " ", " ", " ", " "], // 6
	[" ", " ", " ", "G", "T", " ", " ", " ", " ", " "], // 7
	[" ", " ", " ", "H", "L", " ", " ", " ", " ", " "], // 8
	[" ", " ", " ", "T", " ", " ", " ", " ", " ", " "], // 9
];

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
	console.log(vertWords);
	return vertWords;
}

/**
 * Builds a list of words as well as a list of respective coordinates.
 * @param {[]} board
 */
function buildWords(board) {
	const vertWords = getVertWords(board);
	const horizWords = gethorizWords(board);

	const wordsCoords = vertWords.concat(horizWords);

	const words = wordsCoords.map((word) => {
		return "".join(word.chars);
	});

	return [wordsCoords, words];
}

let multipliers = [2, 3];

let points = 10;

points *= multipliers.reduce((a, b) => a * b, 1);

const anArray = [1, 2, 3, 4, 5];

console.log(
	anArray.every((num, index) => {
		console.log(index);
		return num > 0;
	})
);
