// src/RoleSelection.js
import React from 'react';
import './Role-component.css';
import { Link } from 'react-router-dom';
import logo from './uploads/logo.png'
import psy from './uploads/psy.png'

const RoleSelection = () => {
  return (
    <div className='body-role'>
      <div className="container-role">
        <h1 className="title-role">Sélection d'un rôle</h1>
        <div className="card-container">
          <Link className="card" to="/psycho-one">
            <div className="card-title">Participant</div>
            <img src={logo} alt="Participant" />
            <div className='card-para'>Rejoigner pour une écoute attentive et un soutien chaleureux</div>
          </Link>
          <Link className="card" to="/volunteer">
            <div className="card-title">Bénévole</div>
            <img src={psy} alt="Bénévole" />
            <div className='card-para'>Rejoindre pour aider ceux qui se sentent isolés et seuls</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;