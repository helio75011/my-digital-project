// src/NoteCard.js
import React from 'react';
import './Card-diary-component.css';

const CardDiaryComponent = ({ date, effect, description }) => {
    return (
        <div className="note-card">
            <div className="note-header">
                <span>{date}</span>
                <span className="edit-icon">✏️</span>
            </div>
            <div className="note-body">
                <div className="note-effect">
                    effets : <span className="effect-tag">{effect}</span>
                </div>
                <div className="note-description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="note-footer">
                <button className="read-more">lire plus</button>
                <span className="char-count">0/100</span>
            </div>
        </div>
    );
};

export default CardDiaryComponent;
