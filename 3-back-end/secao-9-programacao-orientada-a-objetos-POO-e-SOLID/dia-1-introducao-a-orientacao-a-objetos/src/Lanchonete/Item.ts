export default class Item {
  private nomeDoItem: string
  private preco: number

  constructor(nome: string, preco: number) {
    this.nomeDoItem = nome
    this.preco = preco
  }

  setNomeDoItem(novoNomeDoItem: string) {
    if (novoNomeDoItem.length < 3) {
      throw new Error('O nome do item deve ser composto por no mínimo 3 caracteres.')
    }

    this.nomeDoItem = novoNomeDoItem
  }

  getNomeDoItem(): string {
    return this.nomeDoItem
  }

  setPreco(valor: number) {
    if (valor < 0) {
      throw new Error('O valor deve ser positivo.')
    }

    this.preco = valor
  }

  getPreco(): number {
    return this.preco
  }
}