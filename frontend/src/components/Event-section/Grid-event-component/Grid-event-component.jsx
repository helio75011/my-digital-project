// src/EventsGrid.js
import React from 'react';
import './Grid-event-component.css';
import { Link } from 'react-router-dom';

const events = [
    { id: 1, date: '5 avril à 18h30', title: 'ART Therapie', description: 'Ateliers d’artisanat et d’art en groupe pour explorer...', location: 'Paris 01', image: 'https://via.placeholder.com/150' },
    { id: 2, date: '5 avril à 18h', title: 'Groupe de Soutien', description: 'Réunions de soutien en groupe pour partager...', location: 'Paris 02', image: 'https://via.placeholder.com/150' },
    { id: 3, date: '25 avril à 20h', title: 'Café des Connexions', description: 'Rencontres sociales dans un café local...', location: 'Paris 11', image: 'https://via.placeholder.com/150' },
    { id: 4, date: '2 mars à 15h30', title: 'Marche Ensemble', description: 'Club de marche en plein air pour l’exercice physique...', location: 'Paris 14', image: 'https://via.placeholder.com/150' },
    { id: 5, date: '14 mars à 15h30', title: 'Cuisine Communautaire', description: 'Atelier de cuisine en groupe pour apprendre à cuisiner...', location: 'Paris 10', image: 'https://via.placeholder.com/150' },
    { id: 6, date: '9 avril à 19h30', title: 'Sérénité en Méditation', description: 'Séances de méditation guidée pour la relaxation...', location: 'Paris 12', image: 'https://via.placeholder.com/150' },
    { id: 7, date: '16 avril à 11h', title: 'Cercle Littéraire Local', description: 'Club de lecture pour discuter des livres et découvrir...', location: 'Paris 15', image: 'https://via.placeholder.com/150' },
    { id: 8, date: '23 avril à 15h45', title: 'Exploration Culturelle', description: 'Excursions culturelles pour découvrir l’art, l’histoire...', location: 'Paris 04', image: 'https://via.placeholder.com/150' }
];

const GridEventComponent = () => {
    return (
        <div className="events-grid">
            {events.map(event => (
                <Link to="/page-event">
                <div className="event-card" key={event.id}>
                    <img className="event-image" src={event.image} alt={event.title} />
                    <div className="event-details">
                        <div className="event-date">{event.date}</div>
                        <h2 className="event-title">{event.title}</h2>
                        <p className="event-description">{event.description}</p>
                        <div className="event-location">{event.location}</div>
                    </div>
                </div>
                </Link>
            ))}
            <button className="load-more">Voir plus</button>
        </div>
    );
};

export default GridEventComponent;
