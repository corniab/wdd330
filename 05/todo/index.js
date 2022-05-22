import { ToDoController } from "./modules/ToDoController.js";
const controller = new ToDoController("tasks");
controller.showToDos();
controller.addTaskListener("addTask");
controller.deleteTaskListener("tasks");
controller.completedTaskListener("tasks");
controller.filtersListener("filters");

// localStorage.clear();
