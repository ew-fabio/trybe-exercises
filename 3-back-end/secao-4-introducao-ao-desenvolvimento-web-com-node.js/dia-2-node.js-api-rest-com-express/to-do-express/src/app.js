const express = require('express');

const app = express();

app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Iniciar o projeto Docker',
    priority: 'A',
    status: 'Em andamento',
  },
  {
    id: 2,
    description: 'Entregar o projeto All-for-One',
    priority: 'B',
    status: 'A executar',
  },
];

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello, T28...',
    activities,
  });
});

app.post('/', (req, res) => {
  const newToDo = { ...req.body };
  activities.push(newToDo);
  res.status(200).json({ activities: newToDo });
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;

  const activitiesIndex = activities.findIndex((activity) => activity.id === Number(id));
  activities.splice(activitiesIndex, 1);

  res.status(200).json();
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { description, priority, status } = req.body;

  const activity = activities.find((currentActivity) => currentActivity.id === +id);
  activity.description = description || activity.description;
  activity.priority = priority || activity.priority;
  activity.status = status || activity.status;
  res.status(200).json({
    message: `Dados atualizados para a activity de número${id}`,
    activity,
  });
});

module.exports = app;