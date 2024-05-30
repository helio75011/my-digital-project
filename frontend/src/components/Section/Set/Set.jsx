// src/PromoSection.js
import React from 'react';
import './Set.css';
import WC from './uploads/women-computer.png'

const Set = () => {
    return (
        <div className="promo-section">
            <div className="promo-text">
                <h1>Ensemble, <span>pas seuls</span></h1>
                <h2>Trouvez du soutien sur notre plateforme</h2>
                <p>
                    Commencez par remplir notre questionnaire simple mais significatif.
                    Ce questionnaire nous permet de comprendre votre situation sociale
                    et émotionnelle actuelle, ainsi que les éventuelles causes de votre
                    isolement.
                </p>
                <div className="promo-buttons">
                    <button className="start-button">Commencer</button>
                    <button className="learn-more-button">Savoir plus</button>
                </div>
            </div>
            <div className="promo-image">
                <img src={WC} alt="Woman using laptop" />
            </div>
        </div>
    );
};

export default Set;
