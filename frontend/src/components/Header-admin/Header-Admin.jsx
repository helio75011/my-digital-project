import React from 'react';
import './Header-Admin.css'; // Assurez-vous de créer ce fichier CSS

function HeaderAdmin() {
  return (
    <div className="sidebarAdmin">
      <div className="menuItem">
        <span className="icon">&#x1F4CA;</span>
        <span className="title">Journal</span>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F4AC;</span>
        <span className="title">Chat</span>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F465;</span>
        <span className="title">Mes patients</span>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F4C5;</span>
        <span className="title">Calendrier</span>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F4E6;</span>
        <span className="title">Événements</span>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F4E6;</span>
        <span className="title">Ressources</span>
      </div>
      <div className="menuGroup">
        <div className="menuItem">
          <span className="icon">&#x1F4CC;</span>
          <span className="title">Centre d'aide</span>
        </div>
        <div className="menuItem">
          <span className="icon">&#x1F4DD;</span>
          <span className="title">Paramètres</span>
        </div>
      </div>
      <div className="menuItem">
        <span className="icon">&#x1F512;</span>
        <span className="title">Se déconnecter</span>
      </div>
    </div>
  );
}

export default HeaderAdmin;
