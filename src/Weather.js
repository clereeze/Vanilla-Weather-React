import axios from "axios";
import React, { useState } from "react"; 
import FormattedDate from"./FormattedDate"
import "./Weather.css";

export default function Weather(props) {

    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        setWeatherData({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
            city: response.data.name,
        });

        setReady(true);
    }

    if (ready) {
        return (
            <div className="Update">
                <h1>
                    {weatherData.city}
                </h1>
            <ul> 
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize"> 
                    {weatherData.description}
                </li>
            </ul>
             <div className="row mt-3">
        <div className="col-6">
          <div className="float-left">
              <div className="clearfix">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
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
    } else {
    const apiKey = "7b164cdced7aaeb17590e6fb8707df24"; 
    let city ="Singapore";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    }
}
