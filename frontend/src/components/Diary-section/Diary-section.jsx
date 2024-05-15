import React from 'react'
import WelcomeDiaryComponent from './Welcome-diary-component/Welcome-diary-component'
import SessionDiaryComponent from './Session-diary-component/Session-diary-component'
import RegisterDiaryComponent from './Register-diary-component/Register-diary-component'

const DiarySection = () => {
  return (
    <div>
      <WelcomeDiaryComponent />
      <SessionDiaryComponent />
      <RegisterDiaryComponent />
    </div>
  )
}

export default DiarySection