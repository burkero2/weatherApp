import React, { useState, useEffect } from "react";

function UserEffectCounter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  // Must Pass a function when the change to state depends on a previous state

  useEffect(() => {
    console.log("count 1 effect");
    document.title = count;
  }, [count]);

  // to limit what changes affect the refresh, pass an array called count as the second argument of the function.
  // This tells the useEffect hook that this function should only run when count changes.

  
  // Timer
  useEffect(() => {
    console.log("Creating timer");
    const interval = setInterval(() => {
      console.log("Interval executed");
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      //Script 42: CleanUp function stops the interval when the display is hidden
      console.log("cleaning up!");
      clearInterval(interval); //call clearInterval() function onto the interval const we created
    };
  }, []); //Script 43: Contains the second parameter so that it only runs once upon mounting

  return (
    <div>
      <h5>40 - Use Effect Counter</h5>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Count ({count})
      </button>
      <h2>Time is {time}</h2>
    </div>
  );
}

export default UserEffectCounter;
