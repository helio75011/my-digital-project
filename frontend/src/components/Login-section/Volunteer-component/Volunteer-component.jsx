// src/VolunteerForm.js
import React, { useState } from 'react';
import './Volunteer-component.css';

const VolunteerComponent = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    motivation: '',
    acceptTerms: false,
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
    <div className="body-volunteer">
      <div className="container-volunteer">
        <h1 className="title-volunteer">Formulaire du bénévole</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group-inline-volunteer">
            <div className="form-group-volunteer">
              <label className="label-volunteer" htmlFor="lastName-volunteer">Nom</label>
              <input
                className="input-volunteer"
                type="text"
                id="lastName-volunteer"
                name="lastName"
                placeholder="Metz"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-volunteer">
              <label className="label-volunteer" htmlFor="firstName-volunteer">Prénom</label>
              <input
                className="input-volunteer"
                type="text"
                id="firstName-volunteer"
                name="firstName"
                placeholder="Carl"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group-volunteer">
            <label className="label-volunteer" htmlFor="phoneNumber-volunteer">Numéro de téléphone</label>
            <input
              className="input-volunteer"
              type="text"
              id="phoneNumber-volunteer"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-volunteer">
            <label className="label-volunteer" htmlFor="email-volunteer">Adresse e-mail</label>
            <input
              className="input-volunteer"
              type="email"
              id="email-volunteer"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-volunteer">
            <label className="label-volunteer" htmlFor="motivation-volunteer">Raisons pour postuler</label>
            <textarea
              className="textarea-volunteer"
              id="motivation-volunteer"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-volunteer">
            <label className="label-volunteer" htmlFor="cv-volunteer">Votre CV</label>
            <input className="input-volunteer" type="file" id="cv-volunteer" name="cv" />
          </div>
          <div className="checkbox-volunteer">
            <input
              type="checkbox"
              id="acceptTerms-volunteer"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptTerms-volunteer">
              En cochant cette case, je confirme avoir lu et compris les règles du site concernant le traitement des <strong>données personnelles</strong>
            </label>
          </div>
          <div className="notification-volunteer">
            <span role="img" aria-label="info">ℹ️</span>
            <p>Si votre candidature est approuvée, vous recevrez des informations supplémentaires sur la procédure de connexion à notre plateforme ainsi que sur les prochaines étapes du processus de recrutement.</p>
          </div>
          <button className="button-volunteer" type="submit">Postuler</button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerComponent;
