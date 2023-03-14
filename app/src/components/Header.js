import React, { useState, useContext } from "react"
import styles from "../utils/index"
import searchImage from "../assets/search.svg"
import { DataContext } from "../context/DataContext"

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [city, setCity] = useState("")
  const { setCity: setCityContext } = useContext(DataContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    setCityContext(city)
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

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
          <button onClick={handleOpenModal}>
            <img className="text-black" src={searchImage} alt="search" />
          </button>
          {isModalOpen && (
            <div className="modal fixed top-0 left-0 w-full h-full bg-opacity-30 bg-gray-600 flex items-center justify-center z-10 bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-100">
              <div className="modal-content bg-white p-6 rounded-lg shadow-lg ">
              
                <span
                  className="close absolute top-0 right-0 p-4 text-[30px] cursor-pointer mr-0 lg:mr-12"
                  onClick={handleCloseModal}
                >
                  &times;
                </span>

                <form
                  onSubmit={handleSubmit}
                  className="relative flex w-[350px] flex-wrap items-stretch"
                >
                  <input
                    type="text"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="border border-gray-400 rounded-lg p-2 w-[300px]"
                    placeholder="Search"
                    aria-label="Search"
                  />

                  <button type="submit" className="text-white">
                    <span
                      class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                      id="basic-addon2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>

                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
