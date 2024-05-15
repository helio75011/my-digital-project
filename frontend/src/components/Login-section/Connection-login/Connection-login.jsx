// src/Connexion.js
import React, { useState } from 'react';
import './Connection-login.css';
import { Link } from 'react-router-dom';

const ConnectionLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
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
          {/* <button className="button" type="submit">Me connecter</button> */}
          <Link className="button" to="/diary">Me connecter</Link>
        </form>
      </div>
    </div>
  );
};

export default ConnectionLogin;
