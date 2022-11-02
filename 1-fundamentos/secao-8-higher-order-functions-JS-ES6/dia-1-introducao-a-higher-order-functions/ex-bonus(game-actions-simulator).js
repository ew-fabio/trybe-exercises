const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

dano:
mana: (mage.mana < 15) ? `Não possui mana suficiente` : mage.mana -= 15,


//const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => Math.floor(Math.random() * (dragon.strength - 15 + 1) ) + 15; // o valor 15 é uma constante

const warriorAttack = (warrior) => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) ) + warrior.strength;

const mageAttack = (mage) => {
  const mageDamage = (Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) ) + mage.intelligence);
  return {
    dano: mage.damage,
    mana: 15,
  };
};

console.log(mageAttack(mage));

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const damage = warriorAttack(warrior);
    dragon.healthPoints -= damage;
    warrior.damage = damage;
    },

  mageTurn: (mageDmg) => {
    const danoNoDragão = dragonHealth - mageDamage;
    const danoDoMago = mageDmg;
    const manaDoMago = mageMana;
  },

  dragonTurn: (dragonDmg) => {
    const danoNoGuerreiro = warriorHealth - dragonDmg;
    const danoNoMago = mageHealth - dragonDmg;
    dragon.damage = dragonDmg;
  },

  turnoCompleto: () => {
    return console.table(battleMembers);
  }
};

console.table(gameActions.warriorTurn(warriorAttack));

