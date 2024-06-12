import React from 'react'
import './FAQ-section.css'
import WelcomeFAQcomponent from './Welcome-FAQ-component/Welcome-FAQ-component'
import FormFAQComponent from './Form-FAQ-component/Form-FAQ-component'

const FAQSection = () => {
  return (
    <div className='body-FAQ'>
        <WelcomeFAQcomponent />
        <FormFAQComponent />
    </div>
  )
}

export default FAQSection