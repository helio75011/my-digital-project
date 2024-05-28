// Header.js
import React from 'react';
import './Header-login.css'; // Only if you're using a separate CSS file
import Logo from './uploads/Logo.png'
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <header className="header-login">
      <nav className="navbar-login">
        <Link className="nav-logo-login" to="/">
          <img src={Logo} alt="Logo"/>
        </Link>
        <div className="sidebar-login">
          <div className="nav-actions-login">
            <Link className="sign-in-login" to="/count"><b>Mon compte</b></Link>
            <Link className="sign-in-login" to="/login"><b>S'identifier</b></Link>
            {/* <a href="/start" className="start-login">Commencer</a> */}
            <Link className='start-login' to="/register">Commencer</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLogin;
