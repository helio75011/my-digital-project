import React, { useState } from 'react';
import './Form-FAQ-component.css';

const FormFAQComponent = () => {
    const [expanded, setExpanded] = useState(null);

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const faqs = [
        {
            question: "Qu'est-ce que l'abonnement premium ?",
            answer: "L'abonnement premium offre un accès illimité à toutes nos ressources et services, y compris des consultations avec des psychologues certifiés, des ateliers de bien-être, et bien plus encore.",
        },
        {
            question: "Qu'est-ce que l'abonnement de base ?",
            answer: "L'abonnement de base offre un accès limité à certaines de nos ressources et services. Vous pouvez consulter des articles, participer à des forums de discussion, et accéder à des ressources gratuites.",
        },
        {
            question: "Comment fonctionne le processus sélection d'un psychologue?",
            answer: "Une fois que vous avez rempli les questionnaires et choisi l'abonnement premium, notre équipe vous mettra en relation avec un psychologue qui correspond à vos besoins et à vos préférences.",
        },
        // Ajoutez plus de questions-réponses ici
    ];

    return (
        <div className="faq-container">
            <div className="faq-header">
                <h2>FAQ</h2>
                <p>
                    Trouvez rapidement des réponses à vos questions fréquentes dans notre FAQ.
                </p>
            </div>
            <div className="faq-content">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button className="faq-question" onClick={() => handleToggle(index)}>
                            {faq.question}
                            <span>{expanded === index ? '−' : '+'}</span>
                        </button>
                        {expanded === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
            <div className="faq-contact">
                <p>
                    Avez-vous rencontré des difficultés pour trouver une réponse ? Contactez-nous via notre <a href="/contact">page de contact</a>.
                </p>
                <p>
                    Si vous êtes en crise ou si une autre personne est en danger, n'utilisez pas ce site. <a href="/resources">Ces ressources</a> peuvent vous fournir une aide immédiate.
                </p>
            </div>
        </div>
    );
};

export default FormFAQComponent;
