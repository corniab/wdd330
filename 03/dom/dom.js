// Use array.from to convert node list to array
const listItems = Array.from(document.querySelectorAll("li"));
console.log(listItems);

// childNodes returns all nodes while children property will ignore text nodes
const ul = document.querySelector("ul");
console.log(ul.childNodes);
console.log(ul.children);

// Function to create a table from json
fetch("dom.json")
	.then((response) => response.json())
	.then((data) => buildTable(data));

function buildTable(data) {
	const tbody = document.querySelector("tbody");
	console.log(tbody);
	const forceUsers = data.ForceUsers;
	forceUsers.forEach((user) => {
		const row = document.createElement("tr");
		const name = document.createElement("td");
		name.textContent = user.name;
		const team = document.createElement("td");
		team.textContent = user.team;
		const color = document.createElement("td");
		color.textContent = user.lightsaberColor;
		row.appendChild(name);
		row.appendChild(team);
		row.appendChild(color);
		tbody.appendChild(row);
	});
}
