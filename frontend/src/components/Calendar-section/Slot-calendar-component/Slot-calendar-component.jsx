// src/SlotCalendarComponent.js
import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import './Slot-calendar-component.css';

const SlotCalendarComponent = () => {
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [showSessionsModal, setShowSessionsModal] = useState(false);
    const [showInscriptionsModal, setShowInscriptionsModal] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const openBookingModal = () => setShowBookingModal(true);
    const closeBookingModal = () => setShowBookingModal(false);

    const confirmBooking = () => {
        setShowBookingModal(false);
        setShowConfirmationModal(true);
    };

    const closeConfirmationModal = () => setShowConfirmationModal(false);

    const openSessionsModal = () => setShowSessionsModal(true);
    const closeSessionsModal = () => setShowSessionsModal(false);

    const openInscriptionsModal = () => setShowInscriptionsModal(true);
    const closeInscriptionsModal = () => setShowInscriptionsModal(false);

    return (
        <div className="ui-section">
            <div className="header-slot">
                <button className="icon-button" onClick={openBookingModal}>
                    <FaPlus />
                </button>
                <button className="slot-button">Creneaux</button>
                <button className="icon-button">
                    <FaTrash />
                </button>
            </div>
            <div className="content">
                <div className="menu-item" onClick={openSessionsModal}>Mes sessions</div>
                <div className="menu-item" onClick={openInscriptionsModal}>Mes inscriptions</div>
            </div>
            {showBookingModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Réserver une session</h2>
                        <div className="modal-content">
                            <p>Choisissez le format</p>
                            <div className="format-options">
                                <button>Appel</button>
                                <button>Appel Vidéo</button>
                                <button>Messagerie</button>
                            </div>
                            <p>Choisissez la durée</p>
                            <div className="duration-options">
                                <button>20 min</button>
                                <button>40 min</button>
                            </div>
                            <p>Choisissez la date et l'heure</p>
                            <div className="date-time-selection">
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <button onClick={confirmBooking}>Réserver</button>
                        </div>
                    </div>
                </div>
            )}
            {showConfirmationModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Votre rdv est réservé</h2>
                        <button onClick={closeConfirmationModal}>Continuer</button>
                    </div>
                </div>
            )}
            {showSessionsModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Mes Sessions</h2>
                        <div className="modal-content">
                            <div className="session-card">
                                <div className="session-detail">
                                    <p>Details</p>
                                    <p>Durée</p>
                                </div>
                                <div className="session-info">
                                    <p>Rdv Consultation Vidéo avec Sophie</p>
                                    <p>40 min</p>
                                </div>
                                <div className="session-when">
                                    <p>Quand</p>
                                    <p>3 avril 2024 à 10h</p>
                                </div>
                                <button className="cancel-button">annuler</button>
                            </div>
                            {/* Repeat the above session-card div as needed */}
                        </div>
                        <button className="voir-plus">voir plus</button>
                    </div>
                </div>
            )}
            {showInscriptionsModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Mes Inscriptions</h2>
                        <div className="modal-content">
                            <div className="session-card">
                                <div className="session-detail">
                                    <p>Details</p>
                                    <p>Durée</p>
                                </div>
                                <div className="session-info">
                                    <p>L'art therapie c'est quoi ?</p>
                                    <p>1 heure</p>
                                </div>
                                <div className="session-when">
                                    <p>Quand</p>
                                    <p>5 avril 2024 à 18h</p>
                                </div>
                                <div className="session-address">
                                    <p>Adresse</p>
                                    <p>1 place des pyramides, 194 Rue de Rivoli, 75001 Paris</p>
                                </div>
                                <div className="session-organizer">
                                    <p>Organisateur</p>
                                    <p>Max K.</p>
                                </div>
                                <div className="session-fee">
                                    <p>Montant Payé</p>
                                    <p>4€</p>
                                </div>
                                <button className="cancel-button">désinscrire</button>
                            </div>
                            {/* Repeat the above session-card div as needed */}
                        </div>
                        <button className="voir-plus">voir plus</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlotCalendarComponent;
