import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form'
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState({ value: '' });
  // const { register, handleSubmit } = useForm();

  useEffect(() => {
    const getCountries = async () => {
      const endpoint = 'https://restcountries.eu/rest/v2/all';
      const dataCountries = await fetch(endpoint).then((data) => data.json());
      setResults(dataCountries);
    };
    getCountries();
  }, []);

//   const handleChange = (event) => {
//     setSearch({search: event.target.value});
//   }

//   const onSubmit = (data, e) => {
//      e.target.reset();
// }


  const searchText = (text) => {
    if (text !== '') {
      const texts = search.filter(
        (countrie) =>
          countrie.name.toLowerCase().includes(text) ||
          countrie.capital.toLowerCase().includes(text) ||
          countrie.region.toLowerCase().includes(text) ||
          countrie.subregion.toLowerCase().includes(text)
      );
      return setSearch(texts);
    }
  };

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='header-title'>Lista de Países</h1>
        {/* <form onSubmit={handleChange({ search })}> */}
          {/* <label className='header-input' htmlFor='countrie'>
            <input
              id='countrie'
              type='search'
              name='search'
              placeholder='Digite o país da sua busca'
            />
            <button type='button' onClick={() => searchText(search)}>
              Pesquisar
            </button>
          </label>
        </form> */}
      </header>
      <div className='countries-container'>
        {results.map((countrie) => (
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
