const directory = document.querySelector(".directory");

const weeks = [
	{
		url: "01/index.html",
		description: "01",
	},
	{
		url: "02/index.html",
		description: "02",
	},
	{
		url: "03/index.html",
		description: "03",
	},
	{
		url: "04/index.html",
		description: "04",
	},
	{
		url: "05/index.html",
		description: "05",
	},
	{
		url: "07/index.html",
		description: "07",
	},
	{
		url: "08/index.html",
		description: "08",
	},
	{
		url: "09/index.html",
		description: "09",
	},
	{
		url: "10/index.html",
		description: "10",
	},
	{
		url: "solo-scrabble/index.html",
		description: "10: Final Project - Solo Scrabble.",
	},
];

function appendLinks(weeks) {
	weeks.forEach((note) => {
		let li = document.createElement("li");
		let a = document.createElement("a");
		a.setAttribute("href", note.url);
		a.setAttribute("rel", "noreferrer noopener");
		a.textContent = "Week " + note.description;
		li.appendChild(a);
		directory.appendChild(li);
	});
}

appendLinks(weeks);
