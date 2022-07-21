export class DictionaryModel {
	constructor() {
		this.fetchWord = this.memoizeFetch();
	}
	/**
	 * Returns an anonymous function that memoizes fetch responses.
	 */
	memoizeFetch() {
		// Create a cache.
		let cache = new Map();
		// Return a closure.
		return (word) => {
			// Set to lowercase.
			word = word.toLowerCase();
			// Check if the word is cached.
			if (cache.has(word)) {
				return [true, cache.get(word)];
			}
			// Make a request for the word.
			else {
				return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
					.then((response) => {
						if (response.ok) {
							return response;
						}
						throw new Error(`"${word}" does not exist.`);
					})
					.then((response) => response.json())
					.then((data) => {
						cache.set(word, data);
						return [true, word];
					})
					.catch(() => [false, word]);
			}
		};
	}
}
