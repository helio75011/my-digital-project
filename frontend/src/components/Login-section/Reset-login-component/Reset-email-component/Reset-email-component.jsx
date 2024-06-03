// src/PasswordReset.js
import React, { useState } from 'react';
import './Reset-email-component.css';
import { Link } from 'react-router-dom';

const ResetEmailComponent = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password reset logic here
        console.log('Password reset email sent to:', email);
    };

    return (
        <div className="password-reset">
            <h2>Réinitialisez votre mot de passe</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@gmail.com"
                    required
                />
                <Link to='/reset-password'><button type="submit">Envoyer</button></Link>
            </form>
        </div>
    );
};

export default ResetEmailComponent;
