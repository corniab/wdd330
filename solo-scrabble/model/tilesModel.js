import { Tile } from "../modules/tile.js";

/**
 * Represents all the tiles available to the player at the start of the game.
 * Tracks when tiles are removed/added to the pile.
 */
export class TilesModel {
	/**
	 * Create Tiles Class.
	 */
	constructor() {
		this._availTiles = [
			new Tile("E", 12, 1),
			new Tile("A", 9, 1),
			new Tile("I", 9, 1),
			new Tile("O", 8, 1),
			new Tile("N", 6, 1),
			new Tile("R", 6, 1),
			new Tile("T", 6, 1),
			new Tile("L", 4, 1),
			new Tile("S", 4, 1),
			new Tile("U", 4, 1),
			new Tile("D", 4, 2),
			new Tile("G", 3, 2),
			new Tile("B", 2, 3),
			new Tile("C", 2, 3),
			new Tile("M", 2, 3),
			new Tile("P", 2, 3),
			new Tile("F", 2, 4),
			new Tile("H", 2, 4),
			new Tile("V", 2, 4),
			new Tile("W", 2, 4),
			new Tile("Y", 2, 4),
			new Tile("K", 1, 5),
			new Tile("J", 1, 8),
			new Tile("X", 1, 8),
			new Tile("Q", 1, 10),
			new Tile("Z", 1, 10),
		];

		// Take an initial count of all the tiles.
		this._tileCount = this._availTiles.reduce((acc, tile) => acc + tile.count, 0);

		// Create an array for player pool.
		this._tilesInPlay = [];
	}

	/**
	 * Gets a random tile from the tile list.
	 * @returns {Tile}
	 */
	getRandomTile() {
		// Decrement tile count.
		this._tileCount--;

		// Create a random index.
		const randomIndex = Math.floor(Math.random() * this._availTiles.length);

		// Get the current count of the tile.
		const charCount = this._availTiles[randomIndex].count;

		// Create a deep copy of the tile.
		const randomTile = Tile.clone(this._availTiles[randomIndex]);

		// Decrement count of tile
		this._availTiles[randomIndex].decrementCount();

		// Remove tile if count is 1.
		if (charCount == 1) {
			this._availTiles = this._availTiles.filter((tile) => tile.char != randomTile.char);
		}

		// Return the tile.
		return randomTile;
	}

	/**
	 * Returns true if there are no available tiles.
	 * Otherwise returns false.
	 * @returns {boolean}
	 */
	get empty() {
		if (this._tileCount < 1) {
			return true;
		}
		return false;
	}

	getTilesInPlay() {
		// Add tiles in play if empty.
		while (this._tilesInPlay.length < 7) {
			this._tilesInPlay.push(this.getRandomTile());
		}
		return this._tilesInPlay;
	}

	/**
	 *
	 * @param {string[]} chars
	 */
	updateTilePool(chars) {
		for (let char of chars) {
			let index = this._tilesInPlay.findIndex((tile) => tile.char == char);
			if (index > -1) {
				this._tilesInPlay.splice(index, 1);
			}
		}
	}
}
