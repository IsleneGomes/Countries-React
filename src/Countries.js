import React, { useContext } from 'react';
import CountriesContext from './context/CountriesContext';

function Countries() {
  const { searchText } = useContext(CountriesContext)

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
    )
}

export default Countries;
