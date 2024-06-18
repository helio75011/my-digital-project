import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './Payment-modal-component.css';
import ThanksModalComponent from '../Thanks-modal-component/Thanks-modal-component';
import { apiFetch } from '../../../utils/api';

ReactModal.setAppElement('#root');

const PaymentModalComponent = ({ isOpen, onRequestClose, formData }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [newVerificationCode, setNewVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleValidate = () => {
    if (!verificationCode) {
      setError('Veuillez entrer le code de validation');
    } else {
      // Envoyer les données à la base de données
      apiFetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          lastName: formData.lastName,
          firstName: formData.firstName,
          acceptPolicy: formData.acceptPolicy,
          acceptNotifications: formData.acceptNotifications,
        }),
      })
      .then(data => {
        if (data.message) {
          setIsThankYouModalOpen(true);
          setError('');
        } else {
          setError(data.message);
        }
      })
      .catch(() => {
        setError('Erreur lors de l\'inscription');
      });
    }
  };

  const handleResendCode = () => {
    const generatedCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    setNewVerificationCode(generatedCode);
  };

  const closeThankYouModal = () => {
    setIsThankYouModalOpen(false);
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button className="close-button" onClick={onRequestClose}>&times;</button>
      <h2>10€ avec TVA</h2>
      <p className="payment-details">Veuillez saisir les détails de votre carte pour finaliser la transaction</p>
      <form>
        <div className="form-group">
          <label className="label" htmlFor="name">Nom</label>
          <input className="input" type="text" id="name" name="name" defaultValue="Sophie Gognet" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="cardNumber">Numéro de carte</label>
          <input className="input" type="text" id="cardNumber" name="cardNumber" defaultValue="1234 1234 1234 1234" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="expiry">Expiration</label>
          <input className="input" type="text" id="expiry" name="expiry" defaultValue="10/2025" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="cvv">CVV</label>
          <input className="input" type="text" id="cvv" name="cvv" defaultValue="123" />
        </div>
        <h2>Payment</h2>
        <input
          type="text"
          value={verificationCode}
          onChange={handleCodeChange}
          placeholder="Verification Code"
        />
        <button type="button" onClick={handleValidate}>Validate</button>
        <button type="button" onClick={handleResendCode}>Resend Code</button>
        {newVerificationCode && (
          <p className="verification-code">Nouveau code de vérification : {newVerificationCode}</p>
        )}
        {error && (
          <p className="error-message">{error}</p>
        )}
      </form>
      <ThanksModalComponent isOpen={isThankYouModalOpen} onRequestClose={closeThankYouModal} />
    </ReactModal>
  );
};

export default PaymentModalComponent;
