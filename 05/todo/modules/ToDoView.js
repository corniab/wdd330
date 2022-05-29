export class ToDoView {
	constructor(listElementId) {
		this.listElementId = listElementId;
	}

	renderToDoList(taskList) {
		document.getElementById(this.listElementId).innerHTML = "";
		taskList.forEach((task) => {
			let checked = task.completed ? ["checked", "class='strikethrough'"] : ["", ""];
			let listItem = `
			<li id="${task.id}">
				<label ${checked[1]}>
					<input type="checkbox" ${checked[0]}/>
					${task.content}
				</label>
				<div class="note-btns">
					<button class="edit"><img src="edit.svg" class="edit-img"></img></button>
					<button class="delete"><img src="delete.svg" class="edit-img"></button>
				</div>
			</li>
			`;
			document.getElementById(this.listElementId).innerHTML += listItem;
		});
	}

	renderEditTask(content, id) {
		document.querySelector(".task-main").classList.toggle("hide");
		document.querySelector(".edit-popup").classList.toggle("hide");

		let form = document.forms["editTask"];
		form.editInput.value = content;
		form.setAttribute("taskNum", id);
	}

	hideEditTask() {
		document.querySelector(".edit-popup").classList.toggle("hide");
		document.querySelector(".task-main").classList.toggle("hide");
	}
}
