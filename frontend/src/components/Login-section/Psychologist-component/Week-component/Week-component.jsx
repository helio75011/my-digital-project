// src/Week-component.js
import React, { useState } from 'react';
import './Week-component.css';
import { Link } from 'react-router-dom';

const WeekComponent = () => {
  const [currentStep, setCurrentStep] = useState(4);
  const [response, setResponse] = useState('');

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(response);
  };

  return (
    <div className="body-questionnaire-form">
      <div className="container-questionnaire-form">
        <h1 className="title-questionnaire-form">Aidez-nous à vous trouver le meilleur psychologue</h1>
        <p className="subtitle-questionnaire-form">
          Les questions qui suivent ont pour but de vous orienter vers un thérapeute agréé en fonction de vos besoins
          thérapeutiques et de vos préférences personnelles.
        </p>
        <div className="step-indicator">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`step ${currentStep === step ? 'active' : ''}`}>
              {step}
            </div>
          ))}
        </div>
        <div className="question-card">
          <p>Combien de fois par semaine voyez-vous vos amis, votre famille ou vos voisins ?</p>
          <textarea
            className="textarea"
            value={response}
            onChange={handleResponseChange}
            placeholder="Écrivez votre réponse..."
          ></textarea>
        </div>
        <div className="notification-questionnaire-form">
          <span role="img" aria-label="info">ℹ️</span>
          <p>
            Ce questionnaire vise à vous aider à trouver le thérapeute qui correspond le mieux à vos besoins en matière de santé mentale.
          </p>
        </div>
        {/* <button onClick={handleSubmit}>Envoyer</button> */}
        <Link className='button' to='/finish-form'>Envoyer</Link>
      </div>
    </div>
  );
};

export default WeekComponent;
