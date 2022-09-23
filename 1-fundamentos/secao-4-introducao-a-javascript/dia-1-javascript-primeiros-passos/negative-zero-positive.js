//inicialização da entrada da variável
let checkNumber = Number(prompt("Digite um número: "));

//condição de verificação
if (checkNumber > 0) {
	alert("positive number");
} else if (checkNumber < 0) {
	alert("negative number");
} else if (checkNumber === 0) {
	alert("it's zero!");
} else {
	alert("invalid input");
}
