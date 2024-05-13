// src/Check-Email-component.js
import React, { useState } from 'react';
import './Check-Email-component.css';
import { Link } from 'react-router-dom';

const CheckEmailComponent = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleValidate = () => {
    // Logic to handle code validation
    console.log('Verification code:', verificationCode);
  };

  const handleResendCode = () => {
    // Logic to handle resending the code
    console.log('Resend code');
  };

  return (
    <div className="body-email-verification">
      <div className="container-email-verification">
        <h1 className="title-email-verification">Vérification par email</h1>
        <div className="step-indicator">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`step ${step === 3 ? 'active' : ''}`}>
              {step}
            </div>
          ))}
        </div>
        <p className="message-email-verification">
          Un numéro de confirmation a été envoyé à votre adresse e-mail.
        </p>
        <p className="message-email-verification">
          Écrivez votre code sécurisé
        </p>
        <input
          className="code-input"
          type="text"
          maxLength="4"
          value={verificationCode}
          onChange={handleCodeChange}
        />
        {/* <button className="button-validate" onClick={handleValidate}>
          Valider
        </button> */}
        <Link className="button-validate" to='/result-login'>Valider</Link>
        <button className="button-resend" onClick={handleResendCode}>
          Renvoyer le code
        </button>
      </div>
    </div>
  );
};

export default CheckEmailComponent;
