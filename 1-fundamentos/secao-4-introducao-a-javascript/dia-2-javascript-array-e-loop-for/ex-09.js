//ex-09 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let array1 = [];
let array2 = [];
let arrayDiv2 = [];

//modo 1
for (let i = 1; array1.length < 25; i = i + 1) {
	array1.push(i / 2);
}
console.log(array1);

//modo 2
for (let i = 1; array2.length < 25; i = i + 1) {
	array2.push(i);
}

for (let i = 0; i < array2.length; i = i + 1) {
	arrayDiv2.push(array2[i] / 2);
}
console.log(arrayDiv2);
