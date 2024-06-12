import React from 'react'
import './Subscription-section.css'
import PaymentSubscriptionComponent from './Payment-Subscription-component/Payment-Subscription-component'
import WelcomeSubscriptionComponent from './Welcome-Subscription-component/Welcome-Subscription-component'

const SubscriptionSection = () => {
  return (
    <div className='body-Subscription'>
        <WelcomeSubscriptionComponent />
        <PaymentSubscriptionComponent />
    </div>
  )
}

export default SubscriptionSection