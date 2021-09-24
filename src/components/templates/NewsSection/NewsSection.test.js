import React from 'react';
import { screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import NewsSection, { query } from './NewsSection';
import { render } from 'test-utils';

const mock = new MockAdapter(axios);

//chcemy sprawdzić czy nasz artykuły sę renderowane
/* Problem polega na tym, że nasz komponent używa
axiosa aby wykonać zapytanie, które w efekcie wysyła
nam z powrotem odpwiedź w postaci naszych artykułów.
Nie chcemy żeby nasze testy jednostkowe korzystały z jakiegoś
API ponieważ wydłużyłoby to znacząco czas oczekiwania
na wynik takiego testu, a z drugiej strony
po prostu nie ma sensu:P. Lepiej to zMOCKOWAĆ
jak wszystko inne co robimy w naszych testach.

Po raz kolejny stawiamy tutaj trochę taką strukturę z kartonu,
która udaje funkcjonowanie jakiegoś innego systemu po to
żeby sprawdzić czy logika naszego komponentu działa poprawnie,
a nie to czy API wyśle nam poprawne dane
*/
describe('News Section', () => {
  afterEach(() => {
    //instrukcja ta wykona się po naszym teście poniżej
    mock.reset(); //resetujemy nasze Mocki żeby nasz onPost nie został w każdym teście i nie zwracał nam 500
  });

  it('Displays error when the article are not loaded correctly', async () => {
    //ten mock jest powiązany z tym testem, bo zwraca nam 500  to umieszczemy go wewnątrz tego testu
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500); // używamy onPost bo takiej metody używaliśmy w komponencie NewsSection
    /*za każdym razem gdy będziemy wysyłać zapytanie pod wskazany adres chcemy zawrzeć w nim nasze query i chcemy żeby nam
    mock-adapter zwrócił nam jakąś wartość, którą ustalamy w nawiasie reply(). W tym przypadku ustawiamy kod 500, ale może być
    też coś innego. Narazie bedzie to scenariusz, który przejdzie do ustawienia naszego błędu
    */

    //używamy axiosa, czyli asynchronicznej operacji, na którą musimy poczekać, dlatego tutaj też używamy async
    render(<NewsSection />); //mamy nasz Themeprovider, dlatego używamy helpera renderWithProviders
    await screen.findByText(/Sorry/); //używamy await żeby react-testing-library zaczekało aż jakis element się pojawi
  });

  it('Displays the articles', async () => {
    mock
      .onPost('https://graphql.datocms.com/', { query })
      .reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }] } });
    render(<NewsSection />);
    await screen.findAllByText(/Test/); //znajdziemy nasz artykuł po regex /Test/
  });

  it('Displays loading when articles is fetching', async () => {
    mock
      .onPost('https://graphql.datocms.com/', { query })
      .reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }] } });
    render(<NewsSection />);
    await screen.findByText(/Loading/);
  });
});
