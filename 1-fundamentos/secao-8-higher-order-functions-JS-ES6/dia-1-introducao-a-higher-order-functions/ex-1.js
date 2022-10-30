// Nova pessoa contratada
// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (newEmployee) => {
  const employees = {
    id1: newEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employee = (fullName) => {
  const userEmail = fullName.replace(' ', '_').toLowerCase();
  return {Nome: `${fullName}`, Email: `${userEmail}@trybe.com`};
};

console.log(newEmployees(employee));

// rotina:
// 1- ao ser chamada, a HOF newEmployees recebe como parâmetro a função callback employee;
// 2- a callback employee inicializa em cada chave do objeto newEmployees, através da string dentro dos parenteses (nome_completo);
// 3- a callback realiza o processamento do retorno (criação do objeto com as chaves nome e email e seus respectivos valores (a chave email necessita de tratamento para adequar ao problema));
// 4- a callback retorna os valores para a HOF;
// 5- a HOF retorna o objeto completo.