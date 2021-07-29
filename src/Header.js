import React, { useContext } from 'react';
import CountriesContext from './context/CountriesContext';

function Header() {
  const { search, handleChange } = useContext(CountriesContext)
  const { value } = search;

    return (
      <div>
        <header className='header'>
        <h1 className='header-title'>Lista de Países</h1>
          <label className='header-input' htmlFor='countrie'>
            Pesquisar:{' '}
            <input
              id='countrie'
              className="input"
              type='search'
              name='search'
              placeholder='Digite o país, capital ou continente da sua busca'
              value={ value }
              onChange={handleChange}
            />
          </label>
      </header>
      </div>
    )
}

export default Header;
