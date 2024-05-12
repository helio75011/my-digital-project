// src/Questionnaire.js
import React, { useState } from 'react';
import './Time-component.css';

const TimeComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextStep = () => {
    // Logic to move to the next step
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null); // Reset selected option for the next question
    }
  };

  return (
    <div className="body-questionnaire">
      <div className="container-questionnaire">
        <h1 className="title-questionnaire">Aidez-nous à vous trouver le meilleur psychologue</h1>
        <p className="subtitle-questionnaire">
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
          <p>Avec qui passez-vous la plupart de votre temps ?</p>
          {['Seul(e)', 'Avec des amis', 'Avec la famille', 'Avec des collègues'].map((option) => (
            <div
              key={option}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="notification-questionnaire">
          <span role="img" aria-label="info">ℹ️</span>
          <p>
            Marchons ensemble à travers le processus de trouver le meilleur psychologue pour vous ! Nous commencerons par
            quelques questions de base.
          </p>
        </div>
        <button onClick={handleNextStep}>Suivant</button>
      </div>
    </div>
  );
};

export default TimeComponent;
