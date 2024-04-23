import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <h1 className="contactTitle">Parlons</h1>
        <p className="contactDescription">
          Vous avez des questions, des suggestions ou simplement envie de nous faire part de votre expérience ? N'hésitez pas à nous contacter !
        </p>
        <p className="contactWarning">
          Si vous êtes en crise ou si une autre personne est en danger, n'utilisez pas ce site.
          Ces ressources peuvent vous fournir une aide immédiate.
        </p>
      </div>
      <div className="contactFormWrapper">
        <div className="contactForm">
          <h2>Formulaire de contact</h2>
          <form>
            <label htmlFor="firstName">Prenom *</label>
            <input type="text" id="firstName" name="firstName" required />
            
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
            
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
