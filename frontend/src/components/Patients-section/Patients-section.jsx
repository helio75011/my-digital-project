import React from 'react'
import "./Patients-section.css"
import WelcomePatientsComponent from './Welcome-patients-component/Welcome-patients-component'
import PersonPatientsComponent from './Person-patients-component/Person-patients-component'

const PatientsSection = () => {
  return (
    <div className='body-patients'>
        <WelcomePatientsComponent />
        <PersonPatientsComponent />
    </div>
  )
}

export default PatientsSection