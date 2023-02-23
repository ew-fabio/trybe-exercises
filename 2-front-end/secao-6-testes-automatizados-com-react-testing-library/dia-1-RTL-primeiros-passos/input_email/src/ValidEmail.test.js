import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');

  expect(isValid).toBeInTheDocument();
});


test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');

  expect(isValid).toBeInTheDocument();
});


test('Não deve exibir a mensagem caso o email não tenha sido enviado', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText('Email');

  userEvent.type(inputEmail, 'teste@teste.com')
  const userEmail = screen.queryByText('Email: teste@teste.com');

  expect(userEmail).not.toBeInTheDocument();
});


test('MODO 1 - Verifica se a cor do texto muda caso o email seja válido ou inválido.', () => {
  // email válido
const EMAIL_USER = 'email@email.com';
render(<ValidEmail email={ EMAIL_USER } />);

const isValid = screen.queryByText('Email Válido');
expect(isValid).toHaveClass('text-blue');

// email inválido
const WRONG_EMAIL_USER = 'email.com';
render(<ValidEmail email={ WRONG_EMAIL_USER } />);

const isNotValid = screen.queryByText('Email Inválido');
expect(isNotValid).toHaveClass('text-red');
});


// test('MODO 2 -Verifica se a cor do texto muda caso o email seja válido ou inválido.', () => {
//   // email válido
//   const EMAIL_USER = 'email@email.com';
//   render(<ValidEmail email={ EMAIL_USER } />);

//   const isValid = screen.getByText('Email Válido');
//   expect(isValid).toHaveStyle('color: blue');

//   // email inválido
//   const WRONG_EMAIL_USER = 'email.com';
//   render(<ValidEmail email={ WRONG_EMAIL_USER } />);

//   const isNotValid = screen.getByText('Email Inválido');
//   expect(isNotValid).toHaveStyle('color: red');
// });


