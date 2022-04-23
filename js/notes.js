const pageNum = Number(window.location.href.match(/\d+(?=\/index.html)/g)[0]);

const notesJson = fetch("/resources/notes.json")
	.then((response) => response.json())
	.then((data) => appendNotes(data));

function appendNotes(data) {
	console.log(data.wdd330[pageNum - 1]);
}
