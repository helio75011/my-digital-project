import React from 'react';
import './Testimonials.css';
import Logo from './uploads/logo.png'

const Testimonials = () => {
  return (
    <div className="testimonialsContainer">
      <h2>Nos participants satisfaits</h2>
      <div className="testimonialsContent">
        <button className="navButton prevButton">←</button>
        <div className="testimonial">
          <p className="testimonialText">La consultation avec la psychologue était très utile. J'ai apprécié sa compréhension et ses conseils. Je me sens mieux après avoir parlé avec lui.</p>
          <div className="testimonialAuthor">
            <img src={Logo} alt="Jacqueline Wright" className="authorImage" />
            <div>
              <strong>Jacqueline Wright</strong>
              <p>Participant</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonialText">J'apprécie vraiment les événements proposés par la plateforme. C'est une excellente occasion de rencontrer de nouvelles personnes et de partager des expériences.</p>
          <div className="testimonialAuthor">
            <img src={Logo} alt="Jacqueline Wright" className="authorImage" />
            <div>
              <strong>Jacqueline Wright</strong>
              <p>Participant</p>
            </div>
          </div>
        </div>
        <button className="navButton nextButton">→</button>
      </div>
    </div>
  );
};

export default Testimonials;
