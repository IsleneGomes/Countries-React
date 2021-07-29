import React, { useContext } from 'react';
import CountriesContext from './context/CountriesContext';

function Countries() {
  const { results, search } = useContext(CountriesContext)
  const { value } = search;

  const searchText = () => {
    const texts = (!value )? results : results.filter(
        (countrie) =>
          countrie.translations.br.toLowerCase().includes(search.value.toLowerCase()) ||
          countrie.capital.toLowerCase().includes(search.value.toLowerCase()) ||
          countrie.region.toLowerCase().includes(search.value.toLowerCase())
      );
      return texts;
  };
  console.log(results[10])

    return (
      <div>
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
                País: {countrie.translations.br}, {countrie.cioc}
              </h2>
            ) : (
              <h2 className='countries-name'>País: {countrie.translations.br}</h2>
            )}
            {countrie.capital ? (
              <h3 className='countries-capital'>Capital: {countrie.capital}</h3>
            ) : (
              <h3 className='countries-capital'>Capital: Não Há</h3>
            )}
            <h4 className='countries-capital'>
              Idioma Principal: {countrie.languages[0].name}
            </h4>
            <h4 className='countries-capital'>Continente: {countrie.region}</h4>
            <h4 className='countries-capital'>
              Localização: {countrie.subregion}
            </h4>
            <h5 className='countries-population'>
              População: {countrie.population} habitantes
            </h5>
          </div>
        ))}
      </div>
      </div>
    )
}

export default Countries;
