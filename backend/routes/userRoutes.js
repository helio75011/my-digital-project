const express = require('express');
const { registerUser, verifyCode, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', verifyCode);
router.post('/login', loginUser);

module.exports = router;
