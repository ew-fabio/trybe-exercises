import Data from "./Datas/Data";
import Estudante from "./Escola/Estudante";
import Cliente from "./Lanchonete/Cliente";
import Item from "./Lanchonete/Item";
import Pedido from "./Lanchonete/Pedido";

console.log('Hello, exercises...');
// _________________________________________________________
// const Caca = new Estudante(1, 'Carlana')

// Caca.atualizaMatricula(10)
// console.log(Caca.getMatricula());

// Caca.atualizaNome('Carlana')
// console.log(Caca.getNome());

// Caca.notasDasProvas([10, 10, 10, 10])
// console.log(Caca.getNotaDasProvas());

// Caca.notasDosTrabalhos([10, 10])
// console.log(Caca.getNotasDosTrabalhos());

// console.log(Caca.getMediaNotas())
// _________________________________________________________

// const cliente = new Cliente('Tucs')

// const hamburguer = new Item('X-Bacon', 25.00)
// const refrigerante = new Item('Coca-Zero', 6.00)
// const batata = new Item('Porção de batata frita', 15.00)

// const pedido = new Pedido(cliente, [hamburguer, refrigerante, batata], 'cartão de crédito', 0.20)

// console.log(pedido.totalDoPedido());
// console.log(pedido.totalDoPedidoComDesconto());
// _________________________________________________________

const testeData = new Data(29, 9, 2020)
console.log((testeData.getNomeMes()));
console.log(testeData.isLeapYear());

