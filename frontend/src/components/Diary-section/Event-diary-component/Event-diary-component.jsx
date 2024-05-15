// src/RecommendedEvents.js
import React from 'react';
import './Event-diary-component.css';

const events = [
    { 
        id: 1, 
        date: '05 avril 2024 à 18h30', 
        title: 'ART Therapie', 
        description: 'Lorem ipsum dolor sit amet consectetur...', 
        location: 'Paris 01',
        image: 'https://via.placeholder.com/100', 
        avatar: 'https://via.placeholder.com/30'
    },
    { 
        id: 2, 
        date: '05 avril 2024 à 18h30', 
        title: 'ART Therapie', 
        description: 'Lorem ipsum dolor sit amet consectetur...', 
        location: 'Paris 01',
        image: 'https://via.placeholder.com/100', 
        avatar: 'https://via.placeholder.com/30'
    },
    { 
        id: 3, 
        date: '05 avril 2024 à 18h30', 
        title: 'ART Therapie', 
        description: 'Lorem ipsum dolor sit amet consectetur...', 
        location: 'Paris 01',
        image: 'https://via.placeholder.com/100', 
        avatar: 'https://via.placeholder.com/30'
    },
    { 
        id: 4, 
        date: '05 avril 2024 à 18h30', 
        title: 'ART Therapie', 
        description: 'Lorem ipsum dolor sit amet consectetur...', 
        location: 'Paris 01',
        image: 'https://via.placeholder.com/100', 
        avatar: 'https://via.placeholder.com/30'
    },
];

const EventDiaryComponent = () => {
    return (
        <div className="recommended-events">
            <h1>Événements Recommandés Pour Vous <span className="historique">historique</span></h1>
            <div className="events-container">
                {events.map(event => (
                    <div className="event-item" key={event.id}>
                        <img className="event-image" src={event.image} alt="Event" />
                        <div className="event-details">
                            <div className="event-date">{event.date}</div>
                            <h2 className="event-title">{event.title}</h2>
                            <p className="event-description">{event.description}</p>
                            <div className="event-location">{event.location}</div>
                        </div>
                        <img className="event-avatar" src={event.avatar} alt="Avatar" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventDiaryComponent;
