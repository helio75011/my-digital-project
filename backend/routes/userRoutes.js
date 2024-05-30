const express = require('express');
const { loginUser } = require('../controllers/userController');

const router = express.Router();

// Définir les routes et lier les contrôleurs
router.post('/login', loginUser);

module.exports = router;
