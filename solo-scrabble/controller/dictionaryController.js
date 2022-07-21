import { DictionaryModel } from "../model/dictionaryModel.js";

export class DictionaryController {
	constructor() {
		this.model = new DictionaryModel();
	}

	/**
	 * Checks if words are valid.
	 * @param {string[]} wordList
	 */
	async areRealWords(wordList) {
		const results = await Promise.all(wordList.map((word) => this.model.fetchWord(word)));
		results.forEach((result) => {
			if (result[0] == false) {
				alert(`${result[1]} is not a valid word.`);
			}
		});

		return results.every((result) => result[0] == true);
	}
}
