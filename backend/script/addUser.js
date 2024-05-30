// script/addUser.js
const bcrypt = require('bcrypt');
const db = require('../config/database');

const email = 'helio@gmail.com';
const password = '123';

bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
        console.error('Erreur lors du hashage du mot de passe:', err);
        return;
    }

    const query = 'INSERT INTO user (email, password) VALUES (?, ?)';
    db.execute(query, [email, hashedPassword], (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'insertion de l\'utilisateur:', err);
            return;
        }

        console.log('Utilisateur ajouté avec succès');
    });
});
