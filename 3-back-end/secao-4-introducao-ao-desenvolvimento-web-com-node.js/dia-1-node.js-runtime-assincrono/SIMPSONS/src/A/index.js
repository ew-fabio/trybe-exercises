const fs = require('fs').promises;

const main = async () => {
  try {
    const response = await fs.readFile('../../data/simpsons.json', 'utf-8');
    const data = JSON.parse(response);

    const simpsonList = data.map(({id, name}) => `${id} - ${name}`);
    simpsonList.forEach((simpson) => console.log(simpson));
  }
  catch (error) {
    console.error(error.message);
  }
};

main();