//variável padrão
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex-05 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numberHigher = [];

for (let i = 0; i < numbers.length; i = i + 1) {
	if (numbers[i] > numberHigher) {
		numberHigher = numbers[i];
	}
}
console.log(numberHigher);
