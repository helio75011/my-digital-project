import React from 'react'
import './Subscription.css'
import HeaderLogin from '../../../components/Login-section/Header-login/Header-login'
import HeaderAdmin from '../../../components/Header-admin/Header-Admin'
import SubscriptionSection from '../../../components/Subscription-section/Subscription-section'

const Subscription = () => {
  return (
    <div>
        <HeaderLogin />
        <div className='subscription-flex'>
          <HeaderAdmin />
          <SubscriptionSection />
        </div>
    </div>
  )
}

export default Subscription