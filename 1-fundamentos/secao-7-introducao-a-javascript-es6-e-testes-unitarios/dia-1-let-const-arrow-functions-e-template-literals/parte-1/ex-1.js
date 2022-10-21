// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

const testingScope = (escopo) => {
	if (escopo) {
		let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
		ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
		return console.log(ifScope);
	}
	const elseScope = "Não devo ser utilizada fora do meu escopo (else)";
	return console.log(elseScope);
};

testingScope(false);
