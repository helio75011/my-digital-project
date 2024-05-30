// controllers/userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database'); // Assure-toi que ce chemin est correct

exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM user WHERE email = ?';
    db.execute(query, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur de serveur' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const user = results[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur de serveur' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Mot de passe incorrect' });
            }

            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            res.status(200).json({ token });
        });
    });
};
