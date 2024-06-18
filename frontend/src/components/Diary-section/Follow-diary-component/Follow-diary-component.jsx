// src/MoodTracker.js
import React, { useState } from 'react';
import './Follow-diary-component.css';
import { Link } from 'react-router-dom';
// import cool from './uploads/cool.png'
// import crying from './uploads/crying.png'
// import laughing from './uploads/laughing.png'
// import pokerface from './uploads/pokerface.png'
// import surprised from './uploads/surprised.png'

const moods = [
    { icon: '😐', label: 'Ennui' },
    { icon: '😟', label: 'Détresse' },
    { icon: '😞', label: 'Anxiété' },
    { icon: '😊', label: 'Satisfait' },
    { icon: '😄', label: 'Joie' },
];

const factors = [
    'isolation', 'sommeil', 'anxiété', 'dépression', 'autocritique accrue', 'autre'
];

const FollowDiaryComponent = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [selectedFactors, setSelectedFactors] = useState([]);
    const [details, setDetails] = useState('');

    const toggleFactor = (factor) => {
        setSelectedFactors(prevFactors =>
            prevFactors.includes(factor)
                ? prevFactors.filter(f => f !== factor)
                : [...prevFactors, factor]
        );
    };

    return (
        <div>
        <div className="well-being-header">
            <div className="header-container">
                <div className="header-text">
                    <h2>Suivi Du Bien-Être</h2>
                    <Link to='/statistic'><button className="history-button">historique</button></Link>
                </div>
                <p className="notes-text">Mes notes</p>
            </div>
        </div>
        <div className="mood-tracker">
            <div className="mood-today">
                <h3>Quelle est votre humeur aujourd'hui?</h3>
                <div className="moods">
                    {moods.map((mood, index) => (
                        <div
                            key={index}
                            className={`mood ${selectedMood === mood.label ? 'selected' : ''}`}
                            onClick={() => setSelectedMood(mood.label)}
                        >
                            <span>{mood.icon}</span>
                            <p>{mood.label}</p>
                        </div>
                    ))}
                </div>
                <h4>cette semaine</h4>
                <div className="week-overview">
                    <div className="day">Lu 1 😐</div>
                    <div className="day">Ma 2 😞</div>
                    <div className="day">Me 3 😞</div>
                    <div className="day">Je 4 😊</div>
                    <div className="day">Ve 5 😊</div>
                    <div className="day">Sa 6 😄</div>
                    <div className="day">Di 7 😊</div>
                </div>
                <button className="save-button">Sauvegarder</button>
            </div>
            <div className="mood-factors">
                <h3>Qu'est-ce qui affecte votre humeur?</h3>
                <div className="factors">
                    {factors.map((factor, index) => (
                        <span
                            key={index}
                            className={`factor ${selectedFactors.includes(factor) ? 'selected' : ''}`}
                            onClick={() => toggleFactor(factor)}
                        >
                            {factor}
                        </span>
                    ))}
                </div>
                <textarea
                    placeholder="décrivez en détail..."
                    maxLength="100"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                ></textarea>
                <button className="save-button">Sauvegarder</button>
            </div>
        </div>
        </div>
    );
};

export default FollowDiaryComponent;
