import React from 'react'
import './Diary-section.css'
import WelcomeDiaryComponent from './Welcome-diary-component/Welcome-diary-component'
import SessionDiaryComponent from './Session-diary-component/Session-diary-component'
import RegisterDiaryComponent from './Register-diary-component/Register-diary-component'
import RequestDiaryComponent from './Request-diary-component/Request-diary-component'
import StatisticDiaryComponent from './Statistic-diary-component/Statistic-diary-component'
import EventDiaryComponent from './Event-diary-component/Event-diary-component'
import ArticleDiaryComponent from './Article-diary-component/Article-diary-component'

const DiarySection = () => {
  return (
    <div className='body-diary'>
      <WelcomeDiaryComponent />
      <SessionDiaryComponent />
      <RegisterDiaryComponent />
      <div className='ReqStat'>
        <RequestDiaryComponent />
        <StatisticDiaryComponent />
      </div>
      <EventDiaryComponent />
      <ArticleDiaryComponent />
    </div>
  )
}

export default DiarySection