import Disciplina from "./Disciplina";
import Funcionario from "./Interface-Funcionario";
import { Pessoa } from "./Pessoa";

export default class Professor extends Pessoa implements Funcionario {
  registro: string;
  salario: number
  admissao: Date
  private disciplina: Disciplina

	constructor(
		nome: string,
		nascimento: Date,
		salario: number,
		disciplina: string
	) {
		super(nome, nascimento);
    this.registro = this.gerarRegistro()
    this.validaSalario(salario)
    this.salario = salario
    this.disciplina = new Disciplina(disciplina)
    this.admissao = new Date()
	}

  validaSalario(salario: number) {
    if (salario < 0) {
      throw new Error('O salário não pode ser negativo.')
    }
  }

  validaRegistro(registro: string) {
    if (registro.length < 16) {
      throw new Error('O registro deve possuir ao menos 16 caracteres.')
    }
  }

  validaAdmissao(data: Date): void {
    if (data.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser no futuro.')
    }
  }

  getSalario(): number {
    return this.salario
  }

  setSalario(valor: number) {
    this.validaSalario(valor)
    this.salario = valor
  }

  getDisciplina(): string {
    return this.disciplina.getNome()
  }

  setDisciplina(disciplina: string): void {
    this.disciplina.setNome(disciplina)
  }

  getRegistro(): string {
    return this.registro
  }

  gerarRegistro(): string {
    const novoRegistro = `FNC${String(Date.now() * (Math.random() + 1)).replace(/\W/g, '')}`;
    this.validaRegistro(novoRegistro)
    return novoRegistro
  }

  setRegistro(): void {
    const novoRegistro = this.gerarRegistro()
    this.validaRegistro(novoRegistro)
    this.registro = novoRegistro
  }

  getAdmissao(): Date {
    return this.admissao
  }

  setAdmissao(data: Date): void {
    this.validaAdmissao(data)
    this.admissao = data
  }
}


const novoProfessor1 = new Professor('Gigi', new Date(2007, 6, 29), 5000, 'Arte')

console.log(novoProfessor1);
