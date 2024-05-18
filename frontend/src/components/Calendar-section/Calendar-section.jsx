import React from 'react'
import "./Calendar-section.css"
import WelcomeCalendarComponent from './Welcome-calendar-component/Welcome-calendar-component'
import TimeCalendarComponent from './Time-calendar-component/Time-calendar-component'
import SmileCalendarComponent from './Smile-calendar-component/Smile-calendar-component'
import SlotCalendarComponent from './Slot-calendar-component/Slot-calendar-component'
import AlertCalendarComponent from './Alert-calendar-component/Alert-calendar-component'

const CalendarSection = () => {
  return (
    <div className='body-calendar'>
        <WelcomeCalendarComponent />
        <div className='flex-calendar'>
          <TimeCalendarComponent />
          <div className='column-calendar'>
            <SmileCalendarComponent />
            <SlotCalendarComponent />
            <AlertCalendarComponent />
          </div>
        </div>
    </div>
  )
}

export default CalendarSection