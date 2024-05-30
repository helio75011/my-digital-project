const mysql = require('mysql2');

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

// Ajouter un nouvel événement
const addEvent = (req, res) => {
    const { title, description, date, location } = req.body;

    if (!title || !description || !date || !location) {
        return res.status(400).send('Titre, description, date et lieu sont requis');
    }

    const query = 'INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)';
    db.execute(query, [title, description, date, location], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de l\'insertion de l\'événement');
        }
        res.status(201).send(`Événement ajouté avec l'ID: ${results.insertId}`);
    });
};

// Récupérer tous les événements
const getAllEvents = (req, res) => {
    const query = 'SELECT * FROM events';
    db.execute(query, (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des événements');
        }
        res.status(200).json(results);
    });
};

// Récupérer un événement par ID
const getEventById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM events WHERE id = ?';
    db.execute(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération de l\'événement');
        }
        if (results.length === 0) {
            return res.status(404).send('Événement non trouvé');
        }
        res.status(200).json(results[0]);
    });
};

// Mettre à jour un événement par ID
const updateEvent = (req, res) => {
    const { id } = req.params;
    const { title, description, date, location } = req.body;

    if (!title || !description || !date || !location) {
        return res.status(400).send('Titre, description, date et lieu sont requis');
    }

    const query = 'UPDATE events SET title = ?, description = ?, date = ?, location = ? WHERE id = ?';
    db.execute(query, [title, description, date, location, id], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la mise à jour de l\'événement');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Événement non trouvé');
        }
        res.status(200).send('Événement mis à jour avec succès');
    });
};

// Supprimer un événement par ID
const deleteEvent = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM events WHERE id = ?';
    db.execute(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la suppression de l\'événement');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Événement non trouvé');
        }
        res.status(200).send('Événement supprimé avec succès');
    });
};

module.exports = {
    addEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent
};
