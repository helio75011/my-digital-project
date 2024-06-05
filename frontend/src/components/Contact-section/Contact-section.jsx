import React from 'react'
import './Contact-section.css'
import WelcomeContactComponent from './Welcome-contact-component/Welcome-contact-component'
import FormContactComponent from './Form-contact-component/Form-contact-component'

const ContactSection = () => {
  return (
    <div className='body-contact'>
        <WelcomeContactComponent />
        <FormContactComponent />
    </div>
  )
}

export default ContactSection