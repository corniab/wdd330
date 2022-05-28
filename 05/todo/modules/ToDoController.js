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
		// Get the filter that is currently checked ["All", "Active", "Complete"]
		let checked = document.forms[this.filterId].querySelector("input[name=filter]:checked");
		const tasks = this.toDoModel.getFilteredTasks(checked.id, "completed");
		this.toDoView.renderToDoList(tasks);

		// Update the count
		this.updateCount();
	}

	addTaskListener(formId) {
		// Create an event listener for adding tasks.
		const form = document.forms[formId];
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			this.toDoModel.addTask({
				id: this.createId(),
				content: form.taskInput.value,
				completed: false,
				timestamp: new Date(),
			});
			this.showToDos();
		});
	}

	deleteTaskListener(listElementId) {
		// Create an event listener for deleting tasks.
		document.getElementById(listElementId).addEventListener("click", (e) => {
			if (e.target.className == "delete") {
				this.toDoModel.removeTask(e.target.parentNode.parentNode.id);
				this.showToDos();
			}
		});
	}

	editTaskListener(listElementId) {
		// Create an event listener for editing tasks.
		document.getElementById(listElementId).addEventListener("click", (e) => {
			if (e.target.className == "edit") {
				e.preventDefault();
				// The id of the list item is the "grandparent" of the edit button.
				// The id is assigned to the list item in the view controller.
				let task = this.toDoModel.getSingleTask(e.target.parentNode.parentNode.id);
				this.toDoView.renderEditTask(task.content, task.id);
			}
		});
	}

	updateTaskListener(formId) {
		// Create an event listener for updating tasks.
		const form = document.forms[formId];
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			this.toDoModel.updateSingleTask(form.getAttribute("taskNum"), form.editInput.value);
			this.toDoView.hideEditTask();
			this.showToDos();
		});
	}

	hideTaskListener(listElementId) {
		// Create an event listener for hiding the update form.
		document.getElementById(listElementId).addEventListener("click", (e) => {
			if (e.target.className == "cancel") {
				e.preventDefault();
				this.toDoView.hideEditTask();
			}
		});
	}

	completedTaskListener(listElementId) {
		// Create an event listener for task checkboxes.
		document.getElementById(listElementId).addEventListener("click", (e) => {
			if (e.target.type === "checkbox") {
				this.toDoModel.updateTask(e.target.parentNode.parentNode.id, e.target.checked);
				this.showToDos();
			}
		});
	}

	filtersListener(filterId) {
		// Create an event listener for filter radio buttons.
		document.getElementById(filterId).addEventListener("click", (e) => {
			if (e.target.type == "radio") {
				this.showToDos();
			}
		});
	}

	updateCount() {
		// Update the count of active tasks.
		let countEl = document.getElementById(this.countId);
		let plural = document.getElementById("task-plural");
		countEl.textContent = this.toDoModel.getFilteredTasks("active").length;
		if (Number(countEl.textContent) != 1) {
			plural.textContent = "s";
		} else {
			plural.textContent = "";
		}
	}

	createId() {
		// Create a new id.
		this.toDoModel.incrementId();
		return this.toDoModel.getId();
	}

	addTaskIfEmpty() {
		// Add a task to the model if its empty.
		let tasks = this.toDoModel.getAllTasks();
		if (tasks.length < 1) {
			this.toDoModel.addTask({
				id: this.createId(),
				content: "Add a new task...",
				completed: false,
				timestamp: new Date(),
			});
		}
	}
}
