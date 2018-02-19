const createElement = (type, innerText) => {
	const elt = document.createElement(type);
	if (!(innerText === undefined)) elt.innerText = innerText;
	return elt;
}

const tableOf = tab => {
	const newList = createElement("table")

	const title = createElement("tr");
	const col1 = createElement("th", "index");
	const col2 = createElement("th", "value");
	[col1, col2].forEach(col => title.appendChild(col));
	newList.appendChild(title);



	tab.forEach((elt, i) => {
		const row = createElement("tr");
		const cell1 = createElement("td", i);
		const cell2 = createElement("td", elt);
		[cell1, cell2].forEach(cell => row.appendChild(cell));
		newList.appendChild(row);
	});

	return newList;
}


const affRes = (res, name) => {
	const container = createElement("div");
	const title = createElement("h2", name);
	[title, res].forEach(e => container.appendChild(e));
	document.body.appendChild(container);
}

const afficherTableau = (tab, name="default Title") => {
	affRes(tableOf(tab), name);
}

const afficherMoyenne = tab => {
	sum = tab.reduce((a, b) => a + b, 0)
	moyenne = sum / tab.length

	affRes(createElement("p", moyenne), "moyenne du tableau")
}

const afficherNbOccurence = (tab, val) => {
	let count = 0;
	tab.forEach(elt => {
		if (elt === val) count++;
	});

	affRes(createElement("p", count), "nombre d'ocurrence de " + val);
}

const ontEuLaMoyenne = tab => {
	const count = tab.filter(e => e >= 10).length;
	affRes(createElement("p", count), "nombre de notes >= 10");
}

const recherche = (tab,val) => {
	const res = "La note " + val + (tab.indexOf(val) === -1 ? " n'est pas " : " est ") + "dans les notes.";
	affRes(createElement("p", res), "Recherche de " + val);
}




const notes = [8,10,5,4,6, 8, 9, 8, 15, 15, 16, 18]
afficherTableau(notes, "Notes des élèves")
afficherMoyenne(notes)
afficherNbOccurence(notes, 8);
ontEuLaMoyenne(notes);
[4, 20].forEach(n => recherche(notes, n));
