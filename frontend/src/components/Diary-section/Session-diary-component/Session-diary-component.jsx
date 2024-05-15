import React from 'react';
import './Session-diary-component.css'; // Assurez-vous de créer ce fichier CSS

function SessionDiaryComponent() {
  return (
    <div>
      <div className='sessionDiaryTitle'>
        <h1>Vos Prochaines Sessions</h1>
        <a className='sessionDiaryLink' href="">voir tout</a>
      </div>
      <div className='sessionCard-parent'>
        <div className="sessionCard">
          <div className="sessionInfo">
            <div className="sessionDate">04 avril 2024 à 10h</div>
            <div className="sessionType">RDV - consultation vidéo</div>
          </div>
          <div className="patientInfo">
            <div className="patientIcon">&#128100;</div> {/* Icône simplifiée, remplacez par une vraie icône/image selon besoin */}
            <div className="patientName">Marie</div>
          </div>
        </div>
        <div className="sessionCard">
          <div className="sessionInfo">
            <div className="sessionDate">04 avril 2024 à 10h</div>
            <div className="sessionType">RDV - consultation vidéo</div>
          </div>
          <div className="patientInfo">
            <div className="patientIcon">&#128100;</div> {/* Icône simplifiée, remplacez par une vraie icône/image selon besoin */}
            <div className="patientName">Marie</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionDiaryComponent;
