const form = document.forms["form_js_verified"];

const remove = node => {
	node.parentNode.removeChild(node);
}

const removeAllError = () => {
	Array.from(document.getElementsByClassName("error")).forEach(e=>remove(e));
}

const displayError = (id, msg) => {
	const row = document.getElementById(id);
	const oldError = document.getElementById(id + "_error");

	if (oldError != null) remove(oldError);

	const error = document.createElement("td");
	error.className = "error";
	error.id = id + "_error";
	error.innerText = msg;
	row.appendChild(error);
}

const verifyGender = gender => {
	if (gender != "") return true;

	displayError("gender", "Un genre doit être sélectionné");
	return false;
};

const verifyLastname = lastname => {
	if (lastname.length >= 2) return true;
	displayError("lastname", "Un nom ne peut pas faire moins de 2 caractères");

	return false;
};

const verifyFirstname = firstname => {
	if (firstname.length >= 2) return true;
	displayError("firstname", "Un prénom ne peut pas faire moins de 2 caractères");
	return false;
};


const verifyPassword = passsword => {
	if (passsword.length >= 6) return true;
	displayError("password", "Un mot de passe doit faire au moins 6 caractères");

	return false;
};

const verifyCountry = country => {
	if (country !== "") return true;
	displayError("country", "Un pays doit être sélectionné");

	return false;
};

const validateForm = () => {

	removeAllError();

	const verification = [
		verifyGender(form["gender"].value),
		verifyFirstname(form["firstname"].value),
		verifyLastname(form["lastname"].value),
		verifyPassword(form["password"].value),
		verifyCountry(form["country"].value)
	];

	return verification.every(e => e);
};

const initForm = () => {
	Array.from(form["gender"]).forEach(e => e.checked = false);
	form["firstname"].value = "";
	form["lastname"].value = "";
	form["password"].value = "";
	form["country"].value = "";

	removeAllError();
};

const viewForm = () => {
	console.log(
		[
			form["gender"].value,
			form["firstname"].value,
			form["lastname"].value,
			form["password"].value,
			form["country"].value
		]
	);
};


initForm();
