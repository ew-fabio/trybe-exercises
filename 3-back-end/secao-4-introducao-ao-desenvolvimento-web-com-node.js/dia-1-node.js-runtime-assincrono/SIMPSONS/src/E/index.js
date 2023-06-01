const fs = require('fs').promises;

const update = async () => {
  const response = await fs.readFile('../../data/simpsons.json', 'utf-8');
  const data = await JSON.parse(response);

  const filter = data.find((simpson) => simpson.name.includes('Nelson'));

  const list = await fs.readFile('../../data/simpsonsFamily.json', 'utf-8');
  const newData = await JSON.parse(list);
  newData.push(filter);

  const finalList = JSON.stringify(newData);
  fs.writeFile('../../data/simpsonsFamily.json', finalList);
};

update();