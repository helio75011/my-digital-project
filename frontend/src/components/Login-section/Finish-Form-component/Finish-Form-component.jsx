// src/Finish-Form.jsx
import React, { useState } from 'react';
import './Finish-Form-component.css';
import { Link } from 'react-router-dom';

const FinishFormComponent = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    confirmEmail: '',
    password: '',
    acceptPolicy: false,
    acceptNotifications: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log(formData);
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
              value={formData.lastName}
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
              value={formData.firstName}
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
              value={formData.email}
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
              value={formData.confirmEmail}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox-finish">
            <input
              type="checkbox"
              id="acceptPolicy"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
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
              checked={formData.acceptNotifications}
              onChange={handleChange}
            />
            <label htmlFor="acceptNotifications">
              En créant votre compte, vous acceptez de recevoir des notifications par email.
            </label>
          </div>
          {/* <button className="button-finish" type="submit">Continuer</button> */}
          <Link className="button-finish" to='/email-verification'>Continuer</Link>
        </form>
      </div>
    </div>
  );
};

export default FinishFormComponent;
