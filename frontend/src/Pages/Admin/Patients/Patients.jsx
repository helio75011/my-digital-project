import React from 'react'
import "./Patients.css"
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import PatientsSection from '../../../components/Patients-section/Patients-section'

const Patients = () => {
  return (
    <div>
      <HeaderLogin />
      <div className='Patients-flex'>
        <HeaderAdmin />
        <PatientsSection />
      </div>
    </div>
  )
}

export default Patients