interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log('Logger 1: ', param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('Logger 2: ', param);
  }
}

interface Database {
  logger: Logger
  save(key: string, value: string): void
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}.`)
  }
}

const logger1 = new ConsoleLogger()
const logger2 = new ConsoleLogger2()

const exampleDatabase1 = new ExampleDatabase(logger1)
const exampleDatabase2 = new ExampleDatabase(logger2)
const exampleDatabase3 = new ExampleDatabase()

exampleDatabase1.save('log1', 'primeiro teste')
exampleDatabase2.save('log2', 'segundo teste')
exampleDatabase3.save('log3', 'terceiro teste')