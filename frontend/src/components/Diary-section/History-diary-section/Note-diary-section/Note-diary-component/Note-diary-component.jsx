// src/NotesSection.js
import React from 'react';
import CardDiaryComponent from './Card-diary-component/Card-diary-component';
import './Note-diary-component.css';

const NoteDiaryComponent = () => {
    const notes = [
        {
            date: '1 février 2024',
            effect: 'stress',
            description: "Aujourd'hui, je ressens un niveau de stress plus élevé que d'habitude. Les pressions du travail et les préoccupations...",
        },
        // Add more notes as needed
    ];

    return (
        <div className="notes-section">
            <div className="notes-grid">
                {notes.map((note, index) => (
                    <CardDiaryComponent
                        key={index}
                        date={note.date}
                        effect={note.effect}
                        description={note.description}
                    />
                ))}
            </div>
            <button className="voir-plus">voir plus</button>
        </div>
    );
};

export default NoteDiaryComponent;
