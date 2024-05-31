// src/RecommendedEvents.js
import React from 'react';
import './Event-diary-component.css';

const events = [
    {
        date: '10 avril à 19h30',
        title: 'Sérénité en Méditation',
        description: 'Sessions de méditation guidée pour la relaxation...',
        location: 'Paris 11',
        image: 'https://via.placeholder.com/150',
        person: 'https://via.placeholder.com/30'
    },
    {
        date: '25 avril à 20h',
        title: 'Café des Connexions',
        description: 'Rencontres sociales dans un café local...',
        location: 'Paris 11',
        image: 'https://via.placeholder.com/150',
        person: 'https://via.placeholder.com/30'
    },
    {
        date: '2 mai à 14h30',
        title: 'Marche Ensemble',
        description: 'Club de marche en plein air pour l\'exercice physique...',
        location: 'Paris 04',
        image: 'https://via.placeholder.com/150',
        person: 'https://via.placeholder.com/30'
    },
    {
        date: '23 avril à 15h45',
        title: 'Exploration Culturelle',
        description: 'Sorties culturelles pour découvrir l\'art, l\'histoire...',
        location: 'Paris 04',
        image: 'https://via.placeholder.com/150',
        person: 'https://via.placeholder.com/30'
    }
];

const EventDiaryComponent = () => {
    return (
        <div className="events-recommended">
            <div className="events-header">
                <h2>Événements Recommandés Pour Vous</h2>
                <button className="view-all">voir tout</button>
            </div>
            <div className="event-cards">
                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <img src={event.image} alt={event.title} className="event-image" />
                        <div className="event-details">
                            <p className="event-date">{event.date}</p>
                            <p className="event-title">{event.title}</p>
                            <p className="event-description">{event.description}</p>
                            <div className="event-footer">
                                <p className="event-location">{event.location}</p>
                                <img src={event.person} alt="Person" className="event-person" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventDiaryComponent;
