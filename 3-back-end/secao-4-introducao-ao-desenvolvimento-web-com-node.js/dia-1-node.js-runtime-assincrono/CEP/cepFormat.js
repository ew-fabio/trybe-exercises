const format = (cep) => {
  const verify = { 1: new RegExp(/^[0-9]{5}-[0-9]{3}$/), 2: new RegExp(/^[0-9]{8}$/)};

  const validCEP = verify[1].test(cep) || verify[2].test(cep);

  if(!validCEP) throw new Error('Formato de CEP inválido!')

  return cep.replace('-', '');
};

module.exports = format;

