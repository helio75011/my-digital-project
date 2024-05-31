import React from 'react';
import './Welcome-diary-component.css'; // Assurez-vous de créer ce fichier CSS

function WelcomeDiaryComponent() {
  return (
    <div className="welcome-banner">
        <span className="welcome-text">Bienvenue, Sophie</span>
        <span className="welcome-subtext">Nous espérons que vous passerez une bonne journée aujourd'hui.</span>
    </div>
  );
}

export default WelcomeDiaryComponent;
