const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// resolução com iteração com forEach()
const authorUnique = (library) => {
  let verification = true;
  library.forEach((book) => {
    library.forEach((bookCompared) => {
      if (bookCompared.author.birthYear === book.author.birthYear && bookCompared.author.name !== book.author.name) {
        console.log(`Existem autores com mesmo ano de aniversário!`, book.author.name, bookCompared.author.name);
        verification = false;
      }
    });
  });
  return verification;
};

console.log(authorUnique(books));


// resolução com every() e some()
const authorUnique2 = (library) => {
  return library.every((book) => {
    return !library.some((bookCompared) => {
      return (bookCompared.author.birthYear === book.author.birthYear && bookCompared.author.name !== book.author.name)
      });
  });
};

console.log(authorUnique2(books));
