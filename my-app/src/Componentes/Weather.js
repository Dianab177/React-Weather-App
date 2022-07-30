import React, { useState } from 'react';
import axios from "axios";

const Weather = (props) => {
  const [city, setCity] = useState("");
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [forecast, setForecast] = useState({});


   function WeatherForecast(response) {
    setSearchSubmit(true);
    setForecast({
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
        <input type="search" onChange={Searching} placeholder="Enter a city..." />
        <button type="submit" value="Search">Search</button>
        <button type="submit" value="Current">Current</button>
     </form>);
   
      if (searchSubmit) {
        return (
          <div>
            {form}
        <ul className="form">
           <li className="form-li">temperature: {Math.round(forecast.temperature)}ºC</li>
           <li>Description: {forecast.description}</li>
           <li>Humidity: {forecast.humidity}%</li>
           <li>Wind: {forecast.wind}Km/h</li>
           <li><img src={forecast.icon} alt={forecast.description}/></li>
        </ul>
         </div>
        );
        
      } else {
        return form;
      }
}

export default Weather