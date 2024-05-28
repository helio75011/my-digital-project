// src/ResultsForm.js
import React, { useState } from 'react';
import './Result-login-component.css';
import PaymentModalComponent from '../Payment-modal-component/Payment-modal-component';

const ResultLoginComponent = () => {
  // Dans la fonction du composant où vous définissez les états
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ajouter cette fonction pour gérer l'ouverture du modal
  const openModal = () => setIsModalOpen(true);

  // Ajouter cette fonction pour gérer la fermeture du modal
  const closeModal = () => setIsModalOpen(false);

  const plans = [
    {
      title: "Plan de base",
      soustitle: "Soutien supplémentaire",
      price: "€5/mois",
      titlefeatures: "Inclus :",
      features: ["accès aux ressources", "suivi personnalisé"]
    },
    {
      title: "Plan premium",
      soustitle: "Soutien supplémentaire",
      price: "€15/mois",
      titlefeatures: "Inclus :",
      features: ["accès aux ressources", "suivi personnalisé", "consultation individuelle", "support"]
    }
  ];

  const handleSelectPlan = (plan) => {
    // Handle the plan selection
    console.log("Selected plan:", plan.title);
  };

  return (
    <div className="body-results-form">
      <div className="container-results-form">
        <h1 className="title-results-form">Résultat</h1>
        <div className="content-section">
          <p className="text">
            Nous avons remarqué certains signes qui pourraient indiquer que vous
            traversez une période de solitude ou de difficulté, et nous voulons vous
            offrir notre soutien.
          </p>
        </div>
        <div className='content-description-parent'>
            <div className='content-description'>
                <h1>Nos missions</h1>
                <p>
                   Nous croyons fermement que parler à un professionnel peut faire une énorme différence dans la façon dont nous gérons nos émotions et surmontons les obstacles.
                   Nos psychologues sont là pour vous offrir un espace sûr et confidentiel où vous pouvez vous exprimer librement, explorer vos pensées et vos sentiments, et recevoir un soutien personnalisé pour vous aider à aller de l'avant.
                </p>
            </div>
            <div className='content-description'>
                <h1>Match avec un psychologue</h1>
                <p>
                   Suite à votre inscription et à vos réponses au questionnaire, nous sommes actuellement en train de rechercher le psychologue qui correspond le mieux à vos besoins et à votre situation.
                   Nous comprenons que chaque individu est unique, et c'est pourquoi nous voulons nous assurer que vous êtes jumelé(e) avec un professionnel dont l'expertise et l'approche thérapeutique répondent à vos attentes.
                </p>
            </div>
            <div className='content-description'>
                <h1>La santé mentale</h1>
                <p>
                    Une priorité absolue, surtout dans les moments où nous nous sentons isolés ou dépassés par les défis de la vie. 
                    C'est pourquoi nous voulons vous proposer notre abonnement premium, qui comprend des consultations individuelles avec un psychologue qualifié.
                </p>
            </div>
            <div className='content-description'>
                <h1>La confidentialité</h1>
                <p>
                    Nous tenons à vous assurer que la confidentialité et la sécurité de vos informations sont des priorités absolues pour nous.
                    Nous comprenons l'importance de protéger vos données personnelles et de garantir que vos interactions avec notre service restent privées et sécurisées.
                </p>
            </div>
        </div>
        <div className="subscription-section-parent">
            <h1>Abonnement</h1>
            <h2>Choisissez votre plan idéal</h2>
            <p>Découvrez nos différent plans tarifaires pour répondre à vos besions.</p>
            <div className='subscription-section'>
                    {plans.map((plan, index) => (
                <div key={index} className="plan-card">
                  <div className="plan-title">{plan.title}</div>
                  <div className="plan-soustitle">{plan.soustitle}</div>
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-titlefeatures">{plan.titlefeatures}</div>
                  <div className="plan-features">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="plan-feature">{feature}</div>
                    ))}
                  </div>
                  <button className="button-select" onClick={openModal}>
                    Choisir
                  </button>
                </div>
              ))}
            </div>
            <PaymentModalComponent isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default ResultLoginComponent;
