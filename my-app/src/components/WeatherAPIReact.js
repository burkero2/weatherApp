// import React, { Component } from 'react'
// import axios from 'axios';

// export class WeatherAPIReact extends Component {
    
//     // 1. Constructor Runs first
//     constructor(props) {
//         super(props)
        
//         this.state = {
//             data: [],
//             weather: [],
//             error: null,
//             apiResponse: "",
//             results: '',
//             heat:'',
//             weatherIcon: '',
//             description: '',
//         }
//     }
    
//     // 3. Then the Component Mounts
//     componentDidMount(){
//         const API_KEY = "de6d47fc7be0ea7b9cdbf02731da6db8";
//         const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//         const cityName = "Dublin";
//         const queryString = `${API_URL}?q=${cityName}&appid=${API_KEY}`;

//         axios.get(queryString)
//             .then((response) => {
//                 console.log("response: ", response);
//                 this.setState({
//                     apiResponse: response.data,  
//                 })
//                 this.displayStatus();             
//             }).catch (error => {
//                 this.setState({
//                     error: error.message,
//                 })
//             })
//     }

//     chooseWeather(iconID){
//         console.log(iconID);
//             let imgIcon = "";
//             if (iconID === "01n"){
//                 imgIcon = "'https://codeinstitute.s3.amazonaws.com/Instructional%20Design/weatherIcons/cloud-solid.svg'";
//             } else if (iconID === "04n"){
//                 imgIcon = "'https://codeinstitute.s3.amazonaws.com/Instructional%20Design/weatherIcons/cloud-solid.svg'";
//             } else{
//                 imgIcon = "'https://codeinstitute.s3.amazonaws.com/Instructional%20Design/weatherIcons/poo-storm-solid.svg'";
//             }
//             console.log('imgIcon', imgIcon);
//             return imgIcon;
//         }

//     displayStatus(){        
//         const data = this.state.apiResponse;
//         console.log("data", data);
//         const temp = data.main.temp;
//         console.log("temp", temp);
//         const descriptionText = data.weather[0].description;
//         const celcius = this.convertCelsius(temp);
//         console.log("celcius", celcius);

//         const weatherIcon1 = this.chooseWeather(data.weather[0].icon);
//         console.log("weatherIcon1", weatherIcon1);
        
        

//         this.setState({
//             heat: celcius,
//             weatherIcon: weatherIcon1,
//             description: descriptionText,

//         })
//         console.log("weatherIcon State", this.state.weatherIcon);
//         console.log(this.state.results);

  
//     }
   
//     convertCelsius(kelvin){
//         const celsius = Math.round(kelvin - 273.15);
//         return celsius;
//     }
   
//     // 2. Next the Component Mounts
//     render() {

//         return (
//             <div>
                
//                 {/* {this.state.heat} */}
//                 <img src = {this.state.weatherIcon} alt = "weather Icon"/>
//                 <br></br>
//                 {this.state.description}
                
                
//             </div>
//         )
//     }
// }

// export default WeatherAPIReact
