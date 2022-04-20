const linksArray = [
	{
		label: "Week 1 Notes",
		url: "week1/index.html",
	},
];

const directory = document.querySelector(".directory");

function appendLinks() {
	linksArray.forEach((link) => {
		let li = document.createElement("li");
		li.textContent = link.label;
		let a = document.createElement("a");
		a.setAttribute("href", link.url);
		a.appendChild(li);
		directory.appendChild(a);
	});
}

appendLinks();
