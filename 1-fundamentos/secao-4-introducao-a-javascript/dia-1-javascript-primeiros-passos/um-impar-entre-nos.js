//variáveis
const primeiroNumero = Number(prompt("Digite o primeiro número: "));
const segundoNumero = Number(prompt("Digite o segundo número: "));
const terceiroNumero = Number(prompt("Digite o terceiro número: "));

let resultado = false;

//condição
if (primeiroNumero % 2 != 0 ||	segundoNumero % 2 != 0 ||	terceiroNumero % 2 != 0)
   {resultado = true;}
alert(resultado);
