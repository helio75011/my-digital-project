import React from 'react';
import './WhoWeHelp.css'; // Import the CSS file for styling
import Profile from './uploads/profile.png'

const WhoWeHelp = () => {
  return (
    <section id="about">
      <div className='title-wwh'>
        <h2>Qui aidons nous</h2>
        <p className="intro">Notre plateforme s'adresse à tous ceux qui se sentent isolés et cherchent un lien avec d'autres personnes.</p>
      </div>
      <div className="who-we-help">
        <div className="content">
          <p className="description">
            Que vous soyez loin de vos proches, viviez dans une région éloignée ou traversiez une période difficile, notre communauté est là pour vous offrir un soutien chaleureux et une écoute attentive.
          </p>
          <p className="description">
            Que vous ayez besoin d'un ami virtuel, d'une oreille attentive ou simplement d'un endroit pour partager vos pensées, nous sommes là pour vous aider à vous sentir connecté et soutenu.
          </p>
          <button className="start-button2">Commencer</button>
        </div>
        <div className="image-wrapper">
          <img src={Profile} alt="Person" className="person-image" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
