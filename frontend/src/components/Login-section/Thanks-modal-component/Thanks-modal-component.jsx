import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import './Thanks-modal-component.css';

const ThanksModalComponent = ({ isOpen, onRequestClose, email }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (email && isOpen) {
      axios.post('/get-user-info', { email })
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user info:', error);
        });
    }
  }, [email, isOpen]);

  if (!formData) {
    return null; // Ou un indicateur de chargement
  }

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