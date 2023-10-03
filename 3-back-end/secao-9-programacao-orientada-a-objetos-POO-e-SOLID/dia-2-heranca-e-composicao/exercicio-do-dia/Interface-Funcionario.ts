export default interface Funcionario {
  registro: string;
  salario: number;
  admissao: Date;

  gerarRegistro(): string;
}


// const testeFuncionário: Funcionario = {
//   registro: '13456',
//   salario: 3000,
//   admissao: new Date(2018, 10, 10),

//   gerarRegistro(): string {
//     const randomStr = `FNC${String(Date.now() * (Math.random() + 1)).replace(/\W/g, '')}`;

//     this.registro = randomStr

//     return randomStr
//   },
// }

// console.log(testeFuncionário.gerarRegistro());
