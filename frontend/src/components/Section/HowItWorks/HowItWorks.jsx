import React from 'react';
import './HowItWorks.css';
import Profile from './uploads/Profile.png'
import Titre1 from './uploads/1.png'
import Titre2 from './uploads/2.png'
import Titre3 from './uploads/3.png'
import List from './uploads/list.png'
import Loupe from './uploads/loupe.png'
import Men from './uploads/men.png'

const HowItWorks = () => {
  return (
    <div className="howItWorksContainer">
      <div className="howItWorksImageWrapper">
        <img src={Profile} alt="Person" className="howItWorksImage" />
      </div>
      <div className="howItWorksContent">
        <h2 className="howItWorksTitle">Comment ça marche</h2>
        <div className="howItWorksSteps">
          <div className="howItWorksStep">
            <img src={Titre1} />
            <img src={List} />
            <p className="stepDescription"><b>Vous remplissez un questionnaire</b><br />Pour comprendre vos besoins et vos préférences</p>
          </div>
          <div className="howItWorksStep">
            <img src={Titre2} />
            <img src={Loupe} />
            <p className="stepDescription"><b>Nous trouvons un bénévole approprié</b><br />Notre équipe dédiée recherche parmi notre réseau de bénévoles qualifiés pour trouver celui qui correspond le mieux à vos besoins.</p>
          </div>
          <div className="howItWorksStep">
            <img src={Titre3} />
            <img src={Men} />
            <p className="stepDescription"><b>Vous recevez un soutien</b><br />Une fois que nous avons trouvé le bénévole idéal, vous commencez à recevoir le soutien dont vous avez besoin avec votre bénévole + vous avez un accès à des ressources essentielles, Blog, Guides et Suivi personnalisé.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
