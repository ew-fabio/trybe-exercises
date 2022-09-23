let salarioBruto = Number(prompt('Digite seu salário bruto: ')); //entrada do usuário
let salarioBase = salarioBruto - aliquotaINSS; //variável de cálculo do salário-base
let descontoIR = (salarioBase * aliquotaIR) - deducao; //variável de cálculo do desconto de IR

let salarioLiquido = salarioBase - descontoIR; //reultado final: salário-líquido

//variáveis
let aliquotaINSS = 0;
let aliquotaIR = 0;
let deducao = 0;
let salarioMinimo = 1212.00; //salário mínimo em 2022

//índice - INSS
let indiceA = salarioBruto - (salarioBruto * 0.08);
let indiceB = salarioBruto - (salarioBruto * 0.09);
let indiceC = salarioBruto - (salarioBruto * 0.11);
let indiceD = salarioBruto - 570.88;

//alíquota - INSS
if (salarioBruto >= salarioMinimo || salarioBruto <= 1556.94) {
  aliquotaINSS = indiceA;
} else if (salarioBruto >= 1556.95 || salarioBruto <= 2594.92) {
  aliquotaINSS = indiceB;
} else if (salarioBruto >= 2594.93 || salarioBruto <= 5189.82) {
  aliquotaINSS = indiceC;
} else if (salarioBruto > 5189.82) {
  aliquotaINSS = indiceD;
} else {
  alert('Salário menor que o mínimo permitido para cálculo!')
}

//