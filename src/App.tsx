import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryInput from './components/CountryInput';
import Countrydetails from './pages/Countrydetails';
import CapitalWeather from './pages/CapitalWeather';
import { BrowserRouter, Routes, Link, Route, useRoutes, Router } from 'react-router-dom';

// const routes = {
//   '/': () => <CountryInput />,
//   'country-details': () => <Countrydetails />,
//   'capital-weather': () => <CapitalWeather />
// }


function App() {
  // const match = useRoutes(routes);

  return (
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<CountryInput />} />
      <Route path="country-details" element={<Countrydetails />} />
      <Route path="/country-details/capital-weather" element={<CapitalWeather />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
