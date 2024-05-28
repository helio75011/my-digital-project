import React from 'react'
import "./Count-section.css"
import WelcomeCountComponent from './Welcome-count-component/Welcome-count-component'
import AccountCountComponent from './Account-count-component/Account-count-component'

const CountSection = () => {
  return (
    <div className='body-count'>
        <WelcomeCountComponent />
        <AccountCountComponent />
    </div>
  )
}

export default CountSection