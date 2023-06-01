const fs = require('fs').promises;

const update = async () => {
  const actualList = JSON.parse(await fs.readFile('../../data/simpsonsFamily.json', 'utf-8'));
  actualList.pop();

  const fullList = JSON.parse(await fs.readFile('../../data/simpsons.json', 'utf-8'));
  const filterMaggie = fullList.find((simpson) => simpson.name.includes('Maggie'));

  actualList.push(filterMaggie);
  fs.writeFile('../../data/simpsonsFamily.json', JSON.stringify(actualList));
};

update();