// src/EventsGrid.js
import React, { useState, useEffect } from 'react';
import './Grid-event-component.css';
import { Link } from 'react-router-dom';
import { apiFetch } from '../../../utils/api'; // Assurez-vous que le chemin est correct

const GridEventComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        apiFetch('http://localhost:3000/events')
            .then(data => setEvents(data))
            .catch(error => console.error('Erreur lors de la récupération des événements:', error));
    }, []);

    return (
        <div className="events-grid">
            {events.map(event => (
                <Link to="/page-event" key={event.id}>
                    <div className="event-card">
                        <img className="event-image" src={event.image || 'https://via.placeholder.com/150'} alt={event.title} />
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
