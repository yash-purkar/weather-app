import React, { useEffect, useState } from 'react'
import sunny from './Icons/sunny.svg'
import rainy from './Icons/rainy.svg'
import cloudy from './Icons/cloudy.svg'
import air from './Icons/air.svg'
import haze from './Icons/haze.svg'
import sunsetIcon from './Icons/sunset.svg'
import humidityIcon from "./Icons/humidity.svg"
import pressureIcon from "./Icons/pressure.svg"
import speedIcon from "./Icons/speed.svg"

const WeatherCard = ({ tempInfo }) => {
  const [weatherIcon, setWeatherIcon] = useState("")

  const {
    temp,
    humidity,
    pressure,
    speed,
    weatherMood,
    cityName,
    country,
    sunset
  } = tempInfo;

  useEffect(() => { //
    if (weatherMood) {  //If we got weatherMood data
      switch (weatherMood) {
        case "Clouds": setWeatherIcon(cloudy);
          break;

        case "Haze": setWeatherIcon(haze);
          break;

        case "Clear": setWeatherIcon(sunny);
          break;

        case "Mist": setWeatherIcon(air);
          break;

        case "Smoke": setWeatherIcon(air);
          break;

        case "Rainy": setWeatherIcon(rainy);
          break;

        default: setWeatherIcon(sunny);
          break;
      }
    }
  }, [weatherMood]);
  // It will run only that time when the weatherMood value will change;


  // The sunset is coming in seconds
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()} `

  return (
    <>
      {/* temp card */}
      <article className='widget'>
        <div className="weatherIcon">

          <img src={weatherIcon} alt="Icon" className='icon' />
        </div>

        <div className="mid_container">


          <div className="temperature">
            <span>{temp} &deg;</span>
          </div>

          <div className="description">

            <div className="weatherCondition">
              {weatherMood}
            </div>

            <div className="place">{cityName}, {country}</div>
          </div>


          <div className="date">
            {new Date().toLocaleString()}
          </div>
        </div>



        {/* Four column section */}
        <div className="extra_temp">

          <div className="two_cols first">
            <p className='img'>
              {/* <i></i> */}
              <img src={sunsetIcon} alt="Icon" className='icons' />
            </p>
            <p className="extra_info_left">
              {timeStr}PM<br />
              Sunset
            </p>
          </div>


          <div className="two_cols second">
            <p className='img'>
              {/* <i></i> */}
              <img src={humidityIcon} alt="Icon" className='icons' />
            </p>
            <p className="extra_info_left">
              {humidity} <br />
              Humidity
            </p>
          </div>



          <div className="two_cols third">
            <p className='img'>

              <img src={pressureIcon} alt="Icon" className='icons' />
            </p>
            <p className="extra_info_left">
              {pressure} <br />
              Pressure
            </p>
          </div>

          <div className="two_cols fourth">
            <p className='img'>
              {/* <i></i> */}
              <img src={speedIcon} alt="Icon" className='icons' />
            </p>
            <p className="extra_info_left">
              {speed} <br />
              Speed
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard