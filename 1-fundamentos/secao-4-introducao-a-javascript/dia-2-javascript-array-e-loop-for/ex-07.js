//variável padrão
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex-07 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let lowerValue = numbers[0];

for (let i = 1; i < numbers.length; i = i + 1) {
	if (numbers[i] < lowerValue) {
		lowerValue = numbers[i];
	}
}
console.log(lowerValue);
