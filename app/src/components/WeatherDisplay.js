import React, { useContext } from "react"
import { DataContext } from "../context/DataContext"

const WeatherDisplay = () => {
  const { weatherData } = useContext(DataContext)

  if (!weatherData) {
    return (
      <div>
        <div class="flex justify-center items-center">
          <div class="spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>
        {weatherData.name} {weatherData.timezone}
      </h2>
      <p>{weatherData.weather[0].description}</p>
      <img src={weatherData.weather[0].icon} alt="" />
      <h1 className="text-[90px]">{weatherData.main.temp} °C</h1>
    </div>
  )
}

export default WeatherDisplay
