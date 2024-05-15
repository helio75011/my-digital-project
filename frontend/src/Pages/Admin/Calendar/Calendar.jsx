import React from 'react'
import './Calendar.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import CalendarSection from '../../../components/Calendar-section/Calendar-section'

const Calendar = () => {
  return (
    <div>
      <HeaderLogin />
      <div className='Calendar-flex'>
        <HeaderAdmin />
        <CalendarSection />
      </div>
    </div>
  )
}

export default Calendar