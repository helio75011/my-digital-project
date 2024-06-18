// src/Calendar.js
import React from 'react';
import './Time-calendar-component.css';

const events = [
    { day: 1, time: '09:20 AM', description: 'RDV - consultation vidéo', name: 'Sophie', color: 'green' },
    { day: 3, time: '09:20 AM', description: 'RDV - consultation vidéo', name: 'Sophie', color: 'red' },
    { day: 2, time: '09:20 AM', description: 'RDV - consultation vidéo', name: 'Sophie', color: 'yellow' },
    { day: 5, time: '09:20 AM', description: 'RDV - consultation vidéo', name: 'Sophie', color: 'blue' }
];

const TimeCalendarComponent = () => {
    return (
        <div className="calendar">
            <div className="calendar-header-calendar">
                <div className="time-header">Time</div>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div className="day-header-right-calendar" key={index}>{day}</div>
                ))}
            </div>
            <div className="calendar-body">
                {[...Array(5)].map((_, rowIndex) => (
                    <div className="calendar-row" key={rowIndex}>
                        <div className="time-cell-right-calendar">09:20 AM</div>
                        {[...Array(7)].map((_, colIndex) => {
                            const currentDay = colIndex + rowIndex * 7;
                            const event = events.find(e => e.day === currentDay + 1);
                            return (
                                <div className="day-cell" key={colIndex}>
                                    <div className="date">{currentDay + 1}</div>
                                    {event && (
                                        <div className="event" style={{ backgroundColor: event.color }}>
                                            <div>{event.description}</div>
                                            <div>{event.name}</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeCalendarComponent;
