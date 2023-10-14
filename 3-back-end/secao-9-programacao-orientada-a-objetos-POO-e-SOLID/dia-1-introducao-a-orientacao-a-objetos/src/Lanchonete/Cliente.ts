export default class Cliente {
  private nome: string

  constructor(nome: string) {
    this.nome = nome
  }

  setNome(novoNome: string) {
    if (novoNome.length < 3) {
      throw new Error('O nome deve ser composto por no mínimo 3 caracteres.')
    }

    this.nome = novoNome
  }

  getNome(): string {
    return this.nome
  }
}