//constantes
const alfa = Number(prompt("Defina o primeiro ângulo: "));
const beta = Number(prompt("Defina o segundo ângulo: "));
const gama = Number(prompt("Defina o terceiro ângulo: "));

//condição de verificação
if (alfa > 0 && beta > 0 && gama > 0) {
	if (alfa + beta + gama == 180) {
		alert("true");
	} else {
		alert("false");
	}
} else {
	alert("os ângulos devem ser números maiores que zero!");
}
