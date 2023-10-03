export default class Superclass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true
  }

  sayHello(): void {
    console.log('Olá mundo!');
  }
}

// ---------------------------------------------------------- //
// export default class Superclass {
//   public isSuper: boolean

//   constructor() {
//     this.isSuper = true
//   }

//   protected sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }
// ---------------------------------------------------------- //
