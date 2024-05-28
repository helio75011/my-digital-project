// src/SubscriptionManagement.js
import React from 'react';
import './SubscriptionManagement.css';

const SubscriptionManagement = () => {
    return (
        <div className="subscription-management">
            <div className="section">
                <h2>Plan Premium</h2>
                <button className="cancel-button">annuler l'abonnement</button>
                <div className="subscription-status">
                    <p><strong>État de votre abonnement :</strong> actif</p>
                    <p><strong>Paiement :</strong> débité le 01/04/2024</p>
                </div>
                <button className="change-plan-button">Changer le plan</button>
            </div>
            <div className="section">
                <h2>Mes moyens de paiement</h2>
                <div className="payment-method">
                    <div className="card-info">
                        <img className="card-icon" src="https://via.placeholder.com/40" alt="Card" />
                        <p>Carte de crédit master card ****1234 (Expire le 10/25)</p>
                    </div>
                    <button className="remove-button">supprimer</button>
                </div>
                <button className="add-card-button">+ Ajouter une carte</button>
                <button className="other-payment-methods-button">autres modes de paiement</button>
            </div>
            <div className="section">
                <h2>Prochain paiement</h2>
                <p><strong>Montant à débiter automatiquement :</strong> 10€</p>
                <p><strong>Prochaine date de paiement :</strong> 01/05/2024</p>
            </div>
        </div>
    );
};

export default SubscriptionManagement;
