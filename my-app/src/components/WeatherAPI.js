import React, { Component } from 'react'
import axios from 'axios';

export class WeatherAPI extends Component {
    
    // 1. Constructor Runs first
    constructor(props) {
        super(props)
        
        this.state = {
            weather: '',
            error: null,
            apiResponse: "",
        }
    }
    
    // 3. Then the Component Mounts
    componentDidMount(){
        const API_KEY = "de6d47fc7be0ea7b9cdbf02731da6db8";
        const API_URL = "https://api.openweathermap.org/data/2.5/weather";
        const cityName = "Dublin";
        const queryString = `${API_URL}?q=${cityName}&appid=${API_KEY}`;

        axios.get(queryString)
            .then((response) => {
                console.log("response: ", response);
                
                this.setState({
                    apiResponse: response.data, 
                })
                this.displayStatus();
                console.log("APIresponse: ", this.state.apiResponse);
                
            }).catch (error => {
                this.setState({
                    error: error.message,
                })
            })
    }

    chooseWeather(iconID){
        console.log(iconID);
            let imgIcon = "";
            if (iconID === "04n"){
                imgIcon = "https://codeinstitute.s3.amazonaws.com/Instructional%20Design/weatherIcons/cloud-solid.svg";
            } else{
                imgIcon = "https://codeinstitute.s3.amazonaws.com/Instructional%20Design/weatherIcons/poo-storm-solid.svg";
            }
            return imgIcon;
        }

    displayStatus(){        
        const data = this.state.apiResponse;
        const weatherIcon = this.chooseWeather(data.weather[0].icon);
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const celcius = this.convertCelsius(temp);
        
        let results = `<img src = "${weatherIcon}" />`
        results += `<h1>${celcius}°C</h1>`
        results += `<h5>${description}</h5>`
        console.log("Final result: ", results);

        return(results);
    }
   
    convertCelsius(kelvin){
        const celsius = Math.round(kelvin - 273.15);
        return celsius;
    }
   
    // 2. Next the Component Mounts
    render() {

        return (
            <div>
                {
                //   this.displayStatus()
                }
            </div>
        )
    }
}

export default WeatherAPI
