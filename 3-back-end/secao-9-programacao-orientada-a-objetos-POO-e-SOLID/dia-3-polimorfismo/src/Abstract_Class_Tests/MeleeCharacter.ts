import Character from "./Character";

export default class MeleeCharacter extends Character {
  constructor(private name: string, private special: string) {
    super()
  }

  talk(): void {
    console.log(`O personagem ${this.name} realiza ataques de perto(melle).`);
  }

  specialMove(): void {
    console.log(`Seu poder especial é ${this.special}.`);
  }

  // static characterPresentation(character: Character): void {
  //   character.talk()
  //   character.specialMove()
  // }
}