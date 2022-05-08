// Properties can be accessed with dot and bracket notation.
const cat = { breed: "Ragdoll", domesticated: true };
console.log(cat.breed);
console.log(cat["domesticated"]);

// Computed properties.
const dog = { ["make" + "Sound"]: "bark" };
console.log(dog.makeSound);

// Avoiding naming collisions by wrapping functions in objects.
const myFuncs = {
	doSomething() {
		console.log("do something");
	},
};

myFuncs.doSomething();

// Regular Expression used to remove html tags.
let html = `<span>This is a span.</span><div class="hello">This is a div.</div>`;
const regexp = /<.+?>/gi;

html = html.replace(regexp, "");
console.log(html);
