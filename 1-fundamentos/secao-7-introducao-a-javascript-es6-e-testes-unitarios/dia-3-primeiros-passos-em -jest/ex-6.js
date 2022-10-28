const hydrate = frase => {
  const listaCaract = frase.split('');
  const lista = [];
  let total = 0;

  for (let i = 0; i < listaCaract.length; i += 1) {
    aux = Number(listaCaract[i]);
    if (typeof aux === 'number' && aux > 0) {
      total += aux;
    }
  }
  if (total === 1) {
    return `1 copo de água`;
  } else if (total > 1) {
    return `${total} copos de água`
  }

  return total;
};

module.exports = hydrate;