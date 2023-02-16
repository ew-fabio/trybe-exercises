import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa a aplicação Best Games', () =>{

  it('Verifica se exibe o texto "Carregando..." quando a aplicação é iniciada.', () => {
    // acessar
    render(<App />);

    const loadingElement = screen.getByRole('heading', { name: /carregando\.\.\./i });

    //interagir
    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.logTestingPlaygroundURL();

    // testar
    expect(loadingElement).toBeInTheDocument();
  });


  it('MODO 1 - Verifica se o jogo com o texto "Minecraft" é renderizado na tela após carregamento.', async () => {
    // acessar
    render(<App />)

    await waitForElementToBeRemoved(() =>
      screen.queryByRole('heading', { name: /carregando\.\.\./i }),
    )

    const gameMinecraft = screen.getByText('Minecraft');

    // interagir
    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.logTestingPlaygroundURL();

    // testar
    expect(gameMinecraft).toBeInTheDocument();
  });


  it('MODO 2 - Verifica se o jogo com o texto "Minecraft" é renderizado na tela após carregamento.', async () => {
    // acessar
    render(<App />)

    const gameMinecraft = await screen.findByText('Minecraft');

    // interagir
    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.logTestingPlaygroundURL();

    // testar
    expect(gameMinecraft).toBeInTheDocument();
    expect(gameMinecraft).toBeVisible();
  });


  it('Verifica se a tela de detalhes do jogo "GTA-V" exibe as informações Release Year e Sales', async () => {
    // acessar
    render(<App />);

    await waitForElementToBeRemoved(() =>
      screen.queryByRole('heading', { name: /carregando\.\.\./i }),
    )
    const gameDetails = await screen.findAllByText(/Ver detalhes/i);

    // interagir
    userEvent.click(gameDetails[1]);
    const desc1 = await screen.findByText(/release year/i);
    const desc2 = screen.getByText(/sales/i);

    // testar
    expect(gameDetails).toHaveLength(6);

    expect(desc1).toHaveTextContent('Release Year');
    expect(desc2).toHaveTextContent('Sales');

    expect(desc1).toBeInTheDocument();
    expect(desc2).toBeInTheDocument();
  });
})

