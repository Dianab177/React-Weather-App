import React, { useState } from 'react';
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [forecast, setForecast] = useState({});


   function WeatherForecast(response) {
    setSearchSubmit(true);
    setForecast({
    city: response.data.name,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  
  });
 }

   function HandleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(WeatherForecast);
   }

   function Searching(event) {
     setCity(event.target.value);
   }

    let form = (
      <form onSubmit={HandleSubmit}>
        <input className='text-input' type="search" onChange={Searching} placeholder="Enter a city..." />
        <button className='button-search' type="submit" value="Search">Search</button>
        <button className='button-Currrent' type="submit" value="Current">Current</button>
     </form>);
   
      if (searchSubmit) {
        return (
          <div>
           {form}
            <h3>{forecast.city}</h3>
            <img className='icon-1' src={forecast.icon} alt={forecast.description}/>
            <h1>{Math.round(forecast.temperature)}ºC</h1>
        <ul className="form">
           <li className="form-li">{forecast.description}</li>
           <li className="form-li">{forecast.humidity}%</li>
           <li className="form-li">{forecast.wind}Km/h</li>
        </ul>
         </div>
        );
        
      } else {
        return form;
      }
}

export default Weather