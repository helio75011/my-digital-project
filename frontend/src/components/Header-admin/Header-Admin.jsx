import React from 'react';
import './Header-Admin.css'; // Assurez-vous de créer ce fichier CSS
import { Link, useNavigate } from 'react-router-dom';

function HeaderAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="sidebarAdmin">
      <div className="menuItem">
        <span className="icon">&#x1F4CA;</span>
        <Link className='title' to="/diary">Journal</Link>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F4AC;</span>
        <Link className='title' to="/chat">Chat</Link>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F465;</span>
        <Link className='title' to="/patients">Mes patients</Link>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F4C5;</span>
        <Link className='title' to="/calendar">Calendrier</Link>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F4E6;</span>
        <Link className='title' to="/event">Événements</Link>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F4E6;</span>
        <Link className='title' to="/resource">Ressources</Link>
      </div>
      <div className="menuItem" onClick={handleLogout}>
        <span className="icon">&#x1F512;</span>
        <span className="title">Se déconnecter</span>
      </div>
    </div>
  );
}

export default HeaderAdmin;
