import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="howItWorksContainer">
      <div className="howItWorksImageWrapper">
        <img src="path_to_person_image.jpg" alt="Person" className="howItWorksImage" />
      </div>
      <div className="howItWorksContent">
        <h2 className="howItWorksTitle">Comment ça marche</h2>
        <div className="howItWorksSteps">
          <div className="howItWorksStep">
            <h3 className="stepNumber">1</h3>
            <p className="stepDescription">Vous remplissez un questionnaire<br />Pour comprendre vos besoins et vos préférences</p>
          </div>
          <div className="howItWorksStep">
            <h3 className="stepNumber">2</h3>
            <p className="stepDescription">Nous trouvons un bénévole approprié<br />Notre équipe dédiée recherche parmi notre réseau de bénévoles qualifiés pour trouver celui qui correspond le mieux à vos besoins.</p>
          </div>
          <div className="howItWorksStep">
            <h3 className="stepNumber">3</h3>
            <p className="stepDescription">Vous recevez un soutien<br />Une fois que nous avons trouvé le bénévole idéal, vous commencez à recevoir le soutien dont vous avez besoin avec votre bénévole + vous avez un accès à des ressources essentielles, Blog, Guides et Suivi personnalisé.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
