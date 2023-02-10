import countries from './countries.json';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import { CountriesDetails } from './components/CountriesDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountriesDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
