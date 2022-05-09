export async function fetchNotes(path) {
	const response = await fetch(path);
	const data = await response.json();
	return data.pages;
}
