import React from 'react'
import todo from './to_do.svg'


const Temp = () => {


  return (
    <>
      <div className='wrap'>
        <div className="search">
          <input type="search"
            placeholder='plz enter your city name
           ' name=""
            id="searchItem" autoFocus />

          <button className="searchBtn" type='button'>Search</button>
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