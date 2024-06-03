// src/MoodOverview.js
import React from 'react';
import './Statistic-diary-component.css';

const StatisticDiaryComponent = () => {
    return (
        <div className="mood-overview">
            <div className="mood-stats">
                <div className="mood-bar happy"></div>
                <div className="mood-bar satisfied"></div>
                <div className="mood-bar neutral"></div>
                <div className="mood-bar sad"></div>
                <div className="mood-bar distressed"></div>
            </div>
            <div className="mood-legend">
                <p><span className="happy-circle"></span> 11 jours</p>
                <p><span className="satisfied-circle"></span> 9 jours</p>
                <p><span className="neutral-circle"></span> 4 jours</p>
                <p><span className="sad-circle"></span> 4 jours</p>
                <p><span className="distressed-circle"></span> 3 jours</p>
            </div>
            <h2>Février</h2>
            <p className="mood-summary">Votre humeur générale est 2% meilleure par rapport au mois dernier!</p>
            <p className="mood-details">
                Sur la base d'un mois d'entrées dans le journal émotionnel, 40% des expériences émotionnelles enregistrées ont été classées comme positives, indiquant une prédominance de sentiments satisfaisants et joyeux tout au long de la période observée.
            </p>
        </div>
    );
};

export default StatisticDiaryComponent;
