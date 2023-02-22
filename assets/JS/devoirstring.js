// exercice 1
function prenom() {
	var pren = document.getElementById("prenom").value;
	document.getElementById("holder1").innerHTML = pren;
    // on récupère le prénom on le met dans l'élément avec id holder1
    // compléter le code ici
}

function nomdefamille() {
	var ndf = document.getElementById("nomdefamille").value;
	document.getElementById("holder1").innerHTML = ndf;
    // on récupère le nom on le met dans l'élément avec id holder1
    // compléter le code ici
}

function nomcomplet() {
	var pren = document.getElementById("prenom").value;
	var ndf = document.getElementById("nomdefamille").value;
	var prendf = pren.concat (" ", ndf)
	document.getElementById("holder1").innerHTML = prendf;
    // on concatène prénom et nom pour afficher le nom entier et on met le résultat dans l'élément avec id holder1
    // compléter le code ici
}


// exercice 2
function segmentText() {
    // on récupère le texte de l'élément d'id texte, on le découpe et on le place dans l'élément avec id holder2
    // compléter le code ici
	var text = document.getElementById("texte").value;
	var separateurs = new RegExp("[ ,'\"]")
	const myArray  = text.split(separateurs);
	document.getElementById("holder2").innerHTML = myArray;
}
