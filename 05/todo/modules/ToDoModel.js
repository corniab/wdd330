export class ToDoModel {
	constructor(arrayName) {
		this.arrayName = arrayName;
		if (localStorage.getItem("tasks") == null) {
			localStorage.setItem(arrayName, JSON.stringify([]));
			this.addTask({ timestamp: "1", content: "hello", completed: false });
		} else if (JSON.parse(localStorage.getItem("tasks")).length < 1) {
			this.addTask({ timestamp: "1", content: "hello", completed: false });
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

	removeTask(timestamp) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		tasks = tasks.filter((task) => task.timestamp != timestamp);
		localStorage.setItem(this.arrayName, JSON.stringify(tasks));
	}

	getFilteredTasks(filter, value) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		return tasks.filter((task) => task[filter] == value);
	}

	updateTask(timestamp, completed) {
		let tasks = JSON.parse(localStorage.getItem(this.arrayName));
		tasks = tasks.map((task) => {
			if (task.timestamp == timestamp) {
				task.completed = completed;
				return task;
			}
			return task;
		});
		localStorage.setItem(this.arrayName, JSON.stringify(tasks));
	}
}
