const wakeUp = () => console.log(`Acordando!!`);

const breakfast = () => console.log(`Bora tomar café!!`);

const sleep = () => console.log(`Partiu dormir!!`);

const doingThings = (action) => action();

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!