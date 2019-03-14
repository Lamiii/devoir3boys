


function isAnneeBissextile(){
	var annee = prompt("Entrer une annee");
	if ((annee%4)== 0 || (annee%400)==0) {
		alert("C'est une année bissextile");
	}
	else {
		alert("Ce n'est pas une année bissextile");
	}
}