const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'Sport Club Corinthians Paulista',
    alias: 'Timão',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    alias: 'Galo',
  },
];

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

// buscar os times
app.get('/teams', (req, res) => {
  res.status(200).json({ teams });
});

// buscar o time pelo id
app.get('/teams/:id', (req, res) => {
  const team = teams.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(team);
});

// inserir um time pelo corpo da requisição
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ teams: newTeam });
});

// alterar um time específico
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, alias } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found!' });
  }

  updateTeam.name = name;
  updateTeam.alias = alias;
  res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;

  const arrayPosition = teams.findIndex((team) => team.id === Number(id));

  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;
