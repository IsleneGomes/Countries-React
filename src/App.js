import './App.css';
import CountriesProvider from './context/CountriesProvider';
import Countries from './Countries';
import Header from './Header';

function App() {
  return (
    <CountriesProvider>
      <Header />
      <Countries />
    </CountriesProvider>
  );
}

export default App;
