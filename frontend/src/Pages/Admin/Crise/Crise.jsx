import React from 'react'
import './Crise.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import CriseSection from '../../../components/Crise-section/Crise-section'

const Crise = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='crise-flex'>
            <HeaderAdmin />
            <CriseSection />
        </div>
    </div>
  )
}

export default Crise