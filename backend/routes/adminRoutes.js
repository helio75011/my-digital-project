const express = require('express');
const { loginAdmin } = require('../controllers/adminController');

const router = express.Router();

// Définir les routes et lier les contrôleurs
router.post('/login', loginAdmin);

module.exports = router;
