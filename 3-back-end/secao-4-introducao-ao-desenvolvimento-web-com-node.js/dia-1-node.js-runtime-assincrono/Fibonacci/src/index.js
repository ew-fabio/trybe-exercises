const readline = require('readline-sync');
const fibonacci = require('./utils/fibonacci');

function main() {
  try {
    const element = readline.questionInt('Quantos elemento da sequência de Fibonacci você deseja visualizar?\n');

    if (element <= 0) throw new Error('Entre com um valor inteiro acima de zero!');

    const result = fibonacci(element);

    return console.log(result);
  }
  catch (error) {
    console.error(error.message);
  }
};

main();