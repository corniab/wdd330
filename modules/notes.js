import { getPage } from "./currentPage.js";

async function appendData() {
	const page = await getPage("../notes.json");
	appendNotes(page.notes);
	appendLinks(page.links);
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

appendData();
