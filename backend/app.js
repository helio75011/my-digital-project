// app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articleRoutes');
const eventRoutes = require('./routes/eventRoutes');
const adminRoutes = require('./routes/adminRoutes');
const protectedRoutes = require('./routes/protectedRoutes'); // Importer les routes protégées
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configurer CORS
app.use(cors());

// Configurer body-parser pour analyser les requêtes JSON
app.use(bodyParser.json());

// Configurer pour servir les fichiers statiques
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Utiliser les routes
app.use(articleRoutes);
app.use(eventRoutes);
app.use(adminRoutes);
app.use(protectedRoutes); // Utiliser les routes protégées

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});