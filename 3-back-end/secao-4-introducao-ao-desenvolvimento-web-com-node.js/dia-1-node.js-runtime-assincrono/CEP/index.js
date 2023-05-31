// modulo externo
const axios = require('axios');
const readline = require('readline-sync');

// modulo local
const format = require('./cepFormat');


const cep = format(readline.question('Entre com seu CEP: '));

const cepSearch = async (param) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${param}/json/`);
    console.log(response.data);
  }
  catch (error) {
    console.error(error);
  }
};

cepSearch(cep);
