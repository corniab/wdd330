import { fetchNotes } from "./fetchNotes.js";

export async function getPage(pages) {
	const href = location.href;
	pages = await fetchNotes(pages);
	for (let i = 0; i < pages.length; i++) {
		let regexp = new RegExp(`${pages[i].url}$`, "");
		if (regexp.test(href)) return i;
	}
	return -1;
}
