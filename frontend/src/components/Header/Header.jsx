// Header.js
import React from 'react';
import './Header.css'; // Only if you're using a separate CSS file
import Logo from './uploads/Logo.png'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          <img src={Logo}/>
        </a>
        <div className="nav-links">
          <a href="/about"><b>À propos</b></a>
          <a href="/volunteer"><b>Bénévolat</b></a>
          <a href="/advice"><b>Conseils</b></a>
          <a href="/events"><b>Événements</b></a>
          <a href="/faq"><b>FAQ</b></a>
          <a href="/contact"><b>Contact</b></a>
        </div>
        <div className="nav-actions">
          <a href="/signin" className="sign-in"><b>S'identifier</b></a>
          <a href="/start" className="start">Commencer</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
