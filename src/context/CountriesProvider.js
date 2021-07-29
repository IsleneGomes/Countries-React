import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountriesContext from './CountriesContext';

function CountriesProvider({ children }) {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState({ value: '' });

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

    return (
     <CountriesContext.Provider value={ { results, search, handleChange } }>
      { children }
     </CountriesContext.Provider>
    )
}

CountriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountriesProvider;
