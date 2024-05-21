import React from 'react'
import './Event-section.css'
import WelcomeEventComponent from './Welcome-event-component/Welcome-event-component'
import FilterEventComponent from './Filter-event-component/Filter-event-component'
import GridEventComponent from './Grid-event-component/Grid-event-component'

const EventSection = () => {
  return (
    <div className='body-event'>
        <WelcomeEventComponent />
        <FilterEventComponent />
        <GridEventComponent />
    </div>
  )
}

export default EventSection