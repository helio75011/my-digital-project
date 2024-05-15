import React from 'react'
import './Diary.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import DiarySection from '../../../components/Diary-section/Diary-section'

const Diary = () => {
  return (
    <div>
      <HeaderLogin />
      <div className='Diary-flex'>
        <HeaderAdmin />
        <DiarySection />
      </div>
    </div>
  )
}

export default Diary