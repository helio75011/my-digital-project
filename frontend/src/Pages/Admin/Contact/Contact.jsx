import React from 'react'
import './Contact.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import ContactSection from '../../../components/Contact-section/Contact-section'

const Contact = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='count-flex'>
            <HeaderAdmin />
            <ContactSection />
        </div>
    </div>
  )
}

export default Contact