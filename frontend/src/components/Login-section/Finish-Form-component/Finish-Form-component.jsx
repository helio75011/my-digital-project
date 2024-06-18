import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Finish-Form-component.css';
import { apiFetch } from '../../../utils/api';

const FinishFormComponent = (props) => {
  const { formData, setFormData, setIsFormSubmitted, setVerificationCode } = props;
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('FinishFormComponent props:', props);
  }, [props]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (typeof setFormData === 'function') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else {
      console.error('setFormData is not a function');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      setError('Les emails ne correspondent pas');
      return;
    }

    apiFetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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
        setVerificationCode(data.code);
        localStorage.setItem('email', formData.email);
        setIsFormSubmitted(true);
        navigate('/email-verification');
      } else {
        setError(data.message);
      }
    })
    .catch(() => {
      setError('Erreur lors de l\'inscription');
    });
  };

  return (
    <div className="body-finish-form">
      <div className="container-finish-form">
        <div className="step-indicator">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`step ${step <= 2 ? 'active' : ''}`}>
              {step}
            </div>
          ))}
        </div>
        <h1 className="title-finish-form">Vous avez rempli le questionnaire!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group-finish">
            <label className="label-finish" htmlFor="lastName">Nom</label>
            <input
              className="input-finish"
              type="text"
              id="lastName"
              name="lastName"
              value={formData?.lastName || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-finish">
            <label className="label-finish" htmlFor="firstName">Prénom</label>
            <input
              className="input-finish"
              type="text"
              id="firstName"
              name="firstName"
              value={formData?.firstName || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-finish">
            <label className="label-finish" htmlFor="email">e-mail</label>
            <input
              className="input-finish"
              type="email"
              id="email"
              name="email"
              value={formData?.email || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-finish">
            <label className="label-finish" htmlFor="confirmEmail">confirmez votre e-mail</label>
            <input
              className="input-finish"
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={formData?.confirmEmail || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-finish">
            <label className="label-finish" htmlFor="password">mot de passe</label>
            <input
              className="input-finish"
              type="password"
              id="password"
              name="password"
              value={formData?.password || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox-finish">
            <input
              type="checkbox"
              id="acceptPolicy"
              name="acceptPolicy"
              checked={formData?.acceptPolicy || false}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptPolicy">
              En créant votre compte, vous acceptez notre politique de protection des données personnelles.
            </label>
          </div>
          <div className="checkbox-finish">
            <input
              type="checkbox"
              id="acceptNotifications"
              name="acceptNotifications"
              checked={formData?.acceptNotifications || false}
              onChange={handleChange}
            />
            <label htmlFor="acceptNotifications">
              En créant votre compte, vous acceptez de recevoir des notifications par email.
            </label>
          </div>
          <button className="button-finish" type="submit">Continuer</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default FinishFormComponent;
