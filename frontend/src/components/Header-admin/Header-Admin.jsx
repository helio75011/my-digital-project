import React from 'react';
import './Header-Admin.css'; // Assurez-vous de créer ce fichier CSS
import { Link, useNavigate } from 'react-router-dom';
import calendrier from './uploads/calendrier.png'
import chat from './uploads/chat.png'
import deconnexion from './uploads/deconnexion.png'
import evenement from './uploads/evenement.png'
import journal from './uploads/journal.png'
import ressource from './uploads/ressource.png'
import patient from './uploads/patient.png'

function HeaderAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="sidebarAdmin">
      <div className="menuItem">
        <span className="icon"><img src={journal} /></span>
        <Link className='title-header-admin' to="/diary">Journal</Link>
      </div>
      <div className="menuItem">
        <span className="icon"><img src={chat} /></span>
        <Link className='title-header-admin' to="/chat">Chat</Link>
      </div>
      <div className="menuItem">
        <span className="icon"><img src={patient} /></span>
        <Link className='title-header-admin' to="/patients">Mes patients</Link>
      </div>
      <div className="menuItem">
        <span className="icon"><img src={calendrier} /></span>
        <Link className='title-header-admin' to="/calendar">Calendrier</Link>
      </div>
      <div className="menuItem">
        <span className="icon"><img src={evenement} /></span>
        <Link className='title-header-admin' to="/event">Événements</Link>
      </div>
      <div className="menuItem">
        <span className="icon"><img src={ressource} /></span>
        <Link className='title-header-admin' to="/resource">Ressources</Link>
      </div>
      <div className="menuItem" onClick={handleLogout}>
        <span className="icon"><img src={deconnexion} /></span>
        <span className="title-header-admin">Se déconnecter</span>
      </div>
    </div>
  );
}

export default HeaderAdmin;
