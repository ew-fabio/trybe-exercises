// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
//const { describe } = require('yargs');
//const { default: test } = require('node:test');
const myFizzBuzz = require('./ex-3');

describe('Exercício - 3', () => {
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toBe(myFizzBuzz(9));
  });

  // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(7).toBe(myFizzBuzz(7));
  });

  // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('15')).toBe(false);
  });
});





