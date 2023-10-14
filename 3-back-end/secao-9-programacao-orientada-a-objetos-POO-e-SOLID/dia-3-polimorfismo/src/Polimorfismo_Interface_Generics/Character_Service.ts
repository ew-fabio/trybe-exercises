import { Character } from "./Character_Interface"
import { IModel } from "./IModel"

export default class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: Character) {
    const newCharacter = await this.model.create(character)
    return ({ status: 201, data: newCharacter })
  }

  async update(id: number, character: Character) {
    const updatedCharacter = await this.model.update(id, character)
    return ({ status: 200, data: updatedCharacter })
  }

  async delete(id: number) {
    const deletedCharacter = await this.model.delete(id)
    return ({ status: 204, data: deletedCharacter })
  }

  async getAll() {
    const allCharacter = this.model.getAll()
    return ({ status: 200, data: allCharacter })
  }

  async getById(id: number) {
    const character = await this.model.getById(id)
    return ({ status: 200, data: character })
  }
}