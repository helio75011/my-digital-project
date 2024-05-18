// src/MiniCalendar.js
import React, { useState } from 'react';
import './Smile-calendar-component.css';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const SmileCalendarComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2023, 3, 1)); // Starting with April 2023

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const getDayCells = () => {
        const dayCells = [];
        for (let i = 0; i < firstDayOfWeek - 1; i++) {
            dayCells.push(<div key={`empty-${i}`} className="day-cell empty"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            dayCells.push(
                <div key={day} className="day-cell">
                    <span className={day === 3 ? 'highlight' : ''}>{day}</span>
                </div>
            );
        }
        return dayCells;
    };

    return (
        <div className="mini-calendar">
            <div className="calendar-header">
                <span className="month-year">{currentDate.toLocaleString('default', { month: 'long' })}, {year}</span>
                <div className="navigation">
                    <button onClick={handlePrevMonth}>&#8592;</button>
                    <button onClick={handleNextMonth}>&#8594;</button>
                </div>
            </div>
            <div className="calendar-body">
                <div className="days-of-week">
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className="day-header">{day}</div>
                    ))}
                </div>
                <div className="days-grid">
                    {getDayCells()}
                </div>
            </div>
        </div>
    );
};

export default SmileCalendarComponent;
