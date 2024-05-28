// src/ProfileDetail.js
import React from 'react';
import './ProfileDetail.css';

const ProfileDetail = () => {
    return (
        <div className="profile-detail">
            <div className="profile-left">
                <img className="profile-image" src="https://via.placeholder.com/150" alt="Carl Metz" />
                <button className="appointment-button">Prendre RDV</button>
            </div>
            <div className="profile-right">
                <h2 className="profile-name">Carl Metz</h2>
                <p className="profile-role">psychologue</p>
                <p className="profile-location">lieu: Paris</p>
                <h3 className="profile-about-title">À propos de moi:</h3>
                <p className="profile-about">Bonjour, je m'appelle Carl. Je suis psychologue - bienvüe passionné par la compréhension des problèmes liés à la santé mentale, je consacre mon temps à aider les autres à surmonter leurs sentiments et troubles. Mon travail implique de guider les personnes dans la résolution des problèmes psychologiques qui les affectent. En tant que psychologue, je m'efforce d'apporter une perspective unique et des solutions pratiques à ceux qui en ont besoin.</p>
                <p className="profile-experience"><strong>Années d'expérience:</strong> 2</p>
                <h3 className="profile-specialties-title">Spécialités</h3>
                <div className="profile-specialties">
                    <span className="specialty">dépression</span>
                    <span className="specialty">isolement social</span>
                    <span className="specialty">anxiété</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;
