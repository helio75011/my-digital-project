import React from 'react'
import './Page-Resource.css'
import HeaderLogin from '../../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../../components/Header-admin/Header-Admin'
import PageResourceSection from '../../../../components/Resource-section/Page-Resource-section/Page-Resource-section'

const PageResource = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='Page-Resource-flex'>
            <HeaderAdmin />
            <PageResourceSection />
        </div>
    </div>
  )
}

export default PageResource