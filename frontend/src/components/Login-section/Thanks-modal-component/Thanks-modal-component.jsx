import React from 'react';
import ReactModal from 'react-modal';
import './Thanks-modal-component.css';

const ThanksModalComponent = ({ isOpen, onRequestClose, formData }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button className="close-button" onClick={onRequestClose}>&times;</button>
      <h2>Merci pour votre paiement</h2>
      <p>Nous avons bien reçu votre paiement et vos informations suivantes :</p>
      <ul>
        <li>Nom: {formData.lastName}</li>
        <li>Prénom: {formData.firstName}</li>
        <li>Email: {formData.email}</li>
      </ul>
    </ReactModal>
  );
};

export default ThanksModalComponent;

