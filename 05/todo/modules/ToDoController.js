import { ToDoModel } from "./ToDoModel.js";
import { ToDoView } from "./ToDoView.js";

export class ToDoController {
	constructor(parentId, filterId, countId) {
		this.toDoModel = new ToDoModel("tasks");
		this.toDoView = new ToDoView(parentId);
		this.filterId = filterId;
		this.countId = countId;
	}

	showToDos() {
		let checked = document.forms[this.filterId].querySelector("input[name=filter]:checked");
		const tasks = this.toDoModel.getFilteredTasks(checked.id, "completed");
		this.toDoView.renderToDoList(tasks);

		// Update the count
		this.updateCount();
	}

	addTaskListener(formId) {
		const form = document.forms[formId];
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			this.toDoModel.addTask({ timestamp: new Date(), content: form.taskInput.value, completed: false });
			this.showToDos();
		});
	}

	deleteTaskListener(listElementId) {
		document.getElementById(listElementId).addEventListener("click", (e) => {
			if (e.target.className == "delete") {
				this.toDoModel.removeTask(e.target.parentNode.id);
				this.showToDos();
			}
		});
	}

	completedTaskListener(listElementId) {
		document.getElementById(listElementId).addEventListener("click", (e) => {
			if (e.target.type === "checkbox") {
				this.toDoModel.updateTask(e.target.parentNode.parentNode.id, e.target.checked);
				this.showToDos();
			}
		});
	}

	filtersListener(filterId) {
		document.getElementById(filterId).addEventListener("click", (e) => {
			if (e.target.type == "radio") {
				this.showToDos();
			}
		});
	}

	updateCount() {
		let countEl = document.getElementById(this.countId);
		let plural = document.getElementById("task-plural");
		countEl.textContent = this.toDoModel.getFilteredTasks("active").length;
		console.log(Number(countEl.textContent));
		if (Number(countEl.textContent) != 1) {
			plural.textContent = "s";
		} else {
			plural.textContent = "";
		}
	}
}
