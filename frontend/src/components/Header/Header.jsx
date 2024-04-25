// Header.js
import React from 'react';
import './Header.css'; // Only if you're using a separate CSS file

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="nav-logo">Soutien Plus</a>
        <div className="nav-links">
          <a href="/about">À propos</a>
          <a href="/volunteer">Bénévolat</a>
          <a href="/advice">Conseils</a>
          <a href="/events">Événements</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a href="/signin" className="sign-in">S'identifier</a>
          <a href="/start" className="start">Commencer</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
