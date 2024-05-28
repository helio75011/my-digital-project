// src/UserHeader.js
import React, { useState } from 'react';
import './UserHeader.css';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';

const UserHeader = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);
    const toggleHelp = () => setIsHelpOpen(!isHelpOpen);
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

    return (
        <div className="user-header">
            <div className="logo">
                <span className="logo-text">Soutien Plus</span>
            </div>
            <div className="icons">
                <div className="icon" onClick={toggleNotification}>
                    <FaBell />
                    {isNotificationOpen && (
                        <div className="dropdown notification-dropdown">
                            <div className="alert-item">
                                <img src="https://via.placeholder.com/40" alt="Dr. Metz" />
                                <div className="alert-content">
                                    <p>Votre rdv avec Dr. Metz est prévu pour aujourd'hui à 10h</p>
                                    <p>La durée: 20 min</p>
                                    <button>annuler</button>
                                </div>
                            </div>
                            <div className="alert-item">
                                <img src="https://via.placeholder.com/40" alt="Dr. Metz" />
                                <div className="alert-content">
                                    <p>Votre rdv avec Dr. Metz est prévu pour demain à 10h</p>
                                    <p>La durée: 20 min</p>
                                    <button>annuler</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="icon" onClick={toggleHelp}>
                    <FaQuestionCircle />
                    {isHelpOpen && (
                        <div className="dropdown help-dropdown">
                            <p>Nous contacter</p>
                            <p>Ressources de crise</p>
                            <p>FAQ</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="profile" onClick={toggleProfile}>
                <img className="profile-image" src="https://via.placeholder.com/40" alt="Gagnot Sophie" />
                <span className="profile-name">Gagnot Sophie</span>
                {isProfileOpen && (
                    <div className="dropdown profile-dropdown">
                        <p>Mon compte</p>
                        <p>Abonnement</p>
                        <p>Mon psychologue</p>
                        <p>Se déconnecter</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserHeader;
