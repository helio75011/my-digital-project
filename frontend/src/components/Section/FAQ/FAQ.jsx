import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  // State to track the open question
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <div className="faqContainer">
      <div className="faqImageWrapper">
        <img src="path_to_image.jpg" alt="FAQ Visual" className="faqImage" />
      </div>
      <div className="faqContent">
        <h2>Questions fréquemment posées</h2>
        <div className="faqList">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`faqItem ${openQuestionIndex === index ? 'open' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faqQuestion">
                Lorem ipsum dolor sit amet consectetur
                <span className="faqToggle">{openQuestionIndex === index ? '−' : '+'}</span>
              </div>
              {openQuestionIndex === index && (
                <div className="faqAnswer">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
