import React from 'react';
import './Welcome-diary-component.css'; // Assurez-vous de créer ce fichier CSS

function WelcomeDiaryComponent() {
  return (
    <div className="welcomeBanner">
      <h1 className="welcomeTitle">Bienvenue, Dr. Metz</h1>
      <p className="welcomeMessage">Nous espérons que vous passerez une bonne journée aujourd’hui.</p>
    </div>
  );
}

export default WelcomeDiaryComponent;
