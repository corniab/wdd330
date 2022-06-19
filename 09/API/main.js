// Get dataset value from p tag on page.
const pDataSet = document.getElementById("testData").dataset;
console.log(pDataSet);

// Get current location
navigator.geolocation.getCurrentPosition(youAreHere);
function youAreHere(position) {
	console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
	console.log(`Speed:     ${position.speed}`);
	console.log(`Heading:   ${position.heading}`);
	console.log(`Timestamp: ${position.timestamp}`);
	console.log(`Position Object: ${position}`);
}

console.log("");
console.log("Web Workers");
const worker = new Worker("task.js");
wo;

function messageWorker() {
	worker.postMessage("Start working");
}
