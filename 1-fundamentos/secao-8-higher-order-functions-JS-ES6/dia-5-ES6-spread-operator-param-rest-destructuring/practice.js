// spread operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'laranja', 'banana', 'mamão', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'granola', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  const items = [...fruit, ...additional];
  return items;
};

console.log(fruitSalad(specialFruit, additionalItens));


// -------------------------------------------------------------- //
// object destructuring

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

const { description: { specieName }, homeWorld: { population } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
console.log(`${specieName}, ${population}`);


// desestruturação e spread
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const { workDays, weekend } = daysOfWeek;
console.log(workDays, weekend);

const daysOfWeekFull = [...workDays, ...weekend];
const daysOfWeekFull2 = [...weekend, ...workDays];

console.log(daysOfWeekFull, daysOfWeekFull2);


// desestruturação como parâmetro da função
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


// desestruturação e spread
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const fullData = { ...user, ...jobInfos};

const { name, age, nationality, profession, squad, squadInitials } = fullData;

const apresentation = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`


console.log(fullData);
console.log(apresentation);


// -------------------------------------------------------------- //
// array destructuring
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada


// teste - 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá

    // Produza o mesmo resultado acima, porém utilizando array destructuring
const [ saudacao, funcao ] = saudacoes;
funcao(saudacao);


// teste - 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

    // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água


// teste - 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

    // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares;

    console.log(numerosPares); // [6, 8, 10, 12];


// -------------------------------------------------------------- //
// default destructuring
// teste - 1
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian'} = person; // desestruturação de chave não existente e atribuição de valor padrão
console.log(nationality);

// teste - 2
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// teste - 3
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


// -------------------------------------------------------------- //
// object property shorthand
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));


// -------------------------------------------------------------- //
// default parameters
const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting('cacá'); // // Welcome pessoa usuária!


// teste - 1
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));


// -------------------------------------------------------------- //
// rest param
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
