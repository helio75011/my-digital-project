import React from 'react'
import './Event.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import EventSection from '../../../components/Event-section/Event-section'

const Event = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='Event-flex'>
            <HeaderAdmin />
            <EventSection />
        </div>
    </div>
  )
}

export default Event