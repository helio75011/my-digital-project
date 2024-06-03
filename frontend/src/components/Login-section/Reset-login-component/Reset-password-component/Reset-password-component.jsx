// src/PasswordReset.js
import React, { useState } from 'react';
import './Reset-password-component.css';
import { Link } from 'react-router-dom';

const ResetPasswordComponent = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password reset logic here
        console.log('New password:', newPassword);
        console.log('Confirm password:', confirmPassword);
    };

    return (
        <div className="password-reset">
            <h2>Réinitialisez votre mot de passe</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-password">Nouveau mot de passe</label>
                <input
                    type="password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Nouveau mot de passe"
                    required
                />
                <label htmlFor="confirm-password">Confirmez votre mot de passe</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirmez votre mot de passe"
                    required
                />
                <Link to='/login'><button type="submit">Réinitialisez</button></Link>
            </form>
        </div>
    );
};

export default ResetPasswordComponent;
