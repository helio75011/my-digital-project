import React from 'react';
import './PricingPlan.css';

const PricingPlan = () => {
  return (
    <div className="pricingContainer">
      <div className="pricingHeader">
        <h2>Choisissez votre plan idéal</h2>
        <p>Découvrez nos différents plans tarifaires pour répondre à vos besoins.</p>
      </div>

      <div className="plans">
        <div className="plan basePlan">
          <div className="planHeader">
            <h3>Plan de base</h3>
            <span className="planPrice">€5/mois</span>
          </div>
          <ul className="planDetails">
            <li>accès aux ressources (blog, guides)</li>
            <li>suivi personnalisé</li>
          </ul>
          <button className="chooseButton">Choisir</button>
        </div>

        <div className="plan premiumPlan">
          <div className="planHeader">
            <h3>Plan premium</h3>
            <span className="planPrice">€10/mois</span>
          </div>
          <ul className="planDetails">
            <li>accès aux ressources (blog, guides)</li>
            <li>suivi personnalisé</li>
            <li>consultation individuelle</li>
          </ul>
          <button className="chooseButton">Choisir</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
