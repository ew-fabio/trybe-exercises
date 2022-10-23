const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//-----------------------------------------------------------//
// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const alteraLesson2 = (objeto, chave, valor) => {
  objeto[chave] = valor;
  //return console.log(objeto);
};

alteraLesson2(lesson2, 'turno', 'noite');


//-----------------------------------------------------------//
// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
  // método 1
const allLessons = {lesson1: {}, lesson2: {}, lesson3: {}};
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

console.log(allLessons);

  //método 2
const allLessons2 = Object.assign({}, {lesson1, lesson2, lesson3});

//console.log(allLessons2);



//-----------------------------------------------------------//
// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
const matematiqueiros = objeto => {
  let total = 0;
  const lista = Object.keys(objeto);

  for (let i in lista) {
    const materia = objeto[lista[i]].materia;
    if (materia === 'Matemática') {
      total += objeto[lista[i]].numeroEstudantes;
    }
  }
  return console.log(`Assistiram as aulas de matemática ${total} alunos.`);
}

//matematiqueiros(allLessons);


//-----------------------------------------------------------//
// Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
const informacoes = (objeto, nome) => {
  const licoes = [];
  let alunos = 0;

  const listaValores = Object.values(objeto);

  for (let i in listaValores) {
    if (listaValores[i].professor === nome) {
      licoes.push(listaValores[i].materia);
      alunos += listaValores[i].numeroEstudantes;
    }
  }
  return {aulas: licoes, estudantes: alunos};
}

const geraRelatorio = (objeto, nome) => {
  let relatorio = {};
  relatorio.professor = nome;

  return relatorio = Object.assign(relatorio, informacoes(objeto, nome));
}

console.log(geraRelatorio(allLessons, 'Carlos'));
