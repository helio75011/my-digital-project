import React from 'react';
import './Session-diary-component.css'; // Assurez-vous de créer ce fichier CSS

const sessions = [
    {
        date: '4 avril 2024 à 10h',
        title: 'RDV - consultation vidéo',
        person: 'Sophie',
        avatar: 'https://via.placeholder.com/40'
    },
    {
        date: '5 avril 2024 à 14h',
        title: 'RDV - consultation vidéo',
        person: 'Marie',
        avatar: 'https://via.placeholder.com/40'
    }
];

const SessionDiaryComponent = () => {
    return (
        <div className="sessions">
            <div className="sessions-header">
                <h2>Vos Prochaines Sessions</h2>
                <button className="view-all">voir tout</button>
            </div>
            <div className="session-cards">
                {sessions.map((session, index) => (
                    <div className="session-card" key={index}>
                        <div className="session-card-header">
                            <p>{session.date}</p>
                            <button className="more-options">...</button>
                        </div>
                        <div className="session-card-body">
                            <p>{session.title}</p>
                            <div className="session-person">
                                <img src={session.avatar} alt={session.person} />
                                <p>{session.person}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SessionDiaryComponent;

