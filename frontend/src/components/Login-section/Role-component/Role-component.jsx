// src/RoleSelection.js
import React from 'react';
import './Role-component.css';
import { Link } from 'react-router-dom';

const RoleSelection = () => {
  return (
    <div className='body-role'>
      <div className="container-role">
        <h1 className="title">Sélection d'un rôle</h1>
        <div className="card-container">
          <Link className="card" to="/psycho-one">
            <img src="https://via.placeholder.com/50" alt="Participant" />
            <div className="card-title">Participant</div>
          </Link>
          <Link className="card" to="/volunteer">
            <img src="https://via.placeholder.com/50" alt="Bénévole" />
            <div className="card-title">Bénévole</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;