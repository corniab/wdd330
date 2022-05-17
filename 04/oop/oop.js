// Create a basic class
class Lamp {
	constructor(style, price) {
		this.style = style;
		this.price = price;
	}

	sellPrice() {
		// Apply a 10% markup.
		return "$" + String((this.price *= 1.1).toFixed(2));
	}

	static lampOn() {
		return "The lamp is on.";
	}

	static value = "hello";
}

const lamp = new Lamp("Gothic", 100);
console.log(lamp.sellPrice());

console.log(Lamp.lampOn());

// Create a class with private variable
class Instrument {
	constructor(family, name) {
		this.family = family;
		this.name = name;
		let _temperament = "Equal Temperament";
		this.setTemperament = (tuning) => {
			return (_temperament = tuning);
		};
		this.getTemperament = () => {
			return _temperament;
		};
	}
}

const violin = new Instrument("strings", "violin");
console.log(violin.getTemperament());
violin.setTemperament("Pythagorean Tuning");
console.log(violin.getTemperament());
