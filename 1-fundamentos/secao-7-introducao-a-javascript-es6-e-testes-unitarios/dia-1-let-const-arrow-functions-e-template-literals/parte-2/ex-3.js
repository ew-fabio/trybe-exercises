// Crie uma página HTML que possua um contador de cliques. - ok

// Além da estrutura básica do HTML, sua página deve possuir:

// Uma tag que receberá o valor atualizado da quantidade de clicks do botão. - ok

// Um botão com o texto click aqui!, que receberá um event listener do tipo click; - ok

// Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):

// Crie uma variável clickCount que irá acumular o número de clicks do botão; - ok

// Crie a lógica do evento, para que a cada click no botão, a variável seja atualizada com acréscimo de valor 1. Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0. Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.

// Dica: Nesse exercício utilize document. getElementById para retornar o elemento do DOM que deseja.

const botao = document.getElementById('button');
const clique = document.getElementById('click');
let clickCount = 0;

botao.addEventListener('click', () => clique.innerHTML = clickCount += 1);
