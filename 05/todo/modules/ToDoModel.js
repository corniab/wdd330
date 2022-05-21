export class ToDoModel {
	constructor(arrayName) {
		this.arrayName = arrayName;
		this.storage = localStorage;
		this.storage.setItem(this.arrayName, JSON.stringify([]));
	}

	addItem(value) {
		let tasks = JSON.parse(this.storage.getItem(this.arrayName));
		tasks.push(value);
		this.storage.setItem(this.arrayName, JSON.stringify(tasks));
	}

	getItem(value) {
		return JSON.parse(this.storage.getItem(this.arrayName))[value];
	}

	getItems() {
		return JSON.parse(this.storage.getItem(this.arrayName));
	}

	removeItem(value) {
		// let tasks = JSON.parse(this.storage.getItem("tasks"))
		// tasks.append(value);
		// this.storage.removeItem(key);
	}

	getAll() {}
}
