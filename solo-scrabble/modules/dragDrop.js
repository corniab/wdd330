/**
 * Add Drag Events to each tile.
 * @param {HTMLElement} tileDiv
 */
export function addTileDrag(tileDiv) {
	tileDiv.addEventListener("dragstart", dragStart);
	tileDiv.addEventListener("dragend", dragEnd);
}

/**
 * Add Drop Event to element.
 * @param {HTMLElement} gridItem
 */
export function addGridDrop(gridItem) {
	gridItem.addEventListener("dragenter", dragEnter);
	gridItem.addEventListener("dragover", dragOver);
	gridItem.addEventListener("dragleave", dragLeave);
	gridItem.addEventListener("drop", drop);
}

/**
 * Callback that fires when the user begins dragging an element.
 * @param {Event} e
 */
function dragStart(e) {
	// store id
	e.dataTransfer.setData("text/plain", e.target.id);
	setTimeout(() => {
		e.target.classList.add("hide");
	}, 0);

	// Remove all pointer events for tiles during a drag.
	const tiles = Array.from(document.querySelectorAll(".tileDiv"));

	tiles.forEach((tile) => {
		if (tile.id != e.target.id) {
			tile.style.pointerEvents = "none";
		}
	});

	// Add back pointer events when you leave parent
	e.target.parentNode.style.pointerEvents = "auto";

	// Remove initial move class
	e.target.classList.remove("initialMove");
}

/**
 * Callback that fires when the user stops dragging an element.
 * @param {Event} e
 */
function dragEnd(e) {
	e.target.classList.remove("hide");

	// Add back all pointer events for tiles following a dragevent.
	const tiles = Array.from(document.querySelectorAll(".tileDiv"));

	tiles.forEach((tile) => {
		tile.style.pointerEvents = "auto";
	});
}

/**
 * Callback that fires when the user drags an element
 * into the boundary of another element.
 * @param {Event} e
 */
function dragEnter(e) {
	e.target.classList.add("dragOver");

	// Hide childNodes.
	for (const node of e.target.childNodes) {
		if (node.classList == "gridText") {
			node.classList.add("hide");
		}
	}
}

/**
 * Callback that fires when the user drags over another element.
 * @param {Event} e
 */
function dragOver(e) {
	e.preventDefault();
	// Hide childNodes.
	for (const node of e.target.childNodes) {
		if (node.classList == "gridText") {
			node.classList.add("hide");
		}
	}
}

/**
 * Callback that fires when the user leaves the boundary of an element.
 * @param {Event} e
 */
function dragLeave(e) {
	e.target.classList.remove("dragOver");
}

/**
 * Callback that fires when the user drops an element.
 * @param {Event} e
 */
function drop(e) {
	e.preventDefault();
	// Remove dragover class.
	e.target.classList.remove("dragOver");
	if (e.target.id != "tilesInPlay") {
		e.target.style.pointerEvents = "none";
	}

	// Get draggable element
	const id = e.dataTransfer.getData("text/plain");
	const draggable = document.getElementById(id);
	draggable.classList.add("initialMove");

	// Add it to the drop target.
	e.target.appendChild(draggable);
}
