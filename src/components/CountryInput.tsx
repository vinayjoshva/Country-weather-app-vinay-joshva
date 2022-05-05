import React from 'react';
import './countryInput.css';
import { useNavigate } from 'react-router-dom';


const CountryInput = () => {
  const navigate = useNavigate();

  function validateInput() {
    const inputField = (document.getElementById('country-input') as HTMLInputElement).value;

    localStorage.setItem('country', inputField);

    const submitButton = document.getElementById('country-submit');
    const onlyAlphabets = /[a-z]|[A-Z]/;
    const otherCharacters = /[0-9]|\W/g;
  
    if(inputField === "" || inputField.match(otherCharacters)) {
      (submitButton as HTMLButtonElement).disabled = true;
    } else if(inputField.match(onlyAlphabets)) {
      (submitButton as HTMLButtonElement).disabled = false;
    }
  }
  
  return (
    <div className="container">
      <form action="Countrydetails.tsx" 
      onSubmit={() => navigate('country-details')}
      className="text-center">
        <input type="text" className="form-control" placeholder="Country Name" id="country-input" onChange={validateInput}/>

        <button type="submit" id="country-submit" className="button" disabled>Submit</button>
      </form>
    </div>
  );
};

export default CountryInput;