const clientEmail = document.getElementById("clientEmail");

clientEmail.addEventListener("input", () => {
	if (clientEmail.validity.typeMismatch) {
		clientEmail.setCustomValidity("I am expecting an e-mail address!");
		clientEmail.reportValidity();
	} else {
		clientEmail.setCustomValidity("");
	}
});
