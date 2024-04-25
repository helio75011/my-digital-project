import React from 'react';
import './WhoWeHelp.css'; // Import the CSS file for styling
// import personImage from './path-to-your-person-image.jpg'; // Adjust path as needed

const WhoWeHelp = () => {
  return (
    <section className="who-we-help">
      <div className="content">
        <h2>Qui aidons nous</h2>
        <p className="intro">Notre plateforme s'adresse à tous ceux qui se sentent isolés et cherchent un lien avec d'autres personnes.</p>
        <p className="description">
          Que vous soyez loin de vos proches, viviez dans une région éloignée ou traversiez une période difficile, notre communauté est là pour vous offrir un soutien chaleureux et une écoute attentive.
        </p>
        <p className="description">
          Que vous ayez besoin d'un ami virtuel, d'une oreille attentive ou simplement d'un endroit pour partager vos pensées, nous sommes là pour vous aider à vous sentir connecté et soutenu.
        </p>
        <button className="start-button">Commencer</button>
      </div>
      <div className="image-wrapper">
        <img src="personImage" alt="Person" className="person-image" />
      </div>
    </section>
  );
};

export default WhoWeHelp;
