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
