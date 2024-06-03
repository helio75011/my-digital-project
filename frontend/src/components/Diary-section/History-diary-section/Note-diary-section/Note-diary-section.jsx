import React from 'react'
import './Note-diary-section.css'
import WelcomeHistoryComponent from '../Welcome-history-component/Welcome-history-component'
import OptionDiaryComponent from '../Option-diary-component/Option-diary-component'
import NoteDiaryComponent from './Note-diary-component/Note-diary-component' 

const NoteDiarySection = () => {
  return (
    <div className='body-note-diary'>
        <WelcomeHistoryComponent />
        <OptionDiaryComponent />
        <NoteDiaryComponent />
    </div>
  )
}

export default NoteDiarySection