//variáveis
let valorCusto = Number(prompt("Digite o custo do produto: "));
let valorVenda = Number(prompt("Digite o valor de venda: "));
let custoTotal = valorCusto * 1.2; //incidência de 20% de impostos
let lucroUnitario = valorVenda - custoTotal;

const vendaDeMil = lucroUnitario * 1000;

if (valorCusto < 0 || valorVenda < 0) {
	alert("Erro no lançamento contábil");
} else if (custoTotal < valorVenda) {
	alert("Probabilidade de ganhos!");
	alert(`Ao vendermos 1000 produtos teremos R$${vendaDeMil} e lucro.`);
} else if (custoTotal > valorVenda) {
	alert("Probabilidade de perdas!");
	alert(
		`Ao vendermos 1000 produtos nessas condições, perderemos R$${vendaDeMil}.`
	);
} else {
	alert("Não há lucros ou perdas nesse contexto.");
}
