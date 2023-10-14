import { Pessoa } from "./Pessoa"

export default class Estudante extends Pessoa {
  protected MATRICULA_TAMANHO = 16
  protected QUANTIDADE_NOTAS_PROVAS = 4
  protected QUANTIDADE_NOTAS_TRABALHOS = 2

  private provas: number[]
  private trabalhos: number[]
  private totalNotas!: number
  private mediaNotas!: number

  constructor(private matricula: string, nome: string, nascimento: Date) {
    super(nome, nascimento)
    this.validaMatricula(matricula)
    this.provas = []
    this.trabalhos = []
  }

  validaMatricula(matricula: string): void {
    if (matricula.length < this.MATRICULA_TAMANHO) {
      throw new Error('A matrícula não atende aos parâmetros de tamanho.')
    }
  }

  validaQuantidadeDeNotasProvas(notas: number[]) {
    if (notas.length !== this.QUANTIDADE_NOTAS_PROVAS) {
      throw new Error(`Devem ser lançadas ${this.QUANTIDADE_NOTAS_PROVAS} notas de provas para o aluno.`)
    }
  }

  validaQuantidadeDeNotasTrabalhos(notas: number[]) {
    if (notas.length !== this.QUANTIDADE_NOTAS_TRABALHOS) {
      throw new Error(`Devem ser lançadas ${this.QUANTIDADE_NOTAS_TRABALHOS} notas de trabalhos para o aluno.`)
    }
  }

  atualizaMatricula(matricula: string) {
    this.validaMatricula(matricula)
    this.matricula = matricula
  }

  getMatricula (): string {
    return this.matricula
  }

  setNotasDasProvas(notas: number[]) {
    this.validaQuantidadeDeNotasProvas(notas)
    this.provas = notas
  }

  getNotaDasProvas(): number[] {
    return this.provas
  }

  setNotasDosTrabalhos(notas: number[]) {
    this.validaQuantidadeDeNotasTrabalhos(notas)
    this.trabalhos = notas
  }

  getNotasDosTrabalhos(): number[] {
    return this.trabalhos
  }

  private setTotalNotas() {
    this.validaQuantidadeDeNotasProvas(this.provas)
    this.validaQuantidadeDeNotasTrabalhos(this.trabalhos)

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

const estudante1 = new Estudante('123456789-123456789', 'João', new Date(1999,10,2))

console.log(estudante1)

estudante1.setNotasDasProvas([10, 10, 8, 5])
estudante1.setNotasDosTrabalhos([10, 10])

console.log(estudante1.getMediaNotas());

