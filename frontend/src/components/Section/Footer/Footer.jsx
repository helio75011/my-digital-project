import React from 'react';
import './Footer.css';
import Facebook from './uploads/facebook.png'
import Instagram from './uploads/instagram.png'
import Watsapp from './uploads/watsapp.png'

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="aboutSection">
          <h4>Soutien Plus</h4>
          <p>© 2024 Soutien Plus </p>
        </div>
        <div className="linksSection">
          <h4>Soutien Plus</h4>
          <a href="#">À propos</a>
          <a href="#">Devenir bénévole</a>
          <a href="#">Événements</a>
          <a href="#">Conseils</a>
        </div>
        <div className="linksSection">
          <h4>Aide</h4>
          <a href="#">FAQ</a>
          <a href="#">Situation de crise</a>
          <a href="#">Contact</a>
          <a href="#">Partenariat</a>
        </div>
        <div className="linksSection">
          <h4>Termes</h4>
          <a href="#">Données personnelles</a>
          <a href="#">Modération des avis</a>
          <a href="#">Mentions Légales</a>
          <a href="#">CGV</a>
        </div>
        <div className="socialMediaSection">
          <h4>Restez connecté</h4>
          <div className="socialIcons">
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={Watsapp} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
