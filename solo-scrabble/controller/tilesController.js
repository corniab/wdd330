import { TilesModel } from "../model/tilesModel.js";
import { TilesView } from "../view/tilesView.js";

export class TilesController {
	/**
	 * Creates an instance of the Tiles Controller.
	 */
	constructor() {
		this.model = new TilesModel();
		this.view = new TilesView();
	}

	createTiles() {
		const tiles = this.model.getTilesInPlay();
		this.view.renderTiles(tiles);
	}

	tilesEmpty() {
		return this.model.empty;
	}

	updateTilePool() {
		const chars = this.view.getPlayed();
		this.model.updateTilePool(chars);
		this.createTiles();
	}

	updateCount() {
		const count = this.model._tileCount;
		this.view.updateCount(count);
	}
}
