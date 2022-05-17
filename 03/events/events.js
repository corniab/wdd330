// Use addEventListener to trigger events
const blueBox = document.querySelector(".blue-box");
blueBox.addEventListener("click", () => {
	console.log("you clicked the blue box");
});

// Show coordinates of click events.
document.addEventListener("click", (e) => {
	console.log(`You clicked page coordinates (${e.pageX}, ${e.pageY})`);
});

// Toggle box color on double click
blueBox.addEventListener("dblclick", () => {
	blueBox.classList.toggle("red");
});

// Show event propagation in a unordered list.
const ulElement = document.getElementById("list");
const liElement = document.querySelector("#list li");

//ulElement.addEventListener("click", (e) => {
//	e.stopPropagation();
//	console.log("Clicked on ul");
//});
//liElement.addEventListener("click", (e) => {
//	e.stopPropagation();
//	console.log("Clicked on li");
//});

// Demonstrate Event delegation
ulElement.addEventListener("click", hightlight);

function hightlight(event) {
	event.target.classList.toggle("highlight");
}
