import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountriesContext from './CountriesContext';

function CountriesProvider({ children }) {
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
     <CountriesContext.Provider value={ { results, search, handleChange, searchText } }>
      { children }
     </CountriesContext.Provider>
    )
}

CountriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountriesProvider;
