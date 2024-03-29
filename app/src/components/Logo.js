import React from "react"
import styles from "../utils/index"
import atlas from "../assets/atlas.png"

const Logo = () => {
  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} relative mb-0 lg:mb-10`}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-start">
          <img src={atlas} alt="Logo" className="h-8 w-11" />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Logo
