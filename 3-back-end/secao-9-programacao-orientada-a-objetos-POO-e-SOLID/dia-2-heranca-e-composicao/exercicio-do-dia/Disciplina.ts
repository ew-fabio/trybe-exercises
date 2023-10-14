export default class Disciplina {
  protected TAMANHO_MINIMO_NOME = 3

  constructor(private nome: string) {
    this.validaNome(nome)
  }

  validaNome(nome: string) {
    if (nome.length < this.TAMANHO_MINIMO_NOME) {
      throw new Error(`O nome da disciplina deve conter ao menos ${this.TAMANHO_MINIMO_NOME} caracteres.`)
    }
  }

  getNome(): string {
    return this.nome
  }

  setNome(nome: string): void {
    this.validaNome(nome)
    this.nome = nome
  }
}

// const disciplina1 = new Disciplina('Matemática')
// console.log(disciplina1);

// const disciplina2 = new Disciplina('História')
// console.log(disciplina2);

// const disciplina3 = new Disciplina('Filosofia')
// console.log(disciplina3);
