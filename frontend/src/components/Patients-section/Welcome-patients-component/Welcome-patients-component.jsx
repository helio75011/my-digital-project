// src/PatientsBanner.js
import React from 'react';
import './Welcome-patients-component.css';

const WelcomePatientsComponent = () => {
    return (
        <div className="patients-banner">
            <span className="banner-title">Mes patients</span>
            <span className="banner-description">Ici vous pouvez accéder à la liste de vos patients et consulter leurs informations</span>
        </div>
    );
};

export default WelcomePatientsComponent;
