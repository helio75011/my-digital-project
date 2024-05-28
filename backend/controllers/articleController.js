const mysql = require('mysql2');
const path = require('path');

// Configurer la connexion à la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Remplace par ton mot de passe MySQL
    database: 'blogDB'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
    } else {
        console.log('Connecté à la base de données MySQL');
    }
});

// Ajouter un nouvel article avec une image
const addArticle = (req, res) => {
    const { title, description, author } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !description || !author) {
        return res.status(400).send('Titre, description et auteur sont requis');
    }

    const query = 'INSERT INTO articles (title, description, author, image) VALUES (?, ?, ?, ?)';
    db.execute(query, [title, description, author, image], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de l\'insertion de l\'article');
        }
        res.status(201).send(`Article ajouté avec l'ID: ${results.insertId}`);
    });
};

// Récupérer tous les articles
const getAllArticles = (req, res) => {
    const query = 'SELECT * FROM articles';
    db.execute(query, (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des articles');
        }
        res.status(200).json(results);
    });
};

// Récupérer un article par ID
const getArticleById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM articles WHERE id = ?';
    db.execute(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération de l\'article');
        }
        if (results.length === 0) {
            return res.status(404).send('Article non trouvé');
        }
        res.status(200).json(results[0]);
    });
};

// Mettre à jour un article par ID
const updateArticle = (req, res) => {
    const { id } = req.params;
    const { title, description, author } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !description || !author) {
        return res.status(400).send('Titre, description et auteur sont requis');
    }

    const query = 'UPDATE articles SET title = ?, description = ?, author = ?, image = ? WHERE id = ?';
    db.execute(query, [title, description, author, image, id], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la mise à jour de l\'article');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Article non trouvé');
        }
        res.status(200).send('Article mis à jour avec succès');
    });
};

// Supprimer un article par ID
const deleteArticle = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM articles WHERE id = ?';
    db.execute(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la suppression de l\'article');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Article non trouvé');
        }
        res.status(200).send('Article supprimé avec succès');
    });
};

module.exports = {
    addArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle
};
