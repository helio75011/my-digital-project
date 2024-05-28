import React from 'react'
import './Count.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import CountSection from '../../../components/Count-section/Count-section'

const Count = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='count-flex'>
            <HeaderAdmin />
            <CountSection />
        </div>
    </div>
  )
}

export default Count