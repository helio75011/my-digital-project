import React from 'react';
import './Welcome-Doctor-component.css';

const WelcomeDoctorComponent = () => {
    return (
        <div className="psychologist-header">
            <h2>Mon psychologue</h2>
            <p>Ci-dessous, vous trouverez le profil de votre psychologue</p>
            <button className="change-psychologist-button">changer le psychologue</button>
        </div>
    );
};

export default WelcomeDoctorComponent;
