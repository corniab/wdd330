/**
 * Represents a Scrabble Tile.
 */
export class Tile {
	/**
	 * Creates a Tile.
	 * @param {string} char String representing the tile character(A-Z).
	 * @param {number} count Represents the total available tiles of given character.
	 * @param {number} points Represents the value in points of tile.
	 */
	constructor(char, count, points) {
		this._char = char;
		this._count = count;
		this._points = points;
	}
	/**
	 * Creates a deep copy of the tile instance.
	 * @param {Tile} other
	 * @returns
	 */
	static clone(other) {
		return new Tile(other.char, other.count, other.points);
	}

	/**
	 * Returns the character.
	 */
	get char() {
		return this._char;
	}

	/**
	 * Returns the count.
	 */
	get count() {
		return this._count;
	}

	/**
	 * Returns the points.
	 */
	get points() {
		return this._points;
	}

	/**
	 * Decrements the count of characters.
	 */
	decrementCount() {
		if (this._count > 0) {
			this._count--;
		}
	}
}
