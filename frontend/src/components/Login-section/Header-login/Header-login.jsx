// Header.js
import React from 'react';
import './Header-login.css'; // Only if you're using a separate CSS file
import Logo from './uploads/Logo.png'

const HeaderLogin = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          <img src={Logo} alt="Logo"/>
        </a>
        <div className="sidebar">
          <div className="nav-actions">
            <a href="/signin" className="sign-in"><b>S'identifier</b></a>
            <a href="/start" className="start">Commencer</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLogin;
