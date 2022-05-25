import { ToDoController } from "./modules/ToDoController.js";
const controller = new ToDoController("tasks", "filters", "task-count");
controller.showToDos();
controller.addTaskListener("addTask");
controller.deleteTaskListener("tasks");
controller.editTaskListener("tasks");
controller.completedTaskListener("tasks");
controller.filtersListener("filters");
controller.hideTaskListener("editTask");
controller.updateTaskListener("editTask");

// localStorage.clear();
