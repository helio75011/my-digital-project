const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const nodemailer = require('nodemailer');

exports.registerUser = (req, res) => {
    const { email, password } = req.body;
    console.log('Registering user:', email);

    // Vérifier si l'email existe déjà
    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
    db.execute(checkEmailQuery, [email], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Erreur lors de la vérification de l\'email' });
        }

        if (results.length > 0) {
            // L'email existe déjà
            console.log('Email already exists:', email);
            return res.status(400).json({ message: 'Cet email est déjà utilisé' });
        }

        // Hacher le mot de passe
        const hashedPassword = bcrypt.hashSync(password, 10);
        console.log('Hashed password:', hashedPassword);

        // Insérer l'utilisateur dans la base de données
        const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.execute(query, [email, hashedPassword], (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
            }

            const userId = results.insertId;
            console.log('User ID:', userId);

            const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
            console.log('Verification code:', verificationCode);

            const codeQuery = 'INSERT INTO verification_codes (user_id, code) VALUES (?, ?)';
            db.execute(codeQuery, [userId, verificationCode], (err) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ message: 'Erreur lors de la génération du code de vérification' });
                }

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
                        console.error('Email error:', error);
                        return res.status(500).json({ message: 'Erreur lors de l\'envoi du code de vérification' });
                    }
                    console.log('Email sent:', info.response);
                    res.status(200).json({ message: 'Inscription réussie. Un code de vérification a été envoyé à votre email.' });
                });
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
