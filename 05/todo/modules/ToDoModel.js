export class ToDoModel {
	constructor(arrayName) {
		this.arrayName = arrayName;
		// Create the tasks array in local storage if it does not exist.
		// key: "tasks" value: {id: 1, content: "This is content", completed: False}
		if (localStorage.getItem("tasks") == null) {
			localStorage.setItem(arrayName, JSON.stringify([]));
			localStorage.setItem("taskId", "0");
		}
	}

	addTask(task) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		tasks.push(task);
		localStorage.setItem(this.arrayName, JSON.stringify(tasks));
	}

	getAllTasks() {
		return JSON.parse(localStorage.getItem(this.arrayName));
	}

	getSingleTask(id) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		let task = tasks.find((task) => task.id == id);
		return task;
	}

	updateSingleTask(id, content) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		tasks = tasks.map((task) => {
			if (task.id == id) {
				task.content = content;
				return task;
			}
			return task;
		});
		localStorage.setItem(this.arrayName, JSON.stringify(tasks));
	}

	removeTask(id) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		tasks = tasks.filter((task) => task.id != id);
		localStorage.setItem(this.arrayName, JSON.stringify(tasks));
	}

	getFilteredTasks(filter, key) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		switch (filter) {
			case "all":
				return tasks;
			case "active":
				return tasks.filter((task) => task[key] == false);
			case "completed":
				return tasks.filter((task) => task[key] == true);
			default:
				break;
		}
	}

	updateTask(id, completed) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		tasks = tasks.map((task) => {
			if (task.id == id) {
				task.completed = completed;
				return task;
			}
			return task;
		});
		localStorage.setItem(this.arrayName, JSON.stringify(tasks));
	}

	incrementId() {
		let taskId = Number(localStorage.getItem("taskId"));
		taskId++;
		localStorage.setItem("taskId", taskId);
	}

	getId() {
		return Number(localStorage.getItem("taskId"));
	}
}
