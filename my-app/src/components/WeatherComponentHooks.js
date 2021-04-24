import React, { useState, useEffect } from 'react'
import styles from "./css/weatherComponent.module.css"

function WeatherComponentHooks() {
    const today = new Date();
    const [time, setTime] = useState('');
    const [day, setDay] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Interval executed");
            setTime((time) => today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds());
          }, 1000);
        
    },[]);
 
    return (
        <div>
             <div className = {styles.divClass}>
                <h5>React Component</h5>
                <h2>Time is {time}</h2>
                <button onClick={()=>setDay(day+1)}>Click</button>
                <br></br>
                {day}
            </div>
        </div>
    )
}

export default WeatherComponentHooks
