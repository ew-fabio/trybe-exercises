import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Testa a aplicação de INPUT de email.", () => {


  it("MODO 1 - Verifica se existe um input do tipo 'email'", () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');

    expect(inputEmail).toHaveProperty('type', 'email');
  });

  it("MODO 2 - Verifica se existe um input do tipo 'email'", () => {
    render(<App />);
    const inputEmail = screen.getByRole('textbox');

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');

    expect(inputEmail).toHaveProperty('type', 'email');
  });

  it("Verifica se existem dois botões.", () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2);
  });

  it("Verifica se existe o botão de 'Enviar'", () => {
    render(<App />)
    const button = screen.getByTestId('btn-send');

    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');

    expect(button).toHaveProperty('value', 'Enviar');
    expect(button).toHaveProperty('type', 'button');
  });

  it("Verifica se o botão e o campo de email estão funcionando corretamente.", () => {
    render(<App />);

    const USER = 'teste@teste.com';

    const inputEmail = screen.getByLabelText('Email');
    const button = screen.getByTestId('btn-send');
    const userEmail = screen.getByTestId('user-email');

    userEvent.type(inputEmail, USER);
    userEvent.click(button);

    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent(`Email: ${USER}`);
  });

});