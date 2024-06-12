import React from 'react'
import './Crise-section.css'
import WelcomeCriseComponent from './Welcome-crise-component/Welcome-crise-component'
import NumberCriseComponent from './Number-crise-component/Number-crise-component'

const CriseSection = () => {
  return (
    <div className='body-crise'>
        <WelcomeCriseComponent />
        <NumberCriseComponent />
    </div>
  )
}

export default CriseSection