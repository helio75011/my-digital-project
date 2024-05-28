const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articleRoutes');
const path = require('path');

const app = express();
const port = 3000;

// Configurer body-parser pour analyser les requêtes JSON
app.use(bodyParser.json());

// Servir les fichiers statiques
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Utiliser les routes
app.use(articleRoutes);

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
