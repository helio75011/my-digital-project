// src/AlertNotification.js
import React from 'react';
import './Alert-calendar-component.css';
import { FaBell, FaTimes } from 'react-icons/fa';

const alerts = [
    { 
        id: 1, 
        user: 'Sophie', 
        date: 'aujourd\'hui à 10h', 
        duration: '20 min', 
        avatar: 'https://via.placeholder.com/30'
    },
    { 
        id: 2, 
        user: 'Marie', 
        date: 'demain à 14h', 
        duration: '20 min', 
        avatar: 'https://via.placeholder.com/30'
    }
];

const AlertCalendarComponent = () => {
    return (
        <div className="alert-notification">
            <FaBell className="bell-icon" />
            <div className="alert-box">
                <div className="alert-header">
                    <span>Alert</span>
                    <FaTimes className="close-icon" />
                </div>
                {alerts.map(alert => (
                    <div className="alert-item" key={alert.id}>
                        <div className="alert-avatar">
                            <img src={alert.avatar} alt={alert.user} />
                        </div>
                        <div className="alert-content">
                            <p>Votre rdv avec <strong>{alert.user}</strong> est prévu pour {alert.date}</p>
                            <p>La durée: {alert.duration}</p>
                            <button className="cancel-button">annuler</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlertCalendarComponent;
