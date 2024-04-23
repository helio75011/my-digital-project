// SupportSection.js
import React from 'react';
import './Set.css'; // Import the CSS file for styling

const Set = () => {
  return (
    <section className="support-section">
      <div className="support-content">
        <h2>Ensemble, pas seuls</h2>
        <p className="support-title">Trouvez du soutien sur notre plateforme</p>
        <p className="support-text">
          Commencez par remplir notre questionnaire simple mais significatif.
          Ce questionnaire nous permet de comprendre votre situation sociale
          et émotionnelle actuelle, ainsi que les éventuelles causes de votre
          isolement.
        </p>
        <button className="start-button">Commencer</button>
      </div>
      <div className="support-image">
        {/* Replace 'path-to-your-image.jpg' with the actual path to your image */}
        <img src="path-to-your-image.jpg" alt="Support" />
      </div>
    </section>
  );
};

export default Set;
