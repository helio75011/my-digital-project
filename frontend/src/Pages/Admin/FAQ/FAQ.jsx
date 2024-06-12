import React from 'react'
import './FAQ.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import FAQSection from '../../../components/FAQ-section/FAQ-section'

const FAQ = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='FAQ-flex'>
            <HeaderAdmin />
            <FAQSection />
        </div>
    </div>
  )
}

export default FAQ