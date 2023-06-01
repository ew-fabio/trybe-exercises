const fs = require('fs').promises;

const getSimpson = async (param_id) => {
  try {
    const simpsonList = await JSON.parse(await fs.readFile('../../data/simpsons.json', 'utf-8'));

    const simpson = simpsonList.find(({id}) => Number(id) === param_id);
    if (!simpson) throw new Error('ID não encontrado.');

    return simpson;
  }
  catch (error) {
    console.error(error.message);
  }
};

const main = async (param) => {
  const simpson = await getSimpson(param);
  console.log(simpson);
};

main(5)