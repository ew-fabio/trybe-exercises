export class Pessoa {
  protected MINIMUM_NAME_LENGTH = 3
  protected MAXIMUM_AGE = 120

  constructor(
    private name: string,
    private birthDate: Date
    ) {
    this.validatePerson()
  }

  public getName(): string {
    return this.name
  }

  public setName(name: string) {
    this.validateName(name)
    this.name = name
  }

  public getBirthDate(): Date {
    return this.birthDate
  }

  public setBirthDate(date: Date) {
    this.birthDate = date
  }

  static getAge(date: Date): number {
    const yearInMiliSeconds = 31536000000
    const birthDateMiliSeconds = +date.getTime()
    const actualDateMiliSeconds = Date.now()
    return ~~((actualDateMiliSeconds - birthDateMiliSeconds) / yearInMiliSeconds)
  }

  private validateName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve ter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`)
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data não pode ser no futuro.')
    }

    if (Pessoa.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa não pode ter mais do que ${this.MAXIMUM_AGE} anos.`)
    }
  }

  private validatePerson(): void {
    this.validateName(this.name)
    this.validateBirthDate(this.birthDate)
  }
}

// const user1 = new Person('Tucs', new Date('1982/01/09'))

// console.log(user1.getBirthDate().getFullYear());