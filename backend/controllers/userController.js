const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const nodemailer = require('nodemailer');

exports.registerUser = (req, res) => {
    const { email, password, lastName, firstName, acceptPolicy, acceptNotifications } = req.body;

    if (!email || !password || !lastName || !firstName) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = 'INSERT INTO users (email, password, lastName, firstName, acceptPolicy, acceptNotifications) VALUES (?, ?, ?, ?, ?, ?)';
    db.execute(query, [email, hashedPassword, lastName, firstName, acceptPolicy, acceptNotifications], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
        }

        const userId = results.insertId;

        const token = jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        }).slice(0, 4);

        const codeQuery = 'INSERT INTO verification_codes (user_id, code) VALUES (?, ?)';
        db.execute(codeQuery, [userId, token], (err) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ message: 'Erreur lors de la création du code de vérification.' });
            }

            res.status(200).json({ message: 'Inscription réussie.', code: token });
        });
    });
};

exports.verifyCode = (req, res) => {
    const { email, code } = req.body;

    const query = 'SELECT id FROM users WHERE email = ?';
    db.execute(query, [email], (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).json({ message: 'Email incorrect' });
        }

        const userId = results[0].id;
        const codeQuery = 'SELECT * FROM verification_codes WHERE user_id = ? AND code = ?';
        db.execute(codeQuery, [userId, code], (err, results) => {
            if (err || results.length === 0) {
                return res.status(400).json({ message: 'Code de vérification incorrect' });
            }

            const updateQuery = 'UPDATE users SET verified = TRUE WHERE id = ?';
            db.execute(updateQuery, [userId], (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Erreur lors de la vérification' });
                }
                res.status(200).json({ message: 'Vérification réussie' });
            });
        });
    });
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.execute(query, [email], (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        const user = results[0];

        if (!user.verified) {
            return res.status(400).json({ message: 'Compte non vérifié' });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
            }

            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            res.status(200).json({ token });
        });
    });
};

exports.resendCode = (req, res) => {
    const { email } = req.body;

    const query = 'SELECT id FROM users WHERE email = ?';
    db.execute(query, [email], (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).json({ message: 'Email incorrect' });
        }

        const userId = results[0].id;

        // Generate a new JWT token and shorten it to 4 characters
        const newToken = jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        }).slice(0, 4);

        const codeQuery = 'UPDATE verification_codes SET code = ? WHERE user_id = ?';
        db.execute(codeQuery, [newToken, userId], (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur lors de la génération du code de vérification' });
            }

            res.status(200).json({ message: 'Nouveau code de vérification envoyé', code: newToken });
        });
    });
};


exports.getUserInfo = (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email est requis.' });
    }

    const query = 'SELECT email, lastName, firstName FROM users WHERE email = ?';
    db.execute(query, [email], (err, results) => {
        if (err || results.length === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        const user = results[0];
        res.status(200).json(user);
    });
};
