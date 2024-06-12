import React from 'react'
import './Doctor-section.css'
import WelcomeDoctorComponent from './Welcome-Doctor-component/Welcome-Doctor-component'
import ProfileDoctorComponent from './Profile-Doctor-component/Profile-Doctor-component'

const DoctorSection = () => {
  return (
    <div className='body-doctor'>
        <WelcomeDoctorComponent />
        <ProfileDoctorComponent />
    </div>
  )
}

export default DoctorSection