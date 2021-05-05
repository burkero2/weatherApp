import React, { useState, useEffect } from 'react'
import styles from "./css/weatherComponent.module.css"

function TimeComponentHooks() {
    var date = new Date();
    const [time, setTime] = useState(date);
    const [day, setDay] = useState(date.getDay());
    const [month, setMonth] = useState(date.getMonth());

    useEffect(() => {
        // use the variable 'timerID' here so that we can clear the Interval below using 'timerID', useEffect works without it.
        var timerID = setInterval(() => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
            };
    });

    function tick() {
        setTime(new Date());    
    }


    //Will this update every time day changes?
    useEffect(() => {
        showDay(day);
        showMonth(month);
    }, []); // why does this stop working when I remove the [] parameter?

    function showDay(n) {
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        setDay(daysOfTheWeek[n]);
    }

    function showMonth(n){
        const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dateMonth = monthArray[n] + " " + date.getDate() + " ";
        setMonth(dateMonth);
    }
 
    return (
        <div>
             <div className = {styles.divClass}>
                <h5>Weather App</h5>
                <h1>{day}</h1>
                <h4>{month}{time.toLocaleTimeString()}</h4>
            </div>
        </div>
    )
}

export default TimeComponentHooks
