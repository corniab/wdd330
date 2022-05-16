export async function createDirectory(path) {
	const response = await fetch(path);
	const data = await response.json();
	const ul = createUl(data.pages);
	return ul;
}

function createUl(pages) {
	const ul = document.createElement("ul");
	ul.classList.add("directory");
	pages.forEach((page) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.textContent = page.description;
		a.setAttribute("href", page.url);
		li.appendChild(a);
		ul.appendChild(li);
	});

	return ul;
}
