import React from 'react';
import styles from "../utils/index"

const Footer = () => {
    return (
      <div
        className={`${styles.innerWidth} ${styles.paddings} z-10 fixed bottom-0 left-0 right-0 hidden md:block`}
      >
        <div className="flex justify-between">
          <div className="text-start">
            <ul className="flex justify-between gap-8">
              <li className="underline">
                <a href="https://github.com/kelvinyelyen/weatherwidget">
                  Github
                </a>
              </li>
              <li className="underline">
                <a href="https://github.com/kelvinyelyen?tab=repositories">
                  More Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-secondary-white dark:text-neutral-600">
              &#169; {new Date().getFullYear()} Designed and Developed by Kelvin
              Yelyen
            </p>
          </div>
        </div>
      </div>
    )
}

export default Footer;
