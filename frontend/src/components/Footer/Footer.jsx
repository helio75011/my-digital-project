import React from 'react';
import './Footer.css';
// import { ReactComponent as FacebookIcon } from './facebook-icon.svg';
// import { ReactComponent as InstagramIcon } from './instagram-icon.svg';
// import { ReactComponent as WhatsappIcon } from './whatsapp-icon.svg';

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
            {/* <FacebookIcon />
            <InstagramIcon />
            <WhatsappIcon /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
