
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const weather = {
    temperature: 25,
    conditions: "Sunny"
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weather={weather}/>
    </div>
  )
}

export default App
