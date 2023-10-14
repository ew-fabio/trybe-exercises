import Character from "./Character";

export default class LongRangeCharacter extends Character {
  constructor(private name: string, private special: string) {
    super()
  }

  talk(): void {
    console.log(`${this.name} grita: "Heeeeeeead Shot!"`);
  }

  specialMove(): void {
    console.log(`${this.special} lançado de muito longe...Mira certeira, ${this.name}`);
  }
}