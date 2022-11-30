import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';


const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState("");

  const getWeatherInfo = async () => {

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2d9f020388f73c365b0cc6457b04233b`;

      const res = await fetch(url);
      const data = await res.json();

      // console.log(data.main.temp);
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name: cityName } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      console.log(temp, humidity, pressure, weatherMood, cityName, country, sunset);

      const weatherInfo = {
        temp,
        humidity,
        pressure,
        speed,
        weatherMood,
        cityName,
        country,
        sunset
      };
      setTempInfo(weatherInfo);

    } catch (error) {
      alert(`${searchValue.toUpperCase()} not found try to search your district, or try again later.`)
    }
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])

  return (
    <>
      <h1>WEATHER APP</h1>
      <div className="main">
        <div className='wrap'>
          <div className="search">
            <input type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='plz enter your city name
           ' name=""
              id="searchItem" autoFocus />

            <button onClick={getWeatherInfo} className="searchBtn" type='button'>Search</button>
          </div>
        </div>


        <WeatherCard tempInfo={tempInfo} />
      </div>
    </>
  )
}

export default Temp