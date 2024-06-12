import React from 'react';
import './Profile-Doctor-component.css';

const ProfileDoctorComponent = () => {
    return (
        <div className="psychologist-profile">
            <div className="profile-image">
                <img src="path/to/your/image.jpg" alt="Carl Metz" />
                <button className="appointment-button">Prendre RDV</button>
            </div>
            <div className="profile-details">
                <h3>Carl Metz</h3>
                <p className="job-title">psychologue</p>
                <p className="location">lieu: Paris</p>
                <div className="about">
                    <h4>À propos de moi:</h4>
                    <p>
                        Bonjour, je m'appelle Carl. Je suis Psychologue - bénévole passionné par la compréhension des problèmes liés à la santé mentale, je consacre mon temps à aider les autres à surmonter leurs défis émotionnels. Mon travail implique une exploration approfondie des troubles psychologiques tels que l'anxiété, la dépression et les traumatismes. En tant qu'étudiant passionné en psychologie, je m'efforce d'apporter un soutien empathique et des solutions pratiques à ceux qui en ont besoin.
                    </p>
                </div>
                <div className="experience">
                    <h4>Années d'expérience:</h4>
                    <p>2</p>
                </div>
                <div className="specialties">
                    <h4>Spécialités</h4>
                    <div className="specialty-tags">
                        <span className="tag">dépression</span>
                        <span className="tag">isolement social</span>
                        <span className="tag">anxiété</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDoctorComponent;
