import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState({ value: '' });
  const { value } = search;
  
  useEffect(() => {
    const getCountries = async () => {
      const endpoint = 'https://restcountries.eu/rest/v2/all';
      const dataCountries = await fetch(endpoint).then((data) => data.json());
      setResults(dataCountries);
    };
    getCountries();
  }, []);

  const handleChange = (event) => {
    setSearch({value: event.target.value});
  };

  const searchText = () => {
    const texts = (!value )? results : results.filter(
        (countrie) =>
          countrie.name.toLowerCase().includes(search.value) ||
          countrie.capital.toLowerCase().includes(search.value) ||
          countrie.region.toLowerCase().includes(search.value) ||
          countrie.subregion.toLowerCase().includes(search.value)
      );
      return texts;
  };

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='header-title'>Lista de Países</h1>
          <label className='header-input' htmlFor='countrie'>
            Pesquisar:{' '}
            <input
              id='countrie'
              type='search'
              name='search'
              placeholder='Digite o país da sua busca'
              value={ search.value }
              onChange={handleChange}
            />
          </label>
      </header>
      <div className='countries-container'>
        {searchText().map((countrie) => (
          <div key={countrie.name} className='countrie-card'>
            <img
              className='countries-flag'
              src={countrie.flag}
              alt={`Bandeira do país ${countrie}`}
            />
            {countrie.cioc ? (
              <h2 className='countries-name'>
                País: {countrie.name}, {countrie.cioc}
              </h2>
            ) : (
              <h2 className='countries-name'>País: {countrie.name}</h2>
            )}
            {countrie.capital ? (
              <h3 className='countries-capital'>Capital: {countrie.capital}</h3>
            ) : (
              <h3 className='countries-capital'>Capital: Não Há</h3>
            )}
            <h4 className='countries-capital'>Continente: {countrie.region}</h4>
            <h5 className='countries-capital'>
              Localização: {countrie.subregion}
            </h5>
            <h4 className='countries-population'>
              População: {countrie.population} habitantes
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
