import React from 'react'
import './Page-Event-section.css'
import WelcomeEventComponent from '../Welcome-event-component/Welcome-event-component'
import PageEventComponent from './Page-event-component/Page-event-component'

const PageEventSection = () => {
  return (
    <div className='body-page-event'>
        <WelcomeEventComponent />
        <PageEventComponent />
    </div>
  )
}

export default PageEventSection