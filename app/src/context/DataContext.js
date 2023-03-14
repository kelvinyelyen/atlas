import React, { createContext, useState, useEffect } from "react"
import { fetchWeatherData } from "../utils/WeatherAPI"

export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState("Accra")

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(city)
        setWeatherData(data)
      } catch (error) {
        console.error(error)
      }
    }
    getWeatherData()
  }, [city])

  const values = {
    weatherData,
    setCity,
  }

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export default DataContextProvider
