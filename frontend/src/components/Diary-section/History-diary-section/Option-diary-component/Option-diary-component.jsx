// src/StatsNotesHeader.js
import React, { useState } from 'react';
import './Option-diary-component.css';
import { Link } from 'react-router-dom';

const OptionDiaryComponent = () => {
    const [date, setDate] = useState(new Date(2024, 1)); // February 2024

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return (
        <div className="stats-notes-header">
            <div className="buttons">
                <Link to='/statistic'><button className="button selected">Statistique</button></Link>
                <Link to='/note'><button className="button">Mes notes</button></Link>
            </div>
            <div className="date-navigation">
                <span className="date">{`${month}, ${year}`}</span>
                <div className="nav-buttons">
                    <button onClick={handlePrevMonth}>←</button>
                    <button onClick={handleNextMonth}>→</button>
                </div>
            </div>
        </div>
    );
};

export default OptionDiaryComponent;
