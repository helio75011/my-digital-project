// Header.js
import React, { useState } from 'react';
import './Header-login.css'; // Only if you're using a separate CSS file
import Logo from './uploads/Logo.png'
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <div className="header">
            <Link to='/'>
              <div className="logo">
                <img src={Logo} />
              </div>
            </Link>
            <div className="icons">
                <div className="icon" onClick={() => setShowNotifications(!showNotifications)}>
                    🔔
                    {showNotifications && (
                        <div className="dropdown notifications">
                            <div className="dropdown-header">
                                <span>Alert</span>
                                <button onClick={() => setShowNotifications(false)}>x</button>
                            </div>
                            <div className="dropdown-body">
                                <div className="notification-item">
                                    <p>Votre rdv avec Dr. Metz est prévu pour aujourd'hui à 10h</p>
                                    <p>La durée: 20 min</p>
                                    <button>annuler</button>
                                </div>
                                <div className="notification-item">
                                    <p>Votre rdv avec Dr. Metz est prévu pour demain à 10h</p>
                                    <p>La durée: 20 min</p>
                                    <button>annuler</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="icon" onClick={() => setShowHelp(!showHelp)}>
                    ❓
                    {showHelp && (
                        <div className="dropdown help">
                            <div className="dropdown-body">
                                <p>Nous contacter</p>
                                <p>Ressources de crise</p>
                                <p>FAQ</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="profile" onClick={() => setShowProfile(!showProfile)}>
                    <img src="https://via.placeholder.com/30" alt="Profile" />
                    <span>Gagnot Sophie</span>
                    {showProfile && (
                        <div className="dropdown profile">
                            <div className="dropdown-body">
                                <Link to='/count'><p>Mon compte</p></Link>
                                <p>Abonnement</p>
                                <p>Mon psychologue</p>
                                <p>Se déconnecter</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderLogin;
