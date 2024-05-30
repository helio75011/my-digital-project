// routes/protectedRoutes.js
const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'Données protégées accessibles' });
});

module.exports = router;
