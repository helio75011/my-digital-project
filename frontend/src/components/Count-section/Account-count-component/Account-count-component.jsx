// src/AccountInfo.js
import React from 'react';
import './Account-count-component.css';

const AccountCountComponent = () => {
    return (
        <div className="account-info">
            <div className="profile-image-section">
                <img className="profile-image" src="https://via.placeholder.com/100" alt="Profile" />
                <div className="image-instructions">
                    <span>Mon image de profil</span>
                    <span>Taille du fichier inférieure à 10MB en JPG ou PNG</span>
                </div>
                <button className="change-button">Changer</button>
            </div>
            <div className="personal-info">
                <h2>Informations personnelles</h2>
                <div className="info-grid">
                    <div className="info-item">
                        <label>Nom</label>
                        <input type="text" value="Gognot" readOnly />
                    </div>
                    <div className="info-item">
                        <label>Prénom</label>
                        <input type="text" value="Sophie" readOnly />
                    </div>
                    <div className="info-item">
                        <label>Pseudo</label>
                        <input type="text" value="Sophie" readOnly />
                    </div>
                    <div className="info-item">
                        <label>Date de naissance</label>
                        <input type="text" value="11.01.1990" readOnly />
                    </div>
                    <div className="info-item">
                        <label>Numéro de Téléphone</label>
                        <input type="text" value="0671717171" readOnly />
                    </div>
                    <div className="info-item">
                        <label>Adresse e-mail</label>
                        <input type="text" value="mail@gmail.com" readOnly />
                    </div>
                    <div className="info-item">
                        <label>Ville</label>
                        <input type="text" value="Paris" readOnly />
                    </div>
                    <div className="info-item">
                        <label>Profession</label>
                        <input type="text" value="comptable" readOnly />
                    </div>
                </div>
            </div>
            <div className="pronouns">
                <h2>Pronoms</h2>
                <div className="pronoun-options">
                    <button className="pronoun-button">il/lui</button>
                    <button className="pronoun-button">elle</button>
                    <button className="pronoun-button">ils/elles</button>
                    <button className="pronoun-button">autres</button>
                </div>
            </div>
            <div className="interests">
                <h2>Intérêts</h2>
                <div className="interest-options">
                    <button className="interest-button">Lecture</button>
                    <button className="interest-button">Yoga</button>
                    <button className="interest-button">Jardinage</button>
                    <button className="interest-button">Artisanat</button>
                    <button className="interest-button">Musique et chant</button>
                    <button className="interest-button">Exploration de l'histoire locale</button>
                    <button className="interest-button">Photographie</button>
                    <button className="interest-button">Jeu de société</button>
                    <button className="interest-button">Fitness</button>
                    <button className="interest-button">Méditation</button>
                    <button className="interest-button">Langues étrangères</button>
                    <button className="interest-button">Exploration en ligne</button>
                    <button className="interest-button">Programmation informatique</button>
                    <button className="interest-button">Cuisine et pâtisserie</button>
                    <button className="interest-button">Autres</button>
                </div>
            </div>
            <div className="notifications">
                <h2>J'accepte de recevoir des notifications par e-mail</h2>
                <div className="notification-options">
                    <button className="notification-button">oui</button>
                    <button className="notification-button">non</button>
                </div>
            </div>
            <button className="save-button">Sauvegarder</button>
        </div>
    );
};

export default AccountCountComponent;
