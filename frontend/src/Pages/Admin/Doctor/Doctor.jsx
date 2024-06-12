import React from 'react'
import './Doctor.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import DoctorSection from '../../../components/Doctor-section/Doctor-section'

const Doctor = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='doctor-flex'>
            <HeaderAdmin />
            <DoctorSection />
        </div>
    </div>
  )
}

export default Doctor