// src/UserCard.js
import React from 'react';
import './Person-patients-component.css';

const users = [
    { id: 1, name: 'Maxim K.', age: 29, profession: 'comptable', location: 'Paris', hobby: 'passionné(e) de littérature et d’art', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Marie D.', age: 29, profession: 'comptable', location: 'Paris', hobby: 'passionné(e) de littérature et d’art', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Christine Roust', age: 29, profession: 'comptable', location: 'Paris', hobby: 'passionné(e) de littérature et d’art', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Chris Male', age: 29, profession: 'comptable', location: 'Paris', hobby: 'passionné(e) de littérature et d’art', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Maxim K.', age: 29, profession: 'comptable', location: 'Paris', hobby: 'passionné(e) de littérature et d’art', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Marie D.', age: 29, profession: 'comptable', location: 'Paris', hobby: 'passionné(e) de littérature et d’art', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Reem Ali', age: 29, profession: 'comptable', location: 'Paris', hobby: 'passionné(e) de littérature et d’art', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Margo Roux', age: 29, profession: 'comptable', location: 'Paris', hobby: 'passionné(e) de littérature et d’art', image: 'https://via.placeholder.com/150' },
];

const PersonPatientsComponent = () => {
    return (
        <div className="user-cards">
            {users.map(user => (
                <div className="user-card" key={user.id}>
                    <img className="user-image" src={user.image} alt={user.name} />
                    <div className="user-info">
                        <span className="user-tag">Isolement social</span>
                        <h2 className="user-name">{user.name}</h2>
                        <p className="user-details">{user.age} ans, {user.profession}</p>
                        <p className="user-location">lieu: {user.location}</p>
                        <p className="user-hobby">loisirs: {user.hobby}</p>
                        <div className="user-actions">
                            <button className="user-button">voir profil</button>
                            <button className="user-button contact">contacter</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PersonPatientsComponent;
