import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks())

it("MODO 1 (jest.spyOn) - fetches a joke", async () =>{
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  }

  jest.spyOn(global, 'fetch')
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke)
  })

  render(<App />)
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.')

  expect(renderedJoke).toBeInTheDocument()
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  )
})


it("MODO 2 (jest.fn) - fetches a joke", async () =>{
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  }

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke)
  }))

  render(<App />)
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.')

  expect(renderedJoke).toBeInTheDocument()
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  )
})


it("MODO 3 (jest.fn async) - fetches a joke", async () =>{
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  }

  global.fetch = jest.fn(async () => ({
    json: async () => (joke)
  }))

  render(<App />)
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.')

  expect(renderedJoke).toBeInTheDocument()
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  )
})

it("Verifica se chama uma nova piada ao clicar no botão.", async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValueOnce(joke1),
  });

  render(<App />);

  const firstJoke = await screen.findByText(joke1.joke);

  expect(firstJoke).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(joke2),
  })

  const button = screen.getByRole('button', { name: /another joke/i })
  userEvent.click(button)

  const secondJoke = await screen.findByText(joke2.joke);

  expect(secondJoke).toBeInTheDocument();
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);

})