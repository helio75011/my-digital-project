import React from 'react'
import './Crise.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'


const Crise = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='crise-flex'>
            <HeaderAdmin />
            {/* <CountSection /> */}
        </div>
    </div>
  )
}

export default Crise