import React from 'react'
import './Resource.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'

const Resource = () => {
  return (
    <div>
      <HeaderLogin />
      <div className='Resource-flex'>
        <HeaderAdmin />        
      </div>
    </div>
  )
}

export default Resource