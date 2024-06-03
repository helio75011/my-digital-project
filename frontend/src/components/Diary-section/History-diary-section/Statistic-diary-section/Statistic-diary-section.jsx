import React from 'react'
import './Statistic-diary-section.css'
import WelcomeHistoryComponent from '../Welcome-history-component/Welcome-history-component'
import OptionDiaryComponent from '../Option-diary-component/Option-diary-component'
import StatisticDiaryComponent from './Statistic-diary-component/Statistic-diary-component'

const StatisticDiarySection = () => {
  return (
    <div className='body-statistic'>
        <WelcomeHistoryComponent />
        <OptionDiaryComponent />
        <StatisticDiaryComponent />
    </div>
  )
}

export default StatisticDiarySection