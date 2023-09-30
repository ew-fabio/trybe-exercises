import Cliente from "./Cliente"
import Item from "./Item"

export default class Pedido {
  private cliente: Cliente
  private itensConsumidos: Item[] = []
  private formaPagamento: string
  private desconto = 0

  constructor(
    cliente: Cliente,
    items: Item[],
    formaPagamento: string,
    desconto: number
    ) {
    this.cliente = cliente
    this.itensConsumidos = items
    this.formaPagamento = formaPagamento
    this.desconto = desconto
  }

  getCliente(): Cliente {
    return this.cliente
  }

  setCliente(valor: Cliente) {
    this.cliente = valor
  }

  getItensConsumidos(): Item[] {
    return this.itensConsumidos
  }

  setItensConsumidos(itens: Item[]) {
    if (itens.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.')
    }

    this.itensConsumidos = itens
  }

  getFormaDePagamento(): string {
    return this.formaPagamento
  }

  setFormaDePagamento(pagamento: string) {
    this.formaPagamento = pagamento
  }

  getDesconto(): number {
    return this.desconto
  }

  setDesconto(desconto: number) {
    if (desconto < 0) {
      throw new Error('O desconto não pode ser um valor negativo.')
    }

    this.desconto = desconto
  }

  totalDoPedido(): number {
    return this.itensConsumidos
      .reduce((acc, curr) => acc + curr.getPreco(), 0)
  }

  totalDoPedidoComDesconto(): number {
    return this.totalDoPedido() * (1 - this.desconto)
  }
}