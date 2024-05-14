// src/PaymentModal.js
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './Payment-modal-component.css';
import ThanksModalComponent from '../Thanks-modal-component/Thanks-modal-component'

ReactModal.setAppElement('#root');

const PaymentModalComponent = ({ isOpen, onRequestClose }) => {

    const [verificationCode, setVerificationCode] = useState('');
    const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false); // État pour ThankYouModal

    const handleCodeChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleValidate = () => {
        // Logique pour valider le code, supposons que cela réussisse
        setIsThankYouModalOpen(true); // Ouvrir ThankYouModal après validation
    };

    const handleResendCode = () => {
        console.log('Resend code');
    };

    const closeThankYouModal = () => {
        setIsThankYouModalOpen(false); // Fermer ThankYouModal
        onRequestClose(); // Peut-être fermer PaymentModal également
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
            <button onClick={handleValidate}>Validate</button>
            <button onClick={handleResendCode}>Resend Code</button>
      </form>
      <ThanksModalComponent isOpen={isThankYouModalOpen} onRequestClose={closeThankYouModal} />
    </ReactModal>
  );
};

export default PaymentModalComponent;