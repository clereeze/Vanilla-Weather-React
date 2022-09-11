import axios from "axios";
import React, { useState } from "react"; 
import "./Weather.css";

export default function Weather(props) {

    let [city, setCity] = useState("");

    function handleResponse(response) {
        alert (`The weather in ${props.city} is ${response.data.main.temp}℃`)
        setCity();
    }

    let apiKey = "7b164cdced7aaeb17590e6fb8707df24"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
            <ul> 
                <li> 
                    {city}
                </li>
                <li>
                    Last update: 
                </li>
                <li> 
                    weather description
                </li>
            </ul>
    
    ); 
    
}