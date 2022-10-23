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
  return console.log(objeto);
};

alteraLesson2(lesson2, 'turno', 'noite');

//-----------------------------------------------------------//
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const chaves = objeto => console.log(Object.keys(objeto));

// chaves(lesson1);
// chaves(lesson2);
// chaves(lesson3);

//-----------------------------------------------------------//
// Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObj = objeto => console.log(Object.keys(objeto).length);

// tamanhoObj(lesson1);
// tamanhoObj(lesson2);
// tamanhoObj(lesson3);


//-----------------------------------------------------------//
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valores = objeto => console.log(Object.values(objeto));

// valores(lesson1);
// valores(lesson2);
// valores(lesson3);


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

console.log(allLessons2);


//-----------------------------------------------------------//
// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
  // método 1
  const totalEstudantes = objeto => Object.values(objeto.lesson1)[1] + Object.values(objeto.lesson2)[1] + Object.values(objeto.lesson3)[1];

  console.log(totalEstudantes(allLessons));

  // método 2
  const totalEstudantes2 = objeto => {
    let soma = 0;
    const lista = Object.keys(objeto);

    for (let i in lista) {
      soma += objeto[lista[i]].numeroEstudantes;
    }
    return console.log(soma);
  }

  totalEstudantes2(allLessons2);

//-----------------------------------------------------------//
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
  // Usando o objeto criado (allLessons)
  const valorChave = (chave, posicao) => console.log(Object.values(allLessons[chave])[posicao]);

  valorChave('lesson2', 3);

  // Usando os objetos individuais
  const valorChave2 = (objeto, posicao) => console.log(Object.values(objeto)[posicao]);

  valorChave2(lesson3, 2);


//-----------------------------------------------------------//
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verificaEntradas = (objeto, chave, valor) => {
  const entradas = Object.entries(objeto);
  const parametro = [];
  parametro.push(chave);
  parametro.push(valor);

  for (let i = 0; i < entradas.length; i += 1) {
    if (JSON.stringify(entradas[i]) === JSON.stringify(parametro)) {
      return console.log('Par chave/valor existente!');
    }
  }
  return console.log('Valores não encontrados...');
};

verificaEntradas(lesson1, 'turno', 'manhã');
