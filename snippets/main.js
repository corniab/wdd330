import { createDirectory } from "../modules/directory.js";

const directory = await createDirectory("notes.json");

document.querySelector("main").appendChild(directory);
