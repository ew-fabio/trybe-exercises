//constantes do teste
const num1 = 100;
const num2 = num1 * 2;
const num3 = num1 * 3;

//condição de comparação
if (num1 > num2) {
	if (num2 > num3) {
		console.log(num1, num2, num3);
	} else if (num3 > num1) {
		console.log(num3, num1, num2);
	} else {
		console.log(num1, num3, num2);
	}
} else if (num1 > num3) {
	console.log(num2, num1, num3);
} else if (num2 > num3) {
	console.log(num2, num3, num1);
} else {
	console.log(num3, num2, num1);
}
