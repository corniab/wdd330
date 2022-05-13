const form = document.forms["hero"];
form.addEventListener("submit", makeHero, false);

function makeHero(event) {
	event.preventDefault();
	const hero = {};
	hero.name = form.heroName.value;
	hero.realName = form.realName.value;
	alert(JSON.stringify(hero));
	return hero;
}
