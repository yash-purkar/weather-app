import React, { useEffect, useState } from 'react'
import todo from './to_do.svg'


const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");

  const getWeatherInfo = async () => {

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2d9f020388f73c365b0cc6457b04233e`;


      const res = await fetch(url);
      const data = await res.json();


    } catch (error) {
      alert("NotFound")
    }


  }

  useEffect(() => {
    getWeatherInfo()
  }, [])

  return (
    <>
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

      {/* temp card */}
      <article className='widget'>
        <div className="weatherIcon">
          {/* <i className={"wi wi-day-sunny"}></i> */}
          {/* Use icon here instead of img */}
          <img src={todo} alt="" style={{ width: "150px" }} />
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>25 &deg;</span>
          </div>

          <div className="description">

            <div className="weatherCondition">
              Sunny
            </div>

            <div className="place">Ahmednagar, India</div>
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
                19:19 PM <br />
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
              19:19 PM <br />
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
              19:19 PM <br />
              Pressure
            </p>
          </div>

          <div className="two_side_section">
            <p>
              {/* <i></i> */}
              <img src={todo} alt="" style={{ width: "75px" }} />
            </p>
            <p className="extra_info_left">
              19:19 PM <br />
              Speed
            </p>
          </div>
        </div>

      </article>
    </>
  )
}

export default Temp