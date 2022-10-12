//variável padrão
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex-02 - Some todos os valores contidos no array e imprima o resultado;
let numbersSum = 0;

for (let i = 0; i < numbers.length; i = i + 1) {
	numbersSum = numbersSum + numbers[i];
}

console.log(numbersSum);
