import React from 'react'
import './Chat.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import ChatSection from '../../../components/Chat-section/Chat-section'

const Chat = () => {
  return (
    <div>
      <HeaderLogin />
      <div className='Chat-flex'>
        <HeaderAdmin />
        <ChatSection />
      </div>
    </div>
  )
}

export default Chat