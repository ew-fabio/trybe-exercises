// variável global
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


// ----------------------------------------------------------------- //
// soma dos itens do array de números
const sum = (list) => list.reduce((acc, curr) => acc + curr);

console.log(`A soma dos números é: `, sum(numbers));


// ----------------------------------------------------------------- //
// encontrar maior número da lista
const bigger = (list) => list.reduce((acc, curr) => acc > curr ? acc : curr);

console.log(`O maior número do vetor é: `, bigger(numbers));


// ----------------------------------------------------------------- //
// somar todos os números pares da lista
const evenSum = (list) => list.reduce((acc, curr) => (curr % 2 === 0 ? acc += curr : acc), 0);

console.log(`Soma dos números pares: `, evenSum(numbers));


// ----------------------------------------------------------------- //
// variável global
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 18,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 18,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 18,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];


// ----------------------------------------------------------------- //
// exibir um relatório com o nome do estudante e a matéria que possui a melhor nota
const relatorio = (lista) => {
  return lista
    .map((estudante) => ({
      nome: estudante.nome,
      matéria: estudante.materias
        .reduce((acc, curr) => acc.nota > curr.nota ? acc : curr).name
    })
  );
};

console.log(relatorio(estudantes));


// ----------------------------------------------------------------- //
// separar os estudante em maiores e menores de idade
const separaIdades = (lista) => {
  return lista.reduce((acc, curr) => {
    curr.idade >=18 ? acc['adultos'].push(curr) : acc['adolescentes'].push(curr);
    return acc;
  }, { adultos: [], adolescentes: [] })
};

console.log(separaIdades(estudantes));