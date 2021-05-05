import React, { Component } from 'react'
import styles from "./css/weatherComponent.module.css"
// import PostsAPI from "./PostsAPI"
// import WeatherAPIJS from "./WeatherAPIJS"
import WeatherAPIReact from "./WeatherAPIReact"

// weather_API_Key: de6d47fc7be0ea7b9cdbf02731da6db8

export class WeatherComponent extends Component {
    constructor(props) {
        super(props)

        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes();
        console.log("Day: ", today.getDay());
        console.log("Month: ", today.getMonth());
        this.state = {
            meridian : today.getHours(),
            currentMonth: today.getMonth(),
            currentDay: today.getDay().toLocaleString(),
            currentDate: today.getDate().toLocaleString(),
            currentTime: time,
        }
        
    }
    
    showDay(n) {
        console.log("ShowDay Current Day: ", this.state.currentDay);
        const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        console.log("day", this.state.currentDay);

        return day[n];
    }

    showMonth(n){
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return month[n];
    }


    render() {
        return (
            <div>
                <div className = {styles.divClass}>
                <h5>React Component</h5>
                <h1>{this.showDay(this.state.currentDay)}</h1>
                <br />
                <h4>{this.showMonth(this.state.currentMonth) + " " +

                this.state.currentDate + " " +

                this.state.currentTime + " "}
                {this.state.meridian < 12 ? " pm" : " am"}</h4>
                <WeatherAPIReact />
                {/* <WeatherAPIJS/> */}
                </div>
            </div>
        )
    }
}

export default WeatherComponent
