// src/EventsBanner.js
import React from 'react';
import './Welcome-event-component.css';

const WelcomeEventComponent = () => {
    return (
        <div className="events-banner">
            <span className="banner-title">Événements</span>
            <span className="banner-description">
                Découvrez une multitude d’activités sociales passionnantes près de chez vous!
            </span>
        </div>
    );
};

export default WelcomeEventComponent;
