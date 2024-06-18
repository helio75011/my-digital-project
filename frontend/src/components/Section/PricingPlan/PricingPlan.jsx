import React from 'react';
import './PricingPlan.css';
import Validation from './uploads/validation.png'

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
            <h4>soutien suplémentaire</h4>
            <span className="planPrice">€11/mois</span>
          </div>
          <div className="planDetails">
            <h3>Inclus :</h3>
            <div className='detailP'>
              <img src={Validation} />
              <p>accès aux ressources (blog, guides)</p>
            </div>
            <div className='detailP'>
              <img src={Validation} />
              <p>suivi personnalisé</p>
            </div>
          </div>
          <button className="chooseButton">Choisir</button>
        </div>

        <div className="plan premiumPlan">
          <div className="planHeader">
            <h3>Plan premium</h3>
            <h4>soutien complet</h4>
            <span className="planPrice">€17,99/mois</span>
          </div>
          <div className="planDetails">
            <h3>Inclus :</h3>
            <div className='detailP'>
              <img src={Validation} />
              <p>accès aux ressources (blog, guides)</p>
            </div>
            <div className='detailP'>
              <img src={Validation} />
              <p>suivi personnalisé</p>
            </div>
            <div className='detailP'>
              <img src={Validation} />
              <p>consultation individuelle</p>
            </div>
          </div>
          <button className="chooseButton">Choisir</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
