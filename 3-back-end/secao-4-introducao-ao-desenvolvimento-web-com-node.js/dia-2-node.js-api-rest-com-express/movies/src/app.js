const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`O arquivo não pode ser lido: ${error}`);
  }
};

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const moviesList = await readFile();

    if (q) {
      const filteredMovies = moviesList
        .filter(({ movie }) => movie.toLowerCase().includes(q.toLowerCase()));
      res.status(200).json(filteredMovies);
    }

    res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const moviesList = await readFile();
    const movie = moviesList.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const moviesList = await readFile();
    res.status(200).json(moviesList);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const moviesList = await readFile();
    const { movie, price } = req.body;
    const id = moviesList.length + 1;
    const newMovie = {
      id,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...moviesList, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;

    const moviesList = await readFile();
    moviesList[Number(id) - 1] = { id: Number(id), movie, price };

    const updatedMovies = JSON.stringify(moviesList, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(200).json(updatedMovies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const moviesList = await readFile();

    const newMoviesList = moviesList.filter((movie) => movie.id !== Number(id));

    const updatedMovies = JSON.stringify(newMoviesList, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
