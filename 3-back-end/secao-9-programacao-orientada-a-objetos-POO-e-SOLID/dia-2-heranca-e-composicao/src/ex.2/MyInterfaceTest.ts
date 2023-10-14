interface MyInterface {
  myNumber: number
  myFunc(myParam: number): string
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam
    return `A soma dos números é ${sum}.`
  }
}

const objectTest = new MyClass(10)

console.log(objectTest.myNumber);
console.log(objectTest.myFunc(90));

