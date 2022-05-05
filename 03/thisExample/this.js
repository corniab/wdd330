console.log(`
+--------------------------------------+
|                                      |
|             Week 3 Notes             |
|    (view this.js in sources tab)     |
|                                      |
+--------------------------------------+
`);

// 'this' automatically binds to the global window object in a page.
console.log(this);

// 'this' refers to the instance of an object when created with the 'new' keyword.
// It acts like a placeholder to assign properties to a future object that will be created.
class Car {
	constructor(year, make, model) {
		this.year = year;
		this.make = make;
		this.model = model;
	}
}

const car1 = new Car(1963, "Ford", "Galaxie");
console.log(car1.make);

// Within an object method, 'this' refers to the object itself.
const address = {
	street: "110 Maple Drive",
	city: "Plainville",
	state: "AX",
	zip: "80008",
	full() {
		// 'this' gives you access to the instance properties.
		console.log(`${this.street}, ${this.city}, ${this.state} ${this.zip}`);
	},
};
address.full();

// 'this' in a simple function will bind to the global window object
const obj = {
	doSomething() {
		setTimeout(function () {
			this.checkThis();
		}, 1000);
	},
	checkThis() {
		console.log(this);
	},
};
// doSomething will cause an error in the console because 'this' in setTimeout will bind to the window object.
obj.doSomething();

// Fix 1: Store the reference to 'this' in a variable.
const obj2 = {
	doSomething() {
		// We are capturing a reference to the current scope of this.
		const self = this;
		setTimeout(function () {
			self.checkThis();
		}, 1000);
	},
	checkThis() {
		console.log(this);
	},
};
obj2.doSomething();

// Fix 2: Use an arrow function. 'this' in arrow functions is the same as 'this' in the enclosing scope.
const obj3 = {
	doSomething() {
		setTimeout(() => this.checkThis(), 1000);
	},
	checkThis() {
		console.log(this);
	},
};
obj3.doSomething();

// 'this' is set to the element that fired the event in an event listener
// To remove an event listener the callback passed as the second value needs to be a named function.
// You can't remove an anonymous function with document.removeEventListener('click', ()=>{})
// If you need to 'this' to reference the object in an event listener, you need to use 'bind'
// to manually create a 'this' context.
const btn = document.querySelector("button");
function customBind(element) {
	return {
		listenClick() {
			// 'this' is referring to the enclosing object the function customBind
			console.log(this);
			this.listener = this.speakLeet.bind(this);
			element.addEventListener("click", this.listener);
		},
		speakLeet(e) {
			const elem = e.currentTarget;
			console.log("listener is removed");
			elem.removeEventListener("click", this.listener);
		},
	};
}

const buttonListener = customBind(btn);
buttonListener.listenClick();
