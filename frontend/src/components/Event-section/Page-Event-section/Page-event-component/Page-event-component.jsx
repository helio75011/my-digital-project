// src/EventDetail.js
import React from 'react';
import './Page-event-component.css';

const participants = [
    { id: 1, name: 'Flo', image: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Naga', image: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Peter', image: 'https://via.placeholder.com/40' },
];

const PageEventComponent = () => {
    return (
        <div className="event-detail">
            <div className="breadcrumb">Culture et Art</div>
            <h1 className="event-title">L'art therapie c'est quoi ?</h1>
            <div className="event-meta">
                <img className="event-author-avatar" src="https://via.placeholder.com/40" alt="Max K." />
                <div className="event-author-info">
                    <span>Max K.</span>
                    <span>2 avril 2024</span>
                </div>
            </div>
            <div className="event-content">
                <div className="event-main">
                    <img className="event-image" src="https://via.placeholder.com/300" alt="Event" />
                    <div className="event-location">Paris</div>
                    <div className="event-details">
                        <h2>Details</h2>
                        <p>L'art-thérapie est une forme de thérapie expressive qui utilise la création artistique comme moyen de communication et d'exploration des émotions, des pensées et des expériences personnelles. Les participants à des séances d'art-thérapie utilisent une variété de médiums artistiques tels que la peinture, le dessin, la sculpture, le collage, et même la danse ou le théâtre, pour exprimer leurs sentiments et leurs expériences de manière non verbale.</p>
                        <p>Les objectifs de l'art-thérapie peuvent varier en fonction des besoins individuels, mais ils incluent souvent la gestion du stress et de l'anxiété, le renforcement de l'estime de soi, la résolution de problèmes, la communication interpersonnelle, et la promotion du bien-être émotionnel et psychologique.</p>
                    </div>
                    <div className="event-tags">
                        <span className="tag">Créativité</span>
                        <span className="tag">Art-thérapie</span>
                    </div>
                    <div className="event-participants">
                        <h2>Participants</h2>
                        <div className="participants-list">
                            {participants.map(participant => (
                                <div key={participant.id} className="participant">
                                    <img src={participant.image} alt={participant.name} />
                                    <span>{participant.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="participate-button">Participer</button>
                </div>
                <div className="event-sidebar">
                    <div className="event-info">
                        <h2>quand : 5 avril 2024 à 18h30 et jusqu'à 19h30</h2>
                        <h2>entrée : 4€</h2>
                        <h2>inscription : jusqu'au jeudi 4 avril 2024 19:00</h2>
                        <h2>où : Paris 01 <br /><span>p.s. l'adresse sera visible après l'inscription</span></h2>
                        <h2>9 places disponible</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageEventComponent;
