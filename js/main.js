const linksArray = fetch("resources/notes.json")
	.then((response) => response.json())
	.then((data) => appendLinks(data));

const directory = document.querySelector(".directory");

function appendLinks(data) {
	const notesArray = data.wdd330;
	notesArray.forEach((note) => {
		let li = document.createElement("li");
		let a = document.createElement("a");
		a.setAttribute("href", note.url);
		a.setAttribute("rel", "noreferrer noopener");
		a.textContent = "Week " + note.week;
		li.appendChild(a);
		directory.appendChild(li);
	});
}
