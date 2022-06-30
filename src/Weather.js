import axios from "axios";

export default function Weather(props) {

    function handleResponse(response) {
        alert (`The weather in ${props.city} is ${response.data.main.temp}℃`)
    }
    let apiKey = "7b164cdced7aaeb17590e6fb8707df24"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
}