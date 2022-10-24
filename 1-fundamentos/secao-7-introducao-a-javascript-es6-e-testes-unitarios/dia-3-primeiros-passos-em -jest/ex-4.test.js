// Para as funções encode e decode, crie os seguintes testes em Jest:
const {encode, decode} = require('./ex-4');

describe('Exercício - 4', () => {
  it('Teste se a funções encode/decode são definadas', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined()
  });

  // Teste se encode e decode são funções;
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  // Teste se as demais letras/números não são convertidos para cada caso;
  it('Teste se as vogais são convertidas em números', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  // Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
  // Teste se as demais letras/números não são convertidos para cada caso;
  it('Teste se os números são convertidos em vogal', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  it('Compara o tamanho do parâmetro com o resultado', () => {
    expect(encode('encode').length).toEqual(6);
    expect(decode('112233').length).toEqual(6);
  });
});
