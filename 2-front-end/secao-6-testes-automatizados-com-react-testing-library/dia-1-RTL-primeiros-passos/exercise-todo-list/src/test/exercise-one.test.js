import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Adicionar' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(button.type).toBe('button');
  });


  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);

    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button', { name: 'Adicionar' });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    const tarefa = 'testando a lista de tarefas';
    const list = screen.getByRole('list');
    userEvent.type(input, tarefa);

    expect(input).toHaveValue(tarefa);
    expect(list).not.toHaveTextContent(tarefa);

    userEvent.click(button);
    const listItem = screen.getByText(tarefa);

    expect(input).toHaveValue('');
    expect(list).toHaveTextContent(tarefa);
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveClass('Item');
  });
});
