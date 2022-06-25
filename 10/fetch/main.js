const fetchRes = document.getElementById("fetchRes");
const fetchForm = document.forms.fetchForm;

fetchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const word = fetchForm.wordReq.value;
	fetchWord(word);
});

async function fetchWord(word) {
	// Clear current definitions if any
	fetchRes.textContent = "";

	// request word from api
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
		.then((response) => response.json())
		.then((data) => data);

	//
	const meanings = response[0].meanings;
	meanings.forEach((meaning) => {
		// create ul for each meaing
		const h4 = document.createElement("h4");
		h4.textContent = `${word} (${meaning.partOfSpeech})`;
		const ul = document.createElement("ul");

		meaning.definitions.forEach((def) => {
			const li = document.createElement("li");
			li.textContent = def.definition;
			ul.appendChild(li);
		});

		fetchRes.appendChild(h4);
		fetchRes.appendChild(ul);
	});
}
