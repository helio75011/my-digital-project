// src/CalendarHeader.js
import React from 'react';
import './Welcome-calendar-component.css';

const WelcomeCalendarComponent = () => {
    return (
        <div className="calendar-header">
            <span className="calendar-month">Avril 2024</span>
            <span className="calendar-description">
                Votre calendrier pour visualiser les RDVs planifiés et les inscriptions aux événements.
            </span>
        </div>
    );
};

export default WelcomeCalendarComponent;
