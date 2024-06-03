import React from 'react'
import './Note.css'
import HeaderLogin from '../../../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../../../components/Header-admin/Header-Admin'
import NoteDiarySection from '../../../../../components/Diary-section/History-diary-section/Note-diary-section/Note-diary-section'

const Note = () => {
  return (
    <div>
        <HeaderLogin />  
        <div className='note-flex'>
            <HeaderAdmin />
            <NoteDiarySection />
        </div>
    </div>
  )
}

export default Note