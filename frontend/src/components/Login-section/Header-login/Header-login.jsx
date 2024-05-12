// Header.js
import React from 'react';
import './Header-login.css'; // Only if you're using a separate CSS file
import Logo from './uploads/Logo.png'
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="nav-logo" to="/">
          <img src={Logo} alt="Logo"/>
        </Link>
        <div className="sidebar">
          <div className="nav-actions">
            {/* <a href="/signin" className="sign-in"><b></b></a> */}
            <Link className="sign-in" to="/login"><b>S'identifier</b></Link>
            <a href="/start" className="start">Commencer</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLogin;
