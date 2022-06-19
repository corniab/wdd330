// 3 types of dialogs: alert(), confirm(), and prompt()
// alert("This is an alert. Dialogs are blocking.");
// confirm("Is this a confirm dialog?");
// let promptValue = prompt("This is a prompt. Write some stuff to the program");
// console.log(promptValue);

// Browser information is contained in the browser object
console.log(window.navigator.userAgent);

// Location Properties
console.log("");
console.log("LOCATION PROPERTIES");
console.log("href:     " + window.location.href); // you can redirect by changing the href assignment
console.log("protocol: " + window.location.protocol);
console.log("hostname: " + window.location.hostname);
console.log("port:     " + window.location.port);
console.log("pathname: " + window.location.pathname);
console.log("hash:     " + window.location.hash);
console.log("origin:   " + window.location.origin);

// History Properties
console.log("");
console.log("HISTORY PROPERTIES");
console.log(window.history);

// Popups
// const popup = window.open("https://www.google.com", "Google", "width=400, height=400, resizable=yes");

// Create a cookie
console.log("");
document.cookie = "greeting=hello";
console.log("Cookie:   " + document.cookie);

// Native Asynchronous code
console.log("");

let i = 0;

const repeat = setInterval(() => {
	i++;
	console.log("Call to setInterval " + i);
}, 1000);

setTimeout(() => {
	window.clearInterval(repeat);
}, 5000);
