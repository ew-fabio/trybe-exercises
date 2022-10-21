// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Com base nessas informações:

// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).

// Dentro da função crie uma variável result, que será o retorno final da função.

// Crie a lógica para retornar o fatorial de N!.

// Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento).

// Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

//método 1
const fatorial = num => {
  let result = num;
  for (let i = 1; i < num; i += 1) {
    result *= (num - i);
  }
  return `Esse é o fatorial resultado da função: ${result}.`;
}
console.log(fatorial(0));


//método 2
const fatorial2 = num => {
  if (num < 0) {
        return -1;
  } else if (num == 0) {
      return 1;
  } else {
      return (num * fatorial2(num - 1));
  }
}
console.log(`Esse é o fatorial resultado da função: ${fatorial2(5)}.`);


//método 3
const fatorial3 = num => num > 1 ? num * fatorial3(num - 1) : 1;
console.log(`Esse é o fatorial resultado da função: ${fatorial3(5)}.`);