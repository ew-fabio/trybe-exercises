const fs = require('fs').promises;

const copyData = async () => {
  await fs.copyFile('../../data/simpsons.json', '../../data/simpsonsFamily.json');

  const read = await fs.readFile('../../data/simpsonsFamily.json', 'utf-8');
  const data = await JSON.parse(read);

  const simpsonFamily = JSON.stringify(data.filter((simpson) => simpson.id <= '4'));

  await fs.writeFile('../../data/simpsonsFamily.json', simpsonFamily);
};

copyData();