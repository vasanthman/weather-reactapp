import React from "react";
import "./displayweather.css";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import WindPowerIcon from '@mui/icons-material/WindPower';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather
            </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img className="weather-icon" src={iconurl} alt="" srcset="" />
            <span className="weather-description">
              {" "}
              {data.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              
              <table>
                <tr>
                  <td>
                    <h4 >High/Low</h4>
                  </td>
                  <td>
                    <span>
                     <br /> {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                      <br /><ThermostatIcon color='light' style={{fontSize:"30px"}}/> 
                      </span>
                     
                  </td>
                  
                </tr>
                
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                   <br /> <span>{data.main.humidity} %
                    <br /><InvertColorsIcon color='light' style={{fontSize:"30px"}}/> 
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <br /><span>{data.main.pressure} hPa
                    <br /><TireRepairIcon color='light' style={{fontSize:"30px"}}/> 
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                   <br /> <span>{data.visibility / 1000} Km
                    <br /><VisibilityIcon color='light' style={{fontSize:"30px"}}/> 
                    </span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <br /><span>{Math.floor((data.wind.speed * 18) / 5)} km/hr
                    <br /><WindPowerIcon color='light' style={{fontSize:"30px"}}/> 
                    </span>

                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <br /><span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                      <br /><AirIcon color='light' style={{fontSize:"30px"}}/> 
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                   <br /><span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                      <br /><WbTwilightIcon color='light' style={{fontSize:"30px"}}/> 
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4 style={{backgroundcolor:"blue"}}>Sunset</h4>
                  </td>
                  <td>
                    <br /><span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                      <br /><WbSunnyIcon color='light' style={{fontSize:"30px"}}/>
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;