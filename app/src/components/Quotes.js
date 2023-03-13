import React from 'react'
import styles from '../utils/index';
import QuotesApi from '../utils/QuotesApi';

const Quotes = () => {
    return (
      <div className={`${styles.innerWidth} ${styles.xPaddings} relative`}>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-start">
            <p>You know -</p>
            <QuotesApi category="environmental" />
          </div>
          <div>ff</div>
        </div>
      </div>
    )
};

export default Quotes;
