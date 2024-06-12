import React from 'react';
import './Change-Doctor-component.css';

const ChangeDoctorComponent = ({ onClose }) => {
  return (
    <div className="modal-content">
      <h2>Demande pour un nouveau psychologue</h2>
      <p>Je préférerais un nouveau psychologue avec de l'expérience en:</p>
      <ul>
        <li>
          <input type="checkbox" /> Expérience en gestion du stress et de l'anxiété liés à l'isolement social.
        </li>
        <li>
          <input type="checkbox" /> Compétence dans le développement de stratégies pour améliorer la connexion sociale et les relations interpersonnelles.
        </li>
        <li>
          <input type="checkbox" /> Spécialisation dans le traitement de la dépression causée par l'isolement social.
        </li>
        <li>
          <input type="checkbox" /> Expertise en coaching pour renforcer les compétences sociales et la confiance en soi.
        </li>
        <li>
          <input type="checkbox" /> Capacité à intégrer des méthodes de thérapie en ligne pour soutenir les patients isolés géographiquement ou socialement.
        </li>
        <li>
          <input type="checkbox" /> Connaissance des ressources locales et des groupes de soutien pour aider les patients à s'intégrer dans leur communauté.
        </li>
      </ul>
      <p>Raison de votre changement de psychologue</p>
      <textarea placeholder="raison..." maxLength="100" rows="4"></textarea>
      <div className="modal-footer">
        <button onClick={onClose}>Annuler</button>
        <button>Demander un nouveau psychologue</button>
      </div>
    </div>
  );
};

export default ChangeDoctorComponent;
