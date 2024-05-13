// src/AgeQuestionnaire.js
import React, { useState } from 'react';
import './Age-component.css';
import { Link } from 'react-router-dom';

const AgeComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAge, setSelectedAge] = useState('');

  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value);
  };

  const handleNextStep = () => {
    // Logic to move to the next step
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      setSelectedAge(''); // Reset selected age for the next question
    }
  };

  return (
    <div className="body-age-questionnaire">
      <div className="container-age-questionnaire">
        <h1 className="title-age-questionnaire">Aidez-nous à vous trouver le meilleur psychologue</h1>
        <p className="subtitle-age-questionnaire">
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
          <p>Quel âge avez-vous ?</p>
          <select className="select" value={selectedAge} onChange={handleAgeChange}>
            <option value="" disabled>Choisissez votre âge</option>
            {['18-24', '25-34', '35-44', '45-54', '55-64', '65+'].map((age) => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
        </div>
        <div className="notification-age-questionnaire">
          <span role="img" aria-label="info">ℹ️</span>
          <p>
            Ce questionnaire vise à vous aider à trouver le thérapeute qui correspond le mieux à vos besoins en matière de santé mentale.
          </p>
        </div>
        {/* <button onClick={handleNextStep}>Suivant</button> */}
        <Link className='button' to='/psycho-tree'>Suivant</Link>
      </div>
    </div>
  );
};

export default AgeComponent;