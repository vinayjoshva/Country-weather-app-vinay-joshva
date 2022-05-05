import React from 'react';
import './CapitalWeather.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CapitalWeather = () => {
  const getCapitalName = localStorage.getItem('capitalName');
  const API_ENDPOINT = "http://api.weatherstack.com/current?access_key=b99c9e43af0236455c0c2509933bddbc&query=";

  const [capitalTemperature, setCapitalTemperature] = useState(null);
  const [tempIcon, setTempIcon] = useState('');
  const [windSpeed, setWindSpeed] = useState(null);
  const [timeZoneId, setTimeZoneId] = useState(null);

  function fetchData() {
    axios.get(`${API_ENDPOINT}${getCapitalName}`).then((response) => {setCapitalTemperature(response.data.current.temperature)
    setTempIcon(response.data.current.weather_icons[0])
    setWindSpeed(response.data.current.wind_speed)
    setTimeZoneId(response.data.location.timezone_id)})
    .catch((error) => {alert(error.message)});
  }

  useEffect(() => fetchData(), []);

  return (
    <div className="container text-white text-center">
      <h1>Capital is : {getCapitalName?.toUpperCase()}</h1>
      <table>
        <thead className="fs-5">
          <tr>
            <th>{getCapitalName} - temperature</th>
            <th>temperature icon</th>
            <th>Wind Speed</th>
            <th>Time Zone ID</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-dark">
            <td>{capitalTemperature}</td>
            <td><img src={tempIcon} alt="blabla" width={30} height={30} /></td>
            <td>{windSpeed}</td>
            <td>{timeZoneId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CapitalWeather;