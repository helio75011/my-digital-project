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
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
        </div>
        <div className="linksSection">
          <h4>Heading</h4>
          <a href="#">Link here</a>
          <a href="#">Link here</a>
          <a href="#">Link here</a>
        </div>
        <div className="linksSection">
          <h4>Heading</h4>
          <a href="#">Link here</a>
          <a href="#">Link here</a>
          <a href="#">Link here</a>
        </div>
        <div className="linksSection">
          <h4>Heading</h4>
          <a href="#">Link here</a>
          <a href="#">Link here</a>
          <a href="#">Link here</a>
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
