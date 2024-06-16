import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../../../utils/api';

const CheckEmailComponent = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setError('Email non trouvé');
    }
  }, []);

  const handleValidate = () => {
    apiFetch('http://localhost:3000/verify', {
      method: 'POST',
      body: JSON.stringify({ email, code: verificationCode }),
    })
      .then(data => {
        if (data.message === 'Vérification réussie') {
          navigate('/result-login');
        } else {
          setError(data.message);
        }
      })
      .catch(error => {
        setError('Erreur lors de la vérification');
      });
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
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button className="button-validate" onClick={handleValidate}>
          Valider
        </button>
        {error && <p>{error}</p>}
        <button className="button-resend" onClick={() => console.log('Resend code')}>
          Renvoyer le code
        </button>
      </div>
    </div>
  );
};

export default CheckEmailComponent;
