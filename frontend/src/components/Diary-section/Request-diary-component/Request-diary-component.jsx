import React from 'react';
import './Request-diary-component.css'; // Assurez-vous de créer ce fichier CSS

const requests = [
    { id: 1, name: 'Marie-Claire Rousseau', status: 'pending' },
    { id: 2, name: 'Marie-Claire Rousseau', status: 'pending' },
    { id: 3, name: 'Marie-Claire Rousseau', status: 'accepted' },
    { id: 4, name: 'Marie-Claire Rousseau', status: 'refused' }
];

const RequestDiaryComponent = () => {
    return (
        <div className="request-list">
            <h1>Nouvelles Demandes <span className="toutes">toutes</span></h1>
            {requests.map((request) => (
                <div className="request-item" key={request.id}>
                    <div className="request-info">
                        <img className="avatar" src={`https://via.placeholder.com/40?text=${request.name.split(' ')[0][0]}`} alt="avatar" />
                        <div>
                            <h2>{request.name}</h2>
                            <a href="#voir-probleme">voir problème</a>
                        </div>
                    </div>
                    <div className="request-status">
                        {request.status === 'pending' ? (
                            <>
                                <button className="reject">✖</button>
                                <button className="accept">✔</button>
                            </>
                        ) : (
                            <span className={request.status}>{request.status}</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RequestDiaryComponent;
