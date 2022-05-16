import { fetchNotes } from "./fetchNotes.js";

export async function getPage(path) {
	const href = location.href;
	let pages = await fetchNotes(path);
	for (let i = 0; i < pages.length; i++) {
		let regexp = new RegExp(`${pages[i].url}$`, "");
		if (regexp.test(href)) return pages[i];
	}
	return [-1];
}
