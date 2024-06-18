// src/MoodOverview.js
import React from 'react';
import './Statistic-diary-component.css';
import cool from './uploads/cool.png';
import crying from './uploads/crying.png'
import laughing from './uploads/laughing.png';
import pokerface from './uploads/pokerface.png';
import surprised from './uploads/surprised.png';

const StatisticDiaryComponent = () => {
    return (
        <div className="mood-overview">
            <div className='mood-parents'>
                <div className="mood-stats">
                    <div className="mood-bar happy"></div>
                    <div className="mood-bar satisfied"></div>
                    <div className="mood-bar neutral"></div>
                    <div className="mood-bar sad"></div>
                    <div className="mood-bar distressed"></div>
                </div>
                <div className="mood-legend">
                    <div className='mood-legend-flex'>
                        <img src={crying} />
                        <p> 11 jours</p>
                    </div>
                    <div className='mood-legend-flex'>
                        <img src={cool} />
                        <p> 9 jours</p>
                    </div>
                    <div className='mood-legend-flex'>
                        <img src={surprised} />
                        <p> 4 jours</p>
                    </div>
                    <div className='mood-legend-flex'>
                        <img src={laughing} />
                        <p> 4 jours</p>
                    </div>
                    <div className='mood-legend-flex'>
                        <img src={pokerface} />               
                        <p> 3 jours</p>
                    </div> 
                </div>
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
