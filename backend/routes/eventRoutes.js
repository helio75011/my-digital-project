const express = require('express');
const { getAllEvents, getEventById, addEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Appliquer le middleware authenticateToken aux routes que tu souhaites protéger
router.get('/events', authenticateToken, getAllEvents);
router.get('/events/:id', authenticateToken, getEventById);
router.post('/events', authenticateToken, addEvent);
router.put('/events/:id', authenticateToken, updateEvent);
router.delete('/events/:id', authenticateToken, deleteEvent);

module.exports = router;

