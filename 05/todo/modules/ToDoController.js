import { ToDoModel } from "./ToDoModel.js";
import { ToDoView } from "./ToDoView.js";

export class ToDoController {
	constructor(parentId) {
		this.toDoModel = new ToDoModel("tasks");
		this.toDoView = new ToDoView(parentId);
	}

	showToDos(tasks = this.toDoModel.getAllTasks()) {
		this.toDoView.renderToDoList(tasks);
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

	filtersListener(elementId) {
		document.getElementById(elementId).addEventListener("click", (e) => {
			switch (e.target.id) {
				case "all":
					console.log("all");
					break;
				case "active":
					console.log("active");
					break;
				case "completed":
					console.log("completed");
					break;
				default:
					break;
			}
		});
	}
}
