import { ToDoController } from "./modules/ToDoController.js";
const controller = new ToDoController("tasks", "filters", "task-count");
controller.showToDos();
controller.addTaskListener("addTask");
controller.updateTaskListener("tasks");
controller.completedTaskListener("tasks");
controller.filtersListener("filters");

// localStorage.clear();
