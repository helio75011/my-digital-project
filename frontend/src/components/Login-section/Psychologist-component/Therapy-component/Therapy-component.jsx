// src/TherapyQuestionnaire.js
import React, { useState } from 'react';
import './Therapy-component.css';
import { Link } from 'react-router-dom';

const TherapyComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((o) => o !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      setSelectedOptions([]); // Reset selected options for the next question
    }
  };

  return (
    <div className="body-therapy-questionnaire">
      <div className="container-therapy-questionnaire">
        <h1 className="title-therapy-questionnaire">Aidez-nous à vous trouver le meilleur psychologue</h1>
        <p className="subtitle-therapy-questionnaire">
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
          <p>Qu'est-ce qui vous a amené à envisager une thérapie aujourd'hui ?</p>
          <div className="checkbox-group">
            {[
              'Des difficultés émotionnelles suite à une perte récente.',
              'Stress au travail, besoin de soutien.',
              'Conflits familiaux et sentiment d\'isolement.',
              'Sentiment de déconnexion et quête de sens.',
              'Anxiété et besoin de stratégies de gestion.',
            ].map((option) => (
              <label key={option} className="checkbox">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="notification-therapy-questionnaire">
          <span role="img" aria-label="info">ℹ️</span>
          <p>
            Ce questionnaire vise à vous aider à trouver le thérapeute qui correspond le mieux à vos besoins en matière de santé mentale.
          </p>
        </div>
        {/* <button onClick={handleNextStep}>Suivant</button> */}
        <Link className='button' to='/psycho-four'>Suivant</Link>
      </div>
    </div>
  );
};

export default TherapyComponent;
