const form = document.forms["hero"];
form.addEventListener("submit", makeHero, false);

function makeHero(event) {
	event.preventDefault();
	const hero = {};
	hero.name = form.heroName.value;
	hero.realName = form.realName.value;

	// Get superpowers
	hero.powers = [...form.powers].filter((box) => box.checked).map((box) => box.value);

	// Get type of hero
	hero.category = form.category.value;

	// Get age
	hero.age = form.age.value;

	// Get city
	hero.city = form.city.value;

	// Get origin
	hero.origin = form.origin.value;

	alert(JSON.stringify(hero));
	return hero;
}
