import React from 'react'
import './Page-Event.css'
import HeaderLogin from '../../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../../components/Header-admin/Header-Admin'
import PageEventSection from '../../../../components/Event-section/Page-Event-section/Page-Event-section'

const PageEvent = () => {
  return (
    <div>
      <HeaderLogin />
      <div className='Page-Event-flex'>
        <HeaderAdmin />
        <PageEventSection />
      </div>
    </div>
  )
}

export default PageEvent