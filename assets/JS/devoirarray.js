function exercice1() {
	let tableau1 = ["lundi", "mardi", "mercredi"];
	let resultat = tableau1.pop();
	tableau1.unshift(resultat);
	document.getElementById("exercice1Resultat").innerHTML = tableau1;
}


function exercice2() {
	let text = document.getElementById("texteExercice2").value;
	let separateurs = new RegExp("[ ]");
	let texte1  = text.split(separateurs);
	let texte2 = texte1.toString();
	let resultat = texte2.toUpperCase();
	document.getElementById("exercice2Resultat").innerHTML = resultat;
}


function exercice3() {
	let text = document.getElementById("texteExercice3").value;
	let separateurs = new RegExp("[ ]");
	let texte1  = text.split(separateurs);
	let cleanwords = texte1.filter(word => word.length > 3);
	document.getElementById("exercice3Resultat").innerHTML = cleanwords;
}


function exercice4() {
	let text = document.getElementById("texteExercice4").value;
	let separateurs = new RegExp("[ ]");
	let texte1  = text.split(separateurs);
	let tableau = [];
	tableau.forEach
}
