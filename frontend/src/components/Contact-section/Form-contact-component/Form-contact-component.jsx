import React, { useState } from 'react';
import './Form-contact-component.css';

const FormContactComponent = () => {
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour soumettre le formulaire
        console.log({ prenom, email, message, file });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
                <h2>Formulaire de contact</h2>
                <label>
                    Prenom *
                    <input
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email *
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Message
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </label>
                <label className="file-upload">
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                    <span className="file-upload-text">télécharger</span>
                </label>
                <p className="file-info">
                    *Vous pouvez ajouter une pièce jointe pour préciser votre demande. Formats autorisés : .jpg, .jpeg, .png
                </p>
                <button type="submit">Envoyer</button>
            </form>
            <p className="contact-note">
                Si vous êtes en crise ou si une autre personne est en danger, n'utilisez pas ce site.
                <br />
                <strong>Ces ressources</strong> peuvent vous fournir une aide immédiate.
            </p>
        </div>
    );
};

export default FormContactComponent;
