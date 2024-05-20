import React from 'react'
import './Event.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'

const Event = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='Event-flex'>
            <HeaderAdmin />
        </div>
    </div>
  )
}

export default Event