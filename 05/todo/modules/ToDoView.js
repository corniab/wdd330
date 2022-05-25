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
				<div class="note-btns">
					<button class="edit"><img src="edit.svg" class="edit-img"></img></button>
					<button class="delete">X</button>
				</div>
			</li>
			`;
			document.getElementById(this.listElementId).innerHTML += listItem;
		});
	}

	renderEditTask(content, timestamp) {
		document.querySelector(".task-main").classList.toggle("hide");
		document.querySelector(".edit-popup").classList.toggle("hide");

		let form = document.forms.editTask;
		form.editInput.value = content;
		form.setAttribute("timestamp", timestamp);
	}

	hideEditTask() {
		document.querySelector(".edit-popup").classList.toggle("hide");
		document.querySelector(".task-main").classList.toggle("hide");
	}
}
