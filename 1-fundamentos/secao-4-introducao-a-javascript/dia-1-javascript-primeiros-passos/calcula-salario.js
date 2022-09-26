//início do algoritmo
let salarioBruto = 3000;
//let salarioBruto = Number(prompt("Digite seu salário bruto: ")); //entrada do usuário

//salário mínimo em 2022
let salarioMinimo = 1212.0;

//índice - INSS
let indiceA = salarioBruto * 0.08;
let indiceB = salarioBruto * 0.09;
let indiceC = salarioBruto * 0.11;
let indiceD = 570.88;

//alíquota - INSS
let aliquotaINSS = 0;

if (salarioBruto >= salarioMinimo && salarioBruto <= 1556.94) {
	aliquotaINSS = indiceA;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
	aliquotaINSS = indiceB;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
	aliquotaINSS = indiceC;
} else if (salarioBruto > 5189.82) {
	aliquotaINSS = indiceD;
} else {
	alert("Salário menor que o mínimo permitido para cálculo!");
}

//salário-base
let salarioBase = salarioBruto - aliquotaINSS;

//alíquota - IR
let aliquotaIR = 0;
let deducao = 0;

if (salarioBase >= 1903.98 && salarioBase <= 2826.65) {
	aliquotaIR = 0.075;
	deducao = 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
	aliquotaIR = 0.15;
	deducao = 354.8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
	aliquotaIR = 0.225;
	deducao = 636.13;
} else if (salarioBase > 4668.68) {
	aliquotaIR = 0.275;
	deducao = 869.36;
}

//desconto - IR
let descontoIR = salarioBase * aliquotaIR - deducao; //variável de cálculo do desconto de IR

//salário líquido
let salarioLiquido = salarioBase - descontoIR;

console.log();("Salário líquido: " + salarioLiquido); //exibe o resultado para o usuário
