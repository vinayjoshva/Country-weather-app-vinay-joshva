import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './countryDetails.css';
import axios from 'axios';

// import { Container } from 'react-bootstrap';

const Countrydetails = () => {
  const countryName = localStorage.getItem("country");
  const API_ENDPOINT = "https://restcountries.com/v3.1/name/";
  const navigate = useNavigate();

  const [capitalPop, setCapitalPop] = useState(null);
  const [capital, setCapital] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [flag, setFlag] = useState('');

  function fetchData() {
    axios.get(`${API_ENDPOINT}${countryName}`)
    .then((response) => {setCapitalPop(response.data[0]["population"])
    setCapital(response.data[0]["capital"])
    setLatitude(response.data[0]["latlng"][0])
    setLongitude(response.data[0]["latlng"][1])
    setFlag(response.data[0]["flags"]["svg"])
    })
    .catch(error => console.log(error));
  }

  useEffect(() => fetchData, []);

  const capitalName = {capital};
  localStorage.setItem("capitalName", capitalName.capital);

  return (
    <div className="custom-container"> 
      <table className="table">
        <thead className="table-head-color">
          <tr>
            <th>Capital Population</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Country Flag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{capitalPop}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
            <td><img src={flag} alt="alternative" width={60} height={50}/></td>
          </tr>
        </tbody>
      </table>
      <div className="capital-container">
        <div>
          <label htmlFor="countryCapital">Click to view weather report of: </label>
        </div>
        <div>
          <button type="button" className="btn btn-warning float-right px-4" onClick={() => navigate('capital-weather')}>{capital}</button>
        </div>
      </div>
    </div>
  );
};

export default Countrydetails;