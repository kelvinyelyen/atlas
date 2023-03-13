import React from "react"
import styles from "../utils/index"

const Logo = () => {
  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} relative mb-10`}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-start">
          <h1>LOGO</h1>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Logo
