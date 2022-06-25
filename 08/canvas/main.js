const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

// Drag and drop
const dragBox = document.getElementById("drag");
dragBox.addEventListener("dragstart", dragStart);
dragBox.addEventListener("dragend", dragEnd);

function dragEnd(e) {
	setTimeout(() => {
		e.target.classList.remove("hide");
	}, 0);
}

function dragStart(e) {
	// store id
	e.dataTransfer.setData("text/plain", e.target.id);
	setTimeout(() => {
		e.target.classList.add("hide");
	}, 0);
	e.target.style.cursor = "move";
}

const boxes = document.querySelectorAll(".outerBox");

boxes.forEach((box) => {
	box.addEventListener("dragenter", dragEnter);
	box.addEventListener("dragover", dragOver);
	box.addEventListener("dragleave", dragLeave);
	box.addEventListener("drop", drop);
});

function dragEnter(e) {
	console.log("Entering");
	e.preventDefault();
	e.target.classList.add("drag-over");
}
function dragOver(e) {
	console.log("Over");
	e.preventDefault();
	e.target.classList.add("drag-over");
}
function dragLeave(e) {
	e.target.classList.remove("drag-over");
}
function drop(e) {
	e.target.classList.remove("drag-over");

	// Get draggable element
	const id = e.dataTransfer.getData("text/plain");
	const draggable = document.getElementById(id);

	// add it to the drop target
	e.target.appendChild(draggable);

	// display new elemetn
	draggable.classList.remove("hide");
}
