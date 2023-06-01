const fs = require('fs').promises;

const modify = async () => {
  const list = await fs.readFile('../../data/simpsons.json', 'utf-8');
  const simpsonList = await JSON.parse(list);

  const newSimpsonList = simpsonList.filter(({id}) => id != 6 && id != 10);
  const stringList = JSON.stringify(newSimpsonList)

  await fs.writeFile('../../data/simpsons.json', stringList);
}

modify();