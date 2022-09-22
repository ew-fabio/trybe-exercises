//variáveis do exercício
let pecaDeXadrez = String(prompt("Digite a peça de xadrez: ").toLowerCase());

//condição de verificação
switch (pecaDeXadrez) {
	case "rei":
		alert("O Rei movimenta uma casa para qualquer lado.");
		break;
	case "rainha":
		alert(
			"A Rainha movimenta para qualquer lado, em linha reta, quantas casas possíves."
		);
		break;
	case "torre":
		alert(
			"A Torre movimenta na horizontal ou vertical, quantas casas possíveis."
		);
		break;
	case "bispo":
		alert("O Bispo movimenta em diagonal quantas casas possíveis.");
		break;
	case "cavalo":
		alert(
			'O Cavalo movimenta em "L"(2x1). Pode saltar por cima de outras peças.'
		);
		break;
	case "peão":
		alert("O Peão movimenta uma casa para frente.");
		break;
	default:
		alert("Entre com uma peça válida!");
		break;
}
