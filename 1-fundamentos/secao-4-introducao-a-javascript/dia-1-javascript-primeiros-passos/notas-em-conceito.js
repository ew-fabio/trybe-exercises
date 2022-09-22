//variáveis
let notaNumerica = Number(prompt("Digite a nota: "));

//condição
if (notaNumerica <= 100 && notaNumerica >= 90) {
	alert("Conceito A");
} else if (notaNumerica < 90 && notaNumerica >= 80) {
	alert("Conceito B");
} else if (notaNumerica < 80 && notaNumerica >= 70) {
	alert("Conceito C");
} else if (notaNumerica < 70 && notaNumerica >= 60) {
	alert("Conceito D");
} else if (notaNumerica < 60 && notaNumerica >= 50) {
	alert("Conceito E");
} else if (notaNumerica < 50 && notaNumerica >= 0) {
	alert("Conceito F");
} else {
	alert("nota errada! digite novamente.");
}
