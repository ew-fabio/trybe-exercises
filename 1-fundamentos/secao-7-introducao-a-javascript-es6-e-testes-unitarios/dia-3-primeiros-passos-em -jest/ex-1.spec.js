// A função sum(a, b) retorna a soma do parâmetro a com o b
//const { describe } = require('yargs');
//const { default: test } = require('node:test');
const sum = require('./ex-1');

describe('Exercício - 1 #VQV', () => {
  test('Verifica a soma dos valores.', () => {
    // Teste se o retorno de sum(4, 5) é 9
    expect(sum(4, 5)).toBe(9);
    // Teste se o retorno de sum(0, 0) é 0
    expect(sum(0, 0)).toBe(0);
  });

  test('Verifica o lançamento de erros.', () => {
    // Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
    expect(() => sum(4, '5')).toThrowError();
    // Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});