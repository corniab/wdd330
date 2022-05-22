export class ToDoView {
	constructor(listElementId) {
		this.listElementId = listElementId;
	}

	renderToDoList(taskList) {
		document.getElementById(this.listElementId).innerHTML = "";
		taskList.forEach((task) => {
			let checked = task.completed ? "checked" : "";
			let listItem = `
			<li id="${task.timestamp}">
				<label>
					<input type="checkbox" ${checked}/>
					${task.content}
				</label>
				<button class="delete">X</button>
			</li>
			`;
			document.getElementById(this.listElementId).innerHTML += listItem;
		});
	}
}
