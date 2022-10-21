// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

//função sem utilizar o método sort()
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (lista) => {
	for (let j = 1; j < lista.length; j += 1) {
		for (let i = 0; i < j; i += 1) {
			if (lista[j] < lista[i]) {
				aux = lista[i];
				lista[i] = lista[j];
				lista[j] = aux;
			}
		}
	}
	return console.log(
		`Os números ${lista} se encontram ordenados de forma crescente!`
	);
};

sortOddsAndEvens(oddsAndEvens);

//-------------------------------------------------------------------------------------------//
//função utilizando o método sort()
const sortOddsAndEvens2 = (array) => {
	array.sort((a, b) => a - b);
	return console.log(
		`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
	);
};

sortOddsAndEvens2(oddsAndEvens);
