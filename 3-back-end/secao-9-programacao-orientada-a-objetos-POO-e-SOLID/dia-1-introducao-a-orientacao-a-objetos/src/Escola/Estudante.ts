export default class Estudante {
  private matricula: number
  private nome: string
  private provas: number[]
  private trabalhos: number[]
  private totalNotas!: number
  private mediaNotas!: number

  constructor(matricula: number, nome: string) {
    this.matricula = matricula
    this.nome = nome
    this.provas = []
    this.trabalhos = []
  }

  atualizaMatricula(matricula: number) {
    if (!matricula) return
    this.matricula = matricula
  }

  getMatricula (): number {
    return this.matricula
  }

  atualizaNome(novoNome: string) {
    if (!novoNome || novoNome.length < 3) {
      throw new Error('O nome precisa ter ao menos 3 caracteres.')
    }
    this.nome = novoNome
  }

  getNome(): string {
    return this.nome
  }

  notasDasProvas(notas: number[]) {
    if (notas.length !== 4) {
      throw new Error('Devem ser lançadas apenas 4 notas para o aluno.')
    }
    this.provas = notas
  }

  getNotaDasProvas() {
    return this.provas
  }

  notasDosTrabalhos(notas: number[]) {
    if (notas.length !== 2) {
      throw new Error('Devem ser lançadas apenas 2 notas para o aluno.')
    }
    this.trabalhos = notas
  }

  getNotasDosTrabalhos() {
    return this.trabalhos
  }

  setTotalNotas() {
    if (this.provas.length !== 4) {
      throw new Error('A quantidade de notas de provas está incorreta.')
    }

    if (this.trabalhos.length !== 2) {
      throw new Error('A quantidade de notas de trabalhos está incorreta.')
    }

    const somatoriaProvas = this.provas.reduce((acc, notaAtual) => acc + notaAtual)
    const somatoriaTrabalhos = this.trabalhos.reduce((acc, notaAtual) => acc + notaAtual)
    this.totalNotas = somatoriaProvas + somatoriaTrabalhos
  }

  getTotalNotas() {
    this.setTotalNotas()
    return this.totalNotas
  }

  setMediaNotas() {
    this.setTotalNotas()
    const quantidadeDeNotas = this.provas.length + this.trabalhos.length
    this.mediaNotas = this.totalNotas / quantidadeDeNotas
  }

  getMediaNotas() {
    this.setMediaNotas()
    return this.mediaNotas
  }
}