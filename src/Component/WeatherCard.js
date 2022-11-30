import React from 'react'
import todo from './to_do.svg'

const WeatherCard = ({ tempInfo }) => {
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

  // The sunset is coming in seconds
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()} `

  return (
    <>
      {/* temp card */}
      <article className='widget'>
        <div className="weatherIcon">
          {/* <i className={"wi wi-day-sunny"}></i> */}
          {/* Use icon here instead of img */}
          <img src={todo} alt="" style={{ width: "150px" }} />
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp} &deg;</span>
          </div>

          <div className="description">

            <div className="weatherCondition">
              {weatherMood}
            </div>

            <div className="place">{cityName}, {country}</div>
          </div>
        </div>

        <div className="date">
          {new Date().toLocaleString()}
        </div>

        {/* Four column section */}
        <div className="extra_temp">
          <div className="temp_info">
            <div className="two_side_section">
              <p>
                {/* <i></i> */}
                <img src={todo} alt="" style={{ width: "75px" }} />
              </p>
              <p className="extra_info_left">
                {timeStr} PM<br />
                Sunset
              </p>
            </div>
          </div>


          <div className="two_side_section">
            <p>
              {/* <i></i> */}
              <img src={todo} alt="" style={{ width: "75px" }} />
            </p>
            <p className="extra_info_left">
              {humidity} <br />
              Humidity
            </p>
          </div>
        </div>

        <div className="weather_extra_info">
          <div className="two_side_section">
            <p>
              {/* <i></i> */}
              <img src={todo} alt="" style={{ width: "75px" }} />
            </p>
            <p className="extra_info_left">
              {pressure} <br />
              Pressure
            </p>
          </div>

          <div className="two_side_section">
            <p>
              {/* <i></i> */}
              <img src={todo} alt="" style={{ width: "75px" }} />
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