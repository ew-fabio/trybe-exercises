import Character from "./Abstract_Class_Tests/Character";
import LongRangeCharacter from "./Abstract_Class_Tests/LongRangeCharacter";
import MeleeCharacter from "./Abstract_Class_Tests/MeleeCharacter";
import CharacterService from "./Polimorfismo_Interface_Generics/Character_Service";
import LocalDbModel from "./Polimorfismo_Interface_Generics/LocalDbModel";
import MockDbModel from "./Polimorfismo_Interface_Generics/MockedDbModel";

// const Yoshi = new MeleeCharacter('Yoshi', 'Chute do Lagarto')
// const Samus = new LongRangeCharacter('Samus', 'Míssel Nuclear')

// Character.characterPresentation(Yoshi)
// Character.characterPresentation(Samus)


const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);