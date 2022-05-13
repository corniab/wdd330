// Use the name attribute (in this case the value is "search") to identify the form.
const form = document.forms["search"];

// Get a collection of all the elements contained in the form.
//const [input, button] = form.elements;
//console.log(input, button);

// I prefer using the square bracket notation to dot notation.
// Its also safer
// Use name attribute to access form control (in this case we are getting the input)
const input = form["searchInput"];
// console.log(input);

form.addEventListener("submit", search, false);

function search(event) {
	alert(`You searched for: ${input.value}`);
	//alert("Form Submitted");
	event.preventDefault();
}
