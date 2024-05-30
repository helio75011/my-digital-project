// src/FAQSection.js
import React, { useState } from 'react';
import './FAQ.css';
import FAQP from './uploads/FAQP.png'

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        if (openFAQ === index) {
            setOpenFAQ(null);
        } else {
            setOpenFAQ(index);
        }
    };

    return (
        <div className="faq-section">
            <div className="faq-image">
                <img src={FAQP} alt="Person" />
            </div>
            <div className="faq-content">
                <h2>Questions fréquemment posées</h2>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(0)}>
                        Comment fonctionne le processus sélection d'un psychologue?
                        <span>{openFAQ === 0 ? '-' : '+'}</span>
                    </div>
                    {openFAQ === 0 && (
                        <div className="faq-answer">
                            <p>Une fois que vous avez rempli les questionnaires et choisi l'abonnement premium, notre équipe vous mettra en relation avec un psychologue qui correspond à vos besoins et à vos préférences.</p>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(1)}>
                        Qu'est-ce que l'abonnement premium?
                        <span>{openFAQ === 1 ? '-' : '+'}</span>
                    </div>
                    {openFAQ === 1 && (
                        <div className="faq-answer">
                            <p>L'abonnement premium offre des fonctionnalités supplémentaires pour mieux vous accompagner.</p>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(2)}>
                        Qu'est-ce que l'abonnement de base?
                        <span>{openFAQ === 2 ? '-' : '+'}</span>
                    </div>
                    {openFAQ === 2 && (
                        <div className="faq-answer">
                            <p>L'abonnement de base comprend les fonctionnalités essentielles pour commencer votre parcours de bien-être.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
