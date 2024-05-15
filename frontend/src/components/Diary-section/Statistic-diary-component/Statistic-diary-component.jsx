// src/Statistics.js
import React from 'react';
import './Statistic-diary-component.css'; // We'll create this CSS file next
import { FaUser, FaClipboardList, FaClock, FaEnvelope } from 'react-icons/fa';

const statistics = [
    { id: 1, icon: <FaUser />, value: 11, label: 'patients' },
    { id: 2, icon: <FaClipboardList />, value: 32, label: 'demandes' },
    { id: 3, icon: <FaClock />, value: 154, label: 'sessions passées' },
    { id: 4, icon: <FaEnvelope />, value: 1034, label: 'messages envoyés' },
];

const StatisticDiaryComponent = () => {
    return (
        <div className="statistics">
            <h1>Mes Statistiques <span className="historique">historique</span></h1>
            <div className="stats-container">
                {statistics.map(stat => (
                    <div className="stat-item" key={stat.id}>
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-text">
                            <p className="stat-value">{stat.value}</p>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatisticDiaryComponent;
