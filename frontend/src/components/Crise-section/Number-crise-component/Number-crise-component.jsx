import React from 'react';
import './Number-crise-component.css';

const NumberCriseComponent = () => {
    return (
        <div className="crisis-resources-section">
            <div className="crisis-resources-header">
                <h2>Ressources de crise</h2>
                <p>
                    Si vous êtes en crise ou si toute autre personne est en danger, les ressources suivantes peuvent vous fournir une aide immédiate.
                </p>
            </div>
            <div className="crisis-resources-content">
                <p>
                    Voici quelques ressources supplémentaires que vous pouvez explorer pour obtenir de l'aide si nous ne sommes pas la meilleure solution pour le moment.
                </p>
                <h3>Numéros de téléphone d'urgence en France :</h3>
                <ul>
                    <li>SOS Amitié : 01 42 96 26 26 (écoute anonyme et confidentielle)</li>
                    <li>Suicide Écoute : 01 45 39 40 00 (écoute anonyme et confidentielle)</li>
                    <li>SAMU (Service d'Aide Médicale Urgente) : 15</li>
                    <li>Police Secours : 17</li>
                    <li>Pompiers : 18</li>
                    <li>SOS Femmes Violences Conjugales : 3919 (numéro national, anonyme et gratuit)</li>
                    <li>Enfance Maltraitée : 119 (numéro national, anonyme et gratuit)</li>
                </ul>
                <p className="crisis-note">
                    Ces services sont disponibles 24 heures sur 24, 7 jours sur 7, et offrent une aide et un soutien immédiats en cas de crise.
                </p>
            </div>
        </div>
    );
};

export default NumberCriseComponent;
