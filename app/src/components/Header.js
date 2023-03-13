import React from "react"
import styles from "../utils/index"
import searchImage from "../assets/search.svg"

const Header = () => {
  return (
    <nav className={`${styles.innerWidth} ${styles.xPaddings} py-8 relative`}>
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="flex justify-between text-start text-[14px]">
        <div>
          <p>
            ATLAS — <br />
            WEATHER FOCUS
          </p>
        </div>
        <div className="hidden sm:block">
          <p>
            EMBRACE THE <br />
            ELEMENTS
          </p>
        </div>
        <div className="hidden sm:block">
          <p>
            A REMINDER THAT WE ARE ALL AT THE <br />
            MERCY OF THE ELEMENTS
          </p>
        </div>
        <div>
          <img className="text-black" src={searchImage} alt="search" />
        </div>
      </div>
    </nav>
  )
}

export default Header
