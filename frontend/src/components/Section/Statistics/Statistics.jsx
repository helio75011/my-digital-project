// StatisticsSection.js
import React from 'react';
import './Statistics.css'; // Make sure the CSS file is in the same directory
import Arrow from './uploads/arrow.png'

const Statistics = () => {
  return (
    <section className="statistics-section">
      <div className='statistic-parent'>
        <div className="statistic">
          <span className="">plus</span>
          <span className="statistic-number">200</span>
          <span className="statistic-description">psychologues</span>
        </div>
        <img src={Arrow} />
      </div>
      <div className='statistic-parent'>
        <div className="statistic">
          <span className="">plus</span>
          <span className="statistic-number">1000</span>
          <span className="statistic-description">participants</span>
        </div>
        <img src={Arrow} />
      </div>
      <div className='statistic-parent'>
        <div className="statistic">
          <span className="statistic-number">80%</span>
          <span className="statistic-description">évaluations positives</span>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
