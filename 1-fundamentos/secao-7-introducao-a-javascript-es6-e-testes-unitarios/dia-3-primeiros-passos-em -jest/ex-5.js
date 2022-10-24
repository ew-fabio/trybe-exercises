const lista = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];

const techList = (lista, nome) => {
  try {
  if (lista.length === 0) {
    throw new Error('Vazio!');
  }
  } catch (e) {
    return e.message;
  }
  const listaObjetos = [];
  lista.sort();
    for (let i = 0; i < lista.length; i += 1) {
      listaObjetos.push({tech: lista[i], name: nome});
    }
  return listaObjetos;
};

//console.log(techList(lista, 'Lucas'));

module.exports = techList;