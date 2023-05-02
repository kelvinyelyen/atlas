const API_KEY = "a315b48a8213611e3e0c0800efd22580"

export const fetchWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
  const data = await response.json()
  if (response.ok) {
    return data
  } else {
    throw new Error(data.message)
  }
}
