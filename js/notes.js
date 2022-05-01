const pageNum = Number(window.location.href.match(/\d+(?=\/index.html)/g)[0]);

const notesJson = fetch("../resources/notes.json")
	.then((response) => response.json())
	.then((data) => appendData(data));

function appendData(data) {
	data = data.wdd330[pageNum - 1];
	appendNotes(data.notes);
	appendLinks(data.links);
	appendExamples(data.application);
}

function appendNotes(notesArray) {
	const notesList = document.querySelector(".notes-list");
	notesArray.forEach((note) => {
		let li = document.createElement("li");
		li.textContent = note;
		notesList.appendChild(li);
	});
}

function appendLinks(linksArray) {
	const linksList = document.querySelector(".links-list");
	linksArray.forEach((link) => {
		let li = document.createElement("li");
		let a = document.createElement("a");
		a.textContent = link.description;
		a.setAttribute("href", link.url);
		a.setAttribute("rel", "noreferrer noopener");
		li.appendChild(a);
		linksList.appendChild(li);
	});
}

function appendExamples(examplesArray) {
	const applicationCode = document.querySelector(".example-code");
	applicationCode.textContent = examplesArray.join("");
}
