const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const nodemailer = require('nodemailer');

exports.registerUser = (req, res) => {
    const { email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.execute(query, [email, hashedPassword], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
        }

        const userId = results.insertId;
        const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();

        const codeQuery = 'INSERT INTO verification_codes (user_id, code) VALUES (?, ?)';
        db.execute(codeQuery, [userId, verificationCode], (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur lors de la génération du code de vérification' });
            }

            // Envoyer le code de vérification par email
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Code de vérification',
                text: `Votre code de vérification est: ${verificationCode}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.status(500).json({ message: 'Erreur lors de l\'envoi du code de vérification' });
                }
                res.status(200).json({ message: 'Inscription réussie. Un code de vérification a été envoyé à votre email.' });
            });
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
