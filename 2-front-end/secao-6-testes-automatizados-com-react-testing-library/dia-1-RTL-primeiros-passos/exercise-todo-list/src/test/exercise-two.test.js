import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens na aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const inputTodo = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button', { name: 'Adicionar' });

    listTodo.map((item) => {
      userEvent.type(inputTodo, item);
      userEvent.click(button);
    })

    const listItems = listTodo.filter(async (item) => {
      await screen.findByText(item) === item;
    });

    expect(listTodo).toEqual(listItems);
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const anyItem = 'Estudar RTL';

    render(<Item content={ anyItem } />);

    const renderedItem = screen.getByText(/estudar rtl/i);

    expect(renderedItem).toBeInTheDocument();

  });
});
