export default class Data {
  private dia: number
  private mes: number
  private ano: number

  constructor(dia: number, mes: number, ano: number) {
    const data = `${ano}-${mes}-${dia}`

    if (new Date(data).getDate() !== dia) {
      this.dia = 1
      this.mes = 1
      this.ano = 1900
    } else {
      this.dia = dia
      this.mes = mes
      this.ano = ano
    }
  }

  getDia(): number {
    return this.dia
  }

  getMes(): number {
    return this.mes
  }

  getAno(): number {
    return this.ano
  }

  setDia(dia: number) {
    this.dia = dia
  }

  setMes(mes: number) {
    this.mes = mes
  }

  setAno(ano: number) {
    this.ano = ano
  }

  getNomeMes() {
    const data = new Date(`${this.ano}-${this.mes}-${this.dia}`);
    console.log(data);
    const mes = new Intl.DateTimeFormat('pt-br', { month: 'long' }).format(data)
    return mes
  }

  isLeapYear() {
    if (this.ano % 4 === 0) {
      if (this.ano % 100 !== 0) {
        return true
      }
      if (this.ano % 400 === 0) {
        return true
      }
    }
    return false
  }

  compare(data: Data): number {
    const dataAtual = `${this.ano}-${this.mes}-${this.dia}`;

    const dataComparada = `${data.ano}-${data.mes}-${data.dia}`;

    new Date(dataAtual) > new Date(dataComparada) ? 1 : -1

    return 0
  }
}