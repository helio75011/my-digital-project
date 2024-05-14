// src/ThankYouModal.js
import React from 'react';
import ReactModal from 'react-modal';
import './Thanks-modal-component.css';

const ThanksModalComponent = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay-thankyou"
      className="modal-content-thankyou"
    >
      <h2>Merci!</h2>
      <p className="thankyou-message">
        Votre paiement a été confirmé avec succès, et vous avez désormais accès à toutes les fonctionnalités de notre service abonnement Premium. Nous espérons que notre service répondra à vos attentes et vous offrira le soutien dont vous avez besoin.
      </p>
      <button className="continue-button" onClick={onRequestClose}>Continuer</button>
    </ReactModal>
  );
};

export default ThanksModalComponent;
