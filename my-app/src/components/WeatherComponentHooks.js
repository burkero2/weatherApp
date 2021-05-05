import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styles from "./css/weatherComponent.module.css"

function WeatherComponentHooks() {
    const [data, setData] = useState([]);
    //Why am I not using error here?
    const [error, setError] = useState('');
    // const [weatherIcon, setWeatherIcon] = useState('');
    const [description, setDescription] = useState('description');
    
    useEffect(() => APIQuery(data),[]);

    function APIQuery(data){
        console.log("it works");
        const API_KEY = "de6d47fc7be0ea7b9cdbf02731da6db8";
        const API_URL = "https://api.openweathermap.org/data/2.5/weather";
        const cityName = "Dublin";
        const queryString = `${API_URL}?q=${cityName}&appid=${API_KEY}`;

        axios.get(queryString)
            .then((response) => {
                console.log("response: ", response);
                setData(response);
                console.log("data: ", data);
                displayStatus(data);
            }).catch((error) => {
                setError(error.message)
            });
        }
        // Is the .catch part working?
    

        // useEffect(() => chooseWeather());
        
        function displayStatus(info){
            console.log("displayStatus: ", info.data.weather[0].description);
            // why does my code stop working if I add more lines after this? Or sometimes it stops, sometimes it works

           
            setDescription(info.data.weather[0].description);
            // console.log("hello");
            // console.log("description: ", description);


        }
    


    return (
        <div className = {styles.divClass}>
            <img src = "https://codeinstitute.s3.amazonaws.com/Instructional%20Design/weatherIcons/poo-storm-solid.svg" />
                <br></br>
            <h4>{description}</h4>
        </div>
    )
}

export default WeatherComponentHooks
