// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
// Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().

//método 1
const maiorPalavra = frase => {
  const lista = frase.split(' ');
  let contagem = 0;
  let resultado = '';
  for (let index of lista) {
    if (index.length > contagem) {
      contagem = index.length;
      resultado = index;
    }
  }
  return resultado;
}

console.log(maiorPalavra('Crie uma função que receba uma frase como parâmetro.'));


//método 2
const maiorPalavra2 = frase => {
  const lista = frase.split(' ');
  let resultado = '';
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i].length > resultado.length) {
      resultado = lista[i];
    }
  }
  return resultado;
}

console.log(maiorPalavra2('Crie uma função que receba uma frase como parâmetro.'));


//método 3
const maiorPalavra3 = frase => frase.split(' ').sort((a, b) => b.length - a.length)[0]; //ordena com o método sort e captura o primeiro elemento da lista

console.log(maiorPalavra3('Crie uma função que receba uma frase como parâmetro.'));

