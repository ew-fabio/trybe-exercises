const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


const containsA = (list) => list
  .map((nome) => nome.toLowerCase().split(''))
  .reduce((acc, curr) => acc.concat(curr))
  .filter((vowel) => vowel === 'a').length;


console.log(containsA(names));