import Superclass from "./Superclass";

class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false
  }
}


function myFunc(objectClass: Superclass) {
  objectClass.sayHello()

  if (objectClass.isSuper) {
    console.log('Super!');
  } else {
    console.log('Sub!');
  }
}

const superClass = new Superclass()
const subClass = new Subclass()

myFunc(superClass);
myFunc(subClass);

// ---------------------------------------------------------- //
// class Subclass extends Superclass {
//   public sayHello2 () {
//     this.sayHello()
//   }
// }


// function myFunc(objectClass: Subclass) {
//   objectClass.sayHello2()
// }


// const superClass = new Superclass()
// const subClass = new Subclass()

// // myFunc(superClass);
// myFunc(subClass);
// ---------------------------------------------------------- //