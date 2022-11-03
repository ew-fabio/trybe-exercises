const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
    faction: "Rebels",

  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
    faction: "Empire",
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
    faction: "Empire",
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
    faction: "Rebels",
  }
];

const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const mostExpPilot = pilots.reduce((oldest/*acc*/, pilot/*curr*/) =>
  (oldest.years || 0) > pilot.years ? oldest : pilot, {}/*initial value(empty object)*/);

console.log(`Piloto mais experiente:`, mostExpPilot);

// -------------------------------------------------------------------- //

const rebels = pilots.filter((pilot) => pilot.faction === 'Rebels');

console.log(`Facção Rebeldes: `, rebels);

// -------------------------------------------------------------------- //

const rebelsAndEmpire = pilots.reduce((valorInicial, valorAtual) => {
  const verificacao = valorAtual.faction === 'Empire' ? 'Empire' : 'Rebels';
  valorInicial[verificacao].push(valorAtual);
  //console.log(valorInicial);
  return valorInicial;
}, { Empire: [], Rebels: []});

console.log(rebelsAndEmpire);

// -------------------------------------------------------------------- //

const isJedi = personnel.reduce((initialObj, element) => {
  const verification = element.isForceUser === true;
  if (verification) {
    initialObj.JEDI.push(element);
  } else {
    initialObj.notJEDI.push(element);
  }
  return initialObj;
}, { JEDI: [], notJEDI: [] });

console.log(isJedi);

// -------------------------------------------------------------------- //

const personnelPoints = personnel.reduce((acc, curr) => {
  curr['total'] = curr.pilotingScore + curr.shootingScore;
  acc.push(curr);
  return acc;
}, []);

console.log(personnelPoints);

// -------------------------------------------------------------------- //

const totalPoints = personnelPoints.reduce((acc, curr) => {
  acc = acc + curr.total;
  return acc;
}, 0);

const totalPoints2 = personnel.map((element) => {
  return element['totalMAP'] = element.pilotingScore + element.shootingScore;
});


console.log(totalPoints);
console.log(totalPoints2, personnelPoints);

