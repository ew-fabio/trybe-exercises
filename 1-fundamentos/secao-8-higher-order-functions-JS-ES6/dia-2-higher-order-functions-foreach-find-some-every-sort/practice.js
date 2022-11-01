// .forEach()
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (emailList) => emailList.forEach((userEmail) =>
  console.log(`O email ${userEmail} esta cadastrado em nosso banco de dados!`));

showEmailList(emailListInData);

// -------------------------------------------------------------- //
// .find()
// 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5());


// 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => {
    return name.length === 5;
  });
};

console.log(findNameWithFiveLetters());


// 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((music) => {
    return music.id === id;
  });
};

const findMusic2 = (id) => musicas.find((music) => music.id === id); // refatorada

console.log(findMusic('31031686'), findMusic2('31031687'));

// -------------------------------------------------------------- //
// .some()
const namesSome = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((arrName) => {
    return arrName === name;
  });
};

const hasName2 = (arr, name) => arr.some((arrName) => arrName === name); // refatorada

console.log(hasName(namesSome, 'Ana'));
console.log(hasName(namesSome, 'HAna'));

// -------------------------------------------------------------- //
// .every()
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((person) => {
    return person.age >= minimumAge;
  });
};

const verifyAges2 = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);

console.log(verifyAges(people, 18));
console.log(verifyAges2(people, 16));

// -------------------------------------------------------------- //
// .sort()
const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// ordem crescente
people2.sort((a, b) => {
  if (a.age > b.age) {return 1};
  if (a.age < b.age) {return -1};
  if (a.age === b.age) {return 0};
});

console.log(people2);


// ordem decrescente
people2.sort((a, b) => b - a ? 1 : -1);

console.log(people2);
