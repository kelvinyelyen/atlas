import React from "react"
import styles from "../utils/index"
import QuotesApi from "../utils/QuotesApi"
import WeatherDisplay from "./WeatherDisplay"

const Main = () => {
  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} relative`}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-start">
          <p>You know -</p>
          <QuotesApi category="environmental" />
        </div>
        <div><WeatherDisplay /></div>
      </div>
    </div>
  )
}

export default Main
