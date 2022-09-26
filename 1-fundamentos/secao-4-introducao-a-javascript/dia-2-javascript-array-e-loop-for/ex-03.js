//variável padrão
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex-03 - Calcule e imprima a média aritmética dos valores contidos no array;
let numbersSum = 0;
let numbersAverage = 0;

for (let i = 0; i < numbers.length; i = i + 1) {
	numbersSum = numbersSum + numbers[i];
}

numbersAverage = numbersSum / numbers.length;

console.log(numbersAverage);
