import React from "react"
import styles from "../utils/index"
import QuotesApi from "../utils/QuotesApi"
import WeatherDisplay from "./WeatherDisplay"

const Main = () => {
  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} relative mt-20`}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-start mb-20 lg:mb-0">
          <p>You know —</p>
          <QuotesApi category="environmental" />
        </div>
        <div>
          <WeatherDisplay />
        </div>
      </div>
    </div>
  )
}

export default Main
