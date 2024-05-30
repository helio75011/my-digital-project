import React, { useState } from 'react';
import './Connection-login.css';
import { useNavigate } from 'react-router-dom';

const ConnectionLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email et mot de passe sont requis');
            return;
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) });
                }
                return response.json();
            })
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token); // Stocker le token dans le localStorage
                    console.log('Token JWT reçu et stocké:', data.token);
                    navigate('/diary');
                } else {
                    setError('Email ou mot de passe incorrect');
                }
            })
            .catch(error => {
                console.error('Erreur de connexion:', error);
                setError('Erreur de connexion, veuillez réessayer plus tard');
            });
    };

    return (
        <div className='login-body'>
            <div className="login-container">
                <h1 className="title">Connexion</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="email"
                        placeholder="e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <a className="link" href="#">récupérer le mot de passe</a>
                    <button className="button" type="submit">Me connecter</button>
                </form>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default ConnectionLogin;
