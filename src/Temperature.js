import React from "react";

import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    temperature: 19,
    humidity: 10,
    wind: 10
  };
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col">
          <div className="float-left">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="cloudy-icon"
              className="cloudy float-left"
              id="icon"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">
              {" "}
              <a href="/" className="active">
                ℃
              </a>
              |<a href="/">℉</a>
            </span>
          </div>
        </div>
        <div className="col others">
          <ul>
            <li>
              Humidity: <span id="humidity"> {weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind"> {weatherData.wind}</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
