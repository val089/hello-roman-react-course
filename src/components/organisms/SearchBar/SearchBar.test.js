// import { render } from '@testing-library/react';
import { render, screen, fireEvent } from 'test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { SearchBar } from './SearchBar';
import { waitFor } from '@testing-library/react';

const server = setupServer(...handlers); //mokujemy serwer // mamy zmokowany backend

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search'); //łapiemy naszego inputa
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/); //findByText jest to metoda asynchroniczna
  });

  it('Hides the results when input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/);

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      //dzięki metodzie waitFor czekamy aż element ul z listą zniknie i wtedy metoda expect sprawdzić czy jest widoczny
      expect(screen.getByLabelText('results')).not.toBeVisible();
    });
  });
});
