// Crie duas funções JavaScript com as seguintes especificações:

// Não se esqueça de usar template literals

// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:

// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’
// Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.

const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const fraseVetor = frase.split(' ');
  let novaFrase = '';
  for (let i = 0; i < fraseVetor.length; i += 1) {
    if (fraseVetor[i] === 'x') {
      fraseVetor[i] = nome;
    }
  }
  novaFrase = fraseVetor.join(' ');
  return novaFrase;
};

substituaX('Bebeto');


// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

// O nome da função deverá ser minhasSkills; - ok
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro; - ok
// Declare dentro da função uma variável com o nome skills, do tipo const; - ok
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu. - ok
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills. - ok
// Exemplo de retorno:

// Tryber Bebeto aqui!

// Minhas três principais habilidades são:

// JavaScript
// HTML
// CSS

//método 1
const minhasSkills = novaFrase => {
  const skills = ['Javascript', 'HTML', 'CSS'];
  let texto = `
  ${novaFrase}

  Minhas três principais habilidades são:

  ${skills[0]}
  ${skills[1]}
  ${skills[2]}`;

  return texto;
}

console.log(minhasSkills(substituaX('Bebeto')));


//método 2
const minhasSkills2 = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;

  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills2(substituaX('Bebeto')));