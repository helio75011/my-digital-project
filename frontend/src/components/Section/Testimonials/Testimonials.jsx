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
          <p className="testimonialText">Lorem ipsum dolor sit amet consectetur. Condimetum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor gestas pellentesque eu maecenas. Risus lectus nisl.</p>
          <div className="testimonialAuthor">
            <img src={Logo} alt="Jacqueline Wright" className="authorImage" />
            <div>
              <strong>Jacqueline Wright</strong>
              <p>Participant</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonialText">Lorem ipsum dolor sit amet consectetur. Condimetum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor gestas pellentesque eu maecenas. Risus lectus nisl.</p>
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
